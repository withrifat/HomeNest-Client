import PageIntro from "../components/common/PageIntro";

const PrivacyPage = () => {
  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="Privacy"
        title="HomeNest privacy summary"
        description="This demo privacy page shows where your full production policy can live while keeping the footer routes complete and functional."
      />

      <section className="page-shell">
        <div className="soft-card space-y-5 p-8 sm:p-10">
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            HomeNest only uses basic demo account data locally in the browser to
            preview authenticated UI states during development.
          </p>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            In a production version, this page should explain storage,
            encryption, third-party services, and how users can request data
            deletion or export.
          </p>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            For now, theme preferences and demo session data are stored in local
            storage only.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
