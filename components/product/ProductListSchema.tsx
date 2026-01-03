export default function ProductListSchema({ products }: { products: any[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://yourdomain.com/products/${p.slug}`,
          })),
        }),
      }}
    />
  );
}
