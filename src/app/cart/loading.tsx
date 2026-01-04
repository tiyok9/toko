import CartSkeleton from "../../../components/cart/CartSkeleton";
import RecentlyViewedSkeleton from "../../../components/cart/RecentlyViewedSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <CartSkeleton />
      <RecentlyViewedSkeleton />
    </main>
  );
}
