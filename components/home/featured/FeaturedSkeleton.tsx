export default function FeaturedSkeleton() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-[260px] sm:h-[360px] rounded-xl bg-gray-200 animate-pulse"
        />
      ))}
    </div>
  );
}
