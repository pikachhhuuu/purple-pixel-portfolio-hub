import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  className?: string;
}

export const StatCard = ({ title, value, icon: Icon, className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-card border border-border rounded-xl p-6 transition-all duration-300",
      "hover:shadow-purple hover:border-primary/30 group",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
            {value}
          </p>
        </div>
        <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
};