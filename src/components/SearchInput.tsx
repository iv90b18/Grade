import React, { KeyboardEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchInput({ value, onChange, onSearch }: SearchInputProps) {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
        <Search size={12} className="sm:w-3.5 sm:h-3.5" />
      </div>
      <input
        type="text"
        className="w-full px-6 sm:px-7 py-1.5 sm:py-2 bg-white border border-gray-200 rounded-lg text-right shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-[10px] sm:text-xs"
        placeholder="أدخل الرقم الأكاديمي أو الاسم الرباعي"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        dir="rtl"
      />
      <button
        onClick={onSearch}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[8px] sm:text-[10px] font-medium transition-colors"
      >
        بحث
      </button>
    </div>
  );
}