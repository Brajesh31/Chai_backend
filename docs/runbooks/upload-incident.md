# Runbook: Upload or Cloudinary Failure

## Symptoms
- Registration or profile image update returns an error.
- Temporary files accumulate in `public/temp`.
- Cloudinary upload fails or returns no URL.

## Diagnose
1. Confirm Cloudinary configuration is loaded.
2. Verify provider status and account quotas.
3. Check file size and actual content type.
4. Confirm temporary directory permissions.
5. Inspect sanitized application errors without printing local sensitive paths.

## Current implementation risks
Multer uses the original filename and has no explicit size or MIME validation. Cloudinary cleanup calls synchronous unlink in both success and failure branches. A failed upload can cause cleanup itself to throw if the file was already removed.

## Recover
Avoid retrying arbitrary user files until upload validation and cleanup behavior are hardened. Clean temporary files using a reviewed local procedure; do not delete unrelated files.

## Prevention
Use generated filenames, size ceilings, allowlisted content types verified by content, safe cleanup in a finally block, and tests for failed uploads and provider timeouts.
