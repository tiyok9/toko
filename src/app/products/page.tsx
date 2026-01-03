import { getProducts } from "../../../components/lib/products";
import FilterBar from "../../../components/product/FilterBar";
import FilterDrawer from "../../../components/product/FilterDrawer";
import ProductFilters from "../../../components/product/ProductFilters";
import ProductGrid from "../../../components/product/ProductGrid";
import SortDropdown from "../../../components/product/SortDropdown";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: {
    page?: string;
    sort?: string;
    gender?: string;
    price?: string;
  };
}) {
  const page = Number(searchParams.page ?? 1);

  const filters = {
    sort: searchParams.sort ?? "none",
    gender: searchParams.gender,
    price: searchParams.price,
  };

  const products = await getProducts({
    page,
    ...filters,
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Men’s Training Shoes</h1>
        <SortDropdown />
      </div>

      {/* MOBILE FILTER BAR */}
      <div className="mb-4 lg:hidden">
        <FilterBar />
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        {/* DESKTOP FILTER */}
        <aside className="hidden lg:block">
          <ProductFilters />
        </aside>

        {/* PRODUCTS */}
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
