export default function CheckoutSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
      {/* FORM */}
      <div className="space-y-4 max-w-xl">
        <div className="h-6 w-32 bg-gray-200 animate-pulse" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 animate-pulse rounded" />
        ))}
      </div>

      {/* SUMMARY */}
      <div className="space-y-4 hidden lg:block">
        <div className="h-6 w-32 bg-gray-200 animate-pulse" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 animate-pulse" />
        ))}
        <div className="h-24 bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}
