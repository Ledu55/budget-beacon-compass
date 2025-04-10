
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Goal,
  Home,
  LineChart,
  Receipt,
  Settings,
  Upload
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

function SidebarItem({ icon: Icon, label, href, active }: SidebarItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
        active && "bg-accent/50 text-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="hidden lg:flex flex-col border-r bg-sidebar h-screen w-64 fixed left-0 top-0">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent finance-gradient-bg">
            FinTrack
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-4 py-2">
          <SidebarItem
            icon={Home}
            label="Dashboard"
            href="/"
            active={pathname === '/'}
          />
          <SidebarItem
            icon={Goal}
            label="Goals"
            href="/goals"
            active={pathname === '/goals'}
          />
          <SidebarItem
            icon={Receipt}
            label="Transactions"
            href="/transactions"
            active={pathname === '/transactions'}
          />
          <SidebarItem
            icon={LineChart}
            label="Investments"
            href="/investments"
            active={pathname === '/investments'}
          />
          <SidebarItem
            icon={Settings}
            label="Settings"
            href="/settings"
            active={pathname === '/settings'}
          />
        </nav>
      </div>
    </div>
  );
}
