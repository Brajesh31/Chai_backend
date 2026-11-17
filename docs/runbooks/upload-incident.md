# Runbook: Upload or Cloudinary Failure

## Symptoms
- Registration or profile image update fails.
- Temporary files accumulate in `public/temp`.
- Cloudinary upload returns no URL.

## Diagnose
1. Confirm Cloudinary configuration is loaded.
2. Verify provider status and account quotas.
3. Check file size and actual content type.
4. Confirm temporary directory permissions.
5. Inspect sanitized errors without printing private file paths.

## Current implementation risks
Multer uses original filenames and has no explicit size or MIME validation. Cloudinary cleanup calls synchronous unlink in both success and failure branches. A failed upload can cause cleanup itself to throw if the file has already been removed.

## Recover
Avoid retrying arbitrary user files until validation and cleanup are hardened. Clean temporary files using a reviewed local procedure; do not delete unrelated files.

## Prevention
Use generated filenames, size ceilings, allowlisted content types verified by content, safe cleanup in a finally-safe path, and tests for failed uploads and provider timeouts.
