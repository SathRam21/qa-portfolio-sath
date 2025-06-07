# 🎯 QA Automation Portfolio – Sath Ramanan

Welcome! This portfolio showcases my professional experience and skillset as a **QA Automation Engineer** using Cypress, TypeScript, Bruno, Locust, and real-world test strategies.

These projects demonstrate four key competencies:

---

## 🧪 1. Frontend UI Automation (SauceDemo)

📁 [`cypress/e2e/ui-tests/`](./cypress/e2e/simple-ui-tests)

This test suite validates the complete user journey of [SauceDemo](https://www.saucedemo.com), a public-facing sample app for testing ecommerce flows.

### ✅ What It Covers:
- **Login workflows** (valid/invalid credential handling)
- **Add to cart** + badge count assertions
- **Remove from cart** and item-level verification
- **Checkout validation** with item total, tax, and grand total

### 🔧 Tools:
- Cypress + TypeScript
- Page Object Model-style structure
- Logging with `cy.log()` for traceability

> 💼 This suite reflects what I’ve built for production apps: UI test coverage for flows like patient registration, appointment handling, and state transitions.

---

## 🔍 2. UI ↔ Backend Data Validation (GraphQL API)

📁 [`cypress/e2e/data-validation-tests/`](./cypress/e2e/data-validation-tests)

At **Verto**, I developed Cypress tests that validated frontend data (e.g., appointments, conditions) against live SQL queries in Trino/PostgreSQL. This test suite mirrors that pattern using public GraphQL APIs.

### ✅ What It Covers:
- **Dynamic UIs generated from live API data**
- **GraphQL queries that validate frontend fields**
- **Nested data validation** (e.g., continent, languages, currency)
- **Business logic testing** via mock calculated fields (like price)

### 📄 Projects Included:
| Test | Description |
|------|-------------|
| `random-country-validate.cy.ts` | Selects 3 countries randomly and validates name, capital, continent, currency, and languages from the GraphQL API |
| `product-validate.cy.ts` | Builds a dashboard table with 5 products (countries) and validates all fields including a fake backend-calculated price |

> 🧠 These tests simulate **ETL QA**, **frontend vs DB syncing**, and **real integration validation workflows** — all without requiring a private app or database.

---

## ♿️ 3. Accessibility Auditing with Axe

📁 [`cypress/e2e/accessibility-tests/`](./cypress/e2e/accessibility-tests)

This test suite integrates `cypress-axe` to check accessibility compliance (WCAG) on public web pages — with structured logs and spreadsheet exports for full audits.

### ✅ What It Covers:
- **Critical, serious, and moderate accessibility violations**
- **Console output of violation impact, selectors, and fix links**
- **Excel report generation (`a11y-report.xlsx`) with one tab per page**
- **Custom Cypress commands for logging and reporting**

### 📄 Projects Included:
| Test File | Description |
|-----------|-------------|
| `simple-accessibility-test.cy.ts` | Runs Axe on a single page with custom logs (impact, fix link, selectors) |
| `accessibility-test-with-violation-report.cy.ts` | Runs Axe on Login and Inventory pages and saves results to `.xlsx` file with separate tabs |

> 🛠 These tests reflect my real-world QA workflow for automated WCAG compliance scans, similar to processes I’ve used in staging and release environments.

---

## 🔌 4. API Testing with Bruno (ReqRes & Fake Store)

📁 [`api-tests/`](./api-tests)

This section showcases how I use [Bruno](https://www.usebruno.com/) to write API tests that are readable, shareable, and Git-friendly — including public login flows and product data validation.

### ✅ What It Covers:
- **Status code assertions**
- **Field validation (e.g., price, email, token)**
- **Request chaining using variables**
- **Error handling (e.g., login with missing password)**

### 📄 Projects Included:
| Suite | Tests |
|-------|-------|
| **ReqRes** | `GET /api/users/2`, `POST /api/login`, `POST /api/login (negative)` |
| **Fake Store API** | `GET /products/1`, `POST /carts` *(planned)* |

> 🔁 These test suites show API-only validation with no UI dependency — ideal for microservice QA, CI/CD pipelines, or sandbox testing.

---

## 🚦 5. Load Testing with Locust

📁 [`load-tests/`](./load-tests)

This section uses [Locust](https://locust.io) to simulate real-world traffic on the public [FakeStore API](https://fakestoreapi.com).

### ✅ What It Covers:
- Simulated browsing and product detail views
- Randomized task distribution
- Excel report generation on `Ctrl+C` stop

### 📄 Files Included:
| File | Purpose |
|------|---------|
| `fakestore_realistic_load.py` | Load test logic |
| `utils/exporter.py` | Excel export utility |

📊 Reports include charts, summary stats, response distributions, and raw logs — saved as `.xlsx` with timestamped names.

To run it:
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
locust -f load-tests/fakestore_realistic_load.py --host=https://fakestoreapi.com


## 🧰 How to Run Any Cypress Test

```bash
npm install
npx cypress open
```
