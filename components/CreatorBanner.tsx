import { ArrowUpRight } from "lucide-react";

export default function CreatorBanner() {
  return (
    <section className="creator-banner">
      <div className="banner-grid" />

      {/* Decorative shapes */}
      <div className="banner-squiggle banner-squiggle-left">
        <svg viewBox="0 0 120 100" fill="none">
          <path
            d="M10 8 C90 8 100 20 28 32 S25 48 92 43 S100 65 38 75"
            stroke="currentColor"
            strokeWidth="17"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="banner-squiggle banner-squiggle-top">
        <svg viewBox="0 0 120 100" fill="none">
          <path
            d="M10 8 C90 8 100 20 28 32 S25 48 92 43 S100 65 38 75"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="banner-ring" />

      <div className="banner-triangle">
        <svg viewBox="0 0 100 100">
          <path d="M50 4 L96 94 L4 80 Z" fill="#D5FF16" />
          <path d="M50 4 L96 94 L57 88 Z" fill="#B8F000" />
        </svg>
      </div>

      <div className="banner-white-shape banner-white-left" />
      <div className="banner-white-shape banner-white-right" />

      <div className="banner-squiggle banner-squiggle-right">
        <svg viewBox="0 0 120 100" fill="none">
          <path
            d="M10 8 C90 8 100 20 28 32 S25 48 92 43 S100 65 38 75"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="creator-banner-content">
        <span className="banner-eyebrow">BUILT FOR CREATORS</span>

        <h1>
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h1>

        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <a href="#creator-footer" className="creator-button">
          Join as Creator
          <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
