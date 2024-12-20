import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ContentFormProps {
  onGenerate: (topic: string) => void;
  selectedWriter: string;
  credits?: number;
}

const ContentForm = ({ onGenerate, selectedWriter, credits = 0 }: ContentFormProps) => {
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedWriter) {
      toast.error("Please select a writer first");
      return;
    }

    if (credits < 10) {
      toast.error("Not enough credits. Please upgrade your plan.");
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-with-gemini', {
        body: { prompt: topic, writerId: selectedWriter }
      });

      if (error) throw error;
      
      setGeneratedContent(data.generatedText);
      toast.success("Content generated successfully!");
      onGenerate(topic);
    } catch (error) {
      console.error('Error generating content:', error);
      toast.error("Failed to generate content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Generate Content</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your topic or keywords
          </label>
          <Textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="E.g., Write about the future of artificial intelligence..."
            className="min-h-[200px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700"
          disabled={!topic.trim() || isGenerating || credits < 10}
        >
          {isGenerating ? "Generating..." : `Generate Content (10/${credits} Credits)`}
        </Button>
      </form>
      
      {generatedContent && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Generated Content:</h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="whitespace-pre-wrap">{generatedContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentForm;