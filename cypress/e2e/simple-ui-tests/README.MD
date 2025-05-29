# 🛒 SauceDemo UI Automation Tests

This folder contains Cypress tests written to validate the core functionality of [SauceDemo](https://www.saucedemo.com), showcasing login, cart management, and checkout workflows.

Each test file demonstrates professional QA automation practices including data validation, DOM assertions, test logging, and end-to-end coverage.

---

## ✅ Test Files & Descriptions

| File Name                         | Description |
|----------------------------------|-------------|
| **`saucedemo-simple-login.cy.ts`** | Validates login functionality with both **valid and invalid credentials**. Includes error handling and post-login redirection verification. |
| **`saucedemo-cart-test.cy.ts`** | Demonstrates ability to **add multiple items**, **validate cart count**, **remove items**, and confirm correct item presence in the cart. |
| **`saucedemo-purchase-item.cy.ts`** | Covers full **checkout workflow** for single and multiple items. Validates **item subtotal**, **tax**, and **final total** at checkout. |

---

## 🧪 QA Skills Demonstrated

### ✅ End-to-End Workflow Coverage
- Tests simulate realistic user interactions from login to order completion.

### ✅ Assertion & Validation Logic
- Precise checks for pricing, tax, and total breakdowns
- Accurate cart item name and count validation

### ✅ Negative Testing
- Handles invalid login scenarios and ensures proper error messaging

### ✅ State Management
- Tests confirm application state (cart count, remaining items) after actions like add/remove

### ✅ Cypress Best Practices
- Uses `data-test` selectors for resilience
- `cy.log()` calls improve test traceability
- `beforeEach()` ensures isolated, repeatable tests

---

## 🚀 How to Run

From the project root:

```bash
npm install
npx cypress open
```