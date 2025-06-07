import random
import time
import signal
import sys
from locust import HttpUser, task, between, events
from utils.exporter import export_results_to_excel

results = []

# Handle Ctrl+C to ensure CSV is still exported
def handle_sigint(sig, frame):
    print("\n🛑 Caught Ctrl+C. Exporting results before exit...")
    export_results_to_excel(results)
    sys.exit(0)

signal.signal(signal.SIGINT, handle_sigint)

class FakeStoreUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def browse_and_view_product(self):
        start_time = time.time()

        res = self.client.get("/products", name="/products (list)")
        if res.status_code == 200:
            products = res.json()
            if products:
                random_product = random.choice(products)
                product_id = random_product["id"]
                product_title = random_product["title"]

                detail_res = self.client.get(f"/products/{product_id}", name="/products/:id")
                duration = time.time() - start_time

                results.append({
                    "product_id": product_id,
                    "product_title": product_title,
                    "response_time_ms": round(duration * 1000),
                    "status_code": detail_res.status_code
                })

# Trigger export if test is stopped via the UI
@events.quitting.add_listener
def handle_quit(env, **kwargs):
    export_results_to_excel(results)

