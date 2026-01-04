import Image from "next/image";

export default function ColorSelector({ colors }: any) {
  return (
    <div className="mt-6">
      <p className="mb-2 text-sm">Colour</p>
      <div className="flex gap-2">
        {colors.map((c: any) => (
          <button key={c.name} className="relative h-10 w-10 border">
            <Image src={c.image} alt={c.name} fill />
          </button>
        ))}
      </div>
    </div>
  );
}
