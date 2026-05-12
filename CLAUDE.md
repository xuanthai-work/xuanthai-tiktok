# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flutter **web-first** personal bio/link page (`bio_tiktok`). It displays a rotating avatar, social media links, a shop link, and a Momo donate QR code. The app supports background music via `audioplayers` and is fully responsive across mobile, tablet, desktop, and large desktop breakpoints.

## Common Commands

```bash
# Run the app (defaults to Chrome on web)
flutter run

# Build for web release
flutter build web

# Analyze code for lint/static errors
flutter analyze

# Run all widget tests
flutter test

# Run a single test file
flutter test test/widget_test.dart

# Check for outdated dependencies
flutter pub outdated

# Upgrade dependencies
flutter pub upgrade --major-versions
```

## Architecture

### Entry Flow
`main.dart` → `ClickToEnter` (tap-to-enter screen that starts background music) → `Homepage` (responsive layout selector).

### Responsive Layouts
`Homepage` uses the `Responsive` widget (`lib/suoc/responsive_page.dart`) to route to one of four layout-specific pages based on screen width:
- `< 640px` → `BioLinkPage` (phone)
- `640px – 1199px` → `BioTabletPage`
- `1200px – 1399px` → `BioPcPage`
- `≥ 1400px` → `BioLargeDesktopPage`

All four pages are thin wrappers that compose reusable widgets from `lib/widgets/` with layout-specific sizes. The old duplicated UI trees were extracted into:
- `RotatingAvatar` — animated avatar with gradient border
- `BioInfo` — name / subtitle text block
- `SocialLinks` / `IconLinkButton` — social media icons with `url_launcher`
- `GradientDivider` — cyan-to-blue divider line
- `DonateSection` — Momo QR image
- `BioBackground` — background image + dark overlay

### State & Audio
`MusicController` (`lib/suoc/music_button.dart`) is a **singleton** that wraps `AudioPlayer`. It is instantiated once and persists across layout changes so music does not stop when the window is resized and a different responsive page is mounted.

The playlist lives in `_playlist` and auto-advances via `onPlayerComplete`.

### URLs & Assets
Social links and image paths are centralized in `lib/suoc/link_file.dart`. `launchURL()` is also defined there and used by `IconLinkButton`.

Assets are in `assets/images/` and `assets/audios/`. Custom fonts (Dancing Script, Zimra, etc.) are declared in `pubspec.yaml`.

## Important Notes

- **Do not make `_handleTap` in `ClickToEnter` async** (or guard `Navigator.pushReplacement` behind an `await`). The `audioplayers` package blocks widget tests if awaited during tap handling.
- `flutter analyze` uses `package:flutter_lints/flutter.yaml`. Keep lints clean before committing.
- The app is built for **web**; do not assume mobile-only APIs without web support.
