import { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Calendar, 
  Compass, 
  Settings,
  Camera
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'events', label: 'My Events', icon: Calendar },
  { id: 'discover', label: 'Discover', icon: Compass },
  { id: 'settings', label: 'Profile Settings', icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <TooltipProvider>
      <div className="fixed left-0 top-0 h-screen w-16 bg-sidebar border-r border-sidebar-border z-40">
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-3 border-b border-sidebar-border">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <li key={item.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => onTabChange(item.id)}
                          className={cn(
                            "w-full h-12 flex items-center justify-center rounded-lg transition-all duration-200",
                            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                            isActive && "bg-sidebar-accent text-primary shadow-purple"
                          )}
                        >
                          <Icon className={cn(
                            "w-5 h-5 transition-colors",
                            isActive ? "text-primary" : "text-muted-foreground"
                          )} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="py-2">
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </TooltipProvider>
  );
};