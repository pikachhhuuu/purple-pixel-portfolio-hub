import { StatCard } from './StatCard';
import { Calendar } from './Calendar';
import { Eye, Calendar as CalendarIcon, IndianRupee } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your photography business.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Studio Owner Profile Views"
          value="1,200"
          icon={Eye}
        />
        <StatCard
          title="Ongoing Events"
          value="3"
          icon={CalendarIcon}
        />
        <StatCard
          title="Earnings"
          value="₹75,000"
          icon={IndianRupee}
        />
      </div>

      {/* Calendar Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Event Calendar</h2>
        <Calendar />
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-xl font-bold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New booking received', client: 'Wedding - Sharma Family', time: '2 hours ago' },
            { action: 'Portfolio updated', client: 'Added 15 new photos', time: '5 hours ago' },
            { action: 'Payment received', client: '₹25,000 from Kumar Wedding', time: '1 day ago' },
            { action: 'Event completed', client: 'Birthday Party - Gupta Family', time: '2 days ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
              <div className="space-y-1">
                <p className="font-medium text-foreground">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.client}</p>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};