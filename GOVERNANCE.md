# Project Governance

## Scope
Chai Backend is an educational Node.js / Express API repository. It is not currently documented or configured as a production service. Its existing package metadata identifies a separate source author and ISC license; the handbook license is limited to the newly authored documentation as described in LICENSE.

## Maintainer responsibilities
The repository maintainer coordinates review, protects project users and contributors, and keeps documentation aligned with the current source. No response-time or support service level is promised.

## Decision-making
Routine typo and documentation corrections may be reviewed directly. Changes affecting authentication, user data, model schemas, upload behavior, routes, or licensing should include:
- A concise problem statement and proposed design.
- API and data compatibility implications.
- Security and privacy review.
- Tests or a clear verification plan.
- Migration and rollback notes where data may change.

## Review principles
- Describe current behavior accurately.
- Do not claim an endpoint exists because a model exists.
- Treat auth, uploads, and secrets as security-sensitive.
- Preserve third-party attribution and license boundaries.
- Prefer regression tests for defect fixes.
- Keep production-readiness claims tied to actual evidence.

## Contributions
Follow CONTRIBUTING.md and use the GitHub issue and PR templates. Contributions may be declined when they expose secrets, include unlicensed material, or do not address material security or compatibility risks.

## Security
Use private reporting as described in SECURITY.md. Never include credentials, tokens, or user records in public issue threads.

## Updating governance
Propose a focused pull request and record material decisions in docs/decision-log.md.
