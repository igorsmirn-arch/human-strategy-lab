import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Clock, MapPin, MessageCircle, Users2 } from "lucide-react";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "«Не вывожу.» | Терапевтическая группа во Вроцлаве",
  description: "Очная терапевтическая группа во Вроцлаве про выгорание, синдром самозванца, профессиональный стресс, эмиграцию, работу и отношения.",
  alternates: {
    canonical: "/ne-vyvozhu"
  },
  openGraph: {
    title: "«Не вывожу.» | Терапевтическая группа во Вроцлаве",
    description: "Группа для тех, кто устал тащить все в одиночку: работа, эмиграция, бизнес, выгорание, тревога и поиск опоры.",
    url: "/ne-vyvozhu",
    images: ["/images/igor-smirnov.jpeg"]
  }
};

const forWhom = [
  "ищет работу и часто чувствует себя «недостаточно хорошим»",
  "работает в найме, но боится, что «скоро все поймут, что я некомпетентен»",
  "запускает свое дело или развивает бизнес в эмиграции",
  "устал от постоянного напряжения и профессионального стресса",
  "сталкивается с выгоранием и потерей смысла",
  "чувствует одиночество руководителя, предпринимателя или человека, который «должен справляться»",
  "замечает, что работа начала разрушать отношения, близость и контакт с собой"
];

const researchTopics = [
  "синдром самозванца и внутренний критик",
  "профессиональное выгорание и жизнь в режиме «надо»",
  "стресс, хроническое напряжение и страх ошибок",
  "отношения на работе и в бизнесе",
  "страх проявляться, быть видимым и ошибаться",
  "одиночество предпринимателя и руководителя",
  "баланс между работой, семьей и собой",
  "как просить поддержки и не тащить все в одиночку",
  "где брать ресурс, когда кажется, что его больше нет",
  "как сохранять отношения и контакт с близкими в периоды усталости"
];

const gives = [
  "честно говорить о своем состоянии",
  "замечать привычные способы строить отношения",
  "получать поддержку и обратную связь",
  "учиться выдерживать близость, контакт и живую реакцию других",
  "лучше понимать себя и свои реакции",
  "перестать оставаться с этим в одиночку"
];

const themeCards = [
  ["Синдром самозванца", "Почему даже сильные и компетентные люди чувствуют себя «недостаточно хорошими»."],
  ["Выгорание", "Когда отдых не помогает, а сил становится все меньше."],
  ["Работа как отношения", "Контакт с руководством, коллегами, клиентами, командой и самим собой."],
  ["Эмиграция", "Как переезд влияет на самооценку, идентичность и ощущение ценности."],
  ["Одиночество лидера", "Когда вокруг много людей, но по-настоящему опереться не на кого."],
  ["Тревога и FOMO", "Страх ошибок, упущенной выгоды, разоблачения и невозможность остановиться."],
  ["Баланс", "Почему выгорание отражается на близости, семье и контакте с детьми."],
  ["Границы", "Когда сложно сказать «нет» и перестать тащить все на себе."],
  ["Ресурс", "Как восстанавливать контакт с телом, потребностями и живым интересом."]
];

const format = [
  ["Старт", "18 сентября 2026"],
  ["Когда", "2 раза в месяц, пятницы 18:00-21:00"],
  ["Группа", "10-12 участников"],
  ["Стоимость", "150 zł за встречу"],
  ["Цикл", "1500 zł за 12 встреч вместо 1800 zł"],
  ["Для B2B", "Возможна faktura"],
  ["PsyConnect", "Часы участия засчитываются студентам PsyConnect"],
  ["Перед стартом", "короткое онлайн-собеседование"]
];

function Pill({ children }: { children: string }) {
  return <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/70">{children}</span>;
}

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{children}</p>;
}

export default function NeVyvozhuPage() {
  return (
    <main className="relative overflow-hidden px-5 pb-28 pt-28 lg:px-8">
      <div className="ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[840px]" />
      <div className="pointer-events-none absolute left-[18%] top-28 h-96 w-96 rounded-full bg-violet/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-[8%] top-52 h-80 w-80 rounded-full bg-cyan/16 blur-[120px]" />

      <section className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-display text-lg font-semibold text-white">Human Strategy Lab</Link>
          <Link href="/events" className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/14 hover:text-white">
            Все анонсы
          </Link>
        </div>

        <div className="grid min-h-[74vh] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-cyan">
              <Users2 size={16} />
              Терапевтическая группа во Вроцлаве
            </p>
            <h1 className="font-display text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-8xl">
              «Не вывожу.»
            </h1>
            <p className="mt-8 max-w-3xl text-2xl leading-10 text-white/74">
              Группа для тех, кто устал справляться в одиночку: работа, эмиграция, бизнес, выгорание, тревога и поиск опоры.
            </p>
            <div className="mt-9 flex flex-wrap gap-2">
              <Pill>выгорание</Pill>
              <Pill>синдром самозванца</Pill>
              <Pill>эмиграция</Pill>
              <Pill>работа и отношения</Pill>
            </div>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <a href="https://t.me/marsell_2021" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:-translate-y-1 hover:bg-cyan">
                Записаться у Игоря <MessageCircle size={18} />
              </a>
              <a href="https://t.me/eedst" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/14">
                Записаться у Кати <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass rounded-[2.5rem] p-8">
              <SectionLabel>О чем группа</SectionLabel>
              <p className="text-xl leading-9 text-white/76">
                В эмиграции нам часто приходится начинать заново. Обнуляется не только карьера и статус, но и связи, привычная устойчивость, ощущение «я знаю, кто я».
              </p>
              <p className="mt-6 leading-8 text-white/62">
                Даже имея опыт, образование и достижения, многие сталкиваются с тревогой, сравнением, страхом ошибок, истощением и одиночеством. И это влияет не только на работу, но и на близость, семью, отдых и контакт с собой.
              </p>
              <div className="mt-7 grid gap-3 text-white/70 sm:grid-cols-2">
                <span className="flex items-center gap-2"><MapPin size={17} className="text-cyan" /> Очно во Вроцлаве</span>
                <span className="flex items-center gap-2"><CalendarDays size={17} className="text-cyan" /> старт 18.09.2026</span>
                <span className="flex items-center gap-2"><Clock size={17} className="text-cyan" /> пятницы 18:00-21:00</span>
                <span className="flex items-center gap-2"><Users2 size={17} className="text-cyan" /> 10-12 участников</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-[2rem] p-7">
              <SectionLabel>Для кого</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight">Если работа стала местом постоянного напряжения</h2>
              <div className="mt-8 grid gap-3">
                {forWhom.map((item) => (
                  <p key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white/72">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass h-full rounded-[2rem] p-7">
              <SectionLabel>Что дает группа</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight">Это не лекция и не тренинг «успешного успеха»</h2>
              <p className="mt-6 leading-8 text-white/64">
                Терапевтическая группа — это пространство, где можно быть не только сильным и эффективным, но и живым. Особенно в эмиграции, где рядом часто меньше опоры и меньше «своих» людей.
              </p>
              <div className="mt-8 grid gap-3">
                {gives.map((item) => (
                  <p key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white/72">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-4xl">
            <SectionLabel>Что будем исследовать</SectionLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">Темы, которые обычно нельзя спокойно обсудить на работе</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchTopics.map((item, index) => (
              <Reveal key={item} delay={index * 0.025}>
                <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-lg font-semibold leading-7 text-white/80 transition hover:-translate-y-1 hover:border-cyan/30">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-24">
        <Reveal className="max-w-4xl">
          <SectionLabel>Темы группы</SectionLabel>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">Работа, эмиграция, отношения и внутренний критик</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {themeCards.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.03}>
              <article className="glass h-full rounded-[2rem] p-7 transition hover:-translate-y-1 hover:border-cyan/30">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-8 text-white/62">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30rem),rgba(255,255,255,0.03)] py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionLabel>Ведущие</SectionLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">Почему группу ведут два специалиста</h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              Два ведущих — это больше устойчивости, внимания и поддержки. Пока один работает с процессом человека, второй замечает атмосферу группы, напряжение и реакции, помогая удерживать безопасное пространство.
            </p>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={0.08}>
              <div className="glass rounded-[2rem] p-7">
                <h3 className="text-3xl font-semibold">Игорь Смирнов</h3>
                <p className="mt-4 leading-8 text-white/64">
                  Психолог, гештальт-терапевт, бизнес-консультант. Предприниматель с опытом более 17 лет, основатель и совладелец бизнесов в трех странах. Executive MBA по стратегическому менеджменту. Работает с выгоранием, синдромом самозванца, отношениями в бизнесе, эмиграцией, лидерством и профессиональным стрессом. Байкер и отец троих детей.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="glass rounded-[2rem] p-7">
                <h3 className="text-3xl font-semibold">Екатерина Ермак</h3>
                <p className="mt-4 leading-8 text-white/64">
                  Гештальт-терапевт и EMDR-терапевт. В прошлом работала в маркетинге, найме и руководила командой, сейчас ведет частную практику. Знает тему выгорания не только теоретически: через опыт ответственности, дедлайнов, эффективности и работы на себя.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-24">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <SectionLabel>Формат</SectionLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">Очные встречи во Вроцлаве</h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              Перед стартом проводится короткое онлайн-собеседование, чтобы познакомиться, уточнить запрос и понять, подходит ли формат группы.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass grid gap-3 rounded-[2rem] p-7 sm:grid-cols-2">
              {format.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{label}</p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-white">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-4">
        <Reveal>
          <div className="glass rounded-[2.5rem] p-8 text-center md:p-12">
            <SectionLabel>Запись</SectionLabel>
            <h2 className="mx-auto max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">Можно начать с короткого сообщения</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/66">
              Напишите Игорю или Кате в Telegram. Мы ответим на вопросы и договоримся о коротком онлайн-собеседовании перед стартом группы.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://t.me/marsell_2021" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:-translate-y-1 hover:bg-cyan">
                Игорь — @marsell_2021 <MessageCircle size={18} />
              </a>
              <a href="https://t.me/eedst" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/14">
                Катя — @eedst <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
