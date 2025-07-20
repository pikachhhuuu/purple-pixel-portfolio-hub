import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = new Date();
  
  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Sample event dates
  const eventDates = [5, 12, 18, 25, 28];
  
  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };
  
  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = today.getDate() === day && 
                     today.getMonth() === currentMonth && 
                     today.getFullYear() === currentYear;
      const hasEvent = eventDates.includes(day);
      
      days.push(
        <div
          key={day}
          className={cn(
            "p-2 text-center text-sm cursor-pointer rounded-lg transition-all duration-200",
            "hover:bg-muted hover:scale-105",
            isToday && "bg-primary text-primary-foreground font-bold shadow-purple",
            hasEvent && !isToday && "bg-accent text-accent-foreground border border-primary/30",
            !hasEvent && !isToday && "text-foreground hover:text-primary"
          )}
        >
          {day}
          {hasEvent && !isToday && (
            <div className="w-1 h-1 bg-primary rounded-full mx-auto mt-1"></div>
          )}
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">
          {months[currentMonth]} {currentYear}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-muted rounded-lg transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-muted rounded-lg transition-colors group"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="p-2 text-center text-xs font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {renderCalendarDays()}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Events</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Upcoming</span>
          </div>
        </div>
      </div>
    </div>
  );
};