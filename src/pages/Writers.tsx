import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Writer {
  id: string;
  name: string;
  description: string;
  image: string;
  isFree: boolean;
}

const writers: Writer[] = [
  {
    id: "1",
    name: "Seth Godin",
    description: "Marketing guru and bestselling author known for 'Purple Cow' and 'This Is Marketing'. Pioneered permission marketing concepts.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isFree: true,
  },
  {
    id: "2",
    name: "Gary Vaynerchuk",
    description: "Digital marketing pioneer, CEO of VaynerMedia, and serial entrepreneur known for practical business advice.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    isFree: true,
  },
  {
    id: "3",
    name: "Simon Sinek",
    description: "Leadership expert and author of 'Start With Why', known for organizational behavior insights.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    isFree: true,
  },
  {
    id: "4",
    name: "Marie Forleo",
    description: "Business and life coach, creator of B-School, author of 'Everything is Figureoutable'.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    isFree: true,
  },
  {
    id: "5",
    name: "Tim Ferriss",
    description: "Author of 'The 4-Hour Work Week', podcast host, and angel investor focused on productivity.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    isFree: true,
  },
  {
    id: "6",
    name: "Malcolm Gladwell",
    description: "Bestselling author of 'Outliers' and 'The Tipping Point', known for connecting research to business insights.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    isFree: false,
  },
  // ... Add more writers here with similar structure
];

const Writers = () => {
  const [selectedWriter, setSelectedWriter] = useState<Writer | null>(null);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);

  const handleWriterClick = (writer: Writer) => {
    setSelectedWriter(writer);
    if (!writer.isFree) {
      setShowUpgradeDialog(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Top Business Writers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {writers.map((writer) => (
            <div
              key={writer.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleWriterClick(writer)}
            >
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={writer.image} alt={writer.name} />
                  <AvatarFallback>{writer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <h3 className="font-semibold text-lg">{writer.name}</h3>
                    {writer.isFree && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Free
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">{writer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={showUpgradeDialog} onOpenChange={setShowUpgradeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upgrade to Premium</DialogTitle>
            <DialogDescription>
              Unlock access to clone {selectedWriter?.name}'s writing style and many more premium writers.
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