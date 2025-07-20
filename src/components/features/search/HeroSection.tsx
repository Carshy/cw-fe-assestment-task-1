import type { JSX } from 'react';
import { SearchInput } from '../search/SearchInput';
import { APP_CONFIG } from '@/lib/constants';
import type { HeroSectionProps } from '@/types/components';

export function HeroSection({ onSearch }: HeroSectionProps): JSX.Element {
  return (
    <section 
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
      aria-labelledby="hero-title"
    >
      <img 
        src={APP_CONFIG.hero.background} 
        alt="Hero background"
        className="w-full h-96 object-cover" 
      />
      
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 
          id="hero-title"
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          {APP_CONFIG.hero.title}
        </h1>
        
        <SearchInput
          initialValue=""
          onSearch={onSearch}
          placeholder={APP_CONFIG.search.placeholder}
        />
      </div>
    </section>
  );
}