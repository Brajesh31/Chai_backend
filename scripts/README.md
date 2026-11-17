# 🛠️ Repository Maintenance Scripts

## Validate repository documentation

```bash
node scripts/validate-repository.js
```

This script checks a selected set of required repository paths and relative Markdown links under `docs/` and the root README. It does not start the API, connect to MongoDB, inspect user data, execute controllers, or validate runtime behavior.

A successful result is a documentation/repository hygiene check only.
