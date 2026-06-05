# Community HOA Fee Efficiency Report

**[📊 View Interactive Sortable Table](https://hoa-oncall.github.io/hoa-pages/)**

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

- Communities scored on efficiency: **53**
- Communities with HOA fees AND TCAD match: **51**
- Total implied yearly HOA collected (matched set): **$7,395,193**

## Communities ranked by HOA fee efficiency

Efficiency = (amenity_score + coverage_score) * scale_factor / (fee_psf * 100). Higher is better.

`Total living sqft` and `Implied $/mo` / `Implied $/yr` are the community-wide budget context from the TCAD join (fee_psf_median * total_living_sqft). Living sqft is TCAD's improvement-area total and excludes common areas (pool decks, hallways, garages, clubhouses). A `-` in those columns means the community has no TCAD match, so the community-wide totals can't be computed — efficiency is still defined from the per-sqft fee.

| # | Community | Year built | Listing units | Total units | Total living sqft | $/sqft | $/mo per unit | Implied $/mo | Implied $/yr | Amenity | Coverage | Value | Efficiency | HOA-covered expenses | Amenities |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | Apache-Shores-Sec-02 (c-000001) | 1939-2026 | 74 | 336 | 604,555 | $0.004 | $10 | $2,479 | $29,744 | 47 | 14 | 152.5 | 372.0 | insurance; common area maintenance; maintenance grounds; parking | clubhouse; controlled access; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; high speed internet; lake; park; planned social activities; playground; pool; trash pickup - door to door; basketball court; bbq area; boat ramp; common grounds; conference/meeting room; curbs; electronic payments; jogging path; nest thermostat; picnic area; sport court(s); street lights; suburban; trails/paths |
| 2 | Travis-Landing (c-000004) | 1970-2024 | 13 | 70 | 142,338 | $0.005 | $14 | $726 | $8,711 | 27 | 26 | 97.8 | 191.7 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; security; water; trash | controlled access; dog park; fishing; gated; lake; park; pet amenities; planned social activities; playground; storage; trash pickup - door to door; bbq area; boat ramp; common grounds; picnic area |
| 3 | Terrace-At-The-Preserve-Condom (c-000008) | 2006-2025 | 12 | 63 | 213,756 | $0.008 | $22 | $1,689 | $20,264 | 39 | 9 | 86.4 | 109.3 | common area maintenance; landscaping; maintenance grounds | airport/runway; restaurant; golf; library; sport court(s)/facility; tennis court(s); underground utilities; dog park; high speed internet; lake; park; playground; pool; common grounds; curbs |
| 4 | Buffalo-Gap (c-000013) | 1950-2024 | 6 | 30 | 71,477 | $0.002 | $8 | $136 | $1,630 | 8 | 0 | 11.8 | 62.2 | - | fishing; lake; park; common grounds; picnic area |
| 5 | Cardinal-Hills-Unit-01 (c-000007) | 1980-2022 | 12 | 81 | 200,056 | $0.008 | $22 | $1,600 | $19,205 | 12 | 11 | 43.9 | 54.9 | insurance; common area maintenance; landscaping | golf; fishing; high speed internet; playground; trash pickup - door to door; suburban |
| 6 | Rough-Hollow (c-000006) | 2007-2024 | 14 | 20 | 112,354 | $0.058 | $282 | $6,494 | $77,929 | 88 | 22 | 143.1 | 24.8 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; security | airport/runway; general aircraft airport; restaurant; spa/hot tub; clubhouse; controlled access; fitness center; golf; library; lock and leave; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; gated; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; trash pickup - door to door; business center; cluster mailbox; common grounds; concierge; conference/meeting room; courtyard; curbs; electronic payments; game room; kitchen facilities; lounge; picnic area; racquetball; sauna; sidewalks; street lights; suburban; tanning salon; u-verse |
| 7 | Coves-At-Lakeway (c-000117) | 1995-2017 | 2 | 23 | 96,931 | $0.015 | $75 | $1,454 | $17,448 | 23 | 3 | 35.4 | 23.6 | common area maintenance | general aircraft airport; golf; sport court(s)/facility; dog park; lake; park; pet amenities; playground; pool |
| 8 | Bella-Montagna (c-000005) | 2004-2024 | 12 | 63 | 309,957 | $0.024 | $120 | $7,532 | $90,383 | 17 | 14 | 55.8 | 23.0 | insurance; common area maintenance; landscaping; maintenance grounds | controlled access; underground utilities; gated; lake; park; cluster mailbox; common grounds; curbs; sidewalks; suburban |
| 9 | Lohmans-Crossing-Estates-Sec-07 (c-000096) | 1986-2010 | 1 | 35 | 100,357 | $0.018 | $42 | $1,756 | $21,075 | 23 | 3 | 40.1 | 22.9 | common area maintenance | sport court(s)/facility; tennis court(s); dog park; fishing; lake; park; pet amenities; playground; pool; common grounds; picnic area; sidewalks |
| 10 | Edgewater-Sec-02 (c-000078) | 1982-2025 | 1 | 33 | 119,915 | $0.005 | $21 | $624 | $7,483 | 4 | 3 | 10.6 | 20.4 | common area maintenance | tennis court(s); common grounds |
| 11 | Woods-of-Lake-Travis (c-000064) | 1985-2025 | 2 | 32 | 99,540 | $0.017 | $58 | $1,722 | $20,665 | 19 | 3 | 33.1 | 19.1 | common area maintenance | controlled access; fishing; gated; lake; park; planned social activities; playground; storage; bbq area; picnic area |
| 12 | North-Lakeway-Village-Sec-03 (c-000009) | 2008-2013 | 9 | 68 | 195,028 | $0.032 | $75 | $6,260 | $75,125 | 30 | 3 | 60.5 | 18.8 | common area maintenance | restaurant; clubhouse; controlled access; underground utilities; fishing; gated; lake; park; pool; cluster mailbox; common grounds; curbs; sidewalks; street lights; suburban |
| 13 | Vineyard-Bay-Ph-01 (c-000022) | 1983-2024 | 4 | 81 | 418,032 | $0.046 | $271 | $19,146 | $229,750 | 36 | 8 | 84.0 | 18.3 | insurance; common area maintenance | clubhouse; controlled access; fitness center; sport court(s)/facility; tennis court(s); gated; lake; park; planned social activities; playground; pool; bbq area; cluster mailbox; common grounds; courtyard; curbs; kitchen facilities; picnic area; sauna; sidewalks |
| 14 | Canyons-At-Lake-Travis (c-000038) | 2011-2024 | 2 | 59 | 240,030 | $0.013 | $71 | $3,192 | $38,309 | 4 | 6 | 17.7 | 13.3 | common area maintenance; security | park; cluster mailbox; curbs |
| 15 | Lohmans-Crossing-Estates-Sec-4 (c-000098) | 1986-2022 | 1 | 13 | 33,098 | $0.017 | $42 | $559 | $6,712 | 17 | 3 | 22.3 | 13.2 | common area maintenance | controlled access; tennis court(s); fishing; lake; park; pool; curbs; picnic area; sidewalks |
| 16 | Champions-Lakeway (c-000073) | 1983-2005 | 1 | 23 | 48,782 | $0.065 | $135 | $3,146 | $37,757 | 30 | 14 | 59.9 | 9.3 | insurance; common area maintenance; landscaping; maintenance grounds | airport/runway; fitness center; golf; sport court(s)/facility; tennis court(s); dog park; lake; park; playground; pool; cluster mailbox; picnic area; sidewalks |
| 17 | Lakeway-Sec-Clusters-28-05 (c-000055) | 1984-2026 | 4 | 43 | 119,874 | $0.088 | $246 | $10,609 | $127,306 | 42 | 6 | 78.4 | 8.9 | common area maintenance; maintenance grounds | airport/runway; general aircraft airport; fitness center; golf; library; tennis court(s); underground utilities; high speed internet; lake; park; pet amenities; playground; pool; trash pickup - door to door; common grounds; google fiber; picnic area |
| 18 | Cardinal-Hills-Estates-Unit-15 (c-000040) | 1986-2024 | 3 | 138 | 291,811 | $0.008 | $17 | $2,334 | $28,014 | 0 | 3 | 6.4 | 8.0 | common area maintenance | - |
| 19 | Lakewind-Estates-Sec-03 (c-000021) | 2000-2014 | 4 | 47 | 231,562 | $0.034 | $180 | $7,966 | $95,589 | 9 | 7 | 26.8 | 7.8 | common area maintenance; maintenance grounds; trash | controlled access; gated; trash pickup - door to door; cluster mailbox; common grounds |
| 20 | Pinnacle-At-North-Lakeway-Condo (c-000104) | 2008-2013 | 1 | 88 | 222,248 | $0.165 | $400 | $36,693 | $440,318 | 52 | 11 | 122.5 | 7.4 | maintenance structure; common area maintenance; landscaping | airport/runway; restaurant; clubhouse; fitness center; golf; library; lock and leave; tennis court(s); underground utilities; dog park; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; shopping mall; cluster mailbox; common grounds; picnic area |
| 21 | orphan-community (orphan) | 2016-2024 | 12 | 21 | 35,427 | $0.035 | $200 | $1,236 | $14,837 | 16 | 3 | 25.1 | 7.2 | common area maintenance | assisted living community; boat facilities; fitness center; park; public transportation |
| 22 | Estates-Lakeway-Hills-Sec-03 (c-000134) | 1999-2005 | 1 | 13 | 58,144 | $0.010 | $43 | $570 | $6,838 | 3 | 3 | 6.7 | 6.8 | common area maintenance | gated; curbs |
| 23 | Villas-At-Tuscan-Village-Amd (c-000003) | 2010-2017 | 14 | 100 | 211,806 | $0.381 | $636 | $80,719 | $968,631 | 96 | 29 | 250.0 | 6.6 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; cable tv; internet; pest control; trash | airport/runway; covered parking; garage parking; general aircraft airport; spa/hot tub; clubhouse; fitness center; golf; library; lock and leave; maintenance on-site; putting green; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; storage; trash pickup - door to door; bbq area; bike storage/locker; business center; cluster mailbox; common grounds; conference/meeting room; curbs; electronic payments; game room; hot tub community; kitchen facilities; media center/movie theatre; picnic area; property manager on-site; sidewalks; street lights; u-verse |
| 24 | Hudson-Bend-Colony-02 (c-000011) | 1946-2025 | 10 | 118 | 273,407 | $0.007 | $21 | $2,023 | $24,279 | 2 | 0 | 4.1 | 5.6 | - | lake |
| 25 | Bella-Strada (c-000035) | 2006-2024 | 2 | 18 | 88,196 | $0.014 | $73 | $1,235 | $14,817 | 3 | 3 | 7.5 | 5.4 | common area maintenance | gated; common grounds |
| 26 | Cardinal-Hills-Estates-Unit-16 (c-000041) | 1985-2023 | 3 | 39 | 76,430 | $0.043 | $120 | $3,317 | $39,805 | 14 | 0 | 22.3 | 5.1 | - | covered parking; high speed internet; pool; bbq area; creative office space; game room; nest thermostat; sundeck |
| 27 | Arbolago (c-000033) | 2000-2017 | 2 | 43 | 221,005 | $0.041 | $200 | $9,061 | $108,734 | 8 | 3 | 18.0 | 4.4 | common area maintenance | gated; lake; park; cluster mailbox; picnic area |
| 28 | Villas-On-Travis-Condo-Amd (c-000002) | 1981-1999 | 18 | 159 | 234,169 | $0.592 | $840 | $138,722 | $1,664,661 | 78 | 35 | 248.8 | 4.2 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; sewer; water; cable tv; internet; pest control; trash | covered parking; garage parking; spa/hot tub; clubhouse; controlled access; fitness center; lock and leave; maintenance on-site; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; gated; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; storage; bbq area; bike storage/locker; cluster mailbox; common grounds; courtyard; curbs; electronic payments; hot tub community; nest thermostat; picnic area; property manager on-site; racquetball; sidewalks; street lights; sundeck |
| 29 | COSTA-BELLA (c-000125) | 2001-2023 | 1 | 21 | 140,101 | $0.060 | $362 | $8,392 | $100,705 | 13 | 6 | 25.1 | 4.2 | common area maintenance; security | clubhouse; tennis court(s); gated; lake; cluster mailbox; common grounds; kitchen facilities |
| 30 | Reserve-At-Hudson-Bend (c-000105) | 2002-2022 | 1 | 39 | 190,391 | $0.011 | $60 | $2,189 | $26,274 | 0 | 3 | 4.8 | 4.2 | common area maintenance | - |
| 31 | Enclave-at-Yaupon (c-000079) | - | 1 | - | - | $0.029 | $133 | - | - | 9 | 3 | 12.0 | 4.1 | common area maintenance | underground utilities; trash pickup - door to door; cluster mailbox; google fiber; street lights; suburban |
| 32 | Woods-Lake-Travis-01 (c-000111) | 1982-2018 | 1 | 32 | 92,013 | $0.019 | $62 | $1,721 | $20,648 | 5 | 0 | 7.5 | 4.0 | - | park; playground; picnic area |
| 33 | Lakeway-Condo-Patio-Home (c-000049) | 1972-1974 | 3 | 28 | 49,738 | $0.201 | $428 | $9,992 | $119,908 | 28 | 24 | 75.3 | 3.7 | maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; sewer; trash | general aircraft airport; golf; sport court(s)/facility; tennis court(s); lake; park; pool; storage; bbq area; cluster mailbox; common grounds; picnic area; sidewalks; smart car charging |
| 34 | Vistas-At-Lakeway-Condo (c-000016) | 2008-2016 | 8 | 141 | 302,790 | $0.266 | $570 | $80,421 | $965,052 | 16 | 28 | 94.6 | 3.6 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; sewer; water; cable tv; internet; trash | clubhouse; fitness center; underground utilities; pool; bbq area; cluster mailbox; common grounds; curbs; picnic area |
| 35 | Canopy-At-Hudson-Bend (c-000037) | 2015-2021 | 2 | 36 | 79,142 | $0.098 | $200 | $7,764 | $93,166 | 7 | 12 | 29.6 | 3.0 | common area maintenance; landscaping; maintenance grounds; sewer | underground utilities; gated; cluster mailbox; common grounds |
| 36 | Enclave-At-Kollmeyer-Springs (c-000126) | 2003-2025 | 1 | 12 | 49,487 | $0.049 | $188 | $2,430 | $29,158 | 10 | 3 | 14.0 | 2.9 | common area maintenance | underground utilities; gated; park; trash pickup - door to door; picnic area |
| 37 | N-A (c-000030) | 2019-2021 | 3 | 66 | 118,761 | $0.226 | $419 | $26,792 | $321,510 | 16 | 18 | 61.9 | 2.7 | insurance; common area maintenance; landscaping; sewer; water; trash | clubhouse; fitness center; dog park; pet amenities; pool; bbq area; cluster mailbox; common grounds; picnic area |
| 38 | McCormick-Mountain-Sub-Ph-3 (c-000012) | 2022-2025 | 7 | 2 | 7,069 | $0.026 | $50 | $182 | $2,180 | 4 | 3 | 7.0 | 2.7 | common area maintenance | gated; lake |
| 39 | Boulevard-At-Lakeway (c-000124) | 2008-2015 | 1 | 35 | 76,429 | $0.149 | $300 | $11,403 | $136,838 | 17 | 9 | 40.1 | 2.7 | common area maintenance; landscaping; maintenance grounds | golf; lock and leave; dog park; park; pet amenities; playground; common grounds; curbs; picnic area |
| 40 | Cedar-Glen-Sec-01 (c-000120) | 2008-2015 | 2 | 16 | 35,916 | $0.102 | $260 | $3,663 | $43,961 | 8 | 14 | 26.5 | 2.6 | insurance; common area maintenance; landscaping; maintenance grounds | tennis court(s); playground; pool; basketball court |
| 41 | Courtyard-At-Preserve-Condo (c-000042) | 2004-2006 | 2 | 104 | 220,650 | $0.070 | $150 | $15,379 | $184,552 | 2 | 6 | 16.1 | 2.3 | common area maintenance; landscaping | cluster mailbox; common grounds |
| 42 | Stoney-Creek-Villas (c-000133) | 1975-2025 | 2 | 28 | 52,667 | $0.251 | $450 | $13,209 | $158,507 | 20 | 20 | 57.9 | 2.3 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; trash | general aircraft airport; lock and leave; maintenance on-site; fishing; lake; pool; bbq area; common grounds; picnic area |
| 43 | Casa-Verde-Condo (c-000114) | 1977 | 2 | 56 | 94,322 | $0.207 | $360 | $19,496 | $233,956 | 17 | 9 | 45.5 | 2.2 | common area maintenance; landscaping; parking | general aircraft airport; golf; tennis court(s); park; playground; pool |
| 44 | LAKESIDE-VILLAS-CONDOMINIUMS (c-000116) | 2016-2024 | 4 | 21 | 35,427 | $0.145 | $375 | $5,155 | $61,856 | 3 | 14 | 22.5 | 1.5 | insurance; common area maintenance; landscaping; maintenance grounds | gated; curbs |
| 45 | Vista-Grande (c-000015) | 1977-2024 | 6 | 3 | 9,014 | $0.279 | $46 | $2,518 | $30,211 | 14 | 22 | 36.0 | 1.3 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking | garage parking; maintenance on-site; tennis court(s); lake; common grounds |
| 46 | Retama-Garden-Homes (c-000128) | 1983 | 1 | 53 | 72,375 | $0.317 | $489 | $22,950 | $275,401 | 9 | 14 | 39.7 | 1.3 | maintenance structure; common area maintenance; landscaping; maintenance grounds | clubhouse; tennis court(s); pool; common grounds |
| 47 | Lakeside-at-the-Park (c-000085) | 2016-2024 | 1 | 21 | 35,427 | $0.238 | $410 | $8,446 | $101,350 | 8 | 14 | 29.1 | 1.2 | maintenance structure; common area maintenance; landscaping; maintenance grounds | garage parking; gated; common grounds |
| 48 | Lohmans-Crossing-Estates-Sec-2 (c-000118) | 1983-2000 | 2 | 27 | 36,569 | $0.158 | $175 | $5,771 | $69,247 | 3 | 10 | 18.6 | 1.2 | insurance; maintenance structure | library |
| 49 | Other (c-000059) | 2022-2025 | 2 | 2 | 7,069 | $0.043 | $144 | $304 | $3,648 | 5 | 0 | 5.0 | 1.2 | - | clubhouse; pool |
| 50 | Lake-Chandon (c-000083) | 2003-2020 | 1 | 13 | 29,853 | $0.101 | $233 | $3,015 | $36,182 | 2 | 6 | 8.9 | 0.9 | common area maintenance; maintenance grounds | common grounds; nest thermostat |
| 51 | Beacon-Ridge-Twnhms-Condo (c-000068) | 2000-2001 | 1 | 16 | 22,446 | $0.185 | $265 | $4,159 | $49,911 | 1 | 11 | 14.4 | 0.8 | insurance; landscaping; sewer | common grounds |
| 52 | Sunset-Park (c-000108) | 1998-2002 | 1 | 14 | 38,450 | $0.206 | $450 | $7,913 | $94,956 | 8 | 3 | 12.6 | 0.6 | common area maintenance | controlled access; gated; lake; common grounds |
| 53 | Honey-Creek (c-000129) | - | 1 | - | - | $0.138 | $250 | - | - | 1 | 3 | 4.0 | 0.3 | landscaping | cluster mailbox |

## Communities ranked by implied yearly HOA collected

Same data as the efficiency table above, re-sorted by total dollars collected per year (fee_psf_median * total_living_sqft * 12). Larger budgets can support more amenities and stronger reserves — but only if spent well, which is what the efficiency ranking measures.

| # | Community | Year built | Listing units | Total units (TCAD) | Total living sqft | $/sqft | Implied total $/mo | Implied total $/yr | Efficiency |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Villas-On-Travis-Condo-Amd (c-000002) | 1981-1999 | 18 | 159 | 234,169 | $0.592 | $138,722 | $1,664,661 | 4.2 |
| 2 | Villas-At-Tuscan-Village-Amd (c-000003) | 2010-2017 | 14 | 100 | 211,806 | $0.381 | $80,719 | $968,631 | 6.6 |
| 3 | Vistas-At-Lakeway-Condo (c-000016) | 2008-2016 | 8 | 141 | 302,790 | $0.266 | $80,421 | $965,052 | 3.6 |
| 4 | Pinnacle-At-North-Lakeway-Condo (c-000104) | 2008-2013 | 1 | 88 | 222,248 | $0.165 | $36,693 | $440,318 | 7.4 |
| 5 | N-A (c-000030) | 2019-2021 | 3 | 66 | 118,761 | $0.226 | $26,792 | $321,510 | 2.7 |
| 6 | Retama-Garden-Homes (c-000128) | 1983 | 1 | 53 | 72,375 | $0.317 | $22,950 | $275,401 | 1.3 |
| 7 | Casa-Verde-Condo (c-000114) | 1977 | 2 | 56 | 94,322 | $0.207 | $19,496 | $233,956 | 2.2 |
| 8 | Vineyard-Bay-Ph-01 (c-000022) | 1983-2024 | 4 | 81 | 418,032 | $0.046 | $19,146 | $229,750 | 18.3 |
| 9 | Courtyard-At-Preserve-Condo (c-000042) | 2004-2006 | 2 | 104 | 220,650 | $0.070 | $15,379 | $184,552 | 2.3 |
| 10 | Stoney-Creek-Villas (c-000133) | 1975-2025 | 2 | 28 | 52,667 | $0.251 | $13,209 | $158,507 | 2.3 |
| 11 | Boulevard-At-Lakeway (c-000124) | 2008-2015 | 1 | 35 | 76,429 | $0.149 | $11,403 | $136,838 | 2.7 |
| 12 | Lakeway-Sec-Clusters-28-05 (c-000055) | 1984-2026 | 4 | 43 | 119,874 | $0.088 | $10,609 | $127,306 | 8.9 |
| 13 | Lakeway-Condo-Patio-Home (c-000049) | 1972-1974 | 3 | 28 | 49,738 | $0.201 | $9,992 | $119,908 | 3.7 |
| 14 | Arbolago (c-000033) | 2000-2017 | 2 | 43 | 221,005 | $0.041 | $9,061 | $108,734 | 4.4 |
| 15 | Lakeside-at-the-Park (c-000085) | 2016-2024 | 1 | 21 | 35,427 | $0.238 | $8,446 | $101,350 | 1.2 |
| 16 | COSTA-BELLA (c-000125) | 2001-2023 | 1 | 21 | 140,101 | $0.060 | $8,392 | $100,705 | 4.2 |
| 17 | Lakewind-Estates-Sec-03 (c-000021) | 2000-2014 | 4 | 47 | 231,562 | $0.034 | $7,966 | $95,589 | 7.8 |
| 18 | Sunset-Park (c-000108) | 1998-2002 | 1 | 14 | 38,450 | $0.206 | $7,913 | $94,956 | 0.6 |
| 19 | Canopy-At-Hudson-Bend (c-000037) | 2015-2021 | 2 | 36 | 79,142 | $0.098 | $7,764 | $93,166 | 3.0 |
| 20 | Bella-Montagna (c-000005) | 2004-2024 | 12 | 63 | 309,957 | $0.024 | $7,532 | $90,383 | 23.0 |
| 21 | Rough-Hollow (c-000006) | 2007-2024 | 14 | 20 | 112,354 | $0.058 | $6,494 | $77,929 | 24.8 |
| 22 | North-Lakeway-Village-Sec-03 (c-000009) | 2008-2013 | 9 | 68 | 195,028 | $0.032 | $6,260 | $75,125 | 18.8 |
| 23 | Lohmans-Crossing-Estates-Sec-2 (c-000118) | 1983-2000 | 2 | 27 | 36,569 | $0.158 | $5,771 | $69,247 | 1.2 |
| 24 | LAKESIDE-VILLAS-CONDOMINIUMS (c-000116) | 2016-2024 | 4 | 21 | 35,427 | $0.145 | $5,155 | $61,856 | 1.5 |
| 25 | Beacon-Ridge-Twnhms-Condo (c-000068) | 2000-2001 | 1 | 16 | 22,446 | $0.185 | $4,159 | $49,911 | 0.8 |
| 26 | Cedar-Glen-Sec-01 (c-000120) | 2008-2015 | 2 | 16 | 35,916 | $0.102 | $3,663 | $43,961 | 2.6 |
| 27 | Cardinal-Hills-Estates-Unit-16 (c-000041) | 1985-2023 | 3 | 39 | 76,430 | $0.043 | $3,317 | $39,805 | 5.1 |
| 28 | Canyons-At-Lake-Travis (c-000038) | 2011-2024 | 2 | 59 | 240,030 | $0.013 | $3,192 | $38,309 | 13.3 |
| 29 | Champions-Lakeway (c-000073) | 1983-2005 | 1 | 23 | 48,782 | $0.065 | $3,146 | $37,757 | 9.3 |
| 30 | Lake-Chandon (c-000083) | 2003-2020 | 1 | 13 | 29,853 | $0.101 | $3,015 | $36,182 | 0.9 |
| 31 | Vista-Grande (c-000015) | 1977-2024 | 6 | 3 | 9,014 | $0.279 | $2,518 | $30,211 | 1.3 |
| 32 | Apache-Shores-Sec-02 (c-000001) | 1939-2026 | 74 | 336 | 604,555 | $0.004 | $2,479 | $29,744 | 372.0 |
| 33 | Enclave-At-Kollmeyer-Springs (c-000126) | 2003-2025 | 1 | 12 | 49,487 | $0.049 | $2,430 | $29,158 | 2.9 |
| 34 | Cardinal-Hills-Estates-Unit-15 (c-000040) | 1986-2024 | 3 | 138 | 291,811 | $0.008 | $2,334 | $28,014 | 8.0 |
| 35 | Reserve-At-Hudson-Bend (c-000105) | 2002-2022 | 1 | 39 | 190,391 | $0.011 | $2,189 | $26,274 | 4.2 |
| 36 | Hudson-Bend-Colony-02 (c-000011) | 1946-2025 | 10 | 118 | 273,407 | $0.007 | $2,023 | $24,279 | 5.6 |
| 37 | Lohmans-Crossing-Estates-Sec-07 (c-000096) | 1986-2010 | 1 | 35 | 100,357 | $0.018 | $1,756 | $21,075 | 22.9 |
| 38 | Woods-of-Lake-Travis (c-000064) | 1985-2025 | 2 | 32 | 99,540 | $0.017 | $1,722 | $20,665 | 19.1 |
| 39 | Woods-Lake-Travis-01 (c-000111) | 1982-2018 | 1 | 32 | 92,013 | $0.019 | $1,721 | $20,648 | 4.0 |
| 40 | Terrace-At-The-Preserve-Condom (c-000008) | 2006-2025 | 12 | 63 | 213,756 | $0.008 | $1,689 | $20,264 | 109.3 |
| 41 | Cardinal-Hills-Unit-01 (c-000007) | 1980-2022 | 12 | 81 | 200,056 | $0.008 | $1,600 | $19,205 | 54.9 |
| 42 | Coves-At-Lakeway (c-000117) | 1995-2017 | 2 | 23 | 96,931 | $0.015 | $1,454 | $17,448 | 23.6 |
| 43 | orphan-community (orphan) | 2016-2024 | 12 | 21 | 35,427 | $0.035 | $1,236 | $14,837 | 7.2 |
| 44 | Bella-Strada (c-000035) | 2006-2024 | 2 | 18 | 88,196 | $0.014 | $1,235 | $14,817 | 5.4 |
| 45 | Travis-Landing (c-000004) | 1970-2024 | 13 | 70 | 142,338 | $0.005 | $726 | $8,711 | 191.7 |
| 46 | Edgewater-Sec-02 (c-000078) | 1982-2025 | 1 | 33 | 119,915 | $0.005 | $624 | $7,483 | 20.4 |
| 47 | Estates-Lakeway-Hills-Sec-03 (c-000134) | 1999-2005 | 1 | 13 | 58,144 | $0.010 | $570 | $6,838 | 6.8 |
| 48 | Lohmans-Crossing-Estates-Sec-4 (c-000098) | 1986-2022 | 1 | 13 | 33,098 | $0.017 | $559 | $6,712 | 13.2 |
| 49 | Other (c-000059) | 2022-2025 | 2 | 2 | 7,069 | $0.043 | $304 | $3,648 | 1.2 |
| 50 | McCormick-Mountain-Sub-Ph-3 (c-000012) | 2022-2025 | 7 | 2 | 7,069 | $0.026 | $182 | $2,180 | 2.7 |
| 51 | Buffalo-Gap (c-000013) | 1950-2024 | 6 | 30 | 71,477 | $0.002 | $136 | $1,630 | 62.2 |

## Communities with HOA name but no fee data (unscored)

| Community | HOA name | fee_psf_n |
|---|---|---:|
| Bebys-Ranch-01-Resub-Of-Residence (c-000034) | Beby's Ranch Resubdi | 0 |
| Villas-At-Commanders-Point (c-000121) | Villas at Commanders | 0 |
