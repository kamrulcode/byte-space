"use client";

import {
  Wrench,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  CircleCheck,
  BookOpen,
  Clock3,
  MessageCircle,
  Star,
  Users,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

const categories = [
  { title: "Design", Icon: Wrench },
  { title: "Development", Icon: Code2 },
  { title: "IT & Software", Icon: Laptop },
  { title: "Business", Icon: Building2 },
  { title: "Marketing", Icon: Megaphone },
  { title: "Photography", Icon: Camera },
];

export default function CategorySection() {
  return (
    <section className="categories-section">
      <div className="site-container">
        <div className="section-heading">
          <span className="eyebrow">LEARN SOMETHING NEW</span>

          <h2>Explore Diverse Learning Paths at Bytespace</h2>

          <p>
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map(({ title, Icon }) => (
            <button key={title} className="category-card" type="button">
              <span className="category-icon">
                <Icon size={25} strokeWidth={2.5} />
              </span>

              <span>{title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
