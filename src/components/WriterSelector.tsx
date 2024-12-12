import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Writer {
  id: string;
  name: string;
  description: string;
  image: string;
  isFree: boolean;
}

const writers: Writer[] = [
  // Free Writers (Top 10)
  {
    id: "1",
    name: "Seth Godin",
    description: "Marketing guru, bestselling author",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isFree: true,
  },
  {
    id: "2",
    name: "Gary Vaynerchuk",
    description: "Digital marketing pioneer, entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    isFree: true,
  },
  {
    id: "3",
    name: "Simon Sinek",
    description: "Leadership expert, motivational speaker",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    isFree: true,
  },
  {
    id: "4",
    name: "Marie Forleo",
    description: "Business and life coach",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    isFree: true,
  },
  {
    id: "5",
    name: "Tim Ferriss",
    description: "Productivity expert, podcast host",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    isFree: true,
  },
  {
    id: "6",
    name: "Malcolm Gladwell",
    description: "Bestselling author, journalist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    isFree: true,
  },
  {
    id: "7",
    name: "Brené Brown",
    description: "Research professor, author on vulnerability",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    isFree: true,
  },
  {
    id: "8",
    name: "James Clear",
    description: "Author of Atomic Habits, productivity expert",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128",
    isFree: true,
  },
  {
    id: "9",
    name: "Neil Patel",
    description: "Digital marketing expert, entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isFree: true,
  },
  {
    id: "10",
    name: "Pat Flynn",
    description: "Passive income expert, podcast host",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    isFree: true,
  },
  // Premium Writers (Next 90+)
  {
    id: "11",
    name: "Daniel Pink",
    description: "Bestselling author on business and behavior",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    isFree: false,
  },
  // ... Add more premium writers here
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
                    {writer.isFree && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Free
                      </Badge>
                    )}
                  </div>
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