"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users2 } from "lucide-react";
import { Reveal } from "@/components/Motion";
import type { Lang } from "@/content/events";

const languages: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "be", label: "BE" },
  { code: "pl", label: "PL" }
];

const copy = {
  ru: {
    badge: "Закрытая терапевтическая группа",
    title: "Группа для предпринимателей и руководителей",
    subtitle: "Пространство для людей, которые несут много ответственности и редко могут говорить честно о том, что происходит внутри.",
    cta: "Оставить заявку",
    secondary: "Написать вопрос",
    lead: "В бизнесе часто приходится быть сильным, быстрым и собранным. Но за этим могут оставаться одиночество, усталость, тревога, злость, сложные отношения с деньгами, властью и собственной ценностью.",
    text: "Эта группа создана для предпринимателей, руководителей и специалистов, которые хотят лучше понимать себя в роли лидера, выдерживать давление без потери контакта с собой и строить более зрелые отношения в бизнесе и жизни.",
    forTitle: "Группа подойдет, если вы:",
    forItems: ["живете в постоянной ответственности", "сталкиваетесь с выгоранием или усталостью", "сомневаетесь в себе, даже когда внешне все работает", "испытываете одиночество в роли руководителя", "проходите кризис, эмиграцию или смену масштаба", "хотите честного пространства без оценки и игры в статус"],
    formatTitle: "Формат",
    formatItems: ["небольшая закрытая группа", "регулярные встречи", "бережная конфиденциальная среда", "работа с реальными ситуациями участников", "ведущий — Игорь Смирнов, гештальт-терапевт и предприниматель с опытом с 2006 года"],
    note: "Перед включением в группу проводится короткое индивидуальное знакомство, чтобы понять запрос и безопасность формата."
  },
  en: {
    badge: "Closed therapy-informed group",
    title: "A group for entrepreneurs and leaders",
    subtitle: "A space for people carrying high responsibility who rarely have a place to speak honestly about what is happening inside.",
    cta: "Apply",
    secondary: "Ask a question",
    lead: "Business often requires strength, speed, and composure. Behind that can be loneliness, fatigue, anxiety, anger, and complicated relationships with money, power, and self-worth.",
    text: "This group is for entrepreneurs, leaders, and specialists who want to understand themselves more deeply in leadership, hold pressure without losing contact with themselves, and build more mature relationships in business and life.",
    forTitle: "This group may fit if you:",
    forItems: ["carry constant responsibility", "face burnout or fatigue", "doubt yourself even when things look successful", "feel lonely in a leadership role", "are moving through crisis, migration, or growth", "want an honest space without status games"],
    formatTitle: "Format",
    formatItems: ["small closed group", "regular meetings", "careful confidential setting", "work with real situations from participants", "facilitated by Igor Smirnov, Gestalt therapist and entrepreneur since 2006"],
    note: "Before joining, there is a short individual introduction to understand your request and whether the format is safe and appropriate."
  },
  be: {
    badge: "Закрытая тэрапеўтычная група",
    title: "Група для прадпрымальнікаў і кіраўнікоў",
    subtitle: "Прастора для людзей, якія нясуць шмат адказнасці і рэдка могуць сумленна гаварыць пра тое, што адбываецца ўнутры.",
    cta: "Пакінуць заяўку",
    secondary: "Задаць пытанне",
    lead: "У бізнесе часта трэба быць моцным, хуткім і сабраным. Але за гэтым могуць заставацца адзінота, стомленасць, трывога, злосць, складаныя адносіны з грашыма, уладай і ўласнай каштоўнасцю.",
    text: "Гэтая група створана для прадпрымальнікаў, кіраўнікоў і спецыялістаў, якія хочуць лепш разумець сябе ў ролі лідара, вытрымліваць ціск без страты кантакту з сабой і будаваць больш сталыя адносіны ў бізнесе і жыцці.",
    forTitle: "Група можа падысці, калі вы:",
    forItems: ["жывяце ў пастаяннай адказнасці", "сутыкаецеся з выгараннем або стомленасцю", "сумняваецеся ў сабе, нават калі звонку ўсё працуе", "адчуваеце адзіноту ў ролі кіраўніка", "праходзіце крызіс, эміграцыю або змену маштабу", "хочаце сумленнай прасторы без ацэнкі і гульні ў статус"],
    formatTitle: "Фармат",
    formatItems: ["невялікая закрытая група", "рэгулярныя сустрэчы", "беражлівае канфідэнцыйнае асяроддзе", "праца з рэальнымі сітуацыямі ўдзельнікаў", "вядучы — Ігар Смірноў, гештальт-тэрапеўт і прадпрымальнік з досведам з 2006 года"],
    note: "Перад уключэннем у групу праводзіцца кароткае індывідуальнае знаёмства, каб зразумець запыт і бяспеку фармату."
  },
  pl: {
    badge: "Zamknięta grupa terapeutyczna",
    title: "Grupa dla przedsiębiorców i liderów",
    subtitle: "Przestrzeń dla osób, które niosą dużo odpowiedzialności i rzadko mogą uczciwie mówić o tym, co dzieje się w środku.",
    cta: "Zgłoś się",
    secondary: "Zadaj pytanie",
    lead: "Biznes często wymaga siły, szybkości i opanowania. Za tym mogą kryć się samotność, zmęczenie, lęk, złość oraz trudne relacje z pieniędzmi, władzą i własną wartością.",
    text: "Ta grupa jest dla przedsiębiorców, liderów i specjalistów, którzy chcą lepiej rozumieć siebie w roli lidera, wytrzymywać presję bez utraty kontaktu ze sobą i budować dojrzalsze relacje w biznesie i życiu.",
    forTitle: "Grupa może być dla Ciebie, jeśli:",
    forItems: ["żyjesz w stałej odpowiedzialności", "mierzysz się z wypaleniem lub zmęczeniem", "wątpisz w siebie, nawet kiedy z zewnątrz wszystko działa", "czujesz samotność w roli lidera", "przechodzisz kryzys, emigrację albo zmianę skali", "chcesz uczciwej przestrzeni bez oceny i gry statusem"],
    formatTitle: "Format",
    formatItems: ["mała zamknięta grupa", "regularne spotkania", "uważne i poufne środowisko", "praca z realnymi sytuacjami uczestników", "prowadzący — Igor Smirnov, terapeuta Gestalt i przedsiębiorca od 2006 roku"],
    note: "Przed dołączeniem odbywa się krótkie spotkanie indywidualne, aby poznać Twój temat i sprawdzić bezpieczeństwo formatu."
  }
} as const;

export function BusinessGroupLanding() {
  const [language, setLanguage] = useState<Lang>("ru");
  const t = copy[language];

  return (
    <main className="relative overflow-hidden px-5 pb-28 pt-32 lg:px-8">
      <div className="ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />

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

        <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-cyan">
              <Users2 size={16} />
              {t.badge}
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl">{t.title}</h1>
            <p className="mt-7 max-w-3xl text-2xl leading-10 text-white/72">{t.subtitle}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="https://forms.gle/replace-with-your-business-group-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:-translate-y-1 hover:bg-cyan">
                {t.cta} <ArrowRight size={18} />
              </a>
              <a href="mailto:contact@igorsmirnovconsulting.com?subject=Business%20group%20question" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/14">
                {t.secondary} <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass rounded-[2.5rem] p-8">
              <p className="text-xl leading-9 text-white/76">{t.lead}</p>
              <p className="mt-6 leading-8 text-white/62">{t.text}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-[2rem] p-7">
              <h2 className="text-3xl font-semibold">{t.forTitle}</h2>
              <div className="mt-7 grid gap-3">
                {t.forItems.map((item) => (
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
              <h2 className="text-3xl font-semibold">{t.formatTitle}</h2>
              <div className="mt-7 grid gap-3">
                {t.formatItems.map((item) => (
                  <p key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white/72">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-6 rounded-[1.5rem] border border-cyan/20 bg-cyan/10 p-5 leading-8 text-white/68">{t.note}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
