import type { Option } from "~/app/_components/UI/InputSelect";

export function createOptions<T extends Record<string, unknown>>(
  data: T[],
  valueKey: keyof T,
  labelKey: keyof T,
): Option[] {
  return data.map((item) => ({
    value: String(item[valueKey]),
    label: String(item[labelKey]),
  }));
}
