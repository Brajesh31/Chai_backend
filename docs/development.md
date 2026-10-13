# Development

## Scripts and tools

`package.json` currently defines only:

```sh
npm run dev
```

This starts Nodemon and runs `src/index.js` with dotenv preloaded. Prettier is installed and a repository configuration is present. There are currently no `test`, `lint`, `build`, or production `start` scripts.

## Working on a change

1. Create a focused branch from the current default branch.
2. Install dependencies with `npm install` and create a private `.env` from `.env.example`.
3. Start MongoDB and any external service needed by the feature.
4. Make the smallest cohesive change, following the existing ES module style.
5. Run the development server and exercise the affected route with representative valid and invalid input. Do not claim a route was verified unless you ran it.
6. Review the diff for secrets, uploads, logs, and unrelated formatting.
7. Update the relevant docs and describe validation in the pull request.

## Project conventions

- Routes are grouped under `src/routes/` and mounted below `/api/v1/users`.
- Controllers are in `src/controllers/`; schemas are in `src/models/`.
- Reusable request middleware belongs in `src/middlewares/`; shared helpers belong in `src/utils/`.
- Keep response and error behavior explicit. If you add a global error handler, document its status and JSON format.
- Validate untrusted input and constrain uploaded files before forwarding them to external services.

## Data and credentials

Use a disposable local database for development. Never commit `.env`, tokens, database dumps, real user information, or uploaded media. Rotate credentials if they are accidentally exposed. Use test accounts and assets you have permission to use.

## Current limitations

There is no automated test suite. Some existing controller and schema paths have known defects; see [architecture.md](architecture.md). Documentation should distinguish current behavior from planned work.
