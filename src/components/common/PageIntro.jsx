const PageIntro = ({ eyebrow, title, description, children }) => {
  return (
    <section className="page-shell pt-28 pb-8 sm:pt-32">
      <div className="glass-panel overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
};

export default PageIntro;
