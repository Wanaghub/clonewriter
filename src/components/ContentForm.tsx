import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ContentFormProps {
  onGenerate: (topic: string) => void;
}

const ContentForm = ({ onGenerate }: ContentFormProps) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(topic);
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
          disabled={!topic.trim()}
        >
          Generate Content (10 Credits)
        </Button>
      </form>
    </div>
  );
};

export default ContentForm;