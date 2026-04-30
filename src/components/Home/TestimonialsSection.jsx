import { testimonials } from "../../data/homeData";
import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section className="page-shell py-20">
      <div className="rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-10 sm:py-14 dark:bg-slate-900/95">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people are saying about HomeNest"
          description="Real stories from buyers, owners, and investors who wanted a smoother way to find, compare, and present property online."
          tone="inverse"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
