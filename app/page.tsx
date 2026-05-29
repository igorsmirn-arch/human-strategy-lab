"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileUp,
  Globe2,
  Images,
  ShieldCheck,
  Sparkles,
  Star,
  Users2,
  WalletCards
} from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { MotionDiv, Reveal } from "@/components/Motion";
import { Nav } from "@/components/Nav";

type Lang = "en" | "ru" | "be" | "pl";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "be", label: "BE" },
  { code: "pl", label: "PL" }
];

const stripeLinks = [
  "https://buy.stripe.com/bJeaEYdiX126gbhcuv9Ve00",
  "https://buy.stripe.com/eVq7sM1Af5im8IP1PR9Ve01",
  "https://buy.stripe.com/aFa28sdiXfX03ov3XZ9Ve05",
  "https://buy.stripe.com/4gMeVe5Qv4ei4szfGH9Ve06"
];

const copy = {
  en: {
    nav: ["About", "Services", "Booking", "Contact"],
    cta: "Book consultation",
    badge: "Strategic consulting, coaching and relationship support",
    hero: "Build clarity. Transform relationships.",
    sub: "Strategic consulting, coaching and personal development support for individuals, couples and organizations.",
    explore: "Explore services",
    founder: "Founder",
    role: "Consultant, certified Gestalt therapist · Wrocław & online",
    aboutKicker: "About",
    aboutTitle: "Human-centered strategic consulting.",
    aboutText: "Igor Smirnov helps individuals, couples and organizations improve communication, emotional clarity and strategic thinking. His background combines Gestalt therapy, transactional analysis, business psychology and Executive MBA training in strategic management.",
    chips: ["Online and in-person consultations", "Wrocław, Poland", "Multilingual support"],
    stats: ["1:1 consultations", "online & offline", "strategic development", "communication support"],
    expertiseKicker: "Expertise",
    expertiseTitle: "Psychology-informed strategy for real life and work.",
    expertiseText: "The lab connects personal development, relationship intelligence and business thinking. It is designed for people who want a clear conversation, not a clinical label.",
    focus: ["Business psychology", "Relationship dynamics", "Communication clarity", "Adaptation in emigration", "Personal development", "Decision-making support"],
    servicesKicker: "Services",
    servicesTitle: "Premium consulting formats.",
    servicesText: "Choose the format that matches the conversation you need now. Payments are handled through secure Stripe links.",
    pay: "Pay with Stripe",
    request: "Request pricing",
    services: [
      ["Individual consultation", "Focused support for personal clarity, decision-making, communication patterns and strategic next steps."],
      ["Group therapy / workshop", "A structured group format for communication, emotional literacy and personal development skills."],
      ["Couples consultation", "Strategic relationship support for couples who want clearer dialogue and practical agreements."],
      ["Couples consultation with co-therapist", "A two-specialist consultation format for deeper relational reflection and balanced facilitation."],
      ["Strategic training / workshop", "Educational and organizational sessions for teams, leaders and communities."]
    ],
    credentialsKicker: "Credentials",
    credentialsTitle: "Education and professional background.",
    credentials: ["Certified Gestalt therapist", "Transactional analysis in training", "Group therapy specialization", "Executive MBA in strategic management", "Co-founder of Godna therapy space", "Co-founder of PsyConnect community"],
    bookingKicker: "Booking",
    bookingTitle: "Schedule a consultation.",
    bookingText: "Online consultations are available with flexible scheduling, confirmation emails and Zoom or Google Meet sessions.",
    bookingItems: ["Online and in-person options", "Calendar confirmation", "Secure payment links", "Google Calendar sync via Calendly"],
    openCalendly: "Open Calendly",
    googleTitle: "Google Calendar integration",
    googleText: "The fastest production path is Calendly connected to Google Calendar: it checks availability, blocks reserved slots and sends confirmations. Direct Google Calendar booking is also possible, but requires Google OAuth, server-side API routes and secure token storage.",
    testimonialsKicker: "Testimonials",
    testimonialsTitle: "Client reflections gallery.",
    testimonialsText: "Curated short testimonials can be displayed here after consent. Add screenshots or text cards without exposing private information.",
    uploadReview: "Upload review images",
    diplomasKicker: "Diplomas",
    diplomasTitle: "Diplomas and certificates gallery.",
    diplomasText: "Upload diploma or certificate images for preview. For permanent public storage, add files to the project or connect a CMS/storage provider.",
    uploadDiplomas: "Upload diplomas",
    contactKicker: "Contact",
    contactTitle: "Start with a focused conversation.",
    verificationKicker: "Verification",
    verificationTitle: "Clear business information.",
    policies: ["Services are positioned as consulting, coaching, personal development and educational support.", "Refund policy: if a paid session cannot take place, contact us before the scheduled time to discuss rescheduling or a refund review.", "Cancellation policy: please cancel or reschedule at least 24 hours before the appointment whenever possible."],
    footerReady: "4-language site"
  },
  ru: {
    nav: ["Обо мне", "Услуги", "Запись", "Контакты"],
    cta: "Записаться",
    badge: "Стратегический консалтинг, коучинг и поддержка отношений",
    hero: "Прояснить стратегию. Изменить отношения.",
    sub: "Консалтинг, коучинг и поддержка личного развития для людей, пар и организаций.",
    explore: "Посмотреть услуги",
    founder: "Основатель",
    role: "Консультант, сертифицированный гештальт-терапевт · Вроцлав и онлайн",
    aboutKicker: "Обо мне",
    aboutTitle: "Стратегический консалтинг с человеческим центром.",
    aboutText: "Игорь Смирнов помогает людям, парам и организациям улучшать коммуникацию, эмоциональную ясность и стратегическое мышление. В основе работы: гештальт-подход, транзактный анализ, бизнес-психология и Executive MBA по стратегическому менеджменту.",
    chips: ["Онлайн и очные консультации", "Вроцлав, Польша", "Многоязычная поддержка"],
    stats: ["индивидуальные консультации", "онлайн и офлайн", "стратегическое развитие", "поддержка коммуникации"],
    expertiseKicker: "Экспертиза",
    expertiseTitle: "Психологически информированная стратегия для жизни и работы.",
    expertiseText: "Human Strategy Lab соединяет личное развитие, качество отношений и бизнес-мышление. Это пространство для ясного разговора, а не для клинических ярлыков.",
    focus: ["Бизнес-психология", "Динамика отношений", "Ясность коммуникации", "Адаптация в эмиграции", "Личное развитие", "Поддержка решений"],
    servicesKicker: "Услуги",
    servicesTitle: "Премиальные форматы консультаций.",
    servicesText: "Выберите формат под ваш запрос. Оплата проходит через безопасные Stripe-ссылки.",
    pay: "Оплатить Stripe",
    request: "Запросить цену",
    services: [
      ["Индивидуальная консультация", "Фокусная поддержка для ясности, решений, коммуникации и следующих шагов."],
      ["Групповая терапия / воркшоп", "Структурированный групповой формат для коммуникации, эмоциональной грамотности и развития."],
      ["Консультация пары", "Поддержка пары для более ясного диалога и практических договоренностей."],
      ["Консультация пары с ко-терапевтом", "Формат с двумя специалистами для более сбалансированной фасилитации."],
      ["Стратегический тренинг / воркшоп", "Образовательные и организационные сессии для команд, лидеров и сообществ."]
    ],
    credentialsKicker: "Образование",
    credentialsTitle: "Образование и профессиональный опыт.",
    credentials: ["Сертифицированный гештальт-терапевт", "Транзактный анализ в тренинге", "Специализация по групповой терапии", "Executive MBA: стратегический менеджмент", "Сооснователь пространства Godna", "Сооснователь сообщества PsyConnect"],
    bookingKicker: "Запись",
    bookingTitle: "Забронировать консультацию.",
    bookingText: "Доступны онлайн-консультации, гибкое расписание, подтверждения по email и встречи в Zoom или Google Meet.",
    bookingItems: ["Онлайн и очные форматы", "Подтверждение в календаре", "Безопасная оплата", "Синхронизация с Google Calendar через Calendly"],
    openCalendly: "Открыть Calendly",
    googleTitle: "Интеграция Google Calendar",
    googleText: "Самый быстрый и надежный вариант — Calendly, подключенный к Google Calendar: он проверяет занятость, резервирует слоты и отправляет подтверждения. Прямое бронирование через Google Calendar тоже возможно, но требует OAuth, серверных API-маршрутов и безопасного хранения токенов.",
    testimonialsKicker: "Отзывы",
    testimonialsTitle: "Галерея отзывов.",
    testimonialsText: "Здесь можно показывать короткие отзывы после согласия клиентов. Добавляйте скриншоты или текстовые карточки без частных данных.",
    uploadReview: "Загрузить отзывы",
    diplomasKicker: "Дипломы",
    diplomasTitle: "Галерея дипломов и сертификатов.",
    diplomasText: "Можно загрузить изображения дипломов для предпросмотра. Для постоянного хранения на сайте нужно добавить файлы в проект или подключить CMS/хранилище.",
    uploadDiplomas: "Загрузить дипломы",
    contactKicker: "Контакты",
    contactTitle: "Начните с фокусного разговора.",
    verificationKicker: "Проверка",
    verificationTitle: "Прозрачная бизнес-информация.",
    policies: ["Услуги позиционируются как консалтинг, коучинг, личное развитие и образовательная поддержка.", "Политика возврата: если оплаченная встреча не может состояться, свяжитесь до назначенного времени для переноса или рассмотрения возврата.", "Политика отмены: по возможности отменяйте или переносите встречу минимум за 24 часа."],
    footerReady: "сайт на 4 языках"
  },
  be: {
    nav: ["Пра мяне", "Паслугі", "Запіс", "Кантакты"],
    cta: "Запісацца",
    badge: "Стратэгічны кансалтынг, коўчынг і падтрымка адносін",
    hero: "Стварыць яснасць. Змяніць адносіны.",
    sub: "Стратэгічны кансалтынг, коўчынг і падтрымка асабістага развіцця для людзей, пар і арганізацый.",
    explore: "Паглядзець паслугі",
    founder: "Заснавальнік",
    role: "Кансультант, сертыфікаваны гештальт-тэрапеўт · Уроцлаў і анлайн",
    aboutKicker: "Пра мяне",
    aboutTitle: "Стратэгічны кансалтынг з чалавекам у цэнтры.",
    aboutText: "Ігар Смірноў дапамагае людзям, парам і арганізацыям паляпшаць камунікацыю, эмацыйную яснасць і стратэгічнае мысленне. Яго досвед аб'ядноўвае гештальт-падыход, транзакцыйны аналіз, бізнес-псіхалогію і Executive MBA па стратэгічным менеджменце.",
    chips: ["Анлайн і асабістыя кансультацыі", "Уроцлаў, Польшча", "Шматмоўная падтрымка"],
    stats: ["індывідуальныя кансультацыі", "анлайн і афлайн", "стратэгічнае развіццё", "падтрымка камунікацыі"],
    expertiseKicker: "Экспертыза",
    expertiseTitle: "Псіхалагічна інфармаваная стратэгія для жыцця і працы.",
    expertiseText: "Human Strategy Lab злучае асабістае развіццё, якасць адносін і бізнес-мысленне. Гэта прастора для яснай размовы, не для клінічных ярлыкоў.",
    focus: ["Бізнес-псіхалогія", "Дынаміка адносін", "Яснасць камунікацыі", "Адаптацыя ў эміграцыі", "Асабістае развіццё", "Падтрымка рашэнняў"],
    servicesKicker: "Паслугі",
    servicesTitle: "Прэміяльныя фарматы кансультацый.",
    servicesText: "Выберыце фармат пад ваш запыт. Аплата адбываецца праз бяспечныя спасылкі Stripe.",
    pay: "Аплаціць Stripe",
    request: "Запытаць кошт",
    services: [
      ["Індывідуальная кансультацыя", "Фокусная падтрымка для яснасці, рашэнняў, камунікацыі і наступных крокаў."],
      ["Групавая тэрапія / воркшоп", "Структураваны групавы фармат для камунікацыі, эмацыйнай пісьменнасці і развіцця."],
      ["Кансультацыя пары", "Падтрымка пары для больш яснага дыялогу і практычных дамоўленасцей."],
      ["Кансультацыя пары з ко-тэрапеўтам", "Фармат з двума спецыялістамі для больш збалансаванай фасілітацыі."],
      ["Стратэгічны трэнінг / воркшоп", "Адукацыйныя і арганізацыйныя сесіі для каманд, лідараў і супольнасцей."]
    ],
    credentialsKicker: "Адукацыя",
    credentialsTitle: "Адукацыя і прафесійны досвед.",
    credentials: ["Сертыфікаваны гештальт-тэрапеўт", "Транзакцыйны аналіз у трэнінгу", "Спецыялізацыя па групавой тэрапіі", "Executive MBA: стратэгічны менеджмент", "Сузаснавальнік прасторы Godna", "Сузаснавальнік супольнасці PsyConnect"],
    bookingKicker: "Запіс",
    bookingTitle: "Забраніраваць кансультацыю.",
    bookingText: "Даступныя анлайн-кансультацыі, гнуткі расклад, пацверджанні па email і сустрэчы ў Zoom або Google Meet.",
    bookingItems: ["Анлайн і асабістыя фарматы", "Пацверджанне ў календары", "Бяспечная аплата", "Сінхранізацыя з Google Calendar праз Calendly"],
    openCalendly: "Адкрыць Calendly",
    googleTitle: "Інтэграцыя Google Calendar",
    googleText: "Самы хуткі шлях — Calendly, падключаны да Google Calendar: ён правярае даступнасць, блакуе слоты і дасылае пацверджанні. Прамое браніраванне праз Google Calendar таксама магчыма, але патрабуе OAuth, серверных API і бяспечнага захоўвання токенаў.",
    testimonialsKicker: "Водгукі",
    testimonialsTitle: "Галерэя водгукаў.",
    testimonialsText: "Тут можна паказваць кароткія водгукі пасля згоды кліентаў. Дадавайце скрыншоты або тэкставыя карткі без прыватных дадзеных.",
    uploadReview: "Загрузіць водгукі",
    diplomasKicker: "Дыпломы",
    diplomasTitle: "Галерэя дыпломаў і сертыфікатаў.",
    diplomasText: "Можна загрузіць выявы дыпломаў для папярэдняга прагляду. Для пастаяннага захоўвання патрэбна дадаць файлы ў праект або падключыць CMS/сховішча.",
    uploadDiplomas: "Загрузіць дыпломы",
    contactKicker: "Кантакты",
    contactTitle: "Пачніце з фокуснай размовы.",
    verificationKicker: "Праверка",
    verificationTitle: "Празрыстая бізнес-інфармацыя.",
    policies: ["Паслугі пазіцыянуюцца як кансалтынг, коўчынг, асабістае развіццё і адукацыйная падтрымка.", "Палітыка вяртання: калі аплачаная сустрэча не можа адбыцца, звяжыцеся да прызначанага часу для пераносу або разгляду вяртання.", "Палітыка адмены: па магчымасці адмяняйце або пераносіце сустрэчу мінімум за 24 гадзіны."],
    footerReady: "сайт на 4 мовах"
  },
  pl: {
    nav: ["O mnie", "Usługi", "Rezerwacja", "Kontakt"],
    cta: "Umów konsultację",
    badge: "Konsulting strategiczny, coaching i wsparcie relacji",
    hero: "Buduj jasność. Zmieniaj relacje.",
    sub: "Konsulting strategiczny, coaching i wsparcie rozwoju osobistego dla osób indywidualnych, par i organizacji.",
    explore: "Zobacz usługi",
    founder: "Założyciel",
    role: "Konsultant, certyfikowany terapeuta Gestalt · Wrocław i online",
    aboutKicker: "O mnie",
    aboutTitle: "Konsulting strategiczny skoncentrowany na człowieku.",
    aboutText: "Igor Smirnov pomaga osobom indywidualnym, parom i organizacjom rozwijać komunikację, klarowność emocjonalną i myślenie strategiczne. Łączy podejście Gestalt, analizę transakcyjną, psychologię biznesu i Executive MBA w zarządzaniu strategicznym.",
    chips: ["Konsultacje online i stacjonarne", "Wrocław, Polska", "Wsparcie wielojęzyczne"],
    stats: ["konsultacje 1:1", "online i offline", "rozwój strategiczny", "wsparcie komunikacji"],
    expertiseKicker: "Ekspertyza",
    expertiseTitle: "Strategia oparta na psychologii dla życia i pracy.",
    expertiseText: "Human Strategy Lab łączy rozwój osobisty, inteligencję relacyjną i myślenie biznesowe. To przestrzeń jasnej rozmowy, bez klinicznych etykiet.",
    focus: ["Psychologia biznesu", "Dynamika relacji", "Jasność komunikacji", "Adaptacja w emigracji", "Rozwój osobisty", "Wsparcie decyzji"],
    servicesKicker: "Usługi",
    servicesTitle: "Premium formaty konsultacji.",
    servicesText: "Wybierz format pasujący do Twojej sytuacji. Płatności obsługiwane są przez bezpieczne linki Stripe.",
    pay: "Zapłać przez Stripe",
    request: "Zapytaj o cenę",
    services: [
      ["Konsultacja indywidualna", "Skoncentrowane wsparcie dla jasności, decyzji, komunikacji i kolejnych kroków."],
      ["Terapia grupowa / warsztat", "Ustrukturyzowany format grupowy dla komunikacji, świadomości emocjonalnej i rozwoju."],
      ["Konsultacja dla par", "Wsparcie par w bardziej klarownym dialogu i praktycznych ustaleniach."],
      ["Konsultacja dla par z ko-terapeutą", "Format z dwoma specjalistami dla głębszej i bardziej zrównoważonej facylitacji."],
      ["Trening strategiczny / warsztat", "Sesje edukacyjne i organizacyjne dla zespołów, liderów i społeczności."]
    ],
    credentialsKicker: "Edukacja",
    credentialsTitle: "Wykształcenie i doświadczenie zawodowe.",
    credentials: ["Certyfikowany terapeuta Gestalt", "Analiza transakcyjna w treningu", "Specjalizacja terapii grupowej", "Executive MBA: zarządzanie strategiczne", "Współzałożyciel przestrzeni Godna", "Współzałożyciel społeczności PsyConnect"],
    bookingKicker: "Rezerwacja",
    bookingTitle: "Umów konsultację.",
    bookingText: "Dostępne są konsultacje online, elastyczny grafik, potwierdzenia email oraz spotkania w Zoom lub Google Meet.",
    bookingItems: ["Online i stacjonarnie", "Potwierdzenie w kalendarzu", "Bezpieczne płatności", "Synchronizacja z Google Calendar przez Calendly"],
    openCalendly: "Otwórz Calendly",
    googleTitle: "Integracja Google Calendar",
    googleText: "Najprostsza ścieżka produkcyjna to Calendly połączone z Google Calendar: sprawdza dostępność, blokuje terminy i wysyła potwierdzenia. Bezpośrednia rezerwacja przez Google Calendar też jest możliwa, ale wymaga OAuth, API po stronie serwera i bezpiecznego przechowywania tokenów.",
    testimonialsKicker: "Opinie",
    testimonialsTitle: "Galeria opinii klientów.",
    testimonialsText: "Tutaj można pokazywać krótkie opinie po uzyskaniu zgody klientów. Dodawaj zrzuty ekranu lub karty tekstowe bez danych prywatnych.",
    uploadReview: "Dodaj opinie",
    diplomasKicker: "Dyplomy",
    diplomasTitle: "Galeria dyplomów i certyfikatów.",
    diplomasText: "Możesz wgrać obrazy dyplomów do podglądu. Do stałego przechowywania publicznego dodaj pliki do projektu albo podłącz CMS/storage.",
    uploadDiplomas: "Dodaj dyplomy",
    contactKicker: "Kontakt",
    contactTitle: "Zacznij od skoncentrowanej rozmowy.",
    verificationKicker: "Weryfikacja",
    verificationTitle: "Przejrzyste informacje biznesowe.",
    policies: ["Usługi są pozycjonowane jako konsulting, coaching, rozwój osobisty i wsparcie edukacyjne.", "Polityka zwrotów: jeśli opłacona sesja nie może się odbyć, skontaktuj się przed terminem, aby omówić zmianę terminu lub weryfikację zwrotu.", "Polityka anulowania: jeśli to możliwe, anuluj lub przełóż spotkanie co najmniej 24 godziny wcześniej."],
    footerReady: "strona w 4 językach"
  }
};

const prices = ["200 PLN", "150 PLN", "250 PLN", "300 PLN", "Custom"];

function UploadGallery({ title, text, button, type }: { title: string; text: string; button: string; type: "review" | "diploma" }) {
  const [items, setItems] = useState<{ name: string; url?: string }[]>([
    type === "review" ? { name: "Review card placeholder" } : { name: "Diploma / certificate placeholder" },
    type === "review" ? { name: "Consent-based testimonial" } : { name: "Education document" }
  ]);

  function onUpload(files: FileList | null) {
    const next = Array.from(files || []).map((file) => ({
      name: file.name.replace(/\.[^/.]+$/, ""),
      url: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined
    }));
    setItems((current) => [...next, ...current]);
  }

  return (
    <div className="glass rounded-[2rem] p-7 md:p-9">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-3xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-4 max-w-2xl leading-8 text-white/66">{text}</p>
        </div>
        <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-5 py-3 font-semibold text-cyan transition hover:bg-cyan hover:text-ink">
          <FileUp size={18} />
          {button}
          <input className="sr-only" type="file" accept=".png,.jpg,.jpeg,.webp,.pdf" multiple onChange={(event) => onUpload(event.target.files)} />
        </label>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={`${item.name}-${index}`} className="min-h-[190px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/6">
            {item.url ? (
              <img src={item.url} alt={item.name} className="h-44 w-full object-cover" />
            ) : (
              <div className="grid h-44 place-items-center bg-gradient-to-br from-violet/20 to-cyan/10">
                {type === "review" ? <Star className="text-cyan" /> : <Images className="text-cyan" />}
              </div>
            )}
            <p className="p-4 font-semibold text-white/78">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Lang>("en");
  const t = copy[language];
  const navItems = useMemo(() => t.nav.map((label, index) => ({
    label,
    href: ["#about", "#services", "#booking", "#contact"][index]
  })), [t.nav]);

  return (
    <>
      <Nav navItems={navItems} cta={t.cta} languages={languages} activeLanguage={language} onLanguageChange={(value) => setLanguage(value as Lang)} />
      <main id="top" className="relative overflow-hidden">
        <div className="ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[860px]" />

        <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-24 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pt-28">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
              <Sparkles size={16} className="text-cyan" />
              {t.badge}
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
              {t.hero}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">{t.sub}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow">
                {t.cta} <CalendarDays size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/14">
                {t.explore} <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>

          <MotionDiv className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-violet/30 via-cyan/10 to-transparent blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[2.5rem] p-3">
              <Image src="/images/igor-smirnov.jpeg" alt="Igor Smirnov, founder of Human Strategy Lab" width={1000} height={1000} priority className="aspect-[4/5] rounded-[2rem] object-cover" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/12 bg-ink/62 p-5 backdrop-blur-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan">{t.founder}</p>
                <p className="mt-1 text-2xl font-semibold">Igor Smirnov</p>
                <p className="mt-2 text-sm text-white/62">{t.role}</p>
              </div>
            </div>
          </MotionDiv>
        </section>

        <section id="about" className="relative border-y border-white/10 bg-white/[0.03] py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.aboutKicker}</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{t.aboutTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl leading-9 text-white/70">{t.aboutText}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
                {t.chips.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/8 px-4 py-2">{item}</span>)}
              </div>
            </Reveal>
          </div>
          <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {t.stats.map((stat, index) => (
              <Reveal key={stat} delay={index * 0.05}>
                <div className="glass rounded-[2rem] p-6">
                  <CheckCircle2 className="mb-8 text-cyan" size={24} />
                  <p className="text-xl font-semibold text-white">{stat}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.expertiseKicker}</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.expertiseTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/66">{t.expertiseText}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.focus.map((area) => (
                  <div key={area} className="glass rounded-[1.5rem] p-5">
                    <p className="flex items-center gap-3 font-semibold"><Sparkles size={17} className="text-cyan" />{area}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.servicesKicker}</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.servicesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">{t.servicesText}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="glass group flex min-h-[320px] flex-col justify-between rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan/35 hover:shadow-glow">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan">{index === 4 ? <Users2 size={22} /> : <ShieldCheck size={22} />}</span>
                      <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/70">{prices[index]}</span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-4 leading-7 text-white/62">{description}</p>
                  </div>
                  <a href={index === 4 ? "mailto:contact@igorsmirnovconsulting.com?subject=Strategic%20training%20request" : stripeLinks[index]} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-ink transition group-hover:bg-cyan">
                    {index === 4 ? t.request : t.pay} <ArrowRight size={17} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="glass rounded-[2rem] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <Reveal>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.credentialsKicker}</p>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">{t.credentialsTitle}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {t.credentials.map((credential) => <p key={credential} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white/72">{credential}</p>)}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="booking" className="relative border-y border-white/10 bg-white/[0.03] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.bookingKicker}</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.bookingTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-white/66">{t.bookingText}</p>
              <div className="mt-8 grid gap-3 text-white/70">
                {t.bookingItems.map((item) => <p key={item} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-cyan" />{item}</p>)}
              </div>
              <div className="mt-9 rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <h3 className="font-semibold text-white">{t.googleTitle}</h3>
                <p className="mt-3 leading-7 text-white/64">{t.googleText}</p>
              </div>
              <a href="https://calendly.com/contact-igorsmirnovconsulting" className="mt-9 inline-flex items-center justify-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-6 py-4 font-semibold text-cyan transition hover:bg-cyan hover:text-ink">
                {t.openCalendly} <ArrowRight size={18} />
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass overflow-hidden rounded-[2rem] p-2">
                <iframe title="Book a consultation with Igor Smirnov" src="https://calendly.com/contact-igorsmirnovconsulting?hide_gdpr_banner=1&background_color=050711&text_color=ffffff&primary_color=22d3ee" className="h-[720px] w-full rounded-[1.6rem] bg-white" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 lg:px-8">
          <Reveal><UploadGallery title={t.testimonialsTitle} text={t.testimonialsText} button={t.uploadReview} type="review" /></Reveal>
          <Reveal delay={0.08}><UploadGallery title={t.diplomasTitle} text={t.diplomasText} button={t.uploadDiplomas} type="diploma" /></Reveal>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.contactKicker}</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.contactTitle}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard icon="mail" label="Email" value="contact@igorsmirnovconsulting.com" href="mailto:contact@igorsmirnovconsulting.com" copyValue="contact@igorsmirnovconsulting.com" />
            <ContactCard icon="telegram" label="Telegram" value="@marsell_2021" href="https://t.me/marsell_2021" copyValue="@marsell_2021" />
            <ContactCard icon="phone" label="Phone" value="+48 572 090 774" href="tel:+48572090774" copyValue="+48572090774" />
            <ContactCard icon="location" label="Location" value="Wrocław, Poland" href="https://maps.google.com/?q=Wroclaw%2C%20Poland" copyValue="Wrocław, Poland" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
          <div className="glass rounded-[2rem] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{t.verificationKicker}</p>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">{t.verificationTitle}</h2>
              </div>
              <div className="grid gap-4">
                {t.policies.map((policy) => <p key={policy} className="flex gap-3 leading-7 text-white/66"><WalletCards className="mt-1 shrink-0 text-cyan" size={18} />{policy}</p>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Human Strategy Lab. Igor Smirnov Consulting.</p>
          <div className="flex flex-wrap gap-5">
            <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-white">Terms & Conditions</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <span className="inline-flex items-center gap-2"><Globe2 size={15} /> {t.footerReady}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
