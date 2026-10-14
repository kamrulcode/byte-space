"use client";

import { useEffect } from "react";

/** Adds subtle reveal animations without changing the page layout or component design. */
export default function ScrollAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".logo-strip, .mainContainer, .course-card, .categories-section, .feature-section, .creator-banner, .testimonials-section, .site-footer, .category-card, .testimonial-card, .growth-visual, .management-copy"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    targets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      target.style.setProperty("--motion-delay", `${Math.min(index % 6, 5) * 65}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
