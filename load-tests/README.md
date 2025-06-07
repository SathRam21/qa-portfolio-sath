# 🧪 Load Testing – FakeStore API

This folder contains a realistic load test built using [Locust](https://locust.io/) to simulate user behavior on the public [FakeStore API](https://fakestoreapi.com). It showcases performance profiling, custom result tracking, and automated Excel report generation.

---

## 📌 What It Tests

**`fakestore_realistic_load.py`** simulates:
- Users browsing product listings (`/products`)
- Random product detail views (`/products/{id}`)
- Dynamic user paths via `task` weighting

---

## 🧰 Custom Function: Excel Report Generator

A reusable utility function `export_results_to_excel()` (in `utils/exporter.py`) generates a `.xlsx` report when the test is stopped.

Each report includes:
- ✅ Summary: total requests, pass/fail count, avg/min/max response times
- 📊 Charts: HTTP status breakdown and response time trends
- 📄 Full raw request logs
- 📈 Percent under SLA thresholds (e.g., < 500ms)

---

## ▶️ How to Run

### 1. Setup (First Time Only)

```bash
# Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Run the Load Test

```bash
locust -f load-tests/fakestore_realistic_load.py --host=https://fakestoreapi.com
```
