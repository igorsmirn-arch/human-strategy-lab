import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Парная терапия во Вроцлаве | Igor Smirnov Consulting",
  description: "Парная терапия и работа с отношениями: конфликты, эмоциональная дистанция, доверие, коммуникация и повторяющиеся сценарии."
};

export default function CouplesTherapyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-24 text-white lg:px-8">
      <Link href="/" className="text-sm font-semibold text-cyan">← На главную</Link>
      <p className="mt-12 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">Couples Therapy</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">Вернуть близость и понимание</h1>
      <p className="mt-8 text-xl leading-9 text-white/70">
        Мы помогаем парам восстановить контакт, научиться слышать друг друга и выйти из повторяющихся конфликтов.
      </p>
      <p className="mt-6 leading-8 text-white/62">
        Парная работа проводится вместе с психотерапевткой Татьяной Козловской. Ко-терапия помогает создать более безопасное пространство для обоих партнеров.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {["конфликты", "эмоциональная дистанция", "коммуникация", "доверие", "кризисы", "повторяющиеся сценарии"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-5 text-white/78">{item}</div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href="https://buy.stripe.com/aFa28sdiXfX03ov3XZ9Ve05" className="rounded-full bg-white px-7 py-4 text-center font-semibold text-ink">Сессия · 250 PLN</a>
        <a href="https://tetianakozlovska.com/ru/services/semejnaya-psihoterapiya/" className="rounded-full border border-white/14 bg-white/8 px-7 py-4 text-center font-semibold text-white">Узнать подробнее</a>
      </div>
    </main>
  );
}
