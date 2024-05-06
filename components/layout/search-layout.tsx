"use client";

import React, { useState } from 'react';
import StockSearch from '@/components/dataComponents/search-CompanyTicker';
import InputComponent from '@/components/dataComponents/input-SecurityName';

const SearchLayout: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const onSelectionChange = (key: React.Key) => {
    setInputValue(key as string); // Assuming the key can be cast to a string
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex-1 max-w-[20%]">
        <InputComponent value={inputValue} />
      </div>
      <div className="flex-1 max-w-[20%] ml-auto">
        <StockSearch onSelectionChange={onSelectionChange} />
      </div>
    </div>
  );
};

export default SearchLayout;
