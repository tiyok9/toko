export default function CategorySkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="flex gap-6 overflow-x-auto px-4 sm:justify-center sm:overflow-visible">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex min-w-[72px] flex-col items-center gap-2">
          {/* Circle */}
          <div className="h-14 w-14 rounded-full bg-gray-200 animate-pulse" />

          {/* Text */}
          <div className="h-3 w-12 rounded bg-gray-200 animate-pulse" />
        </div>
      ))}
    </div>
  );
}
