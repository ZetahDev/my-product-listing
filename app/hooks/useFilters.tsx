import { useFilterContext } from "../contexts/FilterContext";

export const useFilters = () => {
  const { filters, setFilters } = useFilterContext();

  const updateFilters = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return { filters, updateFilters };
};
