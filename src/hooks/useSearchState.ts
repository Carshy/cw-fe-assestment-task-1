import { useState, useCallback } from 'react';

interface UseSearchStateReturn {
  searchValue: string;
  setSearchValue: (value: string) => void;
  handleSearch: (value: string) => void;
  clearSearch: () => void;
}

export function useSearchState(initialValue = ''): UseSearchStateReturn {
  const [searchValue, setSearchValue] = useState<string>(initialValue);

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
    // TODO: Implement actual search logic
    console.log('Searching for:', value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchValue('');
  }, []);

  return {
    searchValue,
    setSearchValue,
    handleSearch,
    clearSearch,
  };
}