const alignmentClasses = {
  center: "mx-auto max-w-2xl text-center",
  left: "max-w-2xl text-left",
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  tone = "default",
}) => {
  const isInverse = tone === "inverse";

  return (
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className={alignmentClasses[align] ?? alignmentClasses.left}>
        <p
          className={`text-sm font-semibold uppercase tracking-[0.28em] ${
            isInverse ? "text-sky-300" : "text-sky-600 dark:text-sky-300"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
            isInverse ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-3 text-base leading-7 ${
            isInverse ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {description}
        </p>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
};

export default SectionHeading;
