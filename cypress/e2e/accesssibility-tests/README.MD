# ♿️ Accessibility Testing Suite (Cypress + Axe)

This folder demonstrates how I integrate **accessibility testing** into Cypress workflows using the **axe-core engine**. These tests showcase:

- Critical/serious WCAG violation detection
- Structured console logging with selectors and links
- Multi-page audits with report generation
- Custom Cypress commands for reusable, clean syntax

---

## 🧪 Included Tests

### 1. `simple-accessibility-test.cy.ts`

🔍 **Purpose**: Quickly scan a single page and print violations with enhanced logging.

**What it does:**
- Visits [SauceDemo](https://www.saucedemo.com)
- Runs `cy.checkA11y()` from `cypress-axe`
- Uses a custom command `cy.logA11yViolations()` to:
  - Log violation ID
  - Log risk level (impact)
  - Log affected selectors
  - Link to the Deque University documentation

> ✅ Use this to triage or debug individual pages manually.

---

### 2. `accessibility-test-with-violation-report.cy.ts`

📊 **Purpose**: Perform a full accessibility audit across multiple pages and export results to Excel.

**What it does:**
- Runs Axe on the **Login Page**
- Logs in with valid credentials
- Runs Axe again on the **Inventory Page**
- Automatically creates/updates `a11y-report.xlsx` locally
  - One tab per page (`LoginPage`, `InventoryPage`)
  - Each tab includes:
    - Violation ID
    - Description
    - Impact level
    - Help URL
    - Affected CSS selectors

> 🧠 Ideal for structured audits or saving reports to share with dev/design teams.

---

## 🛠️ Custom Commands

To keep tests clean and expressive, I created two custom Cypress commands:

### `cy.logA11yViolations(violations)`
- Formats and prints each violation
- Logs:
  - ID, impact, description, help URL
  - Affected selectors
- Outputs directly in the Cypress terminal using `cy.task('log')`

### `cy.saveA11yViolationsToSheet(violations, pageName)`
- Sends violations and page name to a Node task
- Uses the `xlsx` package to write to `a11y-report.xlsx`
- Each page becomes its own **Excel tab**

> 🔁 These abstractions make accessibility testing repeatable, readable, and scalable.

---

## 🧰 Features Demonstrated

| Feature                     | Description |
|----------------------------|-------------|
| ✅ Axe-Core Integration     | Uses `cypress-axe` to detect WCAG violations |
| 🔎 Enhanced Logging         | Custom `cy.logA11yViolations()` shows severity, selectors, Deque links |
| 📊 Report Generation        | Custom `cy.saveA11yViolationsToSheet()` writes `.xlsx` reports with one tab per page |
| 🛠️ Custom Commands          | Abstracts complexity for clean and DRY test syntax |
| ♻️ Reusable Architecture    | Can be extended to any web app or SPA |
| 💡 Real-World QA Use Case   | Mirrors accessibility validation used in CI/CD and release pipelines |

---

## 🚀 How to Run

### 1. Install dependencies
```bash
npm install
```
### 2. Run Cypress
```bash
npx cypress open
```