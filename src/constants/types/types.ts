export type Column<T> = {
  key: string;
  title: string;
  subColumns?: Column<T>[];
  cellClassName?: string;
};
