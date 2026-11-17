# 📐 Backend Architecture Diagrams

All diagram sources are editable Mermaid files.

| Diagram | Coverage |
|---|---|
| [System architecture](system-architecture.mmd) | Express, middleware, MongoDB, Cloudinary |
| [Request lifecycle](request-lifecycle.mmd) | Request to router, controller, persistence, response |
| [Authentication flow](authentication-flow.mmd) | Current token design and defects |
| [Upload flow](upload-flow.mmd) | Multer temporary file and Cloudinary upload |
| [Data model](data-model.mmd) | User, Video, Subscription relations |
| [CI workflow](ci-workflow.mmd) | Intended automated quality checks |
| [Security trust boundaries](security-trust-boundaries.mmd) | Client, API, database, storage, logs, secrets |
| [Error handling](error-handling.mmd) | Current async/error path and missing central middleware |
| [Deployment readiness](deployment-readiness.mmd) | Required checks before public deployment |

These reflect current code or explicitly proposed controls. They do not imply production readiness.
