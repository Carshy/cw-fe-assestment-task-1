import React, { type JSX } from 'react';
import { Badge } from '@/components/ui/badge';
import type { TagSectionProps } from '@/types/components';

export function TagSection({ title, tags }: TagSectionProps): JSX.Element {
  const handleTagClick = (tag: string) => {
    // TODO: Implement tag click logic (e.g., search for the tag)
    console.log('Tag clicked:', tag);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, tag: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTagClick(tag);
    }
  };

  return (
    <section 
      className="mt-8 px-6 max-w-5xl mx-auto"
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
    >
      <h2 
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
        className="text-white text-lg font-semibold mb-4"
      >
        {title}
      </h2>
      
      <div 
        className="flex flex-wrap gap-3"
        role="list"
        aria-label={`${title} tags`}
      >
        {tags.map((tag) => (
          <div
            key={tag}
            role="listitem"
            tabIndex={0}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
            onClick={() => handleTagClick(tag)}
            onKeyDown={(e) => handleKeyDown(e, tag)}
          >
            <Badge
              className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer transition-colors duration-200"
              aria-label={`Tag: ${tag}`}
            >
              {tag}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
}