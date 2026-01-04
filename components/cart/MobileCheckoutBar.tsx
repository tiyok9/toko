"use client";

export default function MobileCheckoutBar({ total }: { total: number }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t p-4 lg:hidden">
      <button className="w-full rounded-full bg-black py-4 text-white font-medium">
        Go to Checkout · Rp {total.toLocaleString("id-ID")}
      </button>
    </div>
  );
}
