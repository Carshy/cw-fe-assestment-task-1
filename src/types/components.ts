export interface SearchProps {
  onSearch: (searchValue: string) => void;
  initialValue?: string;
  placeholder?: string;
}

export interface TagSectionProps {
  title: string;
  tags: readonly string[];
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface HeroSectionProps {
  onSearch: (searchValue: string) => void;
}