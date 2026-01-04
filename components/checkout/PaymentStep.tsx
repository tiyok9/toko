"use client";

export default function PaymentStep({ onBack }: { onBack: () => void }) {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Payment</h1>

      <div className="space-y-4 max-w-xl">
        <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">
          <input type="radio" name="payment" defaultChecked />
          Credit / Debit Card
        </label>

        <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">
          <input type="radio" name="payment" />
          Virtual Account
        </label>

        <label className="flex items-center gap-3 border p-4 rounded cursor-pointer">
          <input type="radio" name="payment" />
          E-Wallet
        </label>

        <button type="button" onClick={onBack} className="text-sm underline">
          Back to Delivery
        </button>
      </div>
    </section>
  );
}
