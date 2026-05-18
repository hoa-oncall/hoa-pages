# Community HOA Fee Efficiency Report

> **[🏠 Back to Repository](https://github.com/hoa-oncall/zillow)** | **[📊 Interactive Sortable Table](./index.html)** | **[📄 Raw JSON Data](./_community_summary.json)**

---

Which HOAs deliver the most value per dollar of fee? Each community is scored on two dimensions: **amenity value** (weighted count of amenities the community provides) and **coverage value** (weighted count of expenses the HOA absorbs on behalf of owners — insurance, structure maintenance, water, landscaping, etc.). The two are summed, scaled by community size (log10 units, capped), and divided by `fee_psf_median * 100` to produce an **efficiency score** comparable across communities of very different price points.

## What the score does NOT measure

The following inputs to *true* condo fee efficiency are not present in our data sources and are NOT factored in:

- Reserve balance and reserve study quality
- Special assessment history
- Master insurance policy specifics / deductibles
- Depth of exterior structure coverage (HOA may list "structure" but only cover paint, not roof)
- Deferred maintenance backlog
- Litigation / collections risk

These come from HOA financial statements which we don't have access to. A high efficiency score below means *observable* value per dollar is high; it does **not** guarantee the HOA is financially healthy. Treat the ranking as a starting point for due diligence, not a replacement.

## Known scoring biases

- **SFH neighborhoods score artificially high.** Single-family subdivision associations charging $5-$25/mo (Apache Shores, Travis Landing, Buffalo Gap) accumulate amenity points from geographic features the *association* doesn't actually own or maintain — the listings tag the real Lake Travis as a community "lake" because it's nearby. Compare condos to condos, not condos to SFH HOAs.
- **Small communities are penalized by scale_factor.** A 6-unit boutique condo gets factor 1.0; a 100-unit complex gets 2.0. Real per-owner cost is often *higher* in tiny communities (no economies of scale), so the ranking correctly reflects that — but a luxury 10-unit building offering full coverage can still be a fine purchase despite a low efficiency score.
- **Coverage tokens are binary.** "insurance" gets full credit whether the policy actually covers wind/hail or just liability; "maintenance structure" gets credit regardless of whether the HOA covers roof or just paint. Pull the actual CCRs to confirm.

- Communities scored on efficiency: **47**
- Communities with HOA fees AND TCAD match: **46**
- Total implied yearly HOA collected (matched set): **$6,711,985**

## Communities ranked by HOA fee efficiency

Efficiency = (amenity_score + coverage_score) * scale_factor / (fee_psf * 100). Higher is better.

`Total living sqft` and `Implied $/mo` / `Implied $/yr` are the community-wide budget context from the TCAD join (fee_psf_median * total_living_sqft). Living sqft is TCAD's improvement-area total and excludes common areas (pool decks, hallways, garages, clubhouses). A `-` in those columns means the community has no TCAD match, so the community-wide totals can't be computed — efficiency is still defined from the per-sqft fee.

| # | Community | Year built | Units | Total living sqft | $/sqft | $/mo per unit | Implied $/mo | Implied $/yr | Amenity | Coverage | Value | Efficiency | HOA-covered expenses | Amenities |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | Apache-Shores-Sec-02 (c-000001) | 1939-2026 | 336 | 604,555 | $0.004 | $9 | $2,418 | $29,019 | 38 | 14 | 130.0 | 325.0 | insurance; common area maintenance; maintenance grounds; parking | clubhouse; sport court(s)/facility; tennis court(s); dog park; fishing; high speed internet; lake; park; planned social activities; playground; pool; trash pickup - door to door; basketball court; bbq area; boat ramp; common grounds; curbs; electronic payments; jogging path; picnic area; sport court(s); suburban; trails/paths |
| 2 | Travis-Landing (c-000004) | 1970-2024 | 70 | 142,338 | $0.005 | $14 | $726 | $8,711 | 27 | 26 | 97.8 | 191.7 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; security; water; trash | controlled access; dog park; fishing; gated; lake; park; pet amenities; planned social activities; playground; storage; trash pickup - door to door; bbq area; boat ramp; common grounds; picnic area |
| 3 | Terrace-At-The-Preserve-Condom (c-000008) | 2006-2011 | 53 | 120,885 | $0.007 | $22 | $798 | $9,574 | 38 | 6 | 75.9 | 115.0 | common area maintenance; landscaping | airport/runway; restaurant; golf; library; sport court(s)/facility; tennis court(s); underground utilities; dog park; high speed internet; lake; park; playground; pool; common grounds |
| 4 | Buffalo-Gap (c-000013) | 1950-2024 | 30 | 71,477 | $0.002 | $8 | $136 | $1,630 | 8 | 0 | 11.8 | 62.2 | - | fishing; lake; park; common grounds; picnic area |
| 5 | Cardinal-Hills-Unit-01 (c-000007) | 1980-2022 | 81 | 200,056 | $0.008 | $22 | $1,600 | $19,205 | 6 | 11 | 32.4 | 40.6 | insurance; common area maintenance; landscaping | high speed internet; playground; trash pickup - door to door |
| 6 | Bella-Montagna (c-000005) | 2004-2024 | 63 | 309,957 | $0.024 | $120 | $7,532 | $90,383 | 17 | 14 | 55.8 | 23.0 | insurance; common area maintenance; landscaping; maintenance grounds | controlled access; underground utilities; gated; lake; park; cluster mailbox; common grounds; curbs; sidewalks; suburban |
| 7 | Lohmans-Crossing-Estates-Sec-07 (c-000096) | 1986-2010 | 35 | 100,357 | $0.018 | $42 | $1,756 | $21,075 | 23 | 3 | 40.1 | 22.9 | common area maintenance | sport court(s)/facility; tennis court(s); dog park; fishing; lake; park; pet amenities; playground; pool; common grounds; picnic area; sidewalks |
| 8 | Edgewater-Sec-02 (c-000078) | 1982-2025 | 33 | 119,915 | $0.005 | $21 | $624 | $7,483 | 4 | 3 | 10.6 | 20.4 | common area maintenance | tennis court(s); common grounds |
| 9 | Woods-of-Lake-Travis (c-000064) | 1985-2025 | 32 | 99,540 | $0.017 | $58 | $1,722 | $20,665 | 19 | 3 | 33.1 | 19.1 | common area maintenance | controlled access; fishing; gated; lake; park; planned social activities; playground; storage; bbq area; picnic area |
| 10 | North-Lakeway-Village-Sec-03 (c-000009) | 2008-2013 | 68 | 195,028 | $0.032 | $75 | $6,260 | $75,125 | 30 | 3 | 60.5 | 18.8 | common area maintenance | restaurant; clubhouse; controlled access; underground utilities; fishing; gated; lake; park; pool; cluster mailbox; common grounds; curbs; sidewalks; street lights; suburban |
| 11 | Vineyard-Bay-Ph-01 (c-000022) | 1983-2024 | 81 | 418,032 | $0.046 | $271 | $19,146 | $229,750 | 36 | 8 | 84.0 | 18.3 | insurance; common area maintenance | clubhouse; controlled access; fitness center; sport court(s)/facility; tennis court(s); gated; lake; park; planned social activities; playground; pool; bbq area; cluster mailbox; common grounds; courtyard; curbs; kitchen facilities; picnic area; sauna; sidewalks |
| 12 | Rough-Hollow (c-000006) | 2008-2019 | 48 | 133,329 | $0.101 | $307 | $13,480 | $161,755 | 76 | 22 | 164.8 | 16.3 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; security | airport/runway; general aircraft airport; restaurant; spa/hot tub; clubhouse; controlled access; fitness center; golf; library; lock and leave; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; gated; high speed internet; lake; park; planned social activities; playground; pool; trash pickup - door to door; cluster mailbox; common grounds; concierge; curbs; picnic area; sidewalks; street lights; suburban; u-verse |
| 13 | Canyons-At-Lake-Travis (c-000038) | 2011-2024 | 59 | 240,030 | $0.013 | $71 | $3,192 | $38,309 | 4 | 6 | 17.7 | 13.3 | common area maintenance; security | park; cluster mailbox; curbs |
| 14 | Lohmans-Crossing-Estates-Sec-4 (c-000098) | 1986-2022 | 13 | 33,098 | $0.017 | $42 | $559 | $6,712 | 17 | 3 | 22.3 | 13.2 | common area maintenance | controlled access; tennis court(s); fishing; lake; park; pool; curbs; picnic area; sidewalks |
| 15 | Coves-At-Lakeway (c-000074) | 1995-2017 | 23 | 96,931 | $0.013 | $75 | $1,260 | $15,121 | 8 | 3 | 15.0 | 11.5 | common area maintenance | dog park; lake; park; playground |
| 16 | orphan-community (orphan) | 2016-2024 | 21 | 35,427 | $0.022 | $106 | $786 | $9,438 | 16 | 3 | 25.1 | 11.3 | common area maintenance | assisted living community; boat facilities; fitness center; park; public transportation |
| 17 | Champions-Lakeway (c-000073) | 1983-2005 | 23 | 48,782 | $0.065 | $135 | $3,146 | $37,757 | 30 | 14 | 59.9 | 9.3 | insurance; common area maintenance; landscaping; maintenance grounds | airport/runway; fitness center; golf; sport court(s)/facility; tennis court(s); dog park; lake; park; playground; pool; cluster mailbox; picnic area; sidewalks |
| 18 | Cardinal-Hills-Estates-Unit-15 (c-000040) | 1986-2024 | 138 | 291,811 | $0.008 | $17 | $2,334 | $28,014 | 0 | 3 | 6.4 | 8.0 | common area maintenance | - |
| 19 | Lakewind-Estates-Sec-03 (c-000021) | 2000-2014 | 47 | 231,562 | $0.034 | $180 | $7,966 | $95,589 | 9 | 7 | 26.8 | 7.8 | common area maintenance; maintenance grounds; trash | controlled access; gated; trash pickup - door to door; cluster mailbox; common grounds |
| 20 | Pinnacle-At-North-Lakeway-Condo (c-000104) | 2008-2013 | 88 | 222,248 | $0.165 | $400 | $36,693 | $440,318 | 52 | 11 | 122.5 | 7.4 | maintenance structure; common area maintenance; landscaping | airport/runway; restaurant; clubhouse; fitness center; golf; library; lock and leave; tennis court(s); underground utilities; dog park; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; shopping mall; cluster mailbox; common grounds; picnic area |
| 21 | Villas-At-Tuscan-Village-Amd (c-000003) | 2010-2017 | 100 | 211,806 | $0.381 | $636 | $80,719 | $968,631 | 96 | 29 | 250.0 | 6.6 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; cable tv; internet; pest control; trash | airport/runway; covered parking; garage parking; general aircraft airport; spa/hot tub; clubhouse; fitness center; golf; library; lock and leave; maintenance on-site; putting green; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; storage; trash pickup - door to door; bbq area; bike storage/locker; business center; cluster mailbox; common grounds; conference/meeting room; curbs; electronic payments; game room; hot tub community; kitchen facilities; media center/movie theatre; picnic area; property manager on-site; sidewalks; street lights; u-verse |
| 22 | Bella-Strada (c-000035) | 2006-2024 | 18 | 88,196 | $0.014 | $73 | $1,235 | $14,817 | 3 | 3 | 7.5 | 5.4 | common area maintenance | gated; common grounds |
| 23 | Cardinal-Hills-Estates-Unit-16 (c-000041) | 1985-2023 | 39 | 76,430 | $0.043 | $120 | $3,317 | $39,805 | 14 | 0 | 22.3 | 5.1 | - | covered parking; high speed internet; pool; bbq area; creative office space; game room; nest thermostat; sundeck |
| 24 | Arbolago (c-000033) | 2000-2017 | 43 | 221,005 | $0.041 | $200 | $9,061 | $108,734 | 8 | 3 | 18.0 | 4.4 | common area maintenance | gated; lake; park; cluster mailbox; picnic area |
| 25 | Villas-On-Travis-Condo-Amd (c-000002) | 1981-1999 | 159 | 234,169 | $0.592 | $840 | $138,722 | $1,664,661 | 78 | 35 | 248.8 | 4.2 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; sewer; water; cable tv; internet; pest control; trash | covered parking; garage parking; spa/hot tub; clubhouse; controlled access; fitness center; lock and leave; maintenance on-site; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; gated; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; storage; bbq area; bike storage/locker; cluster mailbox; common grounds; courtyard; curbs; electronic payments; hot tub community; nest thermostat; picnic area; property manager on-site; racquetball; sidewalks; street lights; sundeck |
| 26 | Reserve-At-Hudson-Bend (c-000105) | 2002-2022 | 39 | 190,391 | $0.011 | $60 | $2,189 | $26,274 | 0 | 3 | 4.8 | 4.2 | common area maintenance | - |
| 27 | Enclave-at-Yaupon (c-000079) | - | 1 | - | $0.029 | $133 | - | - | 9 | 3 | 12.0 | 4.1 | common area maintenance | underground utilities; trash pickup - door to door; cluster mailbox; google fiber; street lights; suburban |
| 28 | Woods-Lake-Travis-01 (c-000111) | 1982-2018 | 32 | 92,013 | $0.019 | $62 | $1,721 | $20,648 | 5 | 0 | 7.5 | 4.0 | - | park; playground; picnic area |
| 29 | Lakeland-Hills-Sec-02 (c-000047) | 1960-2021 | 28 | 54,472 | $0.007 | $21 | $403 | $4,837 | 2 | 0 | 2.9 | 3.9 | - | lake |
| 30 | Estates-Lakeway-Hills-Sec-02 (c-000080) | 1997-2002 | 22 | 89,428 | $0.012 | $43 | $1,091 | $13,092 | 0 | 3 | 4.0 | 3.3 | common area maintenance | - |
| 31 | Vistas-At-Lakeway-Condo (c-000016) | 2008-2016 | 141 | 302,790 | $0.258 | $570 | $78,029 | $936,348 | 16 | 23 | 83.8 | 3.3 | maintenance structure; common area maintenance; landscaping; maintenance grounds; sewer; water; cable tv; internet; trash | clubhouse; fitness center; underground utilities; pool; bbq area; cluster mailbox; common grounds; curbs; picnic area |
| 32 | Lakeway-Condo-Patio-Home (c-000049) | 1972-1974 | 28 | 49,738 | $0.194 | $414 | $9,669 | $116,029 | 20 | 21 | 59.3 | 3.1 | maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; trash | general aircraft airport; golf; sport court(s)/facility; tennis court(s); park; pool; bbq area; common grounds |
| 33 | Canopy-At-Hudson-Bend (c-000037) | 2015-2021 | 36 | 79,142 | $0.098 | $200 | $7,764 | $93,166 | 7 | 12 | 29.6 | 3.0 | common area maintenance; landscaping; maintenance grounds; sewer | underground utilities; gated; cluster mailbox; common grounds |
| 34 | N-A (c-000030) | 2019-2021 | 66 | 118,761 | $0.226 | $419 | $26,792 | $321,510 | 16 | 18 | 61.9 | 2.7 | insurance; common area maintenance; landscaping; sewer; water; trash | clubhouse; fitness center; dog park; pet amenities; pool; bbq area; cluster mailbox; common grounds; picnic area |
| 35 | McCormick-Mountain-Sub-Ph-3 (c-000012) | 2022-2025 | 2 | 7,069 | $0.026 | $50 | $182 | $2,180 | 4 | 3 | 7.0 | 2.7 | common area maintenance | gated; lake |
| 36 | Courtyard-At-Preserve-Condo (c-000042) | 2004-2006 | 104 | 220,650 | $0.070 | $150 | $15,379 | $184,552 | 2 | 6 | 16.1 | 2.3 | common area maintenance; landscaping | cluster mailbox; common grounds |
| 37 | Stoney-Creek-Villas-Condo-Amd (c-000107) | 1975-2025 | 28 | 52,667 | $0.251 | $450 | $13,209 | $158,507 | 18 | 17 | 50.7 | 2.0 | insurance; maintenance structure; common area maintenance; landscaping; trash | general aircraft airport; lock and leave; maintenance on-site; fishing; lake; bbq area; common grounds; picnic area |
| 38 | Vista-Grande (c-000015) | 1977-2024 | 3 | 9,014 | $0.279 | $46 | $2,518 | $30,211 | 14 | 22 | 36.0 | 1.3 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking | garage parking; maintenance on-site; tennis court(s); lake; common grounds |
| 39 | Lakeside-at-the-Park (c-000085) | 2016-2024 | 21 | 35,427 | $0.238 | $410 | $8,446 | $101,350 | 8 | 14 | 29.1 | 1.2 | maintenance structure; common area maintenance; landscaping; maintenance grounds | garage parking; gated; common grounds |
| 40 | Lohmans-Crossing-Estates-Sec-2 (c-000097) | 1983-2000 | 27 | 36,569 | $0.158 | $175 | $5,771 | $69,247 | 3 | 10 | 18.6 | 1.2 | insurance; maintenance structure | library |
| 41 | Other (c-000059) | 2022-2025 | 2 | 7,069 | $0.043 | $144 | $304 | $3,648 | 5 | 0 | 5.0 | 1.2 | - | clubhouse; pool |
| 42 | Cedar-Glen-Sec-03 (c-000072) | 2008-2015 | 16 | 35,916 | $0.126 | $295 | $4,515 | $54,176 | 8 | 3 | 13.2 | 1.1 | maintenance grounds | tennis court(s); playground; pool; basketball court |
| 43 | Lakeside-Villas-Ii (c-000048) | 2015 | 6 | 9,090 | $0.145 | $288 | $1,323 | $15,871 | 0 | 14 | 14.0 | 1.0 | insurance; common area maintenance; landscaping; maintenance grounds | - |
| 44 | Casa-Verde-Condo (c-000071) | 1977 | 56 | 94,322 | $0.209 | $357 | $19,751 | $237,012 | 2 | 9 | 19.2 | 0.9 | common area maintenance; landscaping; parking | pool |
| 45 | Lake-Chandon (c-000083) | 2003-2020 | 13 | 29,853 | $0.101 | $233 | $3,015 | $36,182 | 2 | 6 | 8.9 | 0.9 | common area maintenance; maintenance grounds | common grounds; nest thermostat |
| 46 | Beacon-Ridge-Twnhms-Condo (c-000068) | 2000-2001 | 16 | 22,446 | $0.185 | $265 | $4,159 | $49,911 | 1 | 11 | 14.4 | 0.8 | insurance; landscaping; sewer | common grounds |
| 47 | Sunset-Park (c-000108) | 1998-2002 | 14 | 38,450 | $0.206 | $450 | $7,913 | $94,956 | 8 | 3 | 12.6 | 0.6 | common area maintenance | controlled access; gated; lake; common grounds |

## Communities ranked by implied yearly HOA collected

Same data as the efficiency table above, re-sorted by total dollars collected per year (fee_psf_median * total_living_sqft * 12). Larger budgets can support more amenities and stronger reserves — but only if spent well, which is what the efficiency ranking measures.

| # | Community | Year built | Units (TCAD) | Total living sqft | $/sqft | Implied total $/mo | Implied total $/yr | Efficiency |
|---:|---|---|---:|---:|---:|---:|---:|---:|
| 1 | Villas-On-Travis-Condo-Amd (c-000002) | 1981-1999 | 159 | 234,169 | $0.592 | $138,722 | $1,664,661 | 4.2 |
| 2 | Villas-At-Tuscan-Village-Amd (c-000003) | 2010-2017 | 100 | 211,806 | $0.381 | $80,719 | $968,631 | 6.6 |
| 3 | Vistas-At-Lakeway-Condo (c-000016) | 2008-2016 | 141 | 302,790 | $0.258 | $78,029 | $936,348 | 3.3 |
| 4 | Pinnacle-At-North-Lakeway-Condo (c-000104) | 2008-2013 | 88 | 222,248 | $0.165 | $36,693 | $440,318 | 7.4 |
| 5 | N-A (c-000030) | 2019-2021 | 66 | 118,761 | $0.226 | $26,792 | $321,510 | 2.7 |
| 6 | Casa-Verde-Condo (c-000071) | 1977 | 56 | 94,322 | $0.209 | $19,751 | $237,012 | 0.9 |
| 7 | Vineyard-Bay-Ph-01 (c-000022) | 1983-2024 | 81 | 418,032 | $0.046 | $19,146 | $229,750 | 18.3 |
| 8 | Courtyard-At-Preserve-Condo (c-000042) | 2004-2006 | 104 | 220,650 | $0.070 | $15,379 | $184,552 | 2.3 |
| 9 | Rough-Hollow (c-000006) | 2008-2019 | 48 | 133,329 | $0.101 | $13,480 | $161,755 | 16.3 |
| 10 | Stoney-Creek-Villas-Condo-Amd (c-000107) | 1975-2025 | 28 | 52,667 | $0.251 | $13,209 | $158,507 | 2.0 |
| 11 | Lakeway-Condo-Patio-Home (c-000049) | 1972-1974 | 28 | 49,738 | $0.194 | $9,669 | $116,029 | 3.1 |
| 12 | Arbolago (c-000033) | 2000-2017 | 43 | 221,005 | $0.041 | $9,061 | $108,734 | 4.4 |
| 13 | Lakeside-at-the-Park (c-000085) | 2016-2024 | 21 | 35,427 | $0.238 | $8,446 | $101,350 | 1.2 |
| 14 | Lakewind-Estates-Sec-03 (c-000021) | 2000-2014 | 47 | 231,562 | $0.034 | $7,966 | $95,589 | 7.8 |
| 15 | Sunset-Park (c-000108) | 1998-2002 | 14 | 38,450 | $0.206 | $7,913 | $94,956 | 0.6 |
| 16 | Canopy-At-Hudson-Bend (c-000037) | 2015-2021 | 36 | 79,142 | $0.098 | $7,764 | $93,166 | 3.0 |
| 17 | Bella-Montagna (c-000005) | 2004-2024 | 63 | 309,957 | $0.024 | $7,532 | $90,383 | 23.0 |
| 18 | North-Lakeway-Village-Sec-03 (c-000009) | 2008-2013 | 68 | 195,028 | $0.032 | $6,260 | $75,125 | 18.8 |
| 19 | Lohmans-Crossing-Estates-Sec-2 (c-000097) | 1983-2000 | 27 | 36,569 | $0.158 | $5,771 | $69,247 | 1.2 |
| 20 | Cedar-Glen-Sec-03 (c-000072) | 2008-2015 | 16 | 35,916 | $0.126 | $4,515 | $54,176 | 1.1 |
| 21 | Beacon-Ridge-Twnhms-Condo (c-000068) | 2000-2001 | 16 | 22,446 | $0.185 | $4,159 | $49,911 | 0.8 |
| 22 | Cardinal-Hills-Estates-Unit-16 (c-000041) | 1985-2023 | 39 | 76,430 | $0.043 | $3,317 | $39,805 | 5.1 |
| 23 | Canyons-At-Lake-Travis (c-000038) | 2011-2024 | 59 | 240,030 | $0.013 | $3,192 | $38,309 | 13.3 |
| 24 | Champions-Lakeway (c-000073) | 1983-2005 | 23 | 48,782 | $0.065 | $3,146 | $37,757 | 9.3 |
| 25 | Lake-Chandon (c-000083) | 2003-2020 | 13 | 29,853 | $0.101 | $3,015 | $36,182 | 0.9 |
| 26 | Vista-Grande (c-000015) | 1977-2024 | 3 | 9,014 | $0.279 | $2,518 | $30,211 | 1.3 |
| 27 | Apache-Shores-Sec-02 (c-000001) | 1939-2026 | 336 | 604,555 | $0.004 | $2,418 | $29,019 | 325.0 |
| 28 | Cardinal-Hills-Estates-Unit-15 (c-000040) | 1986-2024 | 138 | 291,811 | $0.008 | $2,334 | $28,014 | 8.0 |
| 29 | Reserve-At-Hudson-Bend (c-000105) | 2002-2022 | 39 | 190,391 | $0.011 | $2,189 | $26,274 | 4.2 |
| 30 | Lohmans-Crossing-Estates-Sec-07 (c-000096) | 1986-2010 | 35 | 100,357 | $0.018 | $1,756 | $21,075 | 22.9 |
| 31 | Woods-of-Lake-Travis (c-000064) | 1985-2025 | 32 | 99,540 | $0.017 | $1,722 | $20,665 | 19.1 |
| 32 | Woods-Lake-Travis-01 (c-000111) | 1982-2018 | 32 | 92,013 | $0.019 | $1,721 | $20,648 | 4.0 |
| 33 | Cardinal-Hills-Unit-01 (c-000007) | 1980-2022 | 81 | 200,056 | $0.008 | $1,600 | $19,205 | 40.6 |
| 34 | Lakeside-Villas-Ii (c-000048) | 2015 | 6 | 9,090 | $0.145 | $1,323 | $15,871 | 1.0 |
| 35 | Coves-At-Lakeway (c-000074) | 1995-2017 | 23 | 96,931 | $0.013 | $1,260 | $15,121 | 11.5 |
| 36 | Bella-Strada (c-000035) | 2006-2024 | 18 | 88,196 | $0.014 | $1,235 | $14,817 | 5.4 |
| 37 | Estates-Lakeway-Hills-Sec-02 (c-000080) | 1997-2002 | 22 | 89,428 | $0.012 | $1,091 | $13,092 | 3.3 |
| 38 | Terrace-At-The-Preserve-Condom (c-000008) | 2006-2011 | 53 | 120,885 | $0.007 | $798 | $9,574 | 115.0 |
| 39 | orphan-community (orphan) | 2016-2024 | 21 | 35,427 | $0.022 | $786 | $9,438 | 11.3 |
| 40 | Travis-Landing (c-000004) | 1970-2024 | 70 | 142,338 | $0.005 | $726 | $8,711 | 191.7 |
| 41 | Edgewater-Sec-02 (c-000078) | 1982-2025 | 33 | 119,915 | $0.005 | $624 | $7,483 | 20.4 |
| 42 | Lohmans-Crossing-Estates-Sec-4 (c-000098) | 1986-2022 | 13 | 33,098 | $0.017 | $559 | $6,712 | 13.2 |
| 43 | Lakeland-Hills-Sec-02 (c-000047) | 1960-2021 | 28 | 54,472 | $0.007 | $403 | $4,837 | 3.9 |
| 44 | Other (c-000059) | 2022-2025 | 2 | 7,069 | $0.043 | $304 | $3,648 | 1.2 |
| 45 | McCormick-Mountain-Sub-Ph-3 (c-000012) | 2022-2025 | 2 | 7,069 | $0.026 | $182 | $2,180 | 2.7 |
| 46 | Buffalo-Gap (c-000013) | 1950-2024 | 30 | 71,477 | $0.002 | $136 | $1,630 | 62.2 |

## Communities with HOA name but no fee data (unscored)

| Community | HOA name | fee_psf_n |
|---|---|---:|
| Bebys-Ranch-01-Resub-Of-Residence (c-000034) | Beby's Ranch Resubdi | 0 |
| Hudson-Bend-Colony-02 (c-000011) | None | 0 |
