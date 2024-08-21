import React from 'react';
import { TTexts } from '../../utils/constants/textConstants';

interface PriceFiltersProps {
  selectedPrice: string; // Asegúrate de que sea un string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PriceFilters: React.FC<PriceFiltersProps> = ({ selectedPrice, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-white mb-1 w-fit" htmlFor="price">
        {TTexts.filterByPrice}:
      </label>
      <select
        name="price"
        id="price"
        value={selectedPrice}
        onChange={onChange}
        className="border rounded px-3 py-1 bg-slate-900 shadow-sm text-white w-fit"
      >
        <option value="">Todos</option>
        <option value="50">Hasta $50</option>
        <option value="100">Hasta $100</option>
        <option value="150">Hasta $150</option>
      </select>
    </div>
  );
};

export default PriceFilters;
