import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, CreditCard } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
      }
    };
    
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-full">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-xl font-semibold">Profile</h2>
              </div>
              <p className="text-gray-600 mb-4">Manage your account settings and preferences</p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/profile')}>
                View Profile
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-full">
                  <CreditCard className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-xl font-semibold">Subscription</h2>
              </div>
              <p className="text-gray-600 mb-4">View and manage your subscription plan</p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/pricing')}>
                Manage Plan
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-full">
                  <Settings className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-xl font-semibold">Settings</h2>
              </div>
              <p className="text-gray-600 mb-4">Configure your account settings</p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/settings')}>
                Open Settings
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;