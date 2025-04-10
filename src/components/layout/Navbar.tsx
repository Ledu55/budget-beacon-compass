
import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Navbar() {
  return (
    <header className="border-b sticky top-0 z-30 bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2 lg:hidden">
          {/* Logo for mobile */}
          <span className="text-xl font-bold bg-clip-text text-transparent finance-gradient-bg">
            FinTrack
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-xl bg-background pl-8 md:w-80"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button className="rounded-full" size="sm">
            Add Transaction
          </Button>
        </div>
      </div>
    </header>
  );
}
