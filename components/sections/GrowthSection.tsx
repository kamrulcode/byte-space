import Image from "next/image";
import CoursePreview from "@/components/courses/CoursePreview";

export default function GrowthSection() {
  return (
    <section className="feature-section growth-section">
      <div className="site-container feature-container">
        <div className="feature-copy">
          <span className="eyebrow">YOUR NEXT CHAPTER</span>

          <h2>
            Your Path to Professional
            <br className="hidden xl:block" />
            Growth Starts Here!
          </h2>

          <p>
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="stats-row">
            <div>
              <strong>12K</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>70+</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>16</strong>
              <span>Creators</span>
            </div>
          </div>
        </div>

        <div className="growth-visual">
          <div className="growth-course">
            <CoursePreview />
          </div>

          <div className="growth-student">
            <Image
              src="/assets/hero-img.png"
              alt="Student learning with a laptop"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 560px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="lime-squiggle squiggle-one">
            <svg viewBox="0 0 130 160" fill="none">
              <path
                d="M25 20 C100 0 110 15 35 50 S10 75 85 65 S105 90 35 112 S20 135 90 128"
                stroke="currentColor"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="progress-card">
            <span>Learning Progress</span>
            <strong>55%</strong>
            <div className="progress-track">
              <div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
