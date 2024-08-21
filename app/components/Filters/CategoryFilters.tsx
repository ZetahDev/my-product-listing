import React from 'react';
import { TTexts } from '../../utils/constants/textConstants';

interface CategoryFiltersProps {
  selectedCategory: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ selectedCategory, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-white mb-1 w-fit" htmlFor="category">
        {TTexts.filterByCategory}:
      </label>
      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={onChange}
        className="border rounded px-3 py-1 bg-slate-900 shadow-sm text-white w-fit"
      >
        <option value="">{TTexts.all}</option>
        <option value="Footwear">Footwear</option>
        <option value="Basketball">Basketball</option>
        <option value="Running">Running</option>
        <option value="Sports">Sports</option>
      </select>
    </div>
  );
};

export default CategoryFilters;
