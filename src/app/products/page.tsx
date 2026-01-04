import { getProducts } from "../../../components/lib/products";
import FilterBar from "../../../components/product/FilterBar";
import FilterDrawer from "../../../components/product/FilterDrawer";
import ProductFilters from "../../../components/product/ProductFilters";
import ProductGrid from "../../../components/product/ProductGrid";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    sort?: string;
    gender?: string;
    price?: string;
    kids?: string;
    sport?: string;
    brand?: string;
    colour?: string;
  }>;
}) {
  // ✅ WAJIB DI-AWAIT (NEXT.JS BARU)
  const params = await searchParams;

  const page = Number(params.page ?? 1);

  const filters = {
    sort: params.sort ?? "none",
    gender: params.gender,
    price: params.price,
    kids: params.kids,
    sport: params.sport,
    brand: params.brand,
    colour: params.colour,
  };

  // SERVER FETCH (SEO FRIENDLY)
  const products = await getProducts({
    page,
    ...filters,
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      {/* ===== HEADER AWAL ===== */}
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Men’s Training Shoes</h1>
      </div>

      {/* ===== MOBILE FILTER BAR ===== */}
      <div className="mb-4 lg:hidden">
        <FilterBar />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        {/* DESKTOP FILTER */}
        <aside className="hidden lg:block">
          <ProductFilters />
        </aside>

        {/* PRODUCT GRID */}
        <ProductGrid
          initialProducts={products}
          initialPage={page}
          filters={filters}
        />
      </div>

      {/* MOBILE FILTER DRAWER */}
      <FilterDrawer />
    </main>
  );
}
