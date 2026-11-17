# Runbook: Authentication or Token Incident

## Containment
1. Treat exposed access or refresh tokens as compromised.
2. Revoke or rotate affected signing secrets when appropriate.
3. Restrict affected accounts or sessions through a reviewed operational procedure.
4. Remove credentials from logs and stop further logging.
5. Preserve sanitized timestamps and relevant commit references.

## Investigation
- Determine whether a token, cookie, password, or secret was exposed.
- Review whether tokens were logged or returned in response bodies.
- Check auth failures and unexpected refresh activity without dumping tokens.
- Inspect recent changes to auth middleware and token rotation.
- Do not copy credentials into incident channels.

## Current code caveats
Refresh-token handling has a known guard defect. The auth middleware also assumes an Authorization header exists before calling `replace`. Do not rely on refresh flow as operational until fixed and tested.

## Recovery
Apply a reviewed code fix, rotate secrets if needed, invalidate sessions according to a documented procedure, and add regression tests. Notify affected parties if required by policy or law.
