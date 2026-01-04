import CartItem from "../../../components/cart/CartItem";
import CartSummary from "../../../components/cart/CartSummary";
import MobileCheckoutBar from "../../../components/cart/MobileCheckoutBar";
import RecentlyViewed from "../../../components/cart/RecentlyViewed";
import { getCart } from "../../../components/lib/cart";

export default async function BagPage() {
  const cart = await getCart();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 pb-24 lg:pb-0">
      <h1 className="mb-8 text-2xl font-semibold">Bag</h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
        {/* CART ITEMS */}
        <section className="space-y-6">
          {cart.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <p className="text-sm text-gray-600 border-t pt-4">
            Free returns for Nike Members.{" "}
            <span className="underline">Learn More</span>
          </p>

          {/* MOBILE SUMMARY */}
          <div className="lg:hidden">
            <CartSummary items={cart.items} mobile />
          </div>

          {/* FAVOURITES */}
          <div className="pt-8 border-t">
            <h2 className="font-semibold mb-2">Favourites</h2>
            <p className="text-sm">
              Want to view your favourites?{" "}
              <span className="underline">Join us</span> or{" "}
              <span className="underline">Sign in</span>
            </p>
          </div>
        </section>

        {/* DESKTOP SUMMARY */}
        <div className="hidden lg:block">
          <CartSummary items={cart.items} />
        </div>
      </div>

      {/* RECENTLY VIEWED */}
      <RecentlyViewed />
      <MobileCheckoutBar
        total={cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)}
      />
    </main>
  );
}
