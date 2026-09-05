# Playwright Automation Framework

A production-style **Playwright + TypeScript** automation framework demonstrating scalable UI and API test automation.

## Highlights

- TypeScript + Playwright Test
- Page Object Model
- UI and API automation
- Parallel execution
- Retry strategy for CI
- Trace, screenshot and video on failure
- HTML reporting
- Environment-based configuration
- GitHub Actions CI/CD
- Clean separation of pages and tests

## Architecture

```text
tests/
   |
   +--> Page Objects
   |
   +--> Playwright fixtures
   |
   +--> Browser / API layer
   |
   +--> Reports & artifacts
```

## Project Structure

```text
pages/                 Page Object classes
tests/                 UI and API tests
.github/workflows/     CI pipeline
playwright.config.ts   Framework configuration
package.json           Dependencies and scripts
```

## Run Locally

```bash
npm install
npx playwright install
npm test
npm run report
```

## Example Application

The UI examples use SauceDemo and the API example uses JSONPlaceholder. These are public demo services. No proprietary application data is included.

## Portfolio Focus

This repository demonstrates framework design, maintainability, reusable page objects, API coverage, CI execution and failure diagnostics expected from a Senior QA Automation / SDET profile.
