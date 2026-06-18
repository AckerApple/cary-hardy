# Changelog

## 1.1.0 - 2026-06-18

### Added
- Added public past games owned display below the current lineup, including ownership duration and shared public footer.
- Added Past Games Owned admin tooling with Pinside paste sync support, visibility controls, counts, sorting, and missing-game indicators.
- Added canonical game database enhancements, including editable game IDs, data links, image URL previews, Google Images helper links, and Pinside machine links.
- Added manufacturer admin improvements, including editable IDs and Google Images helper links for logo lookup.
- Added public home page folded sections for awards, live meetups, YouTube, links, merch, games, and ratings.
- Added README documentation for TaggedJS async/joined-data rendering patterns.

### Changed
- Moved QR Maker and Meeting Tools into their own admin sections and added clearer admin home/menu links.
- Updated public navigation from Lineup to Games while preserving the current lineup heading.
- Improved current and past game card details, including collected dates, years owned, and better placeholder initials.
- Improved ratings admin video link layout and link handling.
- Hardened game joins between current games, past games, ratings, and the canonical games collection.

### Fixed
- Fixed public past games image rendering when canonical game data loads separately from past-owned records.
- Fixed unmatched past games so they can still render useful fallback titles and placeholders.
- Fixed page emoji/title/favicon coverage across public and admin pages.
