export interface Course {
  id: number;
  title: string;
  category: string;
  image: string;
  rating: number;
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  instructor: string;
  level: string;
}

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24d?auto=format&fit=crop&w=800&q=85",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    instructor: "peruper studio",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=85",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    instructor: "superperf studio",
    level: "Beginner",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    instructor: "peruper studio",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Balancing Productivity and Focus",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    instructor: "peruper studio",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    instructor: "peruper studio",
    level: "Beginner",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    instructor: "peruper studio",
    level: "Beginner",
  },
];
