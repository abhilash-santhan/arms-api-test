# ARMS API Test Project

## Setup
```bash
npm install
npm start
```
Backend runs at http://localhost:4000.

## Test endpoints
- GET /api/users — working
- GET /api/products — intentionally missing
- GET /api/profile — response property mismatch
- GET /api/orders/101 — 404
- GET /api/reports — 500
- GET /api/dashboard — 401
- GET /api/statistics — response type mismatch
- GET /api/company — nested JSON
- GET /api/slow — 10-second response
- GET /api/search?q=abhilash&page=1 — query params
- POST /api/login — login
- PATCH /api/users/1 — update user
- DELETE /api/users/1 — delete user
- GET /api/notifications — array response
- GET /api/settings — boolean fields
- GET /api/empty — 204 empty response
- GET /api/health — health check

`client.js` contains frontend calls for static scanning.
