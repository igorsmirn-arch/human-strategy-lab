import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Индивидуальная консультация | Igor Smirnov Consulting",
  description: "Индивидуальная работа с фокусом на отношения, тревогу, кризисы, выгорание, самоопределение и жизненные изменения во Вроцлаве и онлайн."
};

export default function IndividualConsultationPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-24 text-white lg:px-8">
      <Link href="/" className="text-sm font-semibold text-cyan">← На главную</Link>
      <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Individual Consultation</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">Индивидуальная консультация</h1>
      <p className="mt-8 text-xl leading-9 text-white/70">
        Пространство для спокойного разговора о том, что сейчас важно: отношения, тревога, выгорание, кризис, выбор, самоопределение или сложный жизненный переход.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {["отношения", "тревога и напряжение", "выгорание", "самоопределение", "кризисные периоды", "личная стратегия"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-5 text-white/78">{item}</div>
        ))}
      </div>
      <a href="https://buy.stripe.com/bJeaEYdiX126gbhcuv9Ve00" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink">Записаться · 200 PLN</a>
    </main>
  );
}
