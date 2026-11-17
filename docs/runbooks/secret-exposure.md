# Runbook: Secret Exposure

## Immediate actions
1. Identify the exposed secret type and affected environment.
2. Revoke or rotate the credential at its issuing provider.
3. Update dependent services with replacement credentials.
4. Review access logs for misuse.
5. Remove exposed values from active files and logs where possible.
6. Do not paste the secret into a report or commit.

## Git history
Removing a secret from the latest file does not remove it from commits, forks, caches, or prior clones. Assess history rewriting and provider purge procedures; rotation is the primary containment action.

## Follow-up
- Review the point of exposure.
- Check `.gitignore` and secret scanning.
- Add safe examples to `.env.example`.
- Record which credentials were rotated, not their values.
- Notify affected stakeholders when required.
