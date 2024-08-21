// components/Filters/StockFilters.tsx
import React from 'react';
import { TTexts } from '../../utils/constants/textConstants';

interface StockFiltersProps {
  inStock: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StockFilters: React.FC<StockFiltersProps> = ({ inStock, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-white mb-1 w-fit" htmlFor="inStock">
        {TTexts.inStock}:
      </label>
      <select
        name="inStock"
        id="inStock"
        value={inStock}
        onChange={onChange}
        className="border rounded px-3 py-1 bg-slate-900 shadow-sm text-white w-fit"
      >
        <option value="">Todos</option>
        <option value="true">Sí</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

export default StockFilters;
