import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WriterSelector from "@/components/WriterSelector";
import ContentForm from "@/components/ContentForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [selectedWriter, setSelectedWriter] = useState("");
  const [credits, setCredits] = useState(100);

  const handleGenerate = async (topic: string) => {
    if (!selectedWriter) {
      toast.error("Please select a writer first");
      return;
    }
    if (credits < 10) {
      toast.error("Not enough credits");
      return;
    }
    
    toast.success("Content generated successfully!");
    setCredits(prev => prev - 10);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-16 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Clone the Writing Style of
            <span className="text-primary-600"> Top Writers</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Generate unique content in the style of your favorite business writers using AI.
            Select a writer, provide your topic, and watch the magic happen.
          </p>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <div className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full">
              {credits} Credits Remaining
            </div>
            <Button variant="outline" onClick={() => toast.info("Coming soon!")}>
              Buy Credits
            </Button>
          </div>
        </div>

        <div className="container px-4 mx-auto mt-8">
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <div className="grid gap-8 md:grid-cols-2">
              <WriterSelector
                selectedWriter={selectedWriter}
                onSelect={setSelectedWriter}
              />
              <ContentForm onGenerate={handleGenerate} />
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;