🧪 QA Automation Portfolio – Sath Ramanan
Welcome! This repository showcases my QA automation experience using Cypress, TypeScript, and other modern tools. It includes real-world examples of UI testing, API testing, email validation, load testing, and accessibility auditing — all built using public demo apps and open APIs.

📦 Technologies Used
Cypress for end-to-end UI testing

TypeScript for type-safe scripting

Locust for load and performance testing

MailSlurp for public inbox testing

Axe-core for accessibility audits

GitHub Actions for CI

🛠 Installation & Setup
These steps are all you need to run any Cypress-based project in this repo.

1. Clone the Repository
git clone https://github.com/your-username/qa-portfolio-sath.git
cd qa-portfolio-sath

2. Install Dependencies
npm install

3. Run Cypress Tests
Interactive mode:

npx cypress open

Headless mode:

npx cypress run

📁 Project Structure
qa-portfolio-sath/
├── cypress/
│ ├── e2e/
│ │ ├── ui-tests/ # Cypress UI tests (e.g. SauceDemo)
│ │ ├── accessibility-tests/ # Cypress + Axe accessibility audits
│ │ ├── email-tests/ # Cypress email receipt & content tests
│ ├── fixtures/
│ ├── support/
├── api-tests/ # Postman/Bruno API test collections
├── load-tests/ # Locust load testing scenarios
├── .github/workflows/ # CI pipelines for Cypress tests
├── cypress.config.ts # Cypress config (shared across tests)
├── package.json
└── README.md

🔍 Featured Projects
Type	Folder	Tools Used
Cypress UI Tests	cypress/e2e/ui-tests/	Cypress, TypeScript
Accessibility	cypress/e2e/accessibility-tests/	Cypress + Axe
Email Testing	cypress/e2e/email-tests/	Cypress + MailSlurp
Load Testing	load-tests/	Locust
API Testing	api-tests/	Postman / Bruno

Each folder contains its own README.md to explain the test scenarios and how to run them.

👨‍💻 Author
Sath Ramanan
QA Automation Engineer
📫 sathurthiekan2@gmail.com
🔗 LinkedIn

💡 This repo is actively evolving as I add more QA projects to demonstrate my skills. Feel free to clone or fork it for reference.

