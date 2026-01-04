import { getProductDetail } from "../../../../components/lib/productDetail";
import ProductGallery from "../../../../components/product-detail/ProductGallery";
import ProductInfo from "../../../../components/product-detail/ProductInfo";
import SuggestedProducts from "../../../../components/product-detail/SuggestedProducts";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductDetail(slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>

      <SuggestedProducts />
    </main>
  );
}
