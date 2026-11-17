# Support and Compatibility Matrix

| Component | Repository evidence | Current support status |
|---|---|---|
| Node.js | ESM source and npm lockfile | Exact supported LTS version not pinned |
| npm | package-lock.json | npm install / npm ci expected |
| Express | Express 5 dependency | Used by app |
| MongoDB | Mongoose connection helper | Local/Atlas connection configured by env |
| JWT | jsonwebtoken | Access and refresh token helpers exist; refresh controller defect documented |
| Password hashing | bcrypt | Pre-save hash and compare method exist |
| Uploads | Multer | Disk storage to public/temp; no size/type limits |
| Media provider | Cloudinary SDK | Avatar and cover upload helper |
| Video routes | No matching router/controller in tree | Not available |
| Subscription routes | No matching router/controller in tree | Not available |
| Tests | No original test command | Not currently configured |
| Lint/build | No original script | Not currently configured |
| Production deployment | No start/container/manifest | Not defined |

Update this matrix only after a runtime or compatibility combination has actually been tested. Do not infer support from dependency declarations alone.
