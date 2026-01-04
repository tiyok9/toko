export async function getCart() {
  return {
    items: [
      {
        id: "1",
        name: "Kobe Phantom 6 High Elite SE",
        category: "Firm-Ground Football Boot",
        color: "Phantom/Black",
        size: "EU 44.5",
        price: 4899000,
        quantity: 1,
        image: "https://picsum.photos/seed/cart1/300",
        stockWarning: "Just a few left. Order soon.",
      },
    ],
  };
}
