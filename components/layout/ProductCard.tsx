type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full rounded-lg object-cover"
      />

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-blue-600 font-bold">
          Rp {product.price.toLocaleString('id-ID')}
        </p>

        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  )
}
