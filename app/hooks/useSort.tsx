// app/hooks/useSort.tsx
import { useProductContext } from "../contexts/ProductContext";

export const useSort = () => {
  const { sort, setSort } = useProductContext();

  const updateSort = (newSort: any) => {
    setSort({ ...sort, ...newSort });
  };

  return { sort, updateSort };
};
