import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "https://i.pravatar.cc/160?img=47",
    review:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "https://i.pravatar.cc/160?img=12",
    review:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "https://i.pravatar.cc/160?img=11",
    review:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

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
