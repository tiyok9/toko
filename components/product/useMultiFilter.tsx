import { useRouter, useSearchParams } from "next/navigation";

export function useMultiFilter() {
  const router = useRouter();
  const params = useSearchParams();

  function getValues(key: string): string[] {
    const value = params.get(key);
    return value ? value.split(",") : [];
  }

  function toggleValue(key: string, value: string) {
    const values = new Set(getValues(key));

    if (values.has(value)) {
      values.delete(value);
    } else {
      values.add(value);
    }

    const p = new URLSearchParams(params.toString());

    if (values.size === 0) {
      p.delete(key);
    } else {
      p.set(key, Array.from(values).join(","));
    }

    p.delete("page"); // reset pagination
    router.push(`/products?${p.toString()}`);
  }

  return { getValues, toggleValue };
}
