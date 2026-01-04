import Image from "next/image";

export default function OrderSummary({ order }: any) {
  return (
    <aside className="space-y-6">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <div className="space-y-2 text-sm">
        <Row label="Subtotal" value={order.subtotal} />
        <Row label="Duties & Taxes" value={order.duties} />
        <Row label="Delivery/Shipping" value="Free" />
        <p className="text-green-600 text-xs">You qualify for free shipping!</p>
      </div>

      <div className="border-t pt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>Rp {order.total.toLocaleString("id-ID")}</span>
      </div>

      <p className="text-sm">
        Arrives <b>{order.delivery}</b>
      </p>

      <div className="flex gap-4">
        <Image
          src={order.product.image}
          alt=""
          width={80}
          height={80}
          className="bg-gray-100"
        />
        <div className="text-sm">
          <p className="font-medium">{order.product.name}</p>
          <p>{order.product.category}</p>
          <p>Qty {order.product.qty}</p>
          <p>Size {order.product.size}</p>
          <p>Rp {order.product.price.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </aside>
  );
}

function Row({ label, value }: any) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>
        {typeof value === "number"
          ? `Rp ${value.toLocaleString("id-ID")}`
          : value}
      </span>
    </div>
  );
}
