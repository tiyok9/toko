export default function CartSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        {Array.from({ length: 1 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-28 w-28 bg-gray-200 animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-2/3 bg-gray-200 animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 animate-pulse" />
              <div className="h-4 w-1/3 bg-gray-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="h-6 w-32 bg-gray-200 animate-pulse" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 animate-pulse" />
        ))}
        <div className="h-12 bg-gray-300 animate-pulse rounded-full" />
      </div>
    </div>
  );
}
