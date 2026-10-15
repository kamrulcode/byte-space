import {
  BookOpen,
  Clock3,
  MessageCircle,
  Star,
  UsersRound,
} from "lucide-react";

import type { Course } from "@/data/data";

interface CourseCardProps {
  course: Course;
}

const avatars = [
  "photo-1535713875002-d1d0cf377fde",
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
  "photo-1534528741775-53994a69daeb",
];

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">
      {/* Course image */}
      <div className="course-image-wrap">
        <img src={course.image} alt={course.title} className="course-image" />

        <div className="image-stats">
          <span>
            <BookOpen size={12} />
            {course.lessons} Lessons
          </span>

          <span>
            <Clock3 size={12} />
            {course.duration}
          </span>

          <span>
            <MessageCircle size={12} />
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Course title and rating */}
      <div className="mt-2 flex items-center justify-between gap-1">
        <h2 className="min-w-0 truncate text-xl font-bold text-[#171923]">
          {course.title}
        </h2>

        <span className="flex shrink-0 items-center gap-0.5 text-lg text-gray-500">
          {course.rating}
          <Star size={18} fill="#c9cbd0" strokeWidth={0} />
        </span>
      </div>

      <p className="mt-0.5 text-xs text-[#3264ff]">by {course.instructor}</p>

      {/* Level and students */}
      <div className="mt-2 flex items-center justify-between gap-1">
        <span className="flex items-center gap-1 rounded-full bg-[#f3f4f6] px-2 py-1 text-xs text-gray-600">
          <UsersRound size={12} />
          {course.level}
        </span>

        <div className="flex items-center">
          {avatars.map((avatar, index) => (
            <img
              key={avatar}
              src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=32&h=32&q=70`}
              alt="Course student"
              className={`student-avatar ${index !== 0 ? "-ml-1.5" : ""}`}
            />
          ))}

          <span className="ml-.75 flex h-4.25 w-5.5 items-center justify-center rounded-full border border-white bg-[#d7ff19] text-xs font-bold text-[#242b0c] p-4 ">
            26+
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mt-2 flex items-baseline gap-0.5">
        <span className="text-xl font-extrabold text-[#1558ff]">
          ${course.price}
        </span>

        <span className="text-xs text-gray-400">/lifetime</span>
      </div>
    </article>
  );
}
