# Known Issues and Technical Debt

The following items were confirmed by source inspection. They have not been fixed by documentation work.

| ID | Issue | Impact | Priority | Suggested next step |
|---|---|---|---|---|
| KI-01 | Refresh route rejects a supplied refresh token | Normal refresh flow fails | Critical | Correct guard and add rotation tests |
| KI-02 | Account update references undefined `json` | Endpoint response path fails | High | Correct response chain and test |
| KI-03 | Channel lookup has inverted result check | Existing channels can be treated as missing | High | Correct condition and integration test |
| KI-04 | Video model references undefined `Schema` | Model initialization can fail | High | Import Schema or use mongoose.Schema |
| KI-05 | Auth middleware assumes Authorization header exists | Cookie-less requests can throw | High | Safely parse optional header |
| KI-06 | Login logs email and returns raw tokens in JSON | Sensitive auth data exposure | High | Remove logs and align token transport strategy |
| KI-07 | Multer uses original filename and has no explicit limits | Upload abuse and filename collision risk | High | Generated names, validation, size caps |
| KI-08 | Cloudinary cleanup can throw on failed upload | Error path may be masked | Medium | Safe async cleanup with existence handling |
| KI-09 | Logout DB update is not awaited | Refresh token may persist after response | High | Await update and test revocation |
| KI-10 | No centralized error middleware | Inconsistent error output | Medium | Add safe error normalization |
| KI-11 | Entry point loads ./env while dev script preloads .env | Startup configuration mismatch | Medium | Standardize dotenv behavior |
| KI-12 | No tests or lint scripts in package.json | Regressions are not automated | High | Add test and CI setup |

Fix code issues with focused pull requests and regression coverage. Do not mark a row resolved until a code change and verification support that status.
