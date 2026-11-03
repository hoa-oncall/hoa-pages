/* All data is inserted as text; listing/model text is never interpreted as HTML. */
"use strict";
const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
const fmt = (value, digits = 1) => value == null ? "—" : Number(value).toLocaleString(undefined, {maximumFractionDigits: digits});
const money = value => value == null ? "—" : "$" + fmt(value, 0);
let report;
const COLUMNS = [
  ["community", "Community"],
  ["baseline_rank", "Non-AI Ranking"], ["enriched_rank", "AI Rank"],
  ["rank_change", "Rank Change"], ["baseline_score", "Existing Score"],
  ["enriched_score", "AI Score"], ["score_delta", "Score Change"],
  ["hoa_name", "HOA Name"], ["listing_units", "Listing Units"], ["total_units", "Total Units"],
  ["fee_psf", "$/sqft (median)"], ["monthly_fee", "HOA Fee ($/mo)"],
  ["implied_total_hoa_mo", "Total Collected ($/mo)"], ["tcad_total_living_sqft", "Total Sqft (TCAD)"],
  ["livingArea_median", "Avg Area (sqft)"], ["price_median", "Median Price"],
  ["structured_consensus_amenities", "Amenities (Consensus)"],
  ["added_amenities", "New Scoring Evidence"],
];

function selectRows(communities, {query = "", filter = "all", sort = "enriched_rank", direction = "asc"} = {}) {
  const rows = communities.filter(c => `${c.community} ${c.hoa_name || ""} ${c.community_id}`.toLowerCase().includes(query.toLowerCase())).filter(c =>
    filter === "all" || (filter === "differences" && (c.score_delta > 0 || Math.abs(c.rank_change || 0) > 0)) ||
    (filter === "changed" && c.score_delta > 0) || (filter === "rank_changed" && Math.abs(c.rank_change || 0) > 0) ||
    (filter === "review" && c.needs_review) || (filter === "no_evidence" && c.ai_status === "no_evidence") ||
    (filter === "unranked" && c.baseline_score == null));
  const multiplier = direction === "desc" ? -1 : 1;
  return rows.sort((a, b) => {
    let av = a[sort], bv = b[sort];
    // Missing values always sort last in either direction.
    if (av == null && bv != null) return 1;
    if (bv == null && av != null) return -1;
    if (Array.isArray(av)) av = av.join(", ");
    if (Array.isArray(bv)) bv = bv.join(", ");
    const compared = av == null ? 0 : typeof av === "number" ? av - bv : String(av).localeCompare(String(bv));
    return compared * multiplier || a.community_id.localeCompare(b.community_id);
  });
}

function changeOrder(key) {
  const sort = document.querySelector("#sort");
  const direction = document.querySelector("#direction");
  direction.value = sort.value === key ? (direction.value === "asc" ? "desc" : "asc") :
    (["community", "hoa_name", "baseline_rank", "enriched_rank", "structured_consensus_amenities"].includes(key) ? "asc" : "desc");
  sort.value = key;
  render();
}

function detailsFor(c) {
  const details = el("details"); details.append(el("summary", "Inspect evidence and score explanation"));
  const box = el("section");
  box.append(el("p", `Stable ID: ${c.community_id} · ${c.analyzed_listings} independent listings · Extraction dates: ${c.evidence_dates.join(", ") || "none"}`));
  box.append(el("p", `Baseline amenities: ${c.baseline_amenities.join(", ") || "none recorded"}`));
  box.append(el("p", `HOA-covered expenses (unchanged): ${c.fee_includes.join(", ") || "none recorded"}`));
  box.append(el("p", `Fee per square foot per month: ${c.fee_psf == null ? "unknown" : "$" + fmt(c.fee_psf, 4)}. Score change: ${fmt(c.score_delta)}.`));
  if (!c.amenities.length) box.append(el("p", "No matched listing-level AI evidence. The experimental score remains the baseline score."));
  for (const a of c.amenities) {
    const item = el("details");
    item.append(el("summary", `${a.type} · ${a.supporting_listings} supporting listings (${fmt(a.support_fraction * 100, 0)}%) · ${a.adds_score ? "adds points" : a.accepted_for_scoring ? "already in baseline" : "display only"}`));
    if (a.count != null) item.append(el("p", `Reported count: ${a.count} (not a scoring multiplier)`));
    if (a.review_reasons.length) item.append(el("p", a.review_reasons.join("; "), "muted"));
    const evidence = el("ul");
    for (const e of a.evidence) {
      const li = el("li"); const link = el("a", `Listing ${e.zpid}`);
      // Construct trusted URLs from numeric listing IDs only.
      if (/^\d+$/.test(e.zpid)) { link.href = `https://www.zillow.com/homedetails/${e.zpid}_zpid/`; link.target = "_blank"; link.rel = "noopener noreferrer"; }
      li.append(link, el("span", ` · ${e.run_date} · ${e.confidence || "unknown confidence"} · ${e.qualified ? "qualified evidence" : "excluded from support"}`));
      li.append(el("p", e.mentions.join(" · "), "muted")); evidence.append(li);
    }
    item.append(evidence);
    for (const attribute of a.consensus_attributes) {
      item.append(el("p", `Historical consensus attributes (${attribute.last_updated || "undated"}); display only, may include repeated observations.`));
      const list = el("ul");
      for (const [name, value] of Object.entries(attribute.attributes)) list.append(el("li", `${name}: ${JSON.stringify(value.value)} · confidence ${fmt(value.confidence)}${value.needs_review ? " · needs review" : ""}`));
      item.append(list);
    }
    box.append(item);
  }
  details.append(box); return details;
}

function render() {
  const query = document.querySelector("#search").value.toLowerCase();
  const filter = document.querySelector("#filter").value;
  const sort = document.querySelector("#sort").value;
  const direction = document.querySelector("#direction").value;
  const rows = selectRows(report.communities, {query, filter, sort, direction});
  for (const th of document.querySelectorAll("#columns th[data-sort]")) th.setAttribute("aria-sort", th.dataset.sort === sort ? (direction === "asc" ? "ascending" : "descending") : "none");
  const body = document.querySelector("#rows"); body.replaceChildren();
  for (const c of rows) {
    const tr = el("tr", undefined, c.score_delta > 0 || Math.abs(c.rank_change || 0) > 0 ? "changed" : "");
    for (const [key] of COLUMNS) {
      const cell = el("td");
      if (key === "community") cell.append(el("strong", c.community.replaceAll("-", " ")), el("div", c.community_id, "muted"));
      else if (key === "hoa_name") cell.textContent = c.hoa_name || "—";
      else if (key === "structured_consensus_amenities") {
        cell.className = "amenity-cell";
        for (const a of c[key] || []) cell.append(el("span", a, "pill"));
        if (!c[key]?.length) cell.append(el("span", "—", "muted"));
      } else if (key === "added_amenities") {
        cell.className = "amenity-cell";
        for (const a of c.added_amenities) cell.append(el("span", `${a.amenity} +${a.weight}`, "pill"));
        if (!c.added_amenities.length) cell.append(el("span", c.ai_status === "no_evidence" ? "No AI evidence" : "No accepted additions", "muted"));
        if (c.needs_review) cell.append(el("span", "Review flagged", "pill review"));
      } else {
        cell.className = "number";
        if (key === "rank_change") { cell.textContent = c[key] == null ? "—" : c[key] > 0 ? `↑ ${c[key]}` : c[key] < 0 ? `↓ ${-c[key]}` : "0"; if (c[key] > 0) cell.classList.add("positive"); }
        else if (key === "score_delta") { cell.textContent = c[key] == null ? "—" : `${c[key] > 0 ? "+" : ""}${fmt(c[key])}`; if (c[key] > 0) cell.classList.add("positive"); }
        else if (["monthly_fee", "implied_total_hoa_mo", "price_median"].includes(key)) cell.textContent = money(c[key]);
        else if (key === "fee_psf") cell.textContent = c[key] == null ? "—" : "$" + fmt(c[key], 3);
        else cell.textContent = fmt(c[key], ["baseline_score", "enriched_score"].includes(key) ? 1 : 0);
      }
      tr.append(cell);
    }
    body.append(tr);
    const detail = el("tr", undefined, "detail"); const cell = el("td"); cell.colSpan = COLUMNS.length; cell.append(detailsFor(c)); detail.append(cell); body.append(detail);
  }
  if (!rows.length) { const tr = el("tr"); const td = el("td", "No communities match these filters."); td.colSpan = COLUMNS.length; tr.append(td); body.append(tr); }
  const order = COLUMNS.find(([key]) => key === sort)[1];
  document.querySelector("#results").textContent = `${rows.length} of ${report.communities.length} communities · Ordered by ${order}, ${direction === "asc" ? "ascending" : "descending"}. Green rows have a score or rank difference.`;
}

async function start() {
  try {
    const response = await fetch("report.json", {cache: "no-cache"});
    if (!response.ok) throw new Error(`Report request failed (${response.status})`);
    report = await response.json();
    document.querySelector("#status").textContent = `Snapshot generated ${new Date(report.metadata.generated_at).toLocaleString()} · ${report.metadata.scoring_version}`;
    const scoreChanges = report.communities.filter(c => c.score_delta > 0).length;
    const rankChanges = report.communities.filter(c => Math.abs(c.rank_change || 0) > 0).length;
    const cards = [["Communities", report.communities.length], ["With AI evidence", report.communities.filter(c => c.analyzed_listings > 0).length], ["Scores changed", scoreChanges], ["Rank positions changed", rankChanges], ["Review flagged", report.communities.filter(c => c.needs_review).length]];
    document.querySelector("#comparison-help").textContent = `Non-AI ranking (baseline) orders the original scores. AI-enriched rank orders the scores after accepted AI additions. ${scoreChanges} of ${report.communities.length} scores and ${rankChanges} rank positions differ in this snapshot, so switching the order may look almost identical. Use “Show ranking differences” to isolate those communities.`;
    for (const [key, label] of COLUMNS) {
      const th = el("th"); th.scope = "col";
      if (key !== "added_amenities") {
        th.dataset.sort = key;
        const button = el("button", label); button.type = "button"; button.addEventListener("click", () => changeOrder(key)); th.append(button);
        const option = el("option", label); option.value = key; document.querySelector("#sort").append(option);
      } else th.textContent = label;
      document.querySelector("#columns").append(th);
    }
    document.querySelector("#sort").value = "enriched_rank";
    for (const [label, count] of cards) { const c = el("div", undefined, "card"); c.append(el("span", label, "muted"), el("strong", fmt(count, 0))); document.querySelector("#cards").append(c); }
    const provenance = document.querySelector("#provenance");
    for (const [label, value] of [["Source commit", report.metadata.source_commit], ["Input digest", report.metadata.input_digest], ["Scoring config digest", report.metadata.scoring_config_sha256]]) { const p = el("p", `${label}: `); p.append(el("code", value)); provenance.append(p); }
    provenance.append(el("p", `${report.unmatched_inputs.length} unmatched inputs excluded. The JSON download contains the full input manifest and unmatched-input list.`));
    const list = el("ul"); for (const row of report.unmatched_inputs.slice(0, 30)) list.append(el("li", `${row.file}: ${row.reason}`)); provenance.append(list);
    for (const id of ["search", "sort", "direction", "filter"]) document.querySelector(`#${id}`).addEventListener(id === "search" ? "input" : "change", render);
    document.querySelector("#show-differences").addEventListener("click", () => {
      document.querySelector("#search").value = "";
      document.querySelector("#filter").value = "differences";
      document.querySelector("#sort").value = "rank_change";
      document.querySelector("#direction").value = "desc";
      render();
    });
    render();
  } catch (error) { const status = document.querySelector("#status"); status.className = "error"; status.textContent = `Unable to load this evaluation report. ${error.message}. Serve this directory over HTTP and try again.`; }
}
if (typeof module !== "undefined" && module.exports) module.exports = {selectRows, COLUMNS};
else start();
