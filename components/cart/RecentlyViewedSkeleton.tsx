export default function RecentlyViewedSkeleton() {
  return (
    <section className="mt-20">
      <div className="mb-6 h-6 w-48 bg-gray-200 animate-pulse" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i}>
            <div className="aspect-square bg-gray-200 animate-pulse" />
            <div className="mt-2 h-4 bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}
