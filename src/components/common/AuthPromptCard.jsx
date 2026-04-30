import { Link } from "react-router";

const AuthPromptCard = ({ title, description }) => {
  return (
    <div className="soft-card p-8 sm:p-10">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link to="/login" className="primary-button">
          Login to continue
        </Link>
        <Link to="/signup" className="secondary-button">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default AuthPromptCard;
