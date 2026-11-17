# Decision Log

Record durable technical decisions here. Add new dated entries rather than silently rewriting previous decisions.

## 2026-11-17: Document current route coverage accurately
**Decision:** Document only the user routes currently mounted by src/app.js and src/routes/user.routes.js.

**Rationale:** Video and Subscription models exist, but no corresponding route/controller files were present in the inspected default-branch tree.

**Consequence:** Documentation labels these as model-level foundations, not implemented API features.

## 2026-11-17: Preserve existing code and licensing boundaries
**Decision:** Add documentation and repository infrastructure without changing the underlying controller, middleware, or model logic in this documentation pass.

**Rationale:** The source has material correctness and security defects, and a blind rewrite would require tests and careful compatibility work.

**Consequence:** Defects are documented and prioritized; no claim is made that application logic has been fixed.

## 2026-11-17: Treat auth tokens and uploads as sensitive
**Decision:** Public contribution materials must not include tokens, cookies, passwords, database URIs, or uploaded personal data.

**Rationale:** Existing controllers and middleware handle credentials and external media operations.

**Consequence:** Security docs, issue templates, and runbooks explicitly require sanitized examples.

## Adding a decision
Include date, context, decision, considered alternatives, consequences, and related pull requests or documentation. Never include credential values or private user data.
