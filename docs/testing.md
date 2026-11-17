# Testing and Verification

## Baseline
The original `package.json` contains only a development script using Nodemon. There was no test, lint, or production build script in the inspected package metadata.

## Testing goals
For a backend, verification should cover:
- Unit tests for utility functions and model methods.
- Controller tests for successful and failed service interactions.
- Integration tests against a disposable MongoDB database.
- Authentication and authorization negative cases.
- Upload validation, storage, provider failure, and cleanup.
- API contract tests for every declared route.
- Regression tests for known defects listed in troubleshooting.

## Safe test data
Use synthetic users, generated passwords, fake tokens, small fixture files, and a disposable database. Never use a production database dump or real user credentials in automated tests.

## Current known defects to add regression coverage for
- Refresh-token guard rejects a supplied token.
- Account update controller references an undefined `json`.
- Channel profile controller treats a non-empty aggregation result as not found.
- Video model references `Schema` without importing it.
- Missing Authorization header can cause an unsafe `replace` call.
- Cloudinary failure cleanup can throw after the temporary file has already been removed.

## Current repository checks

```bash
npm run check
npm run check:syntax
npm run check:repo
npm run check:format
```

These commands inspect JavaScript syntax, Prettier formatting for the configured source paths, required repository files, and relative Markdown links. They do not start MongoDB or test route behavior.

## Application testing goals
The project currently exposes only `npm run dev`. Add and document test and lint commands only when their toolchains and configuration have actually been committed. For now, perform syntax checks with Node for the source files and manual disposable-environment integration checks, recording the commands actually executed.

## CI boundary
A future CI workflow should use Node, install from `package-lock.json`, run lint and tests, and avoid production credentials. Use a temporary MongoDB service/container or mocked data layer. Never print secrets or database contents in CI logs.

## Reporting
For each change, state which test layer was run, the environment, the result, and what was not tested. A successful syntax check is not evidence that route behavior is correct.
