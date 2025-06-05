# 🔌 API Test Suites (Bruno)

This folder contains ready-to-run **API test suites built with [Bruno](https://www.usebruno.com/)** — a fast, Git-friendly, and scriptable API client. These tests are designed to demonstrate real-world QA scenarios such as login validation, data extraction, and chaining across endpoints.

---

## 📦 Suites Included

### ✅ 1. ReqRes API
📁 `api-tests/reqres/`

Tests the [ReqRes API](https://reqres.in/) for basic authentication and user lookup.

| Test | Endpoint | Purpose |
|------|----------|---------|
| `Get User` | `GET /api/users/2` | Validates static user info |
| `Login (Valid)` | `POST /api/login` | Auth test using email + password |
| `Login (Missing Password)` | `POST /api/login` | Validates error handling for bad input |

> 🔐 Note: ReqRes now requires a free API key. Add the following header to your login request:  
> `x-api-key: reqres-free-v1`

---

### 🛒 2. Fake Store API
📁 `api-tests/fakestore/`

Tests the [Fake Store API](https://fakestoreapi.com/) for product and cart simulation.

| Test | Endpoint | Purpose |
|------|----------|---------|
| `Get Product` | `GET /products/1` | Validates product data, price, and title |
| _(Next)_ | `POST /carts` | *(Coming soon)* Simulates adding items to a cart |

---

## 🛠 Tools Used

- **Bruno** – Visual API client with Git-native JSON files
- **Bruno Scripting** – Captures tokens/IDs for chaining
- **Custom Assertions** – Field-level validation and failure reporting

---

## 🚀 How to Run

1. Open Bruno
2. Click **“Open Folder”**
3. Select `/api-tests/reqres/` or `/api-tests/fakestore/`
4. Run each request manually or chain using `vars.set()` + `{{variable}}`

---

## 📚 Tips

- Add `vars.set("key", value)` in the Script tab to reuse tokens or IDs
- Use Assert tab for field checks like `status = 200`, `email = isDefined`
- You can include headers like:
