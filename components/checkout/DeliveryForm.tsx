"use client";

export default function DeliveryForm({ onNext }: { onNext: () => void }) {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">Delivery</h1>

      <form className="space-y-4 max-w-xl">
        <input className="w-full border p-4 rounded" placeholder="Email *" />
        <input
          className="w-full border p-4 rounded"
          placeholder="First Name *"
        />
        <input
          className="w-full border p-4 rounded"
          placeholder="Last Name *"
        />
        <input className="w-full border p-4 rounded" placeholder="Address *" />
        <input className="w-full border p-4 rounded" placeholder="Phone *" />

        {/* DESKTOP CTA */}
        <button
          type="button"
          onClick={onNext}
          className="hidden lg:block w-full rounded-full bg-black py-4 text-white"
        >
          Continue to Payment
        </button>
      </form>
    </section>
  );
}
