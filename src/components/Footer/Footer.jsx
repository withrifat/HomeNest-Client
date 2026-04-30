import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const socialLinks = [
  { id: "facebook", label: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { id: "x", label: "X", icon: FaXTwitter, href: "https://x.com" },
  { id: "instagram", label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
];

const footerLinks = [
  { label: "Terms", path: "/terms" },
  { label: "Privacy", path: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 py-10 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/60">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white dark:bg-sky-400 dark:text-slate-950">
                H
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  HomeNest
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  Real Estate Platform
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
              HomeNest helps buyers, renters, and owners discover properties
              with confidence through trusted listings, clean search
              experiences, and premium presentation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 dark:text-white">
              Useful Links
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 dark:text-white">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p className="flex items-center gap-3">
                <FiMapPin className="text-sky-500" />
                House 12, Road 8, Banani, Dhaka
              </p>
              <p className="flex items-center gap-3">
                <FiPhoneCall className="text-sky-500" />
                +880 1700-123456
              </p>
              <p className="flex items-center gap-3">
                <FiMail className="text-sky-500" />
                hello@homenest.com
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700 shadow-sm shadow-slate-200/30 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:shadow-black/20 dark:hover:border-sky-400 dark:hover:text-sky-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>© {new Date().getFullYear()} HomeNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
