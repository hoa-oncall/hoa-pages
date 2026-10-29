/* All data is inserted as text; listing/model text is never interpreted as HTML. */
"use strict";
const el = (tag, text, cls) => { const n = document.createElement(tag); if (text !== undefined) n.textContent = text; if (cls) n.className = cls; return n; };
const fmt = (value, digits = 1) => value == null ? "—" : Number(value).toLocaleString(undefined, {maximumFractionDigits: digits});
const money = value => value == null ? "—" : "$" + fmt(value, 0);
let report;

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
  const rows = report.communities.filter(c => `${c.community} ${c.hoa_name || ""} ${c.community_id}`.toLowerCase().includes(query)).filter(c =>
    filter === "all" || (filter === "changed" && c.score_delta > 0) || (filter === "review" && c.needs_review) || (filter === "no_evidence" && c.ai_status === "no_evidence") || (filter === "unranked" && c.baseline_score == null));
  rows.sort((a, b) => sort === "community" ? a.community.localeCompare(b.community) : sort === "rank_change" ? (b.rank_change ?? -Infinity) - (a.rank_change ?? -Infinity) || a.community.localeCompare(b.community) : (a[sort] ?? Infinity) - (b[sort] ?? Infinity) || a.community.localeCompare(b.community));
  const body = document.querySelector("#rows"); body.replaceChildren();
  for (const c of rows) {
    const tr = el("tr"); const name = el("td"); name.append(el("strong", c.community.replaceAll("-", " ")), el("div", c.community_id, "muted"));
    tr.append(name, el("td", `${fmt(c.baseline_rank, 0)} / ${fmt(c.baseline_score)}`, "number"), el("td", `${fmt(c.enriched_rank, 0)} / ${fmt(c.enriched_score)}`, "number"), el("td", c.rank_change == null ? "—" : c.rank_change > 0 ? `↑ ${c.rank_change}` : c.rank_change < 0 ? `↓ ${-c.rank_change}` : "—", c.rank_change > 0 ? "positive" : "number"), el("td", money(c.monthly_fee), "number"));
    const added = el("td");
    for (const a of c.added_amenities) added.append(el("span", `${a.amenity} +${a.weight}`, "pill"));
    if (!c.added_amenities.length) added.append(el("span", c.ai_status === "no_evidence" ? "No AI evidence" : "No accepted additions", "muted"));
    if (c.needs_review) added.append(el("span", "Review flagged", "pill review"));
    tr.append(added); body.append(tr);
    const detail = el("tr", undefined, "detail"); const cell = el("td"); cell.colSpan = 6; cell.append(detailsFor(c)); detail.append(cell); body.append(detail);
  }
  if (!rows.length) { const tr = el("tr"); const td = el("td", "No communities match these filters."); td.colSpan = 6; tr.append(td); body.append(tr); }
  document.querySelector("#results").textContent = `${rows.length} of ${report.communities.length} communities`;
}

async function start() {
  try {
    const response = await fetch("report.json", {cache: "no-cache"});
    if (!response.ok) throw new Error(`Report request failed (${response.status})`);
    report = await response.json();
    document.querySelector("#status").textContent = `Snapshot generated ${new Date(report.metadata.generated_at).toLocaleString()} · ${report.metadata.scoring_version}`;
    const cards = [["Communities", report.communities.length], ["With AI evidence", report.communities.filter(c => c.analyzed_listings > 0).length], ["Score changes", report.communities.filter(c => c.score_delta > 0).length], ["Review flagged", report.communities.filter(c => c.needs_review).length]];
    for (const [label, count] of cards) { const c = el("div", undefined, "card"); c.append(el("span", label, "muted"), el("strong", fmt(count, 0))); document.querySelector("#cards").append(c); }
    const provenance = document.querySelector("#provenance");
    for (const [label, value] of [["Source commit", report.metadata.source_commit], ["Input digest", report.metadata.input_digest], ["Scoring config digest", report.metadata.scoring_config_sha256]]) { const p = el("p", `${label}: `); p.append(el("code", value)); provenance.append(p); }
    provenance.append(el("p", `${report.unmatched_inputs.length} unmatched inputs excluded. The JSON download contains the full input manifest and unmatched-input list.`));
    const list = el("ul"); for (const row of report.unmatched_inputs.slice(0, 30)) list.append(el("li", `${row.file}: ${row.reason}`)); provenance.append(list);
    for (const id of ["search", "sort", "filter"]) document.querySelector(`#${id}`).addEventListener(id === "search" ? "input" : "change", render);
    render();
  } catch (error) { const status = document.querySelector("#status"); status.className = "error"; status.textContent = `Unable to load this evaluation report. ${error.message}. Serve this directory over HTTP and try again.`; }
}
start();
