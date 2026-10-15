"use client";

import { categories } from "@/data/data";

interface CategoryFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilters({
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) {
  const visibleCategories = categories.slice(0, 18);

  return (
    <div className=" mt-5 flex flex-wrap items-center justify-center gap-4">
      {visibleCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`category-pill ${
            activeCategory === category ? "category-active" : ""
          }`}
        >
          {category}
        </button>
      ))}

      <button onClick={() => onCategoryChange("All")} className="category-more">
        + More
      </button>
    </div>
  );
}
