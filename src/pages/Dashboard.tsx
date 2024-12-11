import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, CreditCard, CheckCircle2, AlertCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const { data: subscriptionData, isLoading, error } = useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) throw new Error('No user found');
      
      // First try to get the user data
      const { data, error: fetchError } = await supabase
        .from('users')
        .select('subscription_status, subscription_tier, credits, trial_end_date, subscription_end_date')
        .eq('id', session.user.id)
        .maybeSingle(); // Use maybeSingle() instead of single()

      // If no data exists, create a new user record
      if (!data && !fetchError) {
        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .insert([
            {
              id: session.user.id,
              email: session.user.email,
              subscription_status: 'trial',
              subscription_tier: 'free',
              credits: 0,
              trial_start_date: new Date(),
              trial_end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
              is_active: true
            }
          ])
          .select()
          .single();

        if (insertError) throw insertError;
        return newUser;
      }

      if (fetchError) throw fetchError;
      return data;
    },
    retry: 1
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
      }
    };
    
    checkUser();
  }, [navigate]);

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'trial':
        return 'text-blue-500';
      case 'expired':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (error) {
    toast.error("Failed to load subscription data");
    console.error("Subscription data error:", error);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-full">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-xl font-semibold">Profile & Settings</h2>
              </div>
              <p className="text-gray-600 mb-4">Manage your account settings, profile information, and preferences</p>
              <Button variant="outline" className="w-full" onClick={() => navigate('/profile')}>
                Manage Profile
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-full">
                  <CreditCard className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">Subscription</h2>
                  {subscriptionData?.subscription_status && (
                    <span className={`inline-flex items-center gap-1 text-sm ${getStatusColor(subscriptionData.subscription_status)}`}>
                      {subscriptionData.subscription_status === 'active' ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <AlertCircle className="w-4 h-4" />
                      )}
                      {subscriptionData.subscription_status.charAt(0).toUpperCase() + subscriptionData.subscription_status.slice(1)}
                    </span>
                  )}
                </div>
              </div>

              {isLoading ? (
                <p className="text-gray-600">Loading subscription details...</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plan</span>
                      <span className="font-medium">{subscriptionData?.subscription_tier || 'Free'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Credits Remaining</span>
                      <span className="font-medium">{subscriptionData?.credits || 0}</span>
                    </div>
                    {subscriptionData?.subscription_status === 'trial' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trial Ends</span>
                        <span className="font-medium">{formatDate(subscriptionData?.trial_end_date)}</span>
                      </div>
                    )}
                    {subscriptionData?.subscription_status === 'active' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Billing Date</span>
                        <span className="font-medium">{formatDate(subscriptionData?.subscription_end_date)}</span>
                      </div>
                    )}
                  </div>
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => {
                      navigate('/pricing');
                      toast.info("Choose a plan that suits your needs!");
                    }}
                  >
                    {subscriptionData?.subscription_status === 'active' ? 'Manage Plan' : 'Upgrade Plan'}
                  </Button>
                </>
              )}
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;