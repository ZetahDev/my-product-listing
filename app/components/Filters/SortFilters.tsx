import React from 'react';
import { TTexts } from '../../utils/constants/textConstants';

interface SortFiltersProps {
  sortBy: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortFilters: React.FC<SortFiltersProps> = ({ sortBy, onChange }) => {
  return (
    <div className="flex flex-col w-fit">
      <label className="text-white mb-1 w-fit" htmlFor="sortBy">
        {TTexts.sortBy}:
      </label>
      <select
        name="sortBy"
        id="sortBy"
        value={sortBy}
        onChange={onChange}
        className="border rounded px-3 py-1 bg-slate-900 shadow-sm text-white w-fit"
      >
        <option value="price-asc">{TTexts.priceAsc}</option>
        <option value="price-desc">{TTexts.priceDesc}</option>
        <option value="name-asc">{TTexts.nameAsc}</option>
        <option value="name-desc">{TTexts.nameDesc}</option>
      </select>
    </div>
  );
};

export default SortFilters;
