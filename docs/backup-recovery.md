# Backup and recovery guide

## Current state
The project uses MongoDB but does not define automated backup schedules, retention policy, disaster recovery objectives, or tested restoration procedures.

## Database backups
For a real deployment, use managed MongoDB backup facilities or a documented backup job with encryption, restricted access, and retention rules. Do not commit database dumps or upload them to public storage.

## Recovery planning
Document:
- Recovery point objective (RPO) and recovery time objective (RTO).
- Backup frequency and retention.
- Backup encryption and access roles.
- Restore procedure in an isolated environment.
- Validation checks after restoration.
- Owners and escalation contacts.

Do not invent RPO/RTO values. Choose them based on application and business requirements.

## Restore verification
Periodically restore to a non-production environment, verify application compatibility and indexes, run health checks, and record the test. A successful backup job without restore testing is insufficient evidence of recoverability.

## Data handling
Treat user account data and uploaded-media references as potentially sensitive. Align database backups, Cloudinary retention, and deletion workflows.
