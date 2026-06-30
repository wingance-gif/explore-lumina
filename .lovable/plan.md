## Goal

Replace placeholder copy and stock imagery on the Tours sub-sections and Destination detail pages with tailored content and natural photography scraped directly from the 10 source URLs you listed.

## Source URLs → target pages

| Target section / page | Source URL |
|---|---|
| Tours `#trekking` → Kilimanjaro card | `/mount-kilimanjaro/` |
| Tours `#trekking` → Meru card | `/mount-meru/` |
| Tours `#day-trips` | `/day-trips/` |
| Tours `#zanzibar` | `/zanzibar-beaches/` |
| `/destinations/ngorongoro` | `/ngorongoro-conservation/` |
| `/destinations/serengeti` | `/serengeti-national-park/` |
| `/destinations/tarangire` | `/tarangire-national-park/` |
| `/destinations/lake-manyara` | `/lake-manyara-national-park/` |
| `/destinations/selous` | `/selous-national-park/` |
| `/destinations/arusha` | `/arusha-natioonal-park/` |

## Approach

1. **Scrape** each URL with `code--fetch_website` (markdown + html) to pull headline, intro, "why visit / highlights / activities / best time / wildlife" sections, and image URLs (hero + gallery).
2. **Curate images**: keep only natural photography (wildlife, landscapes, lodges in-situ). Hot-link the original image URLs from the source site into a new `EXTERNAL_IMAGES` map in `src/content/site.ts` so we use authentic Tanzania photos, not Unsplash stand-ins.
3. **Build typed content objects** in `src/content/site.ts`:
   - `TREKKING_SERVICES: TrekkingService[]` — exactly 2 entries (Kilimanjaro, Meru) with `title`, `image`, `summary`, `routes[]` (Kilimanjaro), `highlights[]`, `bestTime`, `duration`.
   - `DAY_TRIPS: DayTrip[]` — one per trip listed on the source page (Arusha NP, Lake Duluti, Materuni waterfalls, Maasai village, Tarangire day, Manyara day, etc.).
   - `ZANZIBAR_PACKAGES: ZanzibarPackage[]` — beach packages from the source (Nungwi, Kendwa, Paje, Stone Town combos…).
   - `DESTINATION_DETAILS: Record<slug, { intro, highlights[], wildlife[], activities[], bestTime, gallery[] }>` for the 6 destinations.
4. **Render**:
   - `src/routes/tours.tsx`: add three new `ScrollReveal` sections — `#trekking` (2 large cards), `#day-trips` (card grid), `#zanzibar` (card grid). Each card has hero image, title, summary, highlight chips, "Enquire →" link.
   - `src/routes/destinations.$slug.tsx`: extend to render the new `DESTINATION_DETAILS[slug]` block — intro paragraph, highlights list, wildlife/activities columns, best-time strip, and a photo gallery grid using the scraped image URLs.
5. **SEO**: per-destination `head()` `og:image` already pulls from the destination's image — switch to the scraped hero so social previews use the real park photo.

## Image handling

- Hot-link source images directly (`<img src="https://www.tanzaniaexploration.com/wp-content/uploads/…" loading="lazy">`). No downloading/re-hosting in this iteration.
- Add `referrerPolicy="no-referrer"` on these `<img>` tags to avoid hotlink blocks.
- Drop any decorative/illustrated/non-Tanzania images; keep only on-site nature/wildlife/lodge photography.

## Files to edit

- `src/content/site.ts` — add types + data tables for trekking, day trips, zanzibar, destination details.
- `src/routes/tours.tsx` — add `#trekking`, `#day-trips`, `#zanzibar` sections.
- `src/routes/destinations.$slug.tsx` — render extended detail block + gallery.

## Out of scope

- No nav changes (existing submenu hashes already point to the new section IDs).
- No new routes; trekking services stay as cards in the Tours page (you said "only two services").
- No copy on Arusha NP source URL has a typo (`natioonal`) — I'll scrape that exact URL; if it 404s I'll fall back to `/arusha-national-park/`.

Ready to switch to build mode and execute?
