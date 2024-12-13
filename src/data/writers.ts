export interface Writer {
  id: string;
  name: string;
  description: string;
  image: string;
  isFree: boolean;
}

export const writers: Writer[] = [
  {
    id: "1",
    name: "Seth Godin",
    description: "Marketing guru, bestselling author of 'Purple Cow'",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isFree: false,
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
    isFree: false,
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
    isFree: false,
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
    isFree: false,
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
  {
    id: "11",
    name: "Daniel Pink",
    description: "Bestselling author on business and behavior",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    isFree: false,
  },
  {
    id: "12",
    name: "Cal Newport",
    description: "Author of Deep Work, productivity expert",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    isFree: false,
  },
  // ... Adding more premium writers
  {
    id: "13",
    name: "Ryan Holiday",
    description: "Stoicism and marketing expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    isFree: false,
  },
  // ... Continue with more writers up to 100
  {
    id: "100",
    name: "David Allen",
    description: "Productivity expert, author of Getting Things Done",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    isFree: false,
  }
];
