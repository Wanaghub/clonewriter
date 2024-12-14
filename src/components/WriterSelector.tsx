import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";
import { writers, Writer } from "@/data/writers";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface WriterSelectorProps {
  selectedWriter: string;
  onSelect: (writerId: string) => void;
}

const WriterSelector = ({ selectedWriter, onSelect }: WriterSelectorProps) => {
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user?.id) return null;
      
      const { data: user } = await supabase
        .from('users')
        .select('subscription_tier')
        .eq('id', session.user.id)
        .single();
      
      return user;
    }
  });

  const canAccessPremium = userData?.subscription_tier === 'premium';

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Select a Writer</h2>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {writers.map((writer) => {
            const isPremiumLocked = !writer.isFree && !canAccessPremium;

            return (
              <Card
                key={writer.id}
                className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                  selectedWriter === writer.id
                    ? "border-primary-600 shadow-md"
                    : "border-gray-200"
                } ${isPremiumLocked ? "opacity-75" : ""}`}
                onClick={() => {
                  if (!isPremiumLocked) {
                    onSelect(writer.id);
                  }
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={writer.image}
                      alt={writer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{writer.name}</h3>
                      {writer.isFree ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Free
                        </Badge>
                      ) : (
                        <Badge 
                          variant="secondary" 
                          className={`flex items-center gap-1 ${
                            isPremiumLocked 
                              ? "bg-gray-100 text-gray-600" 
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {isPremiumLocked && <Lock className="w-3 h-3" />}
                          Premium
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{writer.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default WriterSelector;