"use client";

import { useEffect } from "react";

/**
 * Adds scroll-reveal motion without changing React-managed DOM attributes.
 * Using the Web Animations API avoids server/client className hydration mismatches.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

    const selector = [
      ".logo-strip",
      ".mainContainer",
      ".course-card",
      ".categories-section",
      ".feature-section",
      ".creator-banner",
      ".testimonials-section",
      ".site-footer",
      ".category-card",
      ".testimonial-card",
      ".growth-visual",
      ".management-copy",
    ].join(", ");

    const animated = new WeakSet<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (!entry.isIntersecting || animated.has(target)) return;

          animated.add(target);
          target.animate(
            [
              { opacity: 0, transform: "translate3d(0, 18px, 0)" },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            {
              duration: 650,
              delay: (Array.from(document.querySelectorAll<HTMLElement>(selector)).indexOf(target) % 6) * 65,
              easing: "cubic-bezier(0.2, 0.65, 0.3, 1)",
              fill: "both",
            }
          );
          observer.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    document.querySelectorAll<HTMLElement>(selector).forEach((target) => {
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
