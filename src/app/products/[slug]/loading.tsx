import SuggestedSkeleton from "../../../../components/product-detail/SuggestedSkeleton";
import ProductSkeleton from "../../../../components/product/ProductSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <ProductSkeleton />
      <SuggestedSkeleton />
    </main>
  );
}
