"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type NavProps = {
  navItems: NavItem[];
  cta: string;
  languages: { code: string; label: string }[];
  activeLanguage: string;
  onLanguageChange: (language: string) => void;
};

export function Nav({ navItems, cta, languages, activeLanguage, onLanguageChange }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-sm font-black text-ink">HSL</span>
          <span className="font-display text-sm font-semibold tracking-wide text-white sm:text-base">Human Strategy Lab</span>
        </a>

        <div className="hidden items-center gap-4 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-medium text-white/68 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        {languages.length > 0 ? (
          <div className="hidden items-center rounded-full border border-white/10 bg-white/6 p-1 2xl:flex">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() => onLanguageChange(language.code)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  activeLanguage === language.code ? "bg-white text-ink" : "text-white/58 hover:text-white"
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        ) : null}

        <a
          href="#booking"
          className="hidden rounded-full border border-cyan/30 bg-cyan/10 px-5 py-2.5 text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-ink xl:inline-flex"
        >
          {cta}
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/8 text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-5 backdrop-blur-2xl xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-white/78 transition hover:bg-white/8 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {languages.length > 0 ? (
              <div className="my-2 grid grid-cols-4 gap-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => onLanguageChange(language.code)}
                    className={`rounded-2xl px-3 py-3 text-sm font-semibold ${
                      activeLanguage === language.code ? "bg-white text-ink" : "bg-white/8 text-white/70"
                    }`}
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            ) : null}
            <a
              href="#booking"
              className="mt-2 rounded-2xl bg-white px-4 py-3 text-center font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              {cta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
