import PageIntro from "../components/common/PageIntro";

const TermsPage = () => {
  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="Terms"
        title="HomeNest terms overview"
        description="These demo terms outline how listings, user accounts, and property content are expected to be handled on the platform."
      />

      <section className="page-shell">
        <div className="soft-card space-y-5 p-8 sm:p-10">
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            Users are responsible for the accuracy of listing information,
            pricing, images, and ownership details submitted to HomeNest.
          </p>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            HomeNest may remove misleading or duplicate property content to
            protect buyer trust and maintain listing quality.
          </p>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            This page is intentionally lightweight for the demo and can later be
            replaced with your full legal copy.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
