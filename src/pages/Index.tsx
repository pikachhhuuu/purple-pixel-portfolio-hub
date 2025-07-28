import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { ProfileSettings } from '@/components/ProfileSettings';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'events':
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              My Events
            </h1>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="text-muted-foreground">Events management coming soon...</p>
            </div>
          </div>
        );
      case 'discover':
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Discover
            </h1>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="text-muted-foreground">Discover new opportunities coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return <ProfileSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <div className="ml-24 min-h-screen">
        <main className="p-8 max-w-7xl mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
