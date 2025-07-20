// src/components/common/Header/Header.tsx
import { type JSX } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { APP_CONFIG } from '@/lib/constants';

export function Header(): JSX.Element {
  return (
    <header 
      className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800"
      role="banner"
    >
      <div className="flex items-center gap-2">
        <img 
          src={APP_CONFIG.logo.src} 
          alt={APP_CONFIG.logo.alt}
          className="w-10 h-10" 
          width={APP_CONFIG.logo.width}
          height={APP_CONFIG.logo.height}
        />
        <div className="text-white font-semibold text-lg">
          {APP_CONFIG.name}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search 
            className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" 
            aria-hidden="true"
          />
          <Input
            type="text"
            placeholder='Search'
            className="pl-9 bg-gray-800 text-gray-400 border-none focus:ring-0 rounded-full min-w-[200px]"
            aria-label="Search in header"
          />
        </div>
        
        <Avatar className="w-8 h-8">
          <AvatarImage src="/avatar.jpg" alt="User avatar" />
          <AvatarFallback aria-label="User">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}