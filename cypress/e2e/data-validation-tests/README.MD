# 🔍 Cypress Data Validation: UI ↔ Backend with Dynamic Country Data

This project simulates a **real-world QA workflow** where a frontend displays dynamic data, and the test suite validates it against backend data via API queries.

---

## ✅ What This Test Demonstrates

### 🧪 Real QA Capabilities

| Capability | Description |
|------------|-------------|
| ✅ End-to-End Data Validation | Pulls data from a UI and validates every field against a live backend (GraphQL API) |
| ✅ Dynamic Test Logic | No hardcoded values — countries are selected randomly and validated at runtime |
| ✅ Data Injection | UI is generated using frontend JS that calls a public API and renders results |
| ✅ Deep Assertions | Tests validate not just names, but capital, currency, continent, and languages |
| ✅ Detailed Logging | `cy.log()` gives clear, step-by-step feedback in the test runner |
| ✅ API + UI Sync | Simulates workflows like ETL testing, multi-source syncing, or DB-vs-frontend consistency |

---

## 📁 Files

| File | Purpose |
|------|---------|
| `test-ui.html` | Simulates a frontend that loads random countries dynamically |
| `random-country-validate.cy.ts` | Cypress test that validates UI-rendered data against backend GraphQL responses |

---

## 🚀 How to Run It

1. Serve the test UI locally:
   ```bash
   npm run serve:test-ui
