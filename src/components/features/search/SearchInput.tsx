import React, { useState, useEffect, useCallback, type JSX } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { SearchProps } from '@/types/components';

export function SearchInput({ 
  onSearch, 
  initialValue = '', 
  placeholder = 'Type to search...' 
}: SearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>(initialValue);

  // Sync with external initialValue changes
  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchValue.trim()) {
        onSearch(searchValue.trim());
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchValue, onSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleSearchClick = useCallback(() => {
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
    }
  }, [searchValue, onSearch]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  }, [handleSearchClick]);

  return (
    <div 
      className="flex items-center bg-black px-4 py-2 rounded-full w-full max-w-xl mt-6 shadow-lg"
      role="search"
    >
      <Search 
        className="text-gray-400 mr-3 w-5 h-5" 
        aria-hidden="true"
      />
      
      <Input
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
        aria-label="Search input"
      />
      
      <Button 
        onClick={handleSearchClick}
        className="bg-blue-600 hover:bg-blue-700 text-white ml-4 px-6 cursor-pointer"
        disabled={!searchValue.trim()}
        aria-label="Search"
      >
        Search
      </Button>
    </div>
  );
}