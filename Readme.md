# Product Listing App

Full-stack app for engagement ring listings with dynamic pricing, color variants, and responsive design.

## Tech Stack

- **Backend:** Node.js, Express, CORS
- **Frontend:** React 18, CSS3

## Project Structure

```
product-listing-app/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── products.json
└── README.md
```

## Quick Start

1. `npm install` in both `backend/` and `frontend/`.
2. Start backend: `npm start` in `backend/`.
3. Start frontend: `npm start` in `frontend/`.

## Deployment

- Frontend: Deploy `frontend/build` to any static host (Render, Vercel, Netlify, etc.).
- Backend: Deploy `backend` as a Node.js service (Render, Railway, etc.).
- Set `REACT_APP_API_URL` in frontend for production API calls.

## API

- `GET /api/products` — All products with calculated prices and star ratings

## Notes

- Gold price is hardcoded at $65/gram
- Product images from CDN
- CORS enabled

## Live Demo
- https://product-listing-app-1-au0e.onrender.com/

