"use client";

import { CircleCheck, Star, ArrowUpRight } from "lucide-react";
import DashboardCards from "./DashboardCards";
import Image from "next/image";

export default function ManagementSection() {
  const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=47",
    "https://i.pravatar.cc/80?img=33",
    "https://i.pravatar.cc/80?img=5",
    "https://i.pravatar.cc/80?img=11",
  ];
  return (
    <section className="feature-section management-section">
      <div className="site-container management-container">
        <div className="management-visual">
          <DashboardCards />

          <div className="management-student">
            <Image
              src="/images/student-management.png"
              alt="Course creator managing online learning"
              fill
              sizes="(max-width: 768px) 80vw, 560px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="lime-squiggle squiggle-two">
            <svg viewBox="0 0 130 160" fill="none">
              <path
                d="M25 20 C100 0 110 15 35 50 S10 75 85 65 S105 90 35 112 S20 135 90 128"
                stroke="currentColor"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="happy-students-card">
            <span>Happy Students</span>
            <small>
              4.8/5 <Star size={11} fill="#b9ff13" strokeWidth={0} />
            </small>
            <div className="flex items-center">
              {avatars.slice(0, 4).map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Happy student ${index + 1}`}
                  width={32}
                  height={32}
                  unoptimized
                  className={`student-avatar ${index ? "-ml-2" : ""}`}
                />
              ))}
              <span className="avatar-count -ml-1">26+</span>
            </div>
          </div>
        </div>

        <div className="management-copy">
          <span className="eyebrow">FOR COURSE CREATORS</span>

          <h2>
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>

          <p>
            Bytespace supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>

          <ul className="benefits-list">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <CircleCheck size={20} fill="#1455ff" color="#1455ff" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a href="#courses" className="management-link">
            Explore creator tools
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
