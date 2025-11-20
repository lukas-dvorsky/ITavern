import type { Option } from "~/app/_components/InputSelect";

export function createOptions(
  data: any[],
  valueKey: string,
  labelKey: string,
): Option[] {
  return data.map((item) => ({
    value: String(item[valueKey]),
    label: String(item[labelKey]),
  }));
}
