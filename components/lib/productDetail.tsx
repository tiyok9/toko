export async function getProductDetail(slug: string) {
  return {
    slug,
    name: "Nike Metcon 10",
    category: "Men's Workout Shoes",
    price: 2379000,
    rating: "Highly Rated",
    images: [
      "https://picsum.photos/seed/metcon1/800",
      "https://picsum.photos/seed/metcon2/800",
      "https://picsum.photos/seed/metcon3/800",
      "https://picsum.photos/seed/metcon4/800",
      "https://picsum.photos/seed/metcon5/800",
    ],
    colors: [
      { name: "Black", image: "https://picsum.photos/seed/c1/200" },
      { name: "Orange", image: "https://picsum.photos/seed/c2/200" },
      { name: "Red", image: "https://picsum.photos/seed/c3/200" },
      { name: "Pink", image: "https://picsum.photos/seed/c4/200" },
    ],
    sizes: [
      { label: "EU 39", available: true },
      { label: "EU 40", available: false },
      { label: "EU 41", available: true },
      { label: "EU 42", available: true },
      { label: "EU 43", available: true },
      { label: "EU 44", available: true },
      { label: "EU 45", available: true },
      { label: "EU 46", available: true },
    ],
  };
}
