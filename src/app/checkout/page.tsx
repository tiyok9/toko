"use client";

import { useState } from "react";
import MobileSummary from "../../../components/checkout/MobileSummary";
import DeliveryForm from "../../../components/checkout/DeliveryForm";
import PaymentStep from "../../../components/checkout/PaymentStep";
import OrderSummary from "../../../components/checkout/OrderSummary";
import MobileOrderBar from "../../../components/checkout/MobileOrderBar";

export default function CheckoutPage() {
  const [step, setStep] = useState<"delivery" | "payment">("delivery");

  const order = {
    subtotal: 4899000,
    duties: 2617213.5,
    shipping: 0,
    total: 7516213.5,
    product: {
      name: "Kobe Phantom 6 High Elite SE",
      category: "Firm-Ground Football Boots",
      size: "EU 44.5",
      qty: 1,
      price: 4899000,
      image: "https://picsum.photos/seed/checkout/300",
    },
    delivery: "Mon, 12 Jan - Fri, 16 Jan",
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 pb-28 lg:pb-8">
      {/* MOBILE SUMMARY (TOP) */}
      <MobileSummary order={order} />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
        {/* LEFT */}
        <section>
          {step === "delivery" && (
            <DeliveryForm onNext={() => setStep("payment")} />
          )}

          {step === "payment" && (
            <PaymentStep onBack={() => setStep("delivery")} />
          )}
        </section>

        {/* DESKTOP SUMMARY */}
        <div className="hidden lg:block">
          <OrderSummary order={order} />
        </div>
      </div>

      {/* MOBILE STICKY CTA */}
      <MobileOrderBar
        label={step === "delivery" ? "Continue to Payment" : "Pay Now"}
        total={order.total}
        onClick={() =>
          step === "delivery" ? setStep("payment") : alert("Payment submitted")
        }
      />
    </main>
  );
}
