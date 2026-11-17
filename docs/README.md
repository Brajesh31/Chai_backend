# 📚 Documentation Hub

This repository is a Node.js / Express 5 backend using MongoDB, Mongoose, JWT, bcrypt, Multer, and Cloudinary. The current mounted API is user-focused. Video and Subscription models exist, but video and subscription routes are not implemented in the tracked source.

## Core documentation

| Topic | Guide |
|---|---|
| Getting started | [Installation](installation.md), [Configuration](configuration.md), [Development](development.md) |
| System design | [Architecture](architecture.md), [Directory structure](directory-structure.md), [Diagrams](diagrams/README.md) |
| API | [API reference](api.md), [Error catalog](api-error-catalog.md), [Authentication](authentication.md) |
| Persistence | [Database](database.md), [Data dictionary](data-dictionary.md) |
| Security and operations | [Security](security.md), [Observability](observability.md), [Backup and recovery](backup-recovery.md) |
| Quality and scale | [Testing](testing.md), [Quality assurance](quality-assurance.md), [Performance](performance.md) |
| Delivery | [Deployment](deployment.md), [Release process](release-process.md), [Troubleshooting](troubleshooting.md), [FAQ](faq.md) |
| Status | [Known issues](known-issues.md), [Support matrix](support-matrix.md), [Decision log](decision-log.md) |
| Runbooks | [Operations runbooks](runbooks/README.md) |
| Templates | [Backend templates](templates/README.md) |

## Repository utilities
- [Project structure](directory-structure.md)
- [Repository validation script](../scripts/README.md)
- [Test strategy](testing.md)

## Important current limitations
- Refresh-token handling has a guard defect.
- Account update and channel profile controllers contain response/logic defects.
- The Video model references an undefined `Schema` identifier.
- Uploads have no configured type or size ceilings.
- The app has no original test/lint scripts, no production start command, no container definition, no health endpoint, and no deployment manifest.

Documentation records current behavior and proposed hardening. It does not mean the defects have been fixed or the service is production-ready.
