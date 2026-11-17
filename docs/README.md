# 📚 Documentation Hub

This repository is an Express 5 / Node.js backend using MongoDB, Mongoose, JWT, bcrypt, Multer, and Cloudinary. The current mounted API is user-focused. Video and Subscription models exist, but video and subscription routes are not implemented in the tracked source.

## Core documentation

| Topic | Guide |
|---|---|
| Getting started | [Installation](installation.md), [Configuration](configuration.md), [Development](development.md) |
| System design | [Architecture](architecture.md), [Directory structure](directory-structure.md), [Diagrams](diagrams/README.md) |
| API | [API reference](api.md), [Error catalog](api-error-catalog.md), [Authentication](authentication.md) |
| Persistence | [Database](database.md), [Data dictionary](data-dictionary.md) |
| Security and operations | [Security](security.md), [Observability](observability.md), [Backup and recovery](backup-recovery.md) |
| Quality and scale | [Testing](testing.md), [Performance](performance.md) |
| Delivery | [Deployment](deployment.md), [Troubleshooting](troubleshooting.md), [FAQ](faq.md) |
| Runbooks | [Operations runbooks](runbooks/README.md) |
| Templates | [Backend templates](templates/README.md) |

## Important current limitations
- Refresh-token handling has a guard defect.
- Account update and channel profile controllers contain response/logic defects.
- The Video model references an undefined `Schema` identifier.
- Uploads have no configured type or size ceilings.
- No automated test or lint scripts are present in the original package metadata.
- There is no production start command, container definition, health endpoint, or deployment manifest.

Documentation records current behavior and proposed hardening. It does not mean the defects have been fixed or the service is production-ready.
