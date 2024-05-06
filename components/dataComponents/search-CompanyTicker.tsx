import React, { useState, useEffect } from 'react';
import { Autocomplete, AutocompleteItem, MenuTriggerAction } from '@nextui-org/autocomplete';
import fetchData, { AutocompleteItemData } from './fetch/fetchTickerCompany'; // Import your fetchData function

type StockSearchProps = {
  onSelectionChange: (key: React.Key) => void;
};

const StockSearch: React.FC<StockSearchProps> = ({ onSelectionChange }) => {
  const [items, setItems] = useState<AutocompleteItemData[]>([]);
  const [inputValue, setInputValue] = useState(''); // Add this line

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchData('');
      setItems(data);
    };
    getItems();
  }, []);

  const onInputChange = async (value: string) => {
    setInputValue(value); // Add this line
    const data = await fetchData(value);
    setItems(data);
  };

  const onOpenChange = (isOpen: boolean, menuTrigger: MenuTriggerAction) => {
    // Implement your open change logic here if needed
  };

  const myFilter = (textValue: string, inputValue: string) => {
    if (inputValue.length === 0) {
      return true;
    }

    // Normalize both strings so we can slice safely
    // take into account the ignorePunctuation option as well...
    inputValue = inputValue.normalize("NFC").toLocaleUpperCase();

    return textValue.slice(0, inputValue.length) === inputValue;
  };

  return (
    <Autocomplete
      className="max-w-xs"
      inputValue={inputValue} // Update this line
      items={items}
      label="Search Stocks"
      labelPlacement="outside-left"
      placeholder="Security Search"
      variant="bordered"
      onInputChange={onInputChange}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
      defaultFilter={myFilter}
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </Autocomplete>
  );
};

export default StockSearch;