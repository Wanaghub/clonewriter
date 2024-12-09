import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Writer {
  id: string;
  name: string;
  description: string;
  image: string;
}

const writers: Writer[] = [
  {
    id: "1",
    name: "Ernest Hemingway",
    description: "Known for concise, understated writing style",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Virginia Woolf",
    description: "Stream of consciousness narrative style",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "George Orwell",
    description: "Clear, direct political writing",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Jane Austen",
    description: "Witty, romantic social commentary",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Mark Twain",
    description: "Humorous, satirical storytelling",
    image: "/placeholder.svg",
  },
];

interface WriterSelectorProps {
  selectedWriter: string;
  onSelect: (writerId: string) => void;
}

const WriterSelector = ({ selectedWriter, onSelect }: WriterSelectorProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Select a Writer</h2>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {writers.map((writer) => (
            <Card
              key={writer.id}
              className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                selectedWriter === writer.id
                  ? "border-primary-600 shadow-md"
                  : "border-gray-200"
              }`}
              onClick={() => onSelect(writer.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary-100">
                  <img
                    src={writer.image}
                    alt={writer.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{writer.name}</h3>
                  <p className="text-sm text-gray-500">{writer.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default WriterSelector;