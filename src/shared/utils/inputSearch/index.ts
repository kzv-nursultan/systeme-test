const searchByString = <T extends object>(search: string, object: T): boolean => {
  return Object.values(object).some((value) => {
    if (typeof value === "string") {
      return value.toLowerCase().includes(search.toLowerCase());
    } else if (typeof value === "object") {
      return searchByString(search, value);
    } else {
      return value?.toString().toLowerCase().includes(search.toLowerCase());
    }
  });
};

export const filterData = <T extends object>(
  data: T[],
  search: string
): T[] => {
  if (search === "") return data;
  return [...data].filter((item) => searchByString(search, item));
};
