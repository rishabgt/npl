# Cricket Premiere League (minimal scaffold)

This is a minimal React + Vite scaffold for a Cricket Premiere League homepage.

Run locally:

```bash
npm install
npm run dev
```

Features included:
- Homepage with a simple carousel
- Menu linking to `Teams` and `Players`
- `Highlights` section containing a registration form

Files of interest:
- [src/App.jsx](src/App.jsx)
- [src/components/Carousel.jsx](src/components/Carousel.jsx)
- [src/components/Highlights.jsx](src/components/Highlights.jsx)

Local backend (development):

Start the Express backend which accepts player registrations (multipart/form-data) at `/api/players`:

```bash
# install deps (if not already)
npm install

# run backend in dev mode (auto-restarts on changes)
npm run dev:server

# or run the server directly
npm run start:server
```

The Vite dev server proxies `/api` to `http://localhost:4000` so frontend calls like `fetch('/api/players')` will reach the backend.
