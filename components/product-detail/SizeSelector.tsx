export default function SizeSelector({ sizes, selected, onSelect }: any) {
  return (
    <div className="mt-6">
      <div className="mb-2 flex justify-between text-sm">
        <span>Select Size</span>
        <button className="underline">Size Guide</button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {sizes.map((s: any) => (
          <button
            key={s.label}
            disabled={!s.available}
            onClick={() => onSelect(s.label)}
            className={`rounded border py-2 text-sm ${
              selected === s.label ? "border-black" : "border-gray-300"
            } ${!s.available && "opacity-40 cursor-not-allowed"}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
