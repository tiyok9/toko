type Params = {
  page: number;
  sort?: string;
  gender?: string;
  price?: string;
};

export async function getProducts({ page }: Params) {
  const PAGE_SIZE = 12;

  return Array.from({ length: PAGE_SIZE }).map((_, i) => ({
    id: `${page}-${i}`,
    slug: `nike-training-${page}-${i}`,
    name: `Nike Training ${page}-${i}`,
    category: "Men's Workout Shoes",
    price: 1500000,
    image: `https://picsum.photos/seed/${page}-${i}/600/600`,
  }));
}

export async function getSuggestedProducts() {
  return Array.from({ length: 6 }).map((_, i) => ({
    id: `suggest-${i}`,
    slug: `nike-suggest-${i}`,
    name: `Nike Training ${i + 1}`,
    category: "Men's Workout Shoes",
    price: 1599000 + i * 100000,
    image: `https://picsum.photos/seed/suggest-${i}/600/600`,
  }));
}
