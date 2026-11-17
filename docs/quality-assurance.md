# Quality Assurance

## Current baseline
The original package defines a Nodemon development script only. It has no test, lint, build, or deployment-validation scripts.

## Repository hygiene
The Node script `scripts/validate-repository.js` checks required project paths and local relative Markdown links. It does not exercise the application or data layer.

## Recommended CI gates
1. Install exact locked dependencies using `npm ci`.
2. Run Prettier check against tracked JavaScript, JSON, and Markdown.
3. Run unit tests.
4. Run integration tests against disposable MongoDB.
5. Run static security and dependency checks.
6. Validate documentation links.
7. Verify syntax for all application source files.

## Secrets
CI should use mocked Cloudinary interactions and disposable test credentials. Do not expose production secrets or real user information in CI logs.

## Evidence
A green repository hygiene check is not a security audit, load test, or proof that all API endpoints behave correctly. Report the exact checks that passed.
