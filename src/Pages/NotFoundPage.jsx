import { Link } from "react-router";
import PageIntro from "../components/common/PageIntro";

const NotFoundPage = () => {
  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="404"
        title="The page you’re looking for isn’t available"
        description="The route may have changed, or the page may not exist yet. You can head back to the homepage and continue browsing."
      />

      <section className="page-shell">
        <div className="soft-card p-8 sm:p-10">
          <Link to="/" className="primary-button">
            Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
