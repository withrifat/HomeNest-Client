const LoadingSpinner = ({ label = "Loading properties..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-slate-200/70 bg-white/85 px-6 py-12 text-center shadow-lg shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900/75 dark:shadow-black/20">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-100 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400" />
      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {label}
      </p>
    </div>
  );
};

export default LoadingSpinner;
