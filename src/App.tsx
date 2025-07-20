import type { JSX } from 'react';
import { Header } from './components/common/Header';
import { HeroSection } from './components/features/search/HeroSection';
import { TagSection } from './components/features/tags/TagSection';
import { useSearchState } from './hooks/useSearchState';
import { MOCK_TAGS } from './lib/constants';

export default function App(): JSX.Element {
  const { handleSearch } = useSearchState();

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <HeroSection onSearch={handleSearch} />
      <TagSection title="Trending" tags={MOCK_TAGS} />
      <TagSection title="For you" tags={MOCK_TAGS} />
    </main>
  );
}