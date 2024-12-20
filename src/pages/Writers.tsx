import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import WriterSelector from "@/components/WriterSelector";
import ContentForm from "@/components/ContentForm";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Writers = () => {
  const [selectedWriter, setSelectedWriter] = useState("");
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
  const navigate = useNavigate();

  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) return null;
      
      const { data: user } = await supabase
        .from('users')
        .select('subscription_tier, credits')
        .eq('id', session.user.id)
        .single();
      
      return user;
    }
  });

  const handleGenerate = async (topic: string) => {
    if (!selectedWriter) {
      toast.error("Please select a writer first");
      return;
    }
    
    try {
      // Update credits in database
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user?.id) {
        const { error } = await supabase
          .from('users')
          .update({ credits: (userData?.credits || 0) - 10 })
          .eq('id', session.user.id);

        if (error) throw error;
      }

      toast.success("Content generated successfully!");
      navigate('/dashboard');
    } catch (error) {
      toast.error("Failed to update credits");
      console.error("Credits update error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Generate Content</h1>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <WriterSelector
              selectedWriter={selectedWriter}
              onSelect={setSelectedWriter}
            />
            <ContentForm 
              onGenerate={handleGenerate} 
              selectedWriter={selectedWriter}
              credits={userData?.credits || 0}
            />
          </div>
        </div>
      </main>

      <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to Premium</DialogTitle>
            <DialogDescription>
              Unlock access to all premium writers and features.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-4 mt-4">
            <Button variant="outline" onClick={() => setShowUpgradeDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowUpgradeDialog(false)}>
              Upgrade Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Writers;