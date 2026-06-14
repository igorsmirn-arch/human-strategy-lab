"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { events, type Lang } from "@/content/events";
import { Reveal } from "@/components/Motion";

const languages: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "be", label: "BE" },
  { code: "pl", label: "PL" }
];

const pageCopy = {
  ru: {
    badge: "Анонсы",
    title: "Киноклуб, группы и открытые встречи",
    intro: "Здесь можно публиковать ближайшие активности: фильмы, терапевтические группы, группы для предпринимателей, воркшопы и другие события.",
    register: "Записаться",
    admin: "Как обновлять",
    adminText: "Добавьте новое событие в файл content/events.ts, вставьте ссылку на Google Form в registrationUrl и при необходимости положите фото в public/images/events."
  },
  en: {
    badge: "Events",
    title: "Film club, groups, and open meetings",
    intro: "Use this page for upcoming activities: film discussions, therapy groups, entrepreneur groups, workshops, and other events.",
    register: "Register",
    admin: "How to update",
    adminText: "Add a new event in content/events.ts, paste a Google Form link into registrationUrl, and optionally place an image in public/images/events."
  },
  be: {
    badge: "Анонсы",
    title: "Кінаклуб, групы і адкрытыя сустрэчы",
    intro: "Тут можна публікаваць бліжэйшыя актыўнасці: фільмы, тэрапеўтычныя групы, групы для прадпрымальнікаў, воркшопы і іншыя падзеі.",
    register: "Запісацца",
    admin: "Як абнаўляць",
    adminText: "Дадайце новую падзею ў файл content/events.ts, устаўце спасылку на Google Form у registrationUrl і пры патрэбе пакладзіце фота ў public/images/events."
  },
  pl: {
    badge: "Wydarzenia",
    title: "Klub filmowy, grupy i spotkania otwarte",
    intro: "Tutaj można publikować najbliższe aktywności: filmy, grupy terapeutyczne, grupy dla przedsiębiorców, warsztaty i inne wydarzenia.",
    register: "Zapisz się",
    admin: "Jak aktualizować",
    adminText: "Dodaj nowe wydarzenie w pliku content/events.ts, wklej link do Google Form w registrationUrl i opcjonalnie dodaj zdjęcie do public/images/events."
  }
} as const;

export function EventBoard() {
  const [language, setLanguage] = useState<Lang>("ru");
  const t = pageCopy[language];

  return (
    <main className="relative overflow-hidden px-5 pb-28 pt-32 lg:px-8">
      <div className="ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
      <div className="pointer-events-none absolute right-10 top-28 h-96 w-96 rounded-full bg-cyan/20 blur-[140px]" />

      <section className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-display text-lg font-semibold text-white">Human Strategy Lab</Link>
          <div className="flex rounded-full border border-white/10 bg-white/6 p-1">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === item.code ? "bg-white text-ink" : "text-white/60 hover:text-white"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <Reveal className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.badge}</p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl">{t.title}</h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/66">{t.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.05}>
              <article className="glass h-full overflow-hidden rounded-[2rem] transition hover:-translate-y-1 hover:border-cyan/30">
                <div className="h-56 bg-[radial-gradient(circle_at_25%_20%,rgba(139,92,246,0.42),transparent_15rem),radial-gradient(circle_at_75%_85%,rgba(34,211,238,0.22),transparent_14rem),linear-gradient(135deg,#111827,#030712)]" />
                <div className="p-7">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span key={tag[language]} className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/64">
                        {tag[language]}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-semibold tracking-tight">{event.title[language]}</h2>
                  <p className="mt-5 text-lg leading-8 text-white/66">{event.description[language]}</p>
                  <p className="mt-5 leading-7 text-white/52">{event.details[language]}</p>
                  <div className="mt-7 grid gap-3 text-sm text-white/62 sm:grid-cols-2">
                    <span className="flex items-center gap-2"><CalendarDays size={17} className="text-cyan" /> {event.date}</span>
                    <span className="flex items-center gap-2"><MapPin size={17} className="text-cyan" /> {event.location}</span>
                  </div>
                  <a href={event.registrationUrl} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-ink transition hover:bg-cyan">
                    {t.register} <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-[2rem] border border-cyan/20 bg-cyan/10 p-6">
            <h2 className="text-2xl font-semibold text-white">{t.admin}</h2>
            <p className="mt-3 leading-8 text-white/66">{t.adminText}</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
