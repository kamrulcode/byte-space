import { testimonials } from "@/data/data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonial-container">
        <div className="testimonial-heading">
          <div>
            <span className="section-eyebrow">OUR COMMUNITY</span>

            <h2>
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <p>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                unoptimized
                className="testimonial-avatar"
              />

              <h3>{item.name}</h3>

              <span className="testimonial-role">{item.role}</span>

              <p className="testimonial-review">&quot;{item.review}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
