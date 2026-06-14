import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Групповая терапия | Igor Smirnov Consulting",
  description: "Групповая терапия про поддержку, контакт, эмоциональную устойчивость и понимание себя рядом с другими."
};

export default function GroupTherapyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-24 text-white lg:px-8">
      <Link href="/" className="text-sm font-semibold text-cyan">← На главную</Link>
      <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Group Therapy</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">Группа как пространство поддержки</h1>
      <p className="mt-8 text-xl leading-9 text-white/70">
        Групповой процесс помогает лучше понимать себя в контакте с другими людьми, замечать привычные реакции и пробовать новые способы общения.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {["поддержка", "контакт", "устойчивость", "отношения", "границы", "живое общение"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-5 text-white/78">{item}</div>
        ))}
      </div>
      <a href="https://buy.stripe.com/4gMeVe5Qv4ei4szfGH9Ve06" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink">Присоединиться · 150 PLN</a>
    </main>
  );
}
