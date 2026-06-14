import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellbeing at Work | Тренинги для команд",
  description: "Корпоративные wellbeing-тренинги: стресс, выгорание, коммуникация, эмоциональный интеллект и здоровая рабочая среда."
};

export default function WellbeingAtWorkPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-24 text-white lg:px-8">
      <Link href="/" className="text-sm font-semibold text-cyan">← На главную</Link>
      <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Wellbeing at Work</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">Тренинги для устойчивых команд</h1>
      <p className="mt-8 text-xl leading-9 text-white/70">
        Практичные программы для команд, которые хотят работать продуктивно без выгорания, токсичной коммуникации и хронического напряжения.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {["выгорание и стресс", "конфликты в команде", "эмоциональный интеллект", "коммуникация под давлением", "гибкость мышления", "устойчивая продуктивность"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-5 text-white/78">{item}</div>
        ))}
      </div>
      <a href="mailto:contact@igorsmirnovconsulting.com?subject=Training%20proposal%20request" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink">Запросить предложение</a>
    </main>
  );
}
