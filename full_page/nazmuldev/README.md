# Nazmul Dev

A small static portfolio starter. The frontend has no build step or package dependencies.

## Structure

- `frontend/` contains the portfolio pages, styles, scripts, and project data.
- `backend/` is reserved for week 2.

## Run locally

Open `frontend/index.html` in a local web server so the browser can fetch `data/projects.json`. For example, from the `frontend` directory:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Make it yours

- Update the introductory copy in `frontend/index.html` and `frontend/about.html`.
- Replace the sample entries in `frontend/data/projects.json` with your projects.
- Replace the example email address in `frontend/contact.html` with your contact address.
- Add backend work under `backend/` when week 2 begins.