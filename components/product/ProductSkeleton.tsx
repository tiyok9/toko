export default function ProductSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="aspect-square bg-gray-200 animate-pulse" />
          <div className="h-3 w-3/4 bg-gray-200 animate-pulse" />
          <div className="h-3 w-1/2 bg-gray-200 animate-pulse" />
        </div>
      ))}
    </>
  );
}
