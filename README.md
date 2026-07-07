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

- Communities scored on efficiency: **55**
- Communities with HOA fees AND TCAD match: **51**
- Total implied yearly HOA collected (matched set): **$7,499,545**

## Communities ranked by HOA fee efficiency

Efficiency = (amenity_score + coverage_score) * scale_factor / (fee_psf * 100). Higher is better.

`Total living sqft` and `Implied $/mo` / `Implied $/yr` are the community-wide budget context from the TCAD join (fee_psf_median * total_living_sqft). Living sqft is TCAD's improvement-area total and excludes common areas (pool decks, hallways, garages, clubhouses). A `-` in those columns means the community has no TCAD match, so the community-wide totals can't be computed — efficiency is still defined from the per-sqft fee.

| # | Community | Year built | Listing units | Total units | Total living sqft | $/sqft | $/mo per unit | Implied $/mo | Implied $/yr | Amenity | Coverage | Value | Efficiency | HOA-covered expenses | Amenities |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---|
| 1 | Apache-Shores-Sec-02 (c-000001) | 1939-2026 | 86 | 336 | 604,555 | $0.004 | $10 | $2,539 | $30,470 | 48 | 14 | 155.0 | 369.0 | insurance; common area maintenance; maintenance grounds; parking | clubhouse; controlled access; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; high speed internet; lake; park; planned social activities; playground; pool; trash pickup - door to door; basketball court; bbq area; boat ramp; common grounds; conference/meeting room; curbs; electronic payments; jogging path; nest thermostat; picnic area; property manager on-site; sport court(s); street lights; suburban; trails/paths |
| 2 | Travis-Landing (c-000004) | 1970-2024 | 13 | 70 | 142,338 | $0.005 | $14 | $726 | $8,711 | 27 | 26 | 97.8 | 191.7 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; security; water; trash | controlled access; dog park; fishing; gated; lake; park; pet amenities; planned social activities; playground; storage; trash pickup - door to door; bbq area; boat ramp; common grounds; picnic area |
| 3 | Hudson-Bend-Colony-02 (c-000011) | 1982-2023 | 31 | 147 | 395,670 | $0.007 | $21 | $2,928 | $35,135 | 65 | 0 | 140.9 | 190.4 | - | airport/runway; general aircraft airport; restaurant; clubhouse; golf; library; lock and leave; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; shopping mall; trash pickup - door to door; bbq area; common grounds; google fiber; picnic area; sidewalks; street lights; suburban |
| 4 | Preserve-at-Lakeway (c-000008) | 2006-2025 | 19 | 63 | 213,756 | $0.008 | $22 | $1,689 | $20,264 | 40 | 9 | 88.2 | 111.6 | common area maintenance; landscaping; maintenance grounds | airport/runway; restaurant; golf; library; sport court(s)/facility; tennis court(s); underground utilities; dog park; high speed internet; lake; park; playground; pool; cluster mailbox; common grounds; curbs |
| 5 | Buffalo-Gap (c-000013) | 1950-2024 | 8 | 30 | 71,477 | $0.002 | $8 | $136 | $1,630 | 8 | 0 | 11.8 | 62.2 | - | fishing; lake; park; common grounds; picnic area |
| 6 | Cardinal-Hills-Unit-01 (c-000007) | 1980-2022 | 15 | 81 | 200,056 | $0.009 | $22 | $1,720 | $20,646 | 12 | 11 | 43.9 | 51.0 | insurance; common area maintenance; landscaping | golf; fishing; high speed internet; playground; trash pickup - door to door; suburban |
| 7 | Edgewater-Sec-02 (c-000156) | 1982-2025 | 2 | 33 | 119,915 | $0.004 | $15 | $456 | $5,468 | 4 | 8 | 18.2 | 48.0 | insurance; common area maintenance | tennis court(s); common grounds |
| 8 | Rough-Hollow (c-000006) | 2006-2025 | 15 | 48 | 201,150 | $0.058 | $277 | $11,626 | $139,518 | 91 | 22 | 190.0 | 32.9 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; security | airport/runway; general aircraft airport; restaurant; spa/hot tub; clubhouse; controlled access; fitness center; golf; library; lock and leave; putting green; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; gated; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; trash pickup - door to door; business center; cluster mailbox; common grounds; concierge; conference/meeting room; courtyard; curbs; electronic payments; game room; kitchen facilities; lounge; picnic area; racquetball; sauna; sidewalks; street lights; suburban; tanning salon; u-verse |
| 9 | Estates-Lakeway-Hills-Sec-01 (c-000136) | 1994-2007 | 1 | 19 | 79,226 | $0.011 | $43 | $848 | $10,173 | 21 | 6 | 34.5 | 32.3 | common area maintenance; landscaping | golf; tennis court(s); underground utilities; gated; lake; park; playground; pool; common grounds; sidewalks |
| 10 | Coves-At-Lakeway (c-000117) | 1995-2017 | 2 | 23 | 96,931 | $0.015 | $75 | $1,454 | $17,448 | 23 | 3 | 35.4 | 23.6 | common area maintenance | general aircraft airport; golf; sport court(s)/facility; dog park; lake; park; pet amenities; playground; pool |
| 11 | Bella-Montagna (c-000005) | 2004-2024 | 12 | 63 | 309,957 | $0.024 | $120 | $7,532 | $90,383 | 17 | 14 | 55.8 | 23.0 | insurance; common area maintenance; landscaping; maintenance grounds | controlled access; underground utilities; gated; lake; park; cluster mailbox; common grounds; curbs; sidewalks; suburban |
| 12 | Lohmans-Crossing-Estates-Sec-07 (c-000096) | 1986-2010 | 1 | 35 | 100,357 | $0.018 | $42 | $1,756 | $21,075 | 23 | 3 | 40.1 | 22.9 | common area maintenance | sport court(s)/facility; tennis court(s); dog park; fishing; lake; park; pet amenities; playground; pool; common grounds; picnic area; sidewalks |
| 13 | North-Lakeway-Village-Sec-03 (c-000009) | 2008-2013 | 10 | 68 | 195,028 | $0.034 | $102 | $6,553 | $78,635 | 38 | 3 | 75.1 | 22.4 | common area maintenance | general aircraft airport; restaurant; clubhouse; controlled access; golf; underground utilities; fishing; gated; lake; park; pool; cluster mailbox; common grounds; curbs; sidewalks; street lights; suburban |
| 14 | Canyons-At-Lake-Travis (c-000038) | 2011-2024 | 4 | 59 | 240,030 | $0.015 | $71 | $3,720 | $44,646 | 11 | 7 | 31.9 | 20.6 | common area maintenance; security; trash | underground utilities; gated; park; trash pickup - door to door; cluster mailbox; curbs |
| 15 | Woods-of-Lake-Travis (c-000064) | 1985-2025 | 2 | 32 | 99,540 | $0.017 | $58 | $1,722 | $20,665 | 19 | 3 | 33.1 | 19.1 | common area maintenance | controlled access; fishing; gated; lake; park; planned social activities; playground; storage; bbq area; picnic area |
| 16 | Vineyard-Bay-Ph-01 (c-000022) | 1983-2024 | 5 | 81 | 418,032 | $0.046 | $275 | $19,146 | $229,750 | 37 | 8 | 85.9 | 18.8 | insurance; common area maintenance | clubhouse; controlled access; fitness center; sport court(s)/facility; tennis court(s); gated; lake; park; planned social activities; playground; pool; bbq area; cluster mailbox; common grounds; conference/meeting room; courtyard; curbs; kitchen facilities; picnic area; sauna; sidewalks |
| 17 | Lohmans-Crossing-Estates-Sec-4 (c-000098) | 1986-2022 | 1 | 13 | 33,098 | $0.017 | $42 | $559 | $6,712 | 17 | 3 | 22.3 | 13.2 | common area maintenance | controlled access; tennis court(s); fishing; lake; park; pool; curbs; picnic area; sidewalks |
| 18 | orphan-community (orphan) | 2016-2024 | 15 | 21 | 35,427 | $0.022 | $108 | $786 | $9,438 | 16 | 3 | 25.1 | 11.3 | common area maintenance | assisted living community; boat facilities; fitness center; park; public transportation |
| 19 | Champions-Lakeway (c-000073) | 1983-2005 | 1 | 23 | 48,782 | $0.065 | $135 | $3,146 | $37,757 | 30 | 14 | 59.9 | 9.3 | insurance; common area maintenance; landscaping; maintenance grounds | airport/runway; fitness center; golf; sport court(s)/facility; tennis court(s); dog park; lake; park; playground; pool; cluster mailbox; picnic area; sidewalks |
| 20 | COSTA-BELLA (c-000146) | 2001-2023 | 2 | 21 | 140,101 | $0.048 | $305 | $6,669 | $80,026 | 26 | 6 | 42.3 | 8.9 | common area maintenance; security | clubhouse; fitness center; sport court(s)/facility; tennis court(s); fishing; gated; lake; pool; bbq area; cluster mailbox; common grounds; conference/meeting room; game room; kitchen facilities |
| 21 | Lakeway-Sec-Clusters-28-05 (c-000055) | 1984-2026 | 4 | 43 | 119,874 | $0.088 | $246 | $10,609 | $127,306 | 42 | 6 | 78.4 | 8.9 | common area maintenance; maintenance grounds | airport/runway; general aircraft airport; fitness center; golf; library; tennis court(s); underground utilities; high speed internet; lake; park; pet amenities; playground; pool; trash pickup - door to door; common grounds; google fiber; picnic area |
| 22 | Cardinal-Hills-Estates-Unit-15 (c-000040) | 1986-2024 | 5 | 138 | 291,811 | $0.008 | $17 | $2,334 | $28,014 | 0 | 3 | 6.4 | 8.0 | common area maintenance | - |
| 23 | Pinnacle-At-North-Lakeway-Condo (c-000154) | 2008-2013 | 2 | 88 | 222,248 | $0.161 | $400 | $35,671 | $428,050 | 52 | 14 | 128.3 | 8.0 | maintenance structure; common area maintenance; landscaping; maintenance grounds | airport/runway; restaurant; clubhouse; fitness center; golf; library; lock and leave; tennis court(s); underground utilities; dog park; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; shopping mall; cluster mailbox; common grounds; picnic area |
| 24 | Lakewind-Estates-Sec-03 (c-000021) | 2000-2014 | 4 | 47 | 231,562 | $0.034 | $180 | $7,966 | $95,589 | 9 | 7 | 26.8 | 7.8 | common area maintenance; maintenance grounds; trash | controlled access; gated; trash pickup - door to door; cluster mailbox; common grounds |
| 25 | Boulevard-At-Lakeway (c-000049) | 2008-2015 | 10 | 35 | 76,429 | $0.194 | $414 | $14,858 | $178,294 | 67 | 29 | 148.2 | 7.6 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; sewer; trash | airport/runway; general aircraft airport; clubhouse; golf; lock and leave; maintenance on-site; putting green; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; gated; high speed internet; lake; park; pet amenities; playground; pool; recycling area/center; storage; bbq area; cluster mailbox; common grounds; community mailbox; curbs; maintenance front yard; picnic area; sidewalks; smart car charging; suburban; trails/paths |
| 26 | Arbolago (c-000033) | 2000-2017 | 4 | 43 | 221,005 | $0.036 | $200 | $8,000 | $96,005 | 12 | 4 | 26.1 | 7.2 | common area maintenance; trash | controlled access; gated; lake; park; cluster mailbox; common grounds; picnic area |
| 27 | Estates-Lakeway-Hills-Sec-03 (c-000134) | 1999-2005 | 1 | 13 | 58,144 | $0.010 | $43 | $570 | $6,838 | 3 | 3 | 6.7 | 6.8 | common area maintenance | gated; curbs |
| 28 | Villas-At-Tuscan-Village-Amd (c-000003) | 2010-2017 | 14 | 100 | 211,806 | $0.381 | $636 | $80,719 | $968,631 | 96 | 29 | 250.0 | 6.6 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; cable tv; internet; pest control; trash | airport/runway; covered parking; garage parking; general aircraft airport; spa/hot tub; clubhouse; fitness center; golf; library; lock and leave; maintenance on-site; putting green; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; storage; trash pickup - door to door; bbq area; bike storage/locker; business center; cluster mailbox; common grounds; conference/meeting room; curbs; electronic payments; game room; hot tub community; kitchen facilities; media center/movie theatre; picnic area; property manager on-site; sidewalks; street lights; u-verse |
| 29 | Bella-Strada (c-000035) | 2006-2024 | 2 | 18 | 88,196 | $0.014 | $73 | $1,235 | $14,817 | 3 | 3 | 7.5 | 5.4 | common area maintenance | gated; common grounds |
| 30 | Cardinal-Hills-Estates-Unit-16 (c-000041) | 1985-2023 | 3 | 39 | 76,430 | $0.043 | $120 | $3,317 | $39,805 | 14 | 0 | 22.3 | 5.1 | - | covered parking; high speed internet; pool; bbq area; creative office space; game room; nest thermostat; sundeck |
| 31 | Reserve-At-Hudson-Bend (c-000105) | 2002-2022 | 1 | 39 | 190,391 | $0.011 | $60 | $2,189 | $26,274 | 0 | 3 | 4.8 | 4.2 | common area maintenance | - |
| 32 | Enclave-at-Yaupon (c-000079) | - | 1 | - | - | $0.029 | $133 | - | - | 9 | 3 | 12.0 | 4.1 | common area maintenance | underground utilities; trash pickup - door to door; cluster mailbox; google fiber; street lights; suburban |
| 33 | Villas-On-Travis-Condo-Amd (c-000002) | 1981-1999 | 20 | 159 | 234,169 | $0.608 | $840 | $142,328 | $1,707,935 | 78 | 35 | 248.8 | 4.1 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking; security; sewer; water; cable tv; internet; pest control; trash | covered parking; garage parking; spa/hot tub; clubhouse; controlled access; fitness center; lock and leave; maintenance on-site; sport court(s)/facility; tennis court(s); underground utilities; dog park; fishing; gated; high speed internet; lake; park; pet amenities; planned social activities; playground; pool; recycling area/center; storage; bbq area; bike storage/locker; cluster mailbox; common grounds; courtyard; curbs; electronic payments; hot tub community; nest thermostat; picnic area; property manager on-site; racquetball; sidewalks; street lights; sundeck |
| 34 | Woods-Lake-Travis-01 (c-000111) | 1982-2018 | 1 | 32 | 92,013 | $0.019 | $62 | $1,721 | $20,648 | 5 | 0 | 7.5 | 4.0 | - | park; playground; picnic area |
| 35 | Canopy-At-Hudson-Bend-Condomin (c-000037) | 2015-2021 | 3 | 36 | 79,142 | $0.077 | $200 | $6,078 | $72,937 | 7 | 12 | 29.6 | 3.9 | common area maintenance; landscaping; maintenance grounds; sewer | underground utilities; gated; cluster mailbox; common grounds |
| 36 | Vistas-At-Lakeway-Condo (c-000016) | 2008-2016 | 8 | 141 | 302,790 | $0.266 | $570 | $80,421 | $965,052 | 16 | 28 | 94.6 | 3.6 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; sewer; water; cable tv; internet; trash | clubhouse; fitness center; underground utilities; pool; bbq area; cluster mailbox; common grounds; curbs; picnic area |
| 37 | Enclave-At-Kollmeyer-Springs (c-000126) | 2003-2025 | 1 | 12 | 49,487 | $0.049 | $188 | $2,430 | $29,158 | 10 | 3 | 14.0 | 2.9 | common area maintenance | underground utilities; gated; park; trash pickup - door to door; picnic area |
| 38 | N-A (c-000030) | 2019-2021 | 3 | 66 | 118,761 | $0.226 | $419 | $26,792 | $321,510 | 16 | 18 | 61.9 | 2.7 | insurance; common area maintenance; landscaping; sewer; water; trash | clubhouse; fitness center; dog park; pet amenities; pool; bbq area; cluster mailbox; common grounds; picnic area |
| 39 | McCormick-Mountain-Sub-Ph-3 (c-000012) | 2022-2025 | 7 | 2 | 7,069 | $0.026 | $50 | $182 | $2,180 | 4 | 3 | 7.0 | 2.7 | common area maintenance | gated; lake |
| 40 | Cedar-Glen-Sec-01 (c-000120) | 2008-2015 | 2 | 16 | 35,916 | $0.102 | $260 | $3,663 | $43,961 | 8 | 14 | 26.5 | 2.6 | insurance; common area maintenance; landscaping; maintenance grounds | tennis court(s); playground; pool; basketball court |
| 41 | Casa-Verde-Condo (c-000114) | 1977 | 2 | 56 | 94,322 | $0.207 | $360 | $19,496 | $233,956 | 17 | 9 | 45.5 | 2.2 | common area maintenance; landscaping; parking | general aircraft airport; golf; tennis court(s); park; playground; pool |
| 42 | Garages-Of-Texas-at-Lakeway (c-000149) | 2020 | 1 | - | - | $0.179 | $208 | - | - | 14 | 25 | 39.0 | 2.2 | insurance; common area maintenance; landscaping; maintenance grounds; parking; security; sewer; internet; trash | clubhouse; controlled access; lock and leave; gated; high speed internet; conference/meeting room |
| 43 | Marina-Village-at-Lakeway (c-000144) | 2008 | 2 | 40 | 86,132 | $0.332 | $755 | $28,596 | $343,150 | 41 | 4 | 72.1 | 2.2 | common area maintenance; trash | general aircraft airport; restaurant; golf; library; tennis court(s); underground utilities; dog park; fishing; lake; park; pet amenities; planned social activities; playground; pool; cluster mailbox; common grounds; picnic area |
| 44 | LAKESIDE-VILLAS-CONDOMINIUMS (c-000116) | 2016-2024 | 4 | 21 | 35,427 | $0.145 | $375 | $5,155 | $61,856 | 3 | 14 | 22.5 | 1.5 | insurance; common area maintenance; landscaping; maintenance grounds | gated; curbs |
| 45 | Vista-Grande-Condo (c-000015) | 1980 | 7 | 8 | 8,640 | $0.278 | $173 | $2,400 | $28,802 | 14 | 22 | 36.0 | 1.3 | insurance; maintenance structure; common area maintenance; landscaping; maintenance grounds; parking | garage parking; maintenance on-site; tennis court(s); lake; common grounds |
| 46 | Fairlake-Condo-Lakeway (c-000155) | - | 1 | - | - | $0.172 | $350 | - | - | 16 | 6 | 22.0 | 1.3 | common area maintenance; landscaping | sport court(s)/facility; underground utilities; lake; park; pet amenities; playground; pool |
| 47 | Retama-Garden-Homes (c-000128) | 1983 | 1 | 53 | 72,375 | $0.317 | $489 | $22,950 | $275,401 | 9 | 14 | 39.7 | 1.3 | maintenance structure; common area maintenance; landscaping; maintenance grounds | clubhouse; tennis court(s); pool; common grounds |
| 48 | Lakeside-at-the-Park (c-000085) | 2016-2024 | 1 | 21 | 35,427 | $0.238 | $410 | $8,446 | $101,350 | 8 | 14 | 29.1 | 1.2 | maintenance structure; common area maintenance; landscaping; maintenance grounds | garage parking; gated; common grounds |
| 49 | Sunset-Park (c-000153) | 1998-2002 | 2 | 14 | 38,450 | $0.183 | $450 | $7,021 | $84,252 | 10 | 9 | 21.8 | 1.2 | common area maintenance; landscaping; sewer | controlled access; gated; lake; park; common grounds |
| 50 | Lohmans-Crossing-Estates-Sec-2 (c-000118) | 1983-2000 | 3 | 27 | 36,569 | $0.158 | $175 | $5,771 | $69,247 | 3 | 10 | 18.6 | 1.2 | insurance; maintenance structure | library |
| 51 | Other (c-000059) | 2022-2025 | 2 | 2 | 7,069 | $0.043 | $144 | $304 | $3,648 | 5 | 0 | 5.0 | 1.2 | - | clubhouse; pool |
| 52 | Lake-Chandon (c-000083) | 2003-2020 | 1 | 13 | 29,853 | $0.101 | $233 | $3,015 | $36,182 | 2 | 6 | 8.9 | 0.9 | common area maintenance; maintenance grounds | common grounds; nest thermostat |
| 53 | Beacon-Ridge-Twnhms-Condo (c-000068) | 2000-2001 | 1 | 16 | 22,446 | $0.185 | $265 | $4,159 | $49,911 | 1 | 11 | 14.4 | 0.8 | insurance; landscaping; sewer | common grounds |
| 54 | Honey-Creek (c-000129) | - | 1 | - | - | $0.138 | $250 | - | - | 1 | 3 | 4.0 | 0.3 | landscaping | cluster mailbox |
| 55 | Travis-Oaks-of-Lakeway-Preservev (c-000152) | 2008-2015 | 3 | 18 | 37,118 | $0.292 | $550 | $10,853 | $130,240 | 3 | 3 | 7.5 | 0.3 | common area maintenance | pool; common grounds |

## Communities ranked by implied yearly HOA collected

Same data as the efficiency table above, re-sorted by total dollars collected per year (fee_psf_median * total_living_sqft * 12). Larger budgets can support more amenities and stronger reserves — but only if spent well, which is what the efficiency ranking measures.

| # | Community | Year built | Listing units | Total units (TCAD) | Total living sqft | $/sqft | Implied total $/mo | Implied total $/yr | Efficiency |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Villas-On-Travis-Condo-Amd (c-000002) | 1981-1999 | 20 | 159 | 234,169 | $0.608 | $142,328 | $1,707,935 | 4.1 |
| 2 | Villas-At-Tuscan-Village-Amd (c-000003) | 2010-2017 | 14 | 100 | 211,806 | $0.381 | $80,719 | $968,631 | 6.6 |
| 3 | Vistas-At-Lakeway-Condo (c-000016) | 2008-2016 | 8 | 141 | 302,790 | $0.266 | $80,421 | $965,052 | 3.6 |
| 4 | Pinnacle-At-North-Lakeway-Condo (c-000154) | 2008-2013 | 2 | 88 | 222,248 | $0.161 | $35,671 | $428,050 | 8.0 |
| 5 | Marina-Village-at-Lakeway (c-000144) | 2008 | 2 | 40 | 86,132 | $0.332 | $28,596 | $343,150 | 2.2 |
| 6 | N-A (c-000030) | 2019-2021 | 3 | 66 | 118,761 | $0.226 | $26,792 | $321,510 | 2.7 |
| 7 | Retama-Garden-Homes (c-000128) | 1983 | 1 | 53 | 72,375 | $0.317 | $22,950 | $275,401 | 1.3 |
| 8 | Casa-Verde-Condo (c-000114) | 1977 | 2 | 56 | 94,322 | $0.207 | $19,496 | $233,956 | 2.2 |
| 9 | Vineyard-Bay-Ph-01 (c-000022) | 1983-2024 | 5 | 81 | 418,032 | $0.046 | $19,146 | $229,750 | 18.8 |
| 10 | Boulevard-At-Lakeway (c-000049) | 2008-2015 | 10 | 35 | 76,429 | $0.194 | $14,858 | $178,294 | 7.6 |
| 11 | Rough-Hollow (c-000006) | 2006-2025 | 15 | 48 | 201,150 | $0.058 | $11,626 | $139,518 | 32.9 |
| 12 | Travis-Oaks-of-Lakeway-Preservev (c-000152) | 2008-2015 | 3 | 18 | 37,118 | $0.292 | $10,853 | $130,240 | 0.3 |
| 13 | Lakeway-Sec-Clusters-28-05 (c-000055) | 1984-2026 | 4 | 43 | 119,874 | $0.088 | $10,609 | $127,306 | 8.9 |
| 14 | Lakeside-at-the-Park (c-000085) | 2016-2024 | 1 | 21 | 35,427 | $0.238 | $8,446 | $101,350 | 1.2 |
| 15 | Arbolago (c-000033) | 2000-2017 | 4 | 43 | 221,005 | $0.036 | $8,000 | $96,005 | 7.2 |
| 16 | Lakewind-Estates-Sec-03 (c-000021) | 2000-2014 | 4 | 47 | 231,562 | $0.034 | $7,966 | $95,589 | 7.8 |
| 17 | Bella-Montagna (c-000005) | 2004-2024 | 12 | 63 | 309,957 | $0.024 | $7,532 | $90,383 | 23.0 |
| 18 | Sunset-Park (c-000153) | 1998-2002 | 2 | 14 | 38,450 | $0.183 | $7,021 | $84,252 | 1.2 |
| 19 | COSTA-BELLA (c-000146) | 2001-2023 | 2 | 21 | 140,101 | $0.048 | $6,669 | $80,026 | 8.9 |
| 20 | North-Lakeway-Village-Sec-03 (c-000009) | 2008-2013 | 10 | 68 | 195,028 | $0.034 | $6,553 | $78,635 | 22.4 |
| 21 | Canopy-At-Hudson-Bend-Condomin (c-000037) | 2015-2021 | 3 | 36 | 79,142 | $0.077 | $6,078 | $72,937 | 3.9 |
| 22 | Lohmans-Crossing-Estates-Sec-2 (c-000118) | 1983-2000 | 3 | 27 | 36,569 | $0.158 | $5,771 | $69,247 | 1.2 |
| 23 | LAKESIDE-VILLAS-CONDOMINIUMS (c-000116) | 2016-2024 | 4 | 21 | 35,427 | $0.145 | $5,155 | $61,856 | 1.5 |
| 24 | Beacon-Ridge-Twnhms-Condo (c-000068) | 2000-2001 | 1 | 16 | 22,446 | $0.185 | $4,159 | $49,911 | 0.8 |
| 25 | Canyons-At-Lake-Travis (c-000038) | 2011-2024 | 4 | 59 | 240,030 | $0.015 | $3,720 | $44,646 | 20.6 |
| 26 | Cedar-Glen-Sec-01 (c-000120) | 2008-2015 | 2 | 16 | 35,916 | $0.102 | $3,663 | $43,961 | 2.6 |
| 27 | Cardinal-Hills-Estates-Unit-16 (c-000041) | 1985-2023 | 3 | 39 | 76,430 | $0.043 | $3,317 | $39,805 | 5.1 |
| 28 | Champions-Lakeway (c-000073) | 1983-2005 | 1 | 23 | 48,782 | $0.065 | $3,146 | $37,757 | 9.3 |
| 29 | Lake-Chandon (c-000083) | 2003-2020 | 1 | 13 | 29,853 | $0.101 | $3,015 | $36,182 | 0.9 |
| 30 | Hudson-Bend-Colony-02 (c-000011) | 1982-2023 | 31 | 147 | 395,670 | $0.007 | $2,928 | $35,135 | 190.4 |
| 31 | Apache-Shores-Sec-02 (c-000001) | 1939-2026 | 86 | 336 | 604,555 | $0.004 | $2,539 | $30,470 | 369.0 |
| 32 | Enclave-At-Kollmeyer-Springs (c-000126) | 2003-2025 | 1 | 12 | 49,487 | $0.049 | $2,430 | $29,158 | 2.9 |
| 33 | Vista-Grande-Condo (c-000015) | 1980 | 7 | 8 | 8,640 | $0.278 | $2,400 | $28,802 | 1.3 |
| 34 | Cardinal-Hills-Estates-Unit-15 (c-000040) | 1986-2024 | 5 | 138 | 291,811 | $0.008 | $2,334 | $28,014 | 8.0 |
| 35 | Reserve-At-Hudson-Bend (c-000105) | 2002-2022 | 1 | 39 | 190,391 | $0.011 | $2,189 | $26,274 | 4.2 |
| 36 | Lohmans-Crossing-Estates-Sec-07 (c-000096) | 1986-2010 | 1 | 35 | 100,357 | $0.018 | $1,756 | $21,075 | 22.9 |
| 37 | Woods-of-Lake-Travis (c-000064) | 1985-2025 | 2 | 32 | 99,540 | $0.017 | $1,722 | $20,665 | 19.1 |
| 38 | Woods-Lake-Travis-01 (c-000111) | 1982-2018 | 1 | 32 | 92,013 | $0.019 | $1,721 | $20,648 | 4.0 |
| 39 | Cardinal-Hills-Unit-01 (c-000007) | 1980-2022 | 15 | 81 | 200,056 | $0.009 | $1,720 | $20,646 | 51.0 |
| 40 | Preserve-at-Lakeway (c-000008) | 2006-2025 | 19 | 63 | 213,756 | $0.008 | $1,689 | $20,264 | 111.6 |
| 41 | Coves-At-Lakeway (c-000117) | 1995-2017 | 2 | 23 | 96,931 | $0.015 | $1,454 | $17,448 | 23.6 |
| 42 | Bella-Strada (c-000035) | 2006-2024 | 2 | 18 | 88,196 | $0.014 | $1,235 | $14,817 | 5.4 |
| 43 | Estates-Lakeway-Hills-Sec-01 (c-000136) | 1994-2007 | 1 | 19 | 79,226 | $0.011 | $848 | $10,173 | 32.3 |
| 44 | orphan-community (orphan) | 2016-2024 | 15 | 21 | 35,427 | $0.022 | $786 | $9,438 | 11.3 |
| 45 | Travis-Landing (c-000004) | 1970-2024 | 13 | 70 | 142,338 | $0.005 | $726 | $8,711 | 191.7 |
| 46 | Estates-Lakeway-Hills-Sec-03 (c-000134) | 1999-2005 | 1 | 13 | 58,144 | $0.010 | $570 | $6,838 | 6.8 |
| 47 | Lohmans-Crossing-Estates-Sec-4 (c-000098) | 1986-2022 | 1 | 13 | 33,098 | $0.017 | $559 | $6,712 | 13.2 |
| 48 | Edgewater-Sec-02 (c-000156) | 1982-2025 | 2 | 33 | 119,915 | $0.004 | $456 | $5,468 | 48.0 |
| 49 | Other (c-000059) | 2022-2025 | 2 | 2 | 7,069 | $0.043 | $304 | $3,648 | 1.2 |
| 50 | McCormick-Mountain-Sub-Ph-3 (c-000012) | 2022-2025 | 7 | 2 | 7,069 | $0.026 | $182 | $2,180 | 2.7 |
| 51 | Buffalo-Gap (c-000013) | 1950-2024 | 8 | 30 | 71,477 | $0.002 | $136 | $1,630 | 62.2 |

## Communities with HOA name but no fee data (unscored)

| Community | HOA name | fee_psf_n |
|---|---|---:|
| Bebys-Ranch-01-Resub-Of-Residence (c-000034) | Beby's Ranch Resubdi | 0 |
| Villas-At-Commanders-Point (c-000121) | Villas at Commanders | 0 |
