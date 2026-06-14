"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clapperboard,
  Globe2,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Sparkles,
  Users2
} from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { MotionDiv, Reveal } from "@/components/Motion";
import { Nav } from "@/components/Nav";

type Lang = "ru" | "en" | "be" | "pl";

const languages: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "be", label: "BE" },
  { code: "pl", label: "PL" }
];

const sectionHrefs = ["#about", "#services", "#couples", "#wellbeing", "#group-work", "#film-club", "/events", "/ne-vyvozhu", "#contact"];
const calendly = "https://calendly.com/contact-igorsmirnovconsulting";

const copy = {
  ru: {
    nav: ["Обо мне", "Услуги", "Парная терапия", "Wellbeing", "Группы", "Киноклуб", "Анонсы", "Бизнес-группа", "Контакты"],
    book: "Записаться",
    ask: "Задать вопрос",
    explore: "Посмотреть услуги",
    badge: "Human Strategy Lab",
    hero: ["Прояснить важное.", "Изменить отношения."],
    heroText: "Консультирование с опорой на современную психотерапию. Индивидуальная работа, парная терапия, группы и wellbeing-программы для людей и команд.",
    role: "Consultant · therapist · facilitator",
    aboutLabel: "Обо мне",
    aboutTitle: "Гештальт-терапевт, групповой терапевт и психолог-консультант.",
    aboutLead: "Я работаю онлайн и очно во Вроцлаве. Помогаю людям проходить через кризисы, эмиграцию, сложности в отношениях, вопросы самооценки, выгорание и периоды, когда важно снова найти опору.",
    aboutText: "В работе соединяю гештальт-терапию, транзактный анализ и психодинамический взгляд. Веду индивидуальную, семейную, парную и групповую терапию.",
    inclusive: "LGBTIQA+ friendly. Бережно и уважительно работаю с вопросами гендерной идентичности, сексуальной ориентации, самопринятия, отношений и поиска своего места в обществе.",
    therapyTitle: "Отдельное направление — предприниматели, руководители и специалисты под высокой нагрузкой.",
    therapyText: "Executive MBA в стратегическом менеджменте и более 17 лет опыта создания и управления бизнесами в трех странах помогают мне понимать не только внутренние переживания человека, но и реальные вызовы бизнеса, ответственности, управления и эмиграции.",
    therapyThemesTitle: "Темы, с которыми я работаю:",
    therapyThemes: ["эмиграция и адаптация", "отношения и близость", "самооценка и идентичность", "тревога и кризисы", "эмоциональное выгорание", "синдром самозванца", "предпринимательство и лидерство", "отношения в команде и бизнесе"],
    credentials: "Сертифицированный гештальт-терапевт МГИ. Ведущий терапевтических групп. Консультирую на русском языке онлайн и очно во Вроцлаве.",
    personal: ["Предпринимательский опыт с 2006 года", "Executive MBA", "Многодетный отец", "Живу во Вроцлаве", "Люблю путешествия на мотоцикле", "Интересуюсь кино, групповыми процессами и человеческими отношениями"],
    servicesLabel: "Услуги",
    servicesTitle: "Форматы работы",
    servicesIntro: "Коротко, ясно и без лишней сложности. Выберите формат, с которого хочется начать.",
    services: [
      ["Individual Consultation", "200 PLN", "Индивидуальная работа с фокусом на отношения, кризисы, тревогу, выгорание, самоопределение и сложные жизненные изменения.", "https://buy.stripe.com/bJeaEYdiX126gbhcuv9Ve00"],
      ["Group Therapy", "150 PLN", "Групповой процесс про поддержку, контакт, эмоциональную устойчивость и возможность лучше понимать себя рядом с другими.", "https://buy.stripe.com/4gMeVe5Qv4ei4szfGH9Ve06"]
    ],
    pay: "Оплатить",
    schedule: "Записаться",
    couplesLabel: "Парная терапия",
    couplesTitle: "Вернуть близость и понимание",
    couplesLead: "Мы помогаем парам восстановить контакт, научиться слышать друг друга и выйти из повторяющихся конфликтов.",
    couplesText: "Парная работа проводится вместе с психотерапевткой Татьяной Козловской. Мужско-женская ко-терапия помогает лучше видеть динамику отношений и создавать более безопасное пространство для обоих партнеров.",
    couplesCta: "Оплатить сессию",
    more: "Узнать подробнее",
    couplesItemsTitle: "На сессиях мы работаем с:",
    couplesItems: ["конфликтами", "эмоциональной дистанцией", "кризисами", "коммуникацией", "доверием", "повторяющимися сценариями"],
    wellbeingLabel: "Corporate wellbeing",
    wellbeingTitle: "Wellbeing at Work",
    wellbeingSubtitle: "Тренинги для команд, которые хотят работать устойчиво — без выгорания и токсичной коммуникации.",
    wellbeingText: "Практичные программы для современных команд: эмоциональная устойчивость, коммуникация, wellbeing и здоровая рабочая среда.",
    formats: [["Воркшоп · 2-3 часа", "Короткий практический мастер-класс."], ["Однодневный тренинг · 8 часов", "Глубокая работа с навыками коммуникации и устойчивости."], ["Двухдневный интенсив · 16 часов", "Полное погружение с практикой, рефлексией и групповым процессом."]],
    trainers: [
      ["Tetiana Kozlovska", "Психолог, гештальт-терапевт и групповой психотерапевт. Работает с эмоциональной устойчивостью, коммуникацией и групповыми процессами."],
      ["Igor Smirnov", "Психолог и предприниматель с опытом управления бизнесами в нескольких странах. Специализация — wellbeing, стресс, лидерство и коммуникация."]
    ],
    topics: ["Выгорание и стресс", "Конфликты в команде", "Эмоциональный интеллект", "Коммуникация под давлением", "Гибкость мышления", "Устойчивая продуктивность"],
    proposal: "Запросить предложение",
    groupLabel: "Группы и команды",
    groupTitle: "Больше контакта. Меньше напряжения.",
    businessGroupLink: "Группа для предпринимателей",
    eventsLink: "Все анонсы",
    benefits: [["Больше устойчивости", "Команды легче проходят периоды нагрузки и перемен."], ["Лучше коммуникация", "Люди начинают яснее говорить о сложном."], ["Меньше выгорания", "Появляются реальные инструменты заботы о ресурсе."], ["Здоровее атмосфера", "Снижается напряжение, растет доверие."], ["Практические навыки", "Участники уходят с упражнениями, а не только идеями."], ["Сильнее культура", "Wellbeing становится частью зрелой рабочей среды."]],
    filmLabel: "Киноклуб",
    filmTitle: "Cinematic Reflection Club",
    filmText: "Кино как способ лучше понимать себя, отношения и то, как мы строим контакт с миром.",
    filmThemes: ["отношения", "выбор", "близость", "перемены"],
    officeLabel: "Кабинет",
    officeTitle: "Очные консультации во Вроцлаве",
    officeText: "Кабинет находится в удобном месте, в 5 минутах пешком от Рыночной площади.",
    officeAddress: "WROCLAW, Kazimierza Wielkiego 67, вход B, кабинет 118",
    godna: "Пространство Godna",
    communityLabel: "Сообщество",
    communityText: "Я один из создателей PsyConnect — сообщества психотерапевтов и психологов, переехавших в Европу.",
    psy: "Открыть PsyConnect",
    bookingLabel: "Запись",
    bookingTitle: "Выберите удобное время",
    bookingText: "Индивидуальные консультации, парные сессии, знакомство и запросы на wellbeing-программы.",
    openCalendly: "Открыть Calendly",
    contactLabel: "Контакты",
    contactTitle: "Если вы хотите обсудить индивидуальную работу, парную терапию или wellbeing-программы — напишите мне.",
    questionLabel: "Вопрос",
    questionTitle: "Можно начать с короткого сообщения",
    questionText: "Запрос откроется как готовое письмо на email. Также можно написать напрямую в Telegram.",
    form: {
      name: "Имя",
      namePlaceholder: "Как к вам обращаться",
      contact: "Контакт",
      contactPlaceholder: "Email / Telegram / телефон",
      topic: "Тема",
      message: "Вопрос",
      messagePlaceholder: "Коротко опишите, с чем хотите обратиться",
      submit: "Отправить на email",
      telegram: "Написать в Telegram",
      mailSubject: "Вопрос с сайта Igor Smirnov Consulting",
      fields: ["Индивидуальная консультация", "Парная терапия", "Группа", "Wellbeing-программа для команды", "Другой вопрос"],
      labels: ["Имя", "Контакт", "Тема", "Сообщение"]
    },
    footer: "Wrocław & online"
  },
  en: {
    nav: ["About", "Services", "Couples therapy", "Wellbeing", "Groups", "Film club", "Events", "Business group", "Contact"],
    book: "Book a session",
    ask: "Ask a question",
    explore: "Explore services",
    badge: "Human Strategy Lab",
    hero: ["Clarify what matters.", "Transform relationships."],
    heroText: "Psychotherapy-informed consulting. Individual work, couples therapy, groups, and wellbeing programs for people and teams.",
    role: "Consultant · therapist · facilitator",
    aboutLabel: "About",
    aboutTitle: "Gestalt therapist, group therapist, and psychological consultant.",
    aboutLead: "I work online and in person in Wrocław. I support people through life crises, migration, relationship difficulties, self-esteem issues, burnout, and periods when it becomes important to find inner ground again.",
    aboutText: "My work brings together Gestalt therapy, transactional analysis, and a psychodynamic perspective. I work with individuals, families, couples, and therapy groups.",
    inclusive: "LGBTIQA+ friendly. I work respectfully with questions of gender identity, sexual orientation, self-acceptance, relationships, and finding one’s place in society.",
    therapyTitle: "A dedicated part of my practice is work with entrepreneurs, leaders, and specialists under high pressure.",
    therapyText: "An Executive MBA in strategic management and more than 17 years of building and managing businesses in three countries help me understand not only inner experience, but also the real pressure of business, responsibility, leadership, and migration.",
    therapyThemesTitle: "Themes I work with:",
    therapyThemes: ["migration and adaptation", "relationships and closeness", "self-esteem and identity", "anxiety and crises", "emotional burnout", "impostor syndrome", "entrepreneurship and leadership", "relationships in teams and business"],
    credentials: "Certified Gestalt therapist at MGI. Therapy group facilitator. Consultations are available in Russian online and in person in Wrocław.",
    personal: ["Entrepreneurial experience since 2006", "Executive MBA", "Father of several children", "Living in Wrocław", "I love motorcycle travel", "Interested in cinema, group work, and human relationships"],
    servicesLabel: "Services",
    servicesTitle: "Ways of working",
    servicesIntro: "Clear, focused, and easy to choose. Start with the format that feels right now.",
    services: [
      ["Individual Consultation", "200 PLN", "Individual work focused on relationships, crises, anxiety, burnout, self-definition, and difficult life transitions.", "https://buy.stripe.com/bJeaEYdiX126gbhcuv9Ve00"],
      ["Group Therapy", "150 PLN", "A group process about support, contact, emotional steadiness, and understanding yourself better alongside others.", "https://buy.stripe.com/4gMeVe5Qv4ei4szfGH9Ve06"]
    ],
    pay: "Pay",
    schedule: "Book",
    couplesLabel: "Couples therapy",
    couplesTitle: "Restore closeness and understanding",
    couplesLead: "We help couples rebuild contact, hear each other more clearly, and step out of repeating conflict cycles.",
    couplesText: "Couples work is conducted together with psychotherapist Tetiana Kozlovska. A male-female co-therapy team helps us see the relationship more fully and create a safer space for both partners.",
    couplesCta: "Pay for session",
    more: "Learn more",
    couplesItemsTitle: "In sessions we work with:",
    couplesItems: ["conflict", "emotional distance", "crisis moments", "communication", "trust", "repeating patterns"],
    wellbeingLabel: "Corporate wellbeing",
    wellbeingTitle: "Wellbeing at Work",
    wellbeingSubtitle: "Trainings for teams that want to work sustainably — without burnout or toxic communication.",
    wellbeingText: "Practical programs for modern teams: emotional resilience, communication, wellbeing, and a healthier working environment.",
    formats: [["Workshop · 2-3 hours", "A short practical masterclass."], ["One-day training · 8 hours", "Deeper work with communication and resilience skills."], ["Two-day intensive · 16 hours", "Full immersion with practice, reflection, and group work."]],
    trainers: [
      ["Tetiana Kozlovska", "Psychologist, Gestalt therapist, and group psychotherapist. Works with emotional resilience, communication, and group work."],
      ["Igor Smirnov", "Psychologist and entrepreneur with experience managing businesses in several countries. Focus: wellbeing, stress, leadership, and communication."]
    ],
    topics: ["Burnout and stress", "Team conflict", "Emotional intelligence", "Communication under pressure", "Flexible thinking", "Sustainable productivity"],
    proposal: "Request a proposal",
    groupLabel: "Groups and teams",
    groupTitle: "More contact. Less tension.",
    businessGroupLink: "Entrepreneur group",
    eventsLink: "All events",
    benefits: [["More resilience", "Teams move through pressure and change more steadily."], ["Better communication", "People learn to speak more clearly about difficult things."], ["Less burnout", "Practical ways to care for energy become visible."], ["Healthier atmosphere", "Tension decreases and trust grows."], ["Practical skills", "Participants leave with exercises, not only ideas."], ["Stronger culture", "Wellbeing becomes part of a mature work environment."]],
    filmLabel: "Film club",
    filmTitle: "Cinematic Reflection Club",
    filmText: "Cinema as a way to understand ourselves, relationships, and how we make contact with the world.",
    filmThemes: ["relationships", "choice", "closeness", "change"],
    officeLabel: "Office",
    officeTitle: "In-person consultations in Wrocław",
    officeText: "The office is conveniently located five minutes on foot from the Market Square.",
    officeAddress: "WROCLAW, Kazimierza Wielkiego 67, entrance B, office 118",
    godna: "Godna space",
    communityLabel: "Community",
    communityText: "I am one of the co-founders of PsyConnect, a community of psychotherapists and psychologists who moved to Europe.",
    psy: "Open PsyConnect",
    bookingLabel: "Booking",
    bookingTitle: "Choose a convenient time",
    bookingText: "Individual consultations, couples sessions, introductory calls, and wellbeing program inquiries.",
    openCalendly: "Open Calendly",
    contactLabel: "Contact",
    contactTitle: "If you would like to discuss individual work, couples therapy, or wellbeing programs, send me a message.",
    questionLabel: "Question",
    questionTitle: "You can start with a short message",
    questionText: "The request will open as a prepared email. You can also write directly on Telegram.",
    form: {
      name: "Name",
      namePlaceholder: "How should I address you?",
      contact: "Contact",
      contactPlaceholder: "Email / Telegram / phone",
      topic: "Topic",
      message: "Question",
      messagePlaceholder: "Briefly describe what you would like to discuss",
      submit: "Send by email",
      telegram: "Message on Telegram",
      mailSubject: "Question from Igor Smirnov Consulting website",
      fields: ["Individual consultation", "Couples therapy", "Group", "Wellbeing program for a team", "Other question"],
      labels: ["Name", "Contact", "Topic", "Message"]
    },
    footer: "Wrocław & online"
  },
  be: {
    nav: ["Пра мяне", "Паслугі", "Тэрапія пар", "Wellbeing", "Групы", "Кінаклуб", "Анонсы", "Бізнес-група", "Кантакты"],
    book: "Запісацца",
    ask: "Задаць пытанне",
    explore: "Паглядзець паслугі",
    badge: "Human Strategy Lab",
    hero: ["Праясніць важнае.", "Змяніць адносіны."],
    heroText: "Кансультаванне з апорай на сучасную псіхатэрапію. Індывідуальная праца, тэрапія пар, групы і wellbeing-праграмы для людзей і каманд.",
    role: "Кансультант · тэрапеўт · фасілітатар",
    aboutLabel: "Пра мяне",
    aboutTitle: "Гештальт-тэрапеўт, групавы тэрапеўт і псіхолаг-кансультант.",
    aboutLead: "Працую анлайн і асабіста ва Уроцлаве. Дапамагаю людзям праходзіць праз жыццёвыя крызісы, эміграцыю, складанасці ў адносінах, пытанні самаацэнкі, выгаранне і перыяды, калі важна зноў знайсці ўнутраную апору.",
    aboutText: "У працы спалучаю гештальт-тэрапію, транзактны аналіз і псіхадынамічны погляд. Вяду індывідуальную, сямейную, парную і групавую тэрапію.",
    inclusive: "LGBTIQA+ friendly. Беражліва і з павагай працую з пытаннямі гендарнай ідэнтычнасці, сексуальнай арыентацыі, самапрыняцця, адносін і пошуку свайго месца ў грамадстве.",
    therapyTitle: "Асобны напрамак маёй практыкі — праца з прадпрымальнікамі, кіраўнікамі і спецыялістамі пад высокай нагрузкай.",
    therapyText: "Executive MBA ў стратэгічным менеджменце і больш за 17 гадоў досведу стварэння і кіравання бізнесамі ў трох краінах дапамагаюць мне разумець не толькі ўнутраныя перажыванні чалавека, але і рэальны ціск бізнесу, адказнасці, кіравання і эміграцыі.",
    therapyThemesTitle: "Тэмы, з якімі я працую:",
    therapyThemes: ["эміграцыя і адаптацыя", "адносіны і блізкасць", "самаацэнка і ідэнтычнасць", "трывога і крызісы", "эмацыйнае выгаранне", "сіндром самазванца", "прадпрымальніцтва і лідарства", "адносіны ў камандзе і бізнесе"],
    credentials: "Сертыфікаваны гештальт-тэрапеўт МГІ. Вядучы тэрапеўтычных груп. Кансультую на рускай мове анлайн і асабіста ва Уроцлаве.",
    personal: ["Прадпрымальніцкі досвед з 2006 года", "Executive MBA", "Шматдзетны бацька", "Жыву ва Уроцлаве", "Люблю падарожжы на матацыкле", "Цікаўлюся кіно, групавой працай і чалавечымі адносінамі"],
    servicesLabel: "Паслугі",
    servicesTitle: "Фарматы працы",
    servicesIntro: "Коратка, ясна і без лішняй складанасці. Абярыце фармат, з якога хочацца пачаць.",
    services: [
      ["Individual Consultation", "200 PLN", "Індывідуальная праца з фокусам на адносіны, крызісы, трывогу, выгаранне, самавызначэнне і складаныя жыццёвыя змены.", "https://buy.stripe.com/bJeaEYdiX126gbhcuv9Ve00"],
      ["Group Therapy", "150 PLN", "Групавы працэс пра падтрымку, кантакт, эмацыйную ўстойлівасць і магчымасць лепш разумець сябе побач з іншымі.", "https://buy.stripe.com/4gMeVe5Qv4ei4szfGH9Ve06"]
    ],
    pay: "Аплаціць",
    schedule: "Запісацца",
    couplesLabel: "Тэрапія пар",
    couplesTitle: "Вярнуць блізкасць і разуменне",
    couplesLead: "Мы дапамагаем парам аднавіць кантакт, навучыцца чуць адно аднаго і выйсці з паўторных канфліктаў.",
    couplesText: "Праца з парай праводзіцца разам з псіхатэрапеўткай Таццянай Казлоўскай. Мужчынска-жаночая ко-тэрапія дапамагае лепш бачыць адносіны і ствараць больш бяспечную прастору для абодвух партнёраў.",
    couplesCta: "Аплаціць сесію",
    more: "Даведацца больш",
    couplesItemsTitle: "На сесіях мы працуем з:",
    couplesItems: ["канфліктамі", "эмацыйнай дыстанцыяй", "крызісамі", "камунікацыяй", "даверам", "паўторнымі сцэнарамі"],
    wellbeingLabel: "Corporate wellbeing",
    wellbeingTitle: "Wellbeing at Work",
    wellbeingSubtitle: "Трэнінгі для каманд, якія хочуць працаваць устойліва — без выгарання і таксічнай камунікацыі.",
    wellbeingText: "Практычныя праграмы для сучасных каманд: эмацыйная ўстойлівасць, камунікацыя, wellbeing і здаровае рабочае асяроддзе.",
    formats: [["Воркшоп · 2-3 гадзіны", "Кароткі практычны майстар-клас."], ["Аднадзённы трэнінг · 8 гадзін", "Глыбокая праца з навыкамі камунікацыі і ўстойлівасці."], ["Двухдзённы інтэнсіў · 16 гадзін", "Поўнае пагружэнне з практыкай, рэфлексіяй і групавым працэсам."]],
    trainers: [
      ["Tetiana Kozlovska", "Псіхолаг, гештальт-тэрапеўтка і групавая псіхатэрапеўтка. Працуе з эмацыйнай устойлівасцю, камунікацыяй і групавымі працэсамі."],
      ["Igor Smirnov", "Псіхолаг і прадпрымальнік з досведам кіравання бізнесамі ў некалькіх краінах. Спецыялізацыя — wellbeing, стрэс, лідарства і камунікацыя."]
    ],
    topics: ["Выгаранне і стрэс", "Канфлікты ў камандзе", "Эмацыйны інтэлект", "Камунікацыя пад ціскам", "Гнуткасць мыслення", "Устойлівая прадуктыўнасць"],
    proposal: "Запытаць прапанову",
    groupLabel: "Групы і каманды",
    groupTitle: "Больш кантакту. Менш напружання.",
    businessGroupLink: "Група для прадпрымальнікаў",
    eventsLink: "Усе анонсы",
    benefits: [["Больш устойлівасці", "Каманды лягчэй праходзяць перыяды нагрузкі і зменаў."], ["Лепшая камунікацыя", "Людзі пачынаюць ясней гаварыць пра складанае."], ["Менш выгарання", "З'яўляюцца рэальныя інструменты клопату пра рэсурс."], ["Здаравейшая атмасфера", "Зніжаецца напружанне, расце давер."], ["Практычныя навыкі", "Удзельнікі сыходзяць з практыкаваннямі, а не толькі ідэямі."], ["Мацнейшая культура", "Wellbeing становіцца часткай сталай рабочай культуры."]],
    filmLabel: "Кінаклуб",
    filmTitle: "Cinematic Reflection Club",
    filmText: "Кіно як спосаб лепш разумець сябе, адносіны і тое, як мы будуем кантакт са светам.",
    filmThemes: ["адносіны", "выбар", "блізкасць", "змены"],
    officeLabel: "Кабінет",
    officeTitle: "Асабістыя кансультацыі ва Уроцлаве",
    officeText: "Кабінет знаходзіцца ў зручным месцы, у 5 хвілінах пешкі ад Рынкавай плошчы.",
    officeAddress: "WROCLAW, Kazimierza Wielkiego 67, уваход B, кабінет 118",
    godna: "Прастора Godna",
    communityLabel: "Супольнасць",
    communityText: "Я адзін са стваральнікаў PsyConnect — супольнасці псіхатэрапеўтаў і псіхолагаў, якія пераехалі ў Еўропу.",
    psy: "Адкрыць PsyConnect",
    bookingLabel: "Запіс",
    bookingTitle: "Абярыце зручны час",
    bookingText: "Індывідуальныя кансультацыі, сесіі для пар, знаёмства і запыты на wellbeing-праграмы.",
    openCalendly: "Адкрыць Calendly",
    contactLabel: "Кантакты",
    contactTitle: "Калі вы хочаце абмеркаваць індывідуальную працу, тэрапію пар або wellbeing-праграмы — напішыце мне.",
    questionLabel: "Пытанне",
    questionTitle: "Можна пачаць з кароткага паведамлення",
    questionText: "Запыт адкрыецца як падрыхтаваны ліст на email. Таксама можна напісаць наўпрост у Telegram.",
    form: {
      name: "Імя",
      namePlaceholder: "Як да вас звяртацца",
      contact: "Кантакт",
      contactPlaceholder: "Email / Telegram / тэлефон",
      topic: "Тэма",
      message: "Пытанне",
      messagePlaceholder: "Коратка апішыце, з чым хочаце звярнуцца",
      submit: "Адправіць на email",
      telegram: "Напісаць у Telegram",
      mailSubject: "Пытанне з сайта Igor Smirnov Consulting",
      fields: ["Індывідуальная кансультацыя", "Тэрапія пар", "Група", "Wellbeing-праграма для каманды", "Іншае пытанне"],
      labels: ["Імя", "Кантакт", "Тэма", "Паведамленне"]
    },
    footer: "Wrocław & online"
  },
  pl: {
    nav: ["O mnie", "Usługi", "Terapia par", "Wellbeing", "Grupy", "Klub filmowy", "Wydarzenia", "Grupa biznesowa", "Kontakt"],
    book: "Umów sesję",
    ask: "Zadaj pytanie",
    explore: "Zobacz usługi",
    badge: "Human Strategy Lab",
    hero: ["Wyjaśnić to, co ważne.", "Zmienić relacje."],
    heroText: "Konsulting oparty na współczesnym rozumieniu psychoterapii. Praca indywidualna, terapia par, grupy i programy wellbeing dla ludzi i zespołów.",
    role: "Konsultant · terapeuta · facylitator",
    aboutLabel: "O mnie",
    aboutTitle: "Terapeuta Gestalt, terapeuta grupowy i konsultant psychologiczny.",
    aboutLead: "Pracuję online i stacjonarnie we Wrocławiu. Pomagam przechodzić przez kryzysy życiowe, emigrację, trudności w relacjach, problemy z samooceną, wypalenie i momenty, w których ważne jest odzyskanie oparcia.",
    aboutText: "W pracy łączę terapię Gestalt, analizę transakcyjną i perspektywę psychodynamiczną. Prowadzę terapię indywidualną, rodzinną, terapię par i terapię grupową.",
    inclusive: "LGBTIQA+ friendly. Pracuję uważnie i z szacunkiem z tematami tożsamości płciowej, orientacji seksualnej, samoakceptacji, relacji i szukania swojego miejsca w społeczeństwie.",
    therapyTitle: "Osobnym obszarem mojej praktyki jest praca z przedsiębiorcami, liderami i specjalistami pod dużą presją.",
    therapyText: "Executive MBA z zarządzania strategicznego oraz ponad 17 lat doświadczenia w tworzeniu i prowadzeniu biznesów w trzech krajach pomagają mi rozumieć nie tylko wewnętrzne przeżycia człowieka, ale też realne wyzwania biznesu, odpowiedzialności, zarządzania i emigracji.",
    therapyThemesTitle: "Tematy, z którymi pracuję:",
    therapyThemes: ["emigracja i adaptacja", "relacje i bliskość", "samoocena i tożsamość", "lęk i kryzysy", "wypalenie emocjonalne", "syndrom oszusta", "przedsiębiorczość i przywództwo", "relacje w zespole i biznesie"],
    credentials: "Certyfikowany terapeuta Gestalt MGI. Prowadzący grup terapeutycznych. Konsultuję w języku rosyjskim online i stacjonarnie we Wrocławiu.",
    personal: ["Doświadczenie przedsiębiorcze od 2006 roku", "Executive MBA", "Ojciec wielodzietnej rodziny", "Mieszkam we Wrocławiu", "Lubię podróże motocyklem", "Interesuję się kinem, pracą grupową i ludzkimi relacjami"],
    servicesLabel: "Usługi",
    servicesTitle: "Formy pracy",
    servicesIntro: "Krótko, jasno i bez zbędnej komplikacji. Wybierz format, od którego chcesz zacząć.",
    services: [
      ["Individual Consultation", "200 PLN", "Praca indywidualna wokół relacji, kryzysów, lęku, wypalenia, samookreślenia i trudnych zmian życiowych.", "https://buy.stripe.com/bJeaEYdiX126gbhcuv9Ve00"],
      ["Group Therapy", "150 PLN", "Proces grupowy o wsparciu, kontakcie, stabilności emocjonalnej i lepszym rozumieniu siebie wśród innych.", "https://buy.stripe.com/4gMeVe5Qv4ei4szfGH9Ve06"]
    ],
    pay: "Zapłać",
    schedule: "Umów termin",
    couplesLabel: "Terapia par",
    couplesTitle: "Odzyskać bliskość i zrozumienie",
    couplesLead: "Pomagamy parom odbudować kontakt, lepiej się słyszeć i wyjść z powtarzających się konfliktów.",
    couplesText: "Praca z parą prowadzona jest razem z psychoterapeutką Tetianą Kozlovską. Męsko-kobieca ko-terapia pomaga lepiej zobaczyć relację i stworzyć bezpieczniejszą przestrzeń dla obojga partnerów.",
    couplesCta: "Zapłać za sesję",
    more: "Dowiedz się więcej",
    couplesItemsTitle: "Podczas sesji pracujemy z:",
    couplesItems: ["konfliktami", "dystansem emocjonalnym", "kryzysami", "komunikacją", "zaufaniem", "powtarzającymi się scenariuszami"],
    wellbeingLabel: "Corporate wellbeing",
    wellbeingTitle: "Wellbeing at Work",
    wellbeingSubtitle: "Szkolenia dla zespołów, które chcą pracować stabilnie — bez wypalenia i toksycznej komunikacji.",
    wellbeingText: "Praktyczne programy dla współczesnych zespołów: odporność emocjonalna, komunikacja, wellbeing i zdrowe środowisko pracy.",
    formats: [["Warsztat · 2-3 godziny", "Krótki praktyczny masterclass."], ["Szkolenie jednodniowe · 8 godzin", "Głębsza praca z komunikacją i odpornością."], ["Intensyw dwudniowy · 16 godzin", "Pełne zanurzenie z praktyką, refleksją i procesem grupowym."]],
    trainers: [
      ["Tetiana Kozlovska", "Psycholożka, terapeutka Gestalt i psychoterapeutka grupowa. Pracuje z odpornością emocjonalną, komunikacją i procesami grupowymi."],
      ["Igor Smirnov", "Psycholog i przedsiębiorca z doświadczeniem zarządzania biznesami w kilku krajach. Specjalizacja — wellbeing, stres, przywództwo i komunikacja."]
    ],
    topics: ["Wypalenie i stres", "Konflikty w zespole", "Inteligencja emocjonalna", "Komunikacja pod presją", "Elastyczność myślenia", "Zrównoważona produktywność"],
    proposal: "Poproś o ofertę",
    groupLabel: "Grupy i zespoły",
    groupTitle: "Więcej kontaktu. Mniej napięcia.",
    businessGroupLink: "Grupa dla przedsiębiorców",
    eventsLink: "Wszystkie wydarzenia",
    benefits: [["Więcej odporności", "Zespoły stabilniej przechodzą przez obciążenie i zmiany."], ["Lepsza komunikacja", "Ludzie zaczynają jaśniej mówić o trudnych sprawach."], ["Mniej wypalenia", "Pojawiają się realne sposoby dbania o zasoby."], ["Zdrowsza atmosfera", "Spada napięcie, rośnie zaufanie."], ["Praktyczne umiejętności", "Uczestnicy wychodzą z ćwiczeniami, nie tylko z ideami."], ["Silniejsza kultura", "Wellbeing staje się częścią dojrzałego środowiska pracy."]],
    filmLabel: "Klub filmowy",
    filmTitle: "Cinematic Reflection Club",
    filmText: "Kino jako sposób lepszego rozumienia siebie, relacji i tego, jak budujemy kontakt ze światem.",
    filmThemes: ["relacje", "wybór", "bliskość", "zmiany"],
    officeLabel: "Gabinet",
    officeTitle: "Konsultacje stacjonarne we Wrocławiu",
    officeText: "Gabinet znajduje się w wygodnej lokalizacji, pięć minut pieszo od Rynku.",
    officeAddress: "WROCLAW, Kazimierza Wielkiego 67, wejście B, gabinet 118",
    godna: "Przestrzeń Godna",
    communityLabel: "Społeczność",
    communityText: "Jestem jednym z twórców PsyConnect — społeczności psychoterapeutów i psychologów, którzy przeprowadzili się do Europy.",
    psy: "Otwórz PsyConnect",
    bookingLabel: "Rezerwacja",
    bookingTitle: "Wybierz dogodny termin",
    bookingText: "Konsultacje indywidualne, sesje dla par, spotkania wstępne i zapytania o programy wellbeing.",
    openCalendly: "Otwórz Calendly",
    contactLabel: "Kontakt",
    contactTitle: "Jeśli chcesz omówić pracę indywidualną, terapię par albo programy wellbeing — napisz do mnie.",
    questionLabel: "Pytanie",
    questionTitle: "Możesz zacząć od krótkiej wiadomości",
    questionText: "Zapytanie otworzy się jako gotowy email. Możesz też napisać bezpośrednio na Telegramie.",
    form: {
      name: "Imię",
      namePlaceholder: "Jak mam się do Ciebie zwracać?",
      contact: "Kontakt",
      contactPlaceholder: "Email / Telegram / telefon",
      topic: "Temat",
      message: "Pytanie",
      messagePlaceholder: "Krótko opisz, z czym chcesz się zgłosić",
      submit: "Wyślij emailem",
      telegram: "Napisz na Telegramie",
      mailSubject: "Pytanie ze strony Igor Smirnov Consulting",
      fields: ["Konsultacja indywidualna", "Terapia par", "Grupa", "Program wellbeing dla zespołu", "Inne pytanie"],
      labels: ["Imię", "Kontakt", "Temat", "Wiadomość"]
    },
    footer: "Wrocław & online"
  }
} as const;

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan">{children}</p>;
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow">
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/14">
      {children}
      <ArrowRight size={18} />
    </a>
  );
}

type QuestionFormCopy = {
  name: string;
  namePlaceholder: string;
  contact: string;
  contactPlaceholder: string;
  topic: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  telegram: string;
  mailSubject: string;
  fields: readonly string[];
  labels: readonly string[];
};

function QuestionForm({ t }: { t: QuestionFormCopy }) {
  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(t.mailSubject);
    const body = encodeURIComponent(
      [
        `${t.labels[0]}: ${form.get("name") || ""}`,
        `${t.labels[1]}: ${form.get("contact") || ""}`,
        `${t.labels[2]}: ${form.get("topic") || ""}`,
        "",
        `${t.labels[3]}:`,
        `${form.get("message") || ""}`
      ].join("\n")
    );

    window.location.href = `mailto:contact@igorsmirnovconsulting.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submitQuestion} className="glass grid gap-4 rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/64">{t.name}</span>
          <input name="name" className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-cyan/50" placeholder={t.namePlaceholder} required />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-white/64">{t.contact}</span>
          <input name="contact" className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-cyan/50" placeholder={t.contactPlaceholder} required />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/64">{t.topic}</span>
        <select name="topic" className="rounded-2xl border border-white/10 bg-[#101522] px-4 py-3 text-white outline-none transition focus:border-cyan/50">
          {t.fields.map((field) => <option key={field}>{field}</option>)}
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-white/64">{t.message}</span>
        <textarea name="message" rows={5} className="resize-y rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-cyan/50" placeholder={t.messagePlaceholder} required />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow">
          {t.submit} <ArrowRight size={18} />
        </button>
        <a href="https://t.me/marsell_2021" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-6 py-4 font-semibold text-cyan transition hover:bg-cyan hover:text-ink">
          {t.telegram} <MessageCircle size={18} />
        </a>
      </div>
    </form>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Lang>("ru");
  const t = copy[language];
  const navItems = useMemo(() => t.nav.map((label, index) => ({ label, href: sectionHrefs[index] })), [t.nav]);

  return (
    <>
      <Nav navItems={navItems} cta={t.book} languages={languages} activeLanguage={language} onLanguageChange={(value) => setLanguage(value as Lang)} />

      <main id="top" className="relative overflow-hidden">
        <div className="ambient-grid pointer-events-none absolute inset-x-0 top-0 h-[900px]" />
        <div className="pointer-events-none absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-10 top-56 h-96 w-96 rounded-full bg-violet/20 blur-[140px]" />

        <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 pb-28 pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
          <Reveal>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
              <Sparkles size={16} className="text-cyan" />
              {t.badge}
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
              {t.hero[0]} <span className="gradient-text">{t.hero[1]}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/68">{t.heroText}</p>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="#booking">{t.book}</PrimaryLink>
              <GhostLink href="#services">{t.explore}</GhostLink>
              <a href="#question" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-6 py-4 font-semibold text-cyan transition hover:-translate-y-1 hover:bg-cyan hover:text-ink">
                {t.ask} <MessageCircle size={18} />
              </a>
            </div>
          </Reveal>

          <MotionDiv className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-violet/30 via-cyan/10 to-transparent blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[2.5rem] p-3">
              <Image src="/images/igor-smirnov.jpeg" alt="Igor Smirnov" width={1000} height={1000} priority className="aspect-[4/5] rounded-[2rem] object-cover" />
              <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/12 bg-ink/62 p-5 backdrop-blur-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan">Igor Smirnov</p>
                <p className="mt-1 text-2xl font-semibold">{t.role}</p>
              </div>
            </div>
          </MotionDiv>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.03] py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <Reveal>
              <SectionLabel>{t.aboutLabel}</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{t.aboutTitle}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-2xl leading-10 text-white/76">{t.aboutLead}</p>
              <p className="mt-7 text-lg leading-8 text-white/62">{t.aboutText}</p>
              <p className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-5 leading-8 text-white/66">{t.inclusive}</p>
              <div className="mt-6 rounded-[2rem] border border-cyan/18 bg-gradient-to-br from-cyan/10 via-white/[0.06] to-violet/10 p-6 shadow-glow">
                <h3 className="text-2xl font-semibold leading-tight text-white">{t.therapyTitle}</h3>
                <p className="mt-4 leading-8 text-white/68">{t.therapyText}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{t.therapyThemesTitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.therapyThemes.map((theme) => (
                    <span key={theme} className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/72">
                      {theme}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/58">{t.credentials}</p>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {t.personal.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="glass h-full rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-cyan/30">
                  <CheckCircle2 className="mb-7 text-cyan" size={22} />
                  <p className="text-lg font-semibold text-white">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionLabel>{t.servicesLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.servicesTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-white/64">{t.servicesIntro}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {t.services.map(([title, price, text, href], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="glass group flex min-h-[300px] flex-col justify-between rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan/35 hover:shadow-glow">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan">
                        {index === 0 ? <HeartHandshake size={22} /> : <Users2 size={22} />}
                      </span>
                      <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/70">{price}</span>
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-white/62">{text}</p>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={href} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-ink transition group-hover:bg-cyan">
                      {t.pay} <ArrowRight size={17} />
                    </a>
                    <a href={calendly} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-5 py-3 font-semibold text-white transition hover:bg-white/14">
                      {t.schedule} <CalendarDays size={17} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="couples" className="border-y border-white/10 bg-[radial-gradient(circle_at_20%_15%,rgba(244,114,182,0.16),transparent_32rem),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <Reveal>
              <SectionLabel>{t.couplesLabel}</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.couplesTitle}</h2>
              <p className="mt-7 text-xl leading-9 text-white/72">{t.couplesLead}</p>
              <p className="mt-6 text-lg leading-8 text-white/62">{t.couplesText}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="https://buy.stripe.com/aFa28sdiXfX03ov3XZ9Ve05">{t.couplesCta}</PrimaryLink>
                <GhostLink href={calendly}>{t.schedule}</GhostLink>
                <GhostLink href="https://tetianakozlovska.com/ru/services/semejnaya-psihoterapiya/">{t.more}</GhostLink>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="glass rounded-[2rem] p-8">
                <h3 className="text-2xl font-semibold">{t.couplesItemsTitle}</h3>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {t.couplesItems.map((item) => (
                    <p key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white/72">
                      <CheckCircle2 size={17} className="text-cyan" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="wellbeing" className="relative py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-4xl">
              <SectionLabel>{t.wellbeingLabel}</SectionLabel>
              <h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">{t.wellbeingTitle}</h2>
              <p className="mt-6 text-2xl leading-9 text-cyan">{t.wellbeingSubtitle}</p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">{t.wellbeingText}</p>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {t.formats.map(([title, text], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="h-full rounded-[2rem] border border-cyan/15 bg-gradient-to-br from-cyan/10 via-white/[0.06] to-violet/10 p-7 shadow-glow transition hover:-translate-y-1 hover:border-cyan/35">
                    <BriefcaseBusiness className="mb-8 text-cyan" size={28} />
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-4 leading-7 text-white/64">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {t.trainers.map(([name, text], index) => (
                <Reveal key={name} delay={index * 0.06}>
                  <div className="glass h-full rounded-[2rem] p-7">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <p className="mt-4 leading-8 text-white/64">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.topics.map((topic, index) => (
                <Reveal key={topic} delay={index * 0.03}>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-lg font-semibold text-white/80 transition hover:-translate-y-1 hover:border-cyan/30">
                    {topic}
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10">
              <PrimaryLink href="mailto:contact@igorsmirnovconsulting.com?subject=Training%20proposal%20request">{t.proposal}</PrimaryLink>
            </div>
          </div>
        </section>

        <section id="group-work" className="border-y border-white/10 bg-white/[0.03] py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <SectionLabel>{t.groupLabel}</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.groupTitle}</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {t.benefits.map(([title, text], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <div className="glass h-full rounded-[2rem] p-7 transition hover:-translate-y-1 hover:border-cyan/30">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-4 leading-7 text-white/62">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/ne-vyvozhu">{t.businessGroupLink}</PrimaryLink>
              <GhostLink href="/events">{t.eventsLink}</GhostLink>
            </div>
          </div>
        </section>

        <section id="film-club" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <Reveal className="max-w-3xl">
            <SectionLabel>{t.filmLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.filmTitle}</h2>
            <p className="mt-6 text-xl leading-9 text-white/66">{t.filmText}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {t.filmThemes.map((theme, index) => (
              <Reveal key={theme} delay={index * 0.04}>
                <div className="group min-h-[260px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-5 transition hover:-translate-y-2 hover:border-cyan/30">
                  <div className="grid h-full place-items-end rounded-[1.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.34),transparent_12rem),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.18),transparent_12rem),linear-gradient(180deg,#111827,#030712)] p-5">
                    <div>
                      <Clapperboard className="mb-4 text-cyan" size={26} />
                      <p className="text-xl font-semibold capitalize">{theme}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] py-28">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <div className="glass h-full rounded-[2rem] p-8">
                <SectionLabel>{t.officeLabel}</SectionLabel>
                <h2 className="font-display text-4xl font-semibold tracking-tight">{t.officeTitle}</h2>
                <p className="mt-5 leading-8 text-white/66">{t.officeText}</p>
                <p className="mt-5 flex gap-3 text-lg font-semibold text-white">
                  <MapPin className="mt-1 shrink-0 text-cyan" size={22} />
                  {t.officeAddress}
                </p>
                <a href="https://godnaeu.tilda.ws/wroclaw" className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-5 py-3 font-semibold text-cyan transition hover:bg-cyan hover:text-ink">
                  {t.godna} <ArrowRight size={17} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="glass h-full rounded-[2rem] p-8">
                <SectionLabel>{t.communityLabel}</SectionLabel>
                <h2 className="font-display text-4xl font-semibold tracking-tight">PsyConnect</h2>
                <p className="mt-5 leading-8 text-white/66">{t.communityText}</p>
                <a href="https://psyconnect.eu/about" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-5 py-3 font-semibold text-white transition hover:bg-white/14">
                  {t.psy} <ArrowRight size={17} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="booking" className="relative border-y border-white/10 bg-white/[0.03] py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <Reveal>
              <SectionLabel>{t.bookingLabel}</SectionLabel>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.bookingTitle}</h2>
              <p className="mt-6 text-lg leading-8 text-white/66">{t.bookingText}</p>
              <div className="mt-9">
                <PrimaryLink href={calendly}>{t.openCalendly}</PrimaryLink>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass overflow-hidden rounded-[2rem] p-2">
                <iframe title="Book a consultation with Igor Smirnov" src="https://calendly.com/contact-igorsmirnovconsulting?hide_gdpr_banner=1&background_color=050711&text_color=ffffff&primary_color=22d3ee" className="h-[720px] w-full rounded-[1.6rem] bg-white" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <Reveal className="max-w-4xl">
            <SectionLabel>{t.contactLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.contactTitle}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard icon="mail" label="Email" value="contact@igorsmirnovconsulting.com" href="mailto:contact@igorsmirnovconsulting.com" copyValue="contact@igorsmirnovconsulting.com" />
            <ContactCard icon="telegram" label="Telegram" value="@marsell_2021" href="https://t.me/marsell_2021" copyValue="@marsell_2021" />
            <ContactCard icon="phone" label="Phone" value="+48 572 090 774" href="tel:+48572090774" copyValue="+48572090774" />
            <ContactCard icon="location" label={t.officeLabel} value="Kazimierza Wielkiego 67, B/118" href="https://maps.google.com/?q=Kazimierza%20Wielkiego%2067%20Wroclaw" copyValue={t.officeAddress} />
          </div>
        </section>

        <section id="question" className="mx-auto max-w-7xl px-5 pb-28 lg:px-8">
          <Reveal className="max-w-4xl">
            <SectionLabel>{t.questionLabel}</SectionLabel>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">{t.questionTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-white/66">{t.questionText}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10">
              <QuestionForm t={t.form} />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/40 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Human Strategy Lab. Igor Smirnov Consulting.</p>
          <div className="flex flex-wrap gap-5">
            <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-white">Terms & Conditions</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <span className="inline-flex items-center gap-2"><Globe2 size={15} /> {t.footer}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
