import { useOutletContext } from "react-router";
import AuthPromptCard from "../components/common/AuthPromptCard";
import PageIntro from "../components/common/PageIntro";
import TestimonialCard from "../components/Home/TestimonialCard";
import { testimonials } from "../data/homeData";

const MyReviewsPage = () => {
  const { user } = useOutletContext();

  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="My Reviews"
        title="See how people are responding to your HomeNest presence"
        description="Owner reviews and buyer impressions help build trust, so this page previews how feedback can be presented in your future dashboard."
      />

      <section className="page-shell">
        {!user ? (
          <AuthPromptCard
            title="Login to see your review history"
            description="Reviews are tied to your owner account, so sign in first to keep your feedback private and easy to manage."
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default MyReviewsPage;
