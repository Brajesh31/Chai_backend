# Release Process

## Current release status
The repository has a development command only. It does not define a production start command, container image, hosting manifest, health endpoint, deployment target, or published release process.

## Preconditions for any real deployment
- Resolve known auth, account update, channel lookup, and model initialization defects.
- Add automated tests for controllers, middleware, models, and upload error paths.
- Add input validation, upload limits, rate limiting, and centralized error handling.
- Review token handling, cookies, CORS, and secrets.
- Add health/readiness and sanitized operational logging.
- Establish database backup/restore and media retention policy.
- Select a deployment platform and define a production process lifecycle.
- Document rollback steps and data migration compatibility.

## Release workflow once implemented
1. Open a focused change proposal.
2. Review source, dependencies, and license impacts.
3. Run lint, tests, integration tests, and security checks.
4. Review migration and rollback plans.
5. Update README, API docs, diagrams, and CHANGELOG.
6. Obtain maintainer approval.
7. Deploy using protected secrets and the documented platform procedure.
8. Verify routes, database connectivity, cookies, uploads, logs, and readiness.
9. Record the deployed revision and any limitations.

A green CI job or merged pull request is not an operational release or security certification.
