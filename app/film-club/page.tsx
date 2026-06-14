import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cinematic Reflection Club | Igor Smirnov Consulting",
  description: "Киноклуб как пространство рефлексии о себе, отношениях, контакте, близости и изменениях."
};

export default function FilmClubPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-24 text-white lg:px-8">
      <Link href="/" className="text-sm font-semibold text-cyan">← На главную</Link>
      <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Cinematic Reflection Club</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">Кино как способ понять себя</h1>
      <p className="mt-8 text-xl leading-9 text-white/70">
        Киноклуб — это спокойное пространство для разговора о том, как мы строим отношения, переживаем близость, делаем выбор и встречаемся с переменами.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {["отношения", "выбор", "близость", "перемены", "контакт", "человеческий опыт"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-5 text-white/78">{item}</div>
        ))}
      </div>
      <Link href="/#booking" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink">Узнать о встречах</Link>
    </main>
  );
}
