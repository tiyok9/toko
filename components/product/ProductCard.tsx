import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
        <p className="text-xs text-gray-600">{product.category}</p>
        <p className="text-sm font-medium">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </div>
    </Link>
  );
}
