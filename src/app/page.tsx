import CategoryList from "../../components/home/category/CategoryList";
import FeaturedSection from "../../components/home/featured/FeaturedSection";
import NewProductSection from "../../components/home/product/NewProductSection";
import ContentSlider from "../../components/home/slider/ContentSlider";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <ContentSlider />
      <CategoryList />
      <FeaturedSection />
      <NewProductSection />
    </main>
  );
}
