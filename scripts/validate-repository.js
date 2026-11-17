import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const required = [
  "README.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "SECURITY.md",
  "SUPPORT.md",
  "GOVERNANCE.md",
  "CHANGELOG.md",
  "docs/README.md",
  "docs/architecture.md",
  "docs/api.md",
  "docs/database.md",
  "docs/security.md",
  "docs/authentication.md",
  "docs/configuration.md",
  "docs/data-dictionary.md",
  "docs/api-error-catalog.md",
  "docs/observability.md",
  "docs/performance.md",
  "docs/backup-recovery.md",
  "docs/diagrams/README.md",
  "docs/diagrams/system-architecture.mmd",
  "docs/runbooks/README.md",
  "docs/runbooks/secret-exposure.md",
  "docs/templates/README.md",
  "docs/templates/endpoint-specification.md",
  "docs/known-issues.md",
  "docs/release-process.md",
  "docs/support-matrix.md",
  "docs/assets/system-architecture.svg",
  "scripts/README.md",
  ".github/pull_request_template.md",
  ".github/workflows/quality-checks.yml",
  ".github/dependabot.yml",
  ".github/ISSUE_TEMPLATE/bug_report.md",
  "GOVERNANCE.md",
  "ACKNOWLEDGMENTS.md",
  "src/index.js",
  "src/app.js"
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error("Missing required paths:", missing.join(", "));
  process.exit(1);
}

const markdownFiles = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith(".md")) markdownFiles.push(full);
  }
}
walk(path.join(root, "docs"));
markdownFiles.push(path.join(root, "README.md"));

const broken = [];
const linkPattern = /!?(?:\[[^\]]*\])\(([^)]+)\)/g;
for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const match of content.matchAll(linkPattern)) {
    const target = match[1].trim().split(/[\s#]/)[0].replace(/^<|>$/g, "");
    if (!target || /^(https?:|mailto:|#)/.test(target)) {
      continue;
    }
    const resolved = path.resolve(path.dirname(file), decodeURIComponent(target));
    if (!fs.existsSync(resolved)) {
      broken.push(`${path.relative(root, file)} -> ${target}`);
    }
  }
}
if (broken.length) {
  console.error(
    "Broken relative Markdown links:",
    broken.join("\n"),
  );
  process.exit(1);
}

console.log(
  `Repository validation passed: ${required.length} required paths and ${markdownFiles.length} Markdown files.`,
);
