# 🔍 Cypress Data Validation: UI ↔ Backend (GraphQL)

This folder contains Cypress test projects that simulate real-world QA workflows where **data shown in the frontend is validated against a backend API**, similar to ETL or DB-vs-UI consistency checks.

These tests showcase dynamic, reusable, and data-driven testing strategies using **public APIs**, **JavaScript-generated UIs**, and **GraphQL queries**.

---

## ✅ Projects

### 1. 🌍 `random-country-validate.cy.ts`
> A dynamic test that reads country data from the frontend and validates it against live GraphQL API responses.

**What it does:**
- Loads a static HTML UI that displays **3 randomly selected countries**
- Cypress queries the backend GraphQL API for each country
- Validates:
  - Country name
  - Capital
  - Currency
  - Continent
  - Languages

📄 **Page**: `test-ui.html`  
🔍 **API**: https://countries.trevorblades.com/

---

### 2. 🛒 `product-validate.cy.ts`
> Simulates a **Product Dashboard** (countries as products) with multiple fields per row.

**What it does:**
- UI dynamically renders a table of 5 random countries as products
- Fields shown: name, continent, languages, and a **mock price**
- Cypress validates:
  - Name → matches backend
  - Continent → matches backend
  - Languages → match sorted list
  - Price → is calculated from code and matched (simulates backend-calculated fields)

📄 **Page**: `product-ui.html`  
🧠 **Price logic**: `$ = charCode(countryCode[0]) * 2`  
🔍 **API**: https://countries.trevorblades.com/

---

## 💡 Skills Demonstrated

| Skill Category         | Description |
|------------------------|-------------|
| ✅ End-to-End Data Validation | Verifies frontend values against backend APIs |
| 🔄 Dynamic Test Logic | Loops through visible data, builds GraphQL queries |
| 🧩 Nested Object Validation | Validates languages (array), continent (object) |
| 💬 Logging & Debugging | Cypress logs detail every validation step |
| ♻️ Reusable Patterns | Tests work with any random countries, not hardcoded |
| 🔧 Simulated Business Logic | Custom price calculation logic mimics real apps |

---

## 🚀 How to Run These Projects

### 1. Start the local HTML server
```bash
npm run serve:test-ui
```

### 2. Run Cypress
```bash
npm install
npx cypress open
```



