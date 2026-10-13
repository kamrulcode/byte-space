"use client";
import Banner from "@/sections/banner/Banner";

import { useMemo, useState } from "react";

import LogoStrip from "@/components/LogoStrip";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";
import CategoryFilters from "@/components/CategoryFilters";
import CategorySection from "@/components/LearningCategories";
import GrowthSection from "@/components/GrowthtSection";
import ManagementSection from "@/components/ManagementSection";
import { GraduationCap } from "lucide-react";
import CreatorBanner from "@/components/CreatorBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredCourses = useMemo(() => {
    if (activeCategory === "Featured" || activeCategory === "All") {
      return courses;
    }

    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);
  return (
    <div>
      <Banner />
      {/* Top logo banner */}
      <LogoStrip />

      {/* Hero section */}
      <section className="mainContainer px-5 pb-5 pt-9 text-center">
        <h1 className="text-5xl font-extrabold leading-[1.2] tracking-[-0.8px] ">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h1>

        <p className="mx-auto mt-2 max-w-4xl text-lg leading-[1.7] text-[#9296a1]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Category filters */}
        <CategoryFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>

      {/* Courses grid */}
      <section className="mainContainer  px-5 pb-10">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 py-12 text-center">
            <p className="text-sm text-gray-500">
              No courses found in this category yet.
            </p>

            <button
              className="btn btn-sm mt-3 rounded-full bg-[#d7ff19] text-black hover:bg-[#c5eb16]"
              onClick={() => setActiveCategory("Featured")}
            >
              View featured courses
            </button>
          </div>
        )}
      </section>
      <main className="bytespace-page">
        <CategorySection />
        <GrowthSection />
        <ManagementSection />

        <section id="courses" className="sr-only">
          <h2>Explore courses and creator tools</h2>
          <GraduationCap />
        </section>
      </main>
      <CreatorBanner />
      <Testimonials />
      <Footer />
    </div>
  );
}
