# 🎯 QA Automation Portfolio – Sath Ramanan

Welcome! This portfolio showcases my professional experience and skillset as a **QA Automation Engineer** using Cypress, TypeScript, and real-world test strategies.

These projects demonstrate two key competencies:

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
