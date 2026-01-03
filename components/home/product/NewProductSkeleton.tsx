export default function NewProductSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-hide px-1">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="min-w-[48%] sm:min-w-[200px]">
          <div className="h-[180px] sm:h-[200px] w-full rounded bg-gray-200 animate-pulse" />
          <div className="mt-2 space-y-1">
            <div className="h-3 w-3/4 rounded bg-gray-200 animate-pulse" />
            <div className="h-2 w-1/2 rounded bg-gray-200 animate-pulse" />
            <div className="h-3 w-1/3 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
