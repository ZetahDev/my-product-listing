"use client";

import { useSort } from "../../hooks/useSort";
import { TTexts } from "../../utils/constants/textConstants";

const SortPanel: React.FC = () => {
  const { sort, updateSort } = useSort();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSort({ sortBy: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center justify-end">
      <label className="mr-2">{TTexts.sortBy}:</label>
      <select
        className="border p-2 rounded-md"
        value={sort.sortBy || ""}
        onChange={handleSortChange}
      >
        <option value="">{TTexts.none}</option>
        <option value="price-asc">{TTexts.priceAsc}</option>
        <option value="price-desc">{TTexts.priceDesc}</option>
        <option value="name-asc">{TTexts.nameAsc}</option>
        <option value="name-desc">{TTexts.nameDesc}</option>
      </select>
    </div>
  );
};

export default SortPanel;
