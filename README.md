# Study Hub

Study Hub is a mobile-friendly course and video library published through GitHub Pages. This repository contains the website's source code. **No downloaded app is required.**

## Open the app

- Website: https://binhan197.github.io/STUDYHUB/
- iPhone / iPad: open the website in Safari → Share → Add to Home Screen → turn on Open as Web App (when shown) → Add.
- The website installs as a Progressive Web App (PWA) and has its own home-screen icon.

## Library

Add courses, nested folders, videos/URLs, notes, bookmarks, and completion marks. Drag or move resources into your preferred learning order. The initial library contains 36 resources across Cell Membrane Physiology.

## Privacy and data retention

- Notes and study progress are saved in the **local browser storage** of each device. They are **not stored in this public repository** and **do not automatically synchronize between devices**.
- Use **Export JSON Backup** in Study Hub, save the JSON in a private location (such as personal Google Drive), and use **Import JSON Backup** when moving between devices. A home-screen install may use separate local storage from the Safari tab.
- The app shell can open offline after a successful online visit; all external video, textbook, and calculator links require an Internet connection.
- Do not paste private notes into this public GitHub repository.

## Publishing

The static site is deployed from `main` via GitHub Pages. The PWA files (`manifest.webmanifest`, `sw.js`, and `icons/`) are kept at repository root. Relative URLs preserve GitHub Pages' `/STUDYHUB/` path.
