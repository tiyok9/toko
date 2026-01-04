"use client";

export default function MobileOrderBar({
  total,
  label,
  onClick,
}: {
  total: number;
  label: string;
  onClick: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white p-4 lg:hidden">
      <button
        onClick={onClick}
        className="w-full rounded-full bg-black py-4 text-white font-medium"
      >
        {label} · Rp {total.toLocaleString("id-ID")}
      </button>
    </div>
  );
}
