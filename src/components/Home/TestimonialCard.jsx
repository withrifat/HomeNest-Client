import { HiStar } from "react-icons/hi2";

const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="soft-card p-6 sm:p-8">
      <div className="flex items-center gap-1 text-amber-400">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <HiStar key={`${testimonial.id}-star-${index}`} size={18} />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
        {testimonial.feedback}
      </p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {testimonial.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
