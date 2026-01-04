export default function CartSummary({
  items,
  mobile = false,
}: {
  items: any[];
  mobile?: boolean;
}) {
  const subtotal = items.reduce(
    (sum: number, i: any) => sum + i.price * i.quantity,
    0
  );

  return (
    <aside className={`space-y-4 ${mobile ? "" : "sticky top-24"}`}>
      <h2 className="text-lg font-semibold">Summary</h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp {subtotal.toLocaleString("id-ID")}</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Duties and Taxes</span>
          <span>—</span>
        </div>
      </div>

      <div className="border-t pt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>Rp {subtotal.toLocaleString("id-ID")}</span>
      </div>

      {/* DESKTOP BUTTONS */}
      {!mobile && (
        <>
          <button className="mt-4 w-full rounded-full bg-black py-4 text-white">
            Guest Checkout
          </button>
          <button className="w-full rounded-full bg-black py-4 text-white">
            Member Checkout
          </button>
        </>
      )}
    </aside>
  );
}
