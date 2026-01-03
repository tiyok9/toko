import { FiTrendingUp } from "react-icons/fi";

const TERMS = [
  "road racing",
  "sabrina 3",
  "p-6000",
  "air max",
  "nike tn",
  "air force 1",
  "air jordan 1 low",
  "vomero 5",
];

export default function PopularSearch({
  onSelect,
}: {
  onSelect: (q: string) => void;
}) {
  return (
    <div className="mt-10">
      <p className="mb-4 text-sm font-medium text-gray-600">
        Popular Search Terms
      </p>

      <div className="flex flex-wrap gap-3">
        {TERMS.map((term) => (
          <button
            key={term}
            onClick={() => onSelect(term)}
            className="flex items-center hover:cursor-pointer gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200"
          >
            <FiTrendingUp className="h-4 w-4 text-gray-500" />
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
