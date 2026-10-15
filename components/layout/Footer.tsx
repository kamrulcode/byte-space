"use client";

import { useState, type FormEvent } from "react";
import { AudioWaveform, CheckCircle2, Search } from "lucide-react";
import Image from "next/image";

const footerGroups = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    setSubmitted(true);
  }

  return (
    <footer id="creator-footer" className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-newsletter">
            <a href="/" className="footer-logo">
              <Image
                src="/assets/vector.png"
                alt="ByteSpace Logo"
                width={34}
                height={34}
              />

              <span>ByteSpace</span>
            </a>

            <p className="footer-description">
              Stay up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="Enter your email"
                aria-label="Your email address"
                required
              />

              <button type="submit">
                {submitted ? <CheckCircle2 size={17} /> : <Search size={17} />}
                {submitted ? "Joined" : "Search"}
              </button>
            </form>

            {submitted && (
              <p className="newsletter-success">
                Thanks! Connect a newsletter provider to complete your
                subscription.
              </p>
            )}

            <p className="footer-consent">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            {footerGroups.map((group, index) => (
              <div className="footer-link-group" key={index}>
                {group.map((label) => (
                  <a
                    href={
                      label === "Become a Creator"
                        ? "#creator-footer"
                        : "#courses"
                    }
                    key={label}
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <nav aria-label="Legal links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
