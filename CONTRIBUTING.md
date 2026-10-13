# Contributing

Thanks for considering a contribution. This repository is an educational backend that is still being built. Please keep changes focused, describe observable behavior, and update the documentation when routes or configuration change.

## Before starting

1. Read the README and relevant pages under `docs/`.
2. Check existing issues and pull requests for duplicate work.
3. For a substantial change, open an issue or discussion first so its scope can be agreed.
4. Never include credentials, real user data, or uploaded media in a commit.

## Local setup

Use a supported Node.js LTS release, install dependencies with `npm install`, and create a private `.env` based on `.env.example`. Start MongoDB and configure Cloudinary only when working on features that upload media. See [docs/installation.md](docs/installation.md).

## Change workflow

- Create a focused branch from the current default branch.
- Keep unrelated formatting or generated files out of the change.
- Follow the existing JavaScript ES module conventions and Prettier configuration.
- Validate the affected behavior manually and describe the steps and results in the pull request. The repository currently defines no automated test, lint, or build scripts; do not claim those checks passed unless scripts are added and actually run.
- Update API, configuration, database, or deployment documentation where behavior changes.
- Review the final diff for accidental secrets, temporary uploads, and unrelated changes.

## Pull requests

Include a concise summary, the reason for the change, relevant issue references, configuration or migration effects, and validation performed. For API changes, list method, path, authentication requirements, request fields, and response/error behavior. For a defect fix, explain how a reviewer can reproduce the prior issue and verify the fix.

Keep each pull request reviewable and avoid committing local `.env` files, `node_modules`, logs, IDE state, database dumps, or media uploads. Be respectful in review and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License and authorship

By submitting a contribution, you confirm that you have the right to submit it and identify any third-party material. The repository currently has mixed provenance: its package metadata names Rishabh and says ISC, while the handbook documents a limited MIT grant for the new documentation contribution by Brajesh Kumar. Do not infer that the handbook license covers existing source code. Raise licensing questions before contributing material whose rights are unclear.
