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
