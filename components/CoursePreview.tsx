import Image from "next/image";
import { BookOpen, Clock3, MessageCircle, Star, Users } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=33",
  "https://i.pravatar.cc/80?img=5",
  "https://i.pravatar.cc/80?img=11",
];

export default function CoursePreview() {
  return (
    <article className="course-preview">
      <div className="course-preview-image">
        <Image
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24d?auto=format&fit=crop&w=900&q=85"
          alt="Students learning digital design"
          fill
          unoptimized
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover"
        />

        <div className="course-image-stats">
          <span>
            <BookOpen size={12} /> 17 Lessons
          </span>
          <span>
            <Clock3 size={12} /> 2 hours 16 mins
          </span>
          <span>
            <MessageCircle size={12} /> 59 Comments
          </span>
        </div>
      </div>

      <div className="course-preview-body">
        <div className="flex items-center justify-between gap-3">
          <h3>Learn Figma from Basic</h3>

          <span className="flex shrink-0 items-center gap-1 text-sm text-gray-500">
            4.5
            <Star size={15} fill="#d0d2d7" strokeWidth={0} />
          </span>
        </div>

        <p className="course-instructor">by peruper studio</p>

        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="course-level">
            <Users size={14} />
            Beginner
          </span>

          <StudentAvatars />
        </div>

        <p className="course-price">
          $25 <span>/lifetime</span>
        </p>
      </div>
    </article>
  );
}

function StudentAvatars() {
  return (
    <div className="student-avatars">
      {avatars.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Student ${index + 1}`}
          width={32}
          height={32}
          unoptimized
          className="student-avatar"
        />
      ))}

      <span className="avatar-count">26+</span>
    </div>
  );
}
