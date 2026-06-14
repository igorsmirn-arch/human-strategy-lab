export type Lang = "ru" | "en" | "be" | "pl";

export type LocalizedText = Record<Lang, string>;

export type EventItem = {
  id: string;
  type: "film-club" | "therapy-group" | "business-group" | "workshop" | "other";
  date: string;
  location: string;
  image?: string;
  registrationUrl: string;
  title: LocalizedText;
  description: LocalizedText;
  details: LocalizedText;
  tags: LocalizedText[];
};

export const events: EventItem[] = [
  {
    id: "katya-ermak-group",
    type: "therapy-group",
    date: "Подробности на странице группы",
    location: "Wrocław",
    registrationUrl: "https://katyaermak.tilda.ws/group",
    title: {
      ru: "Терапевтическая группа во Вроцлаве",
      en: "Therapy group in Wrocław",
      be: "Тэрапеўтычная група ва Уроцлаве",
      pl: "Grupa terapeutyczna we Wrocławiu"
    },
    description: {
      ru: "Анонс терапевтической группы с подробным описанием формата, ведущих и условий участия на отдельной странице.",
      en: "Announcement of a therapy group with details about the format, facilitators, and participation conditions on a dedicated page.",
      be: "Анонс тэрапеўтычнай групы з падрабязным апісаннем фармату, вядучых і ўмоваў удзелу на асобнай старонцы.",
      pl: "Zapowiedź grupy terapeutycznej ze szczegółami formatu, prowadzących i warunków uczestnictwa na osobnej stronie."
    },
    details: {
      ru: "Переходите по ссылке, чтобы посмотреть полное описание и записаться.",
      en: "Open the link to read the full description and register.",
      be: "Перайдзіце па спасылцы, каб паглядзець поўнае апісанне і запісацца.",
      pl: "Otwórz link, aby przeczytać pełny opis i zapisać się."
    },
    tags: [
      { ru: "группа", en: "group", be: "група", pl: "grupa" },
      { ru: "Вроцлав", en: "Wrocław", be: "Уроцлаў", pl: "Wrocław" },
      { ru: "терапия", en: "therapy", be: "тэрапія", pl: "terapia" }
    ]
  },
  {
    id: "ne-vyvozhu-business-group",
    type: "business-group",
    date: "Старт — 18 сентября 2026",
    location: "Wrocław",
    registrationUrl: "/ne-vyvozhu",
    title: {
      ru: "«Не вывожу.» — группа о работе, выгорании и опоре",
      en: "“I can’t carry this anymore” — work, burnout, and support group",
      be: "«Не вывожу.» — група пра працу, выгаранне і апору",
      pl: "„Nie daję rady” — grupa o pracy, wypaleniu i oparciu"
    },
    description: {
      ru: "Очная терапевтическая группа во Вроцлаве для тех, кто ищет работу, строит бизнес в эмиграции, живет в профессиональном стрессе или сталкивается с синдромом самозванца.",
      en: "An in-person therapy group in Wrocław for people looking for work, building business in migration, living with professional stress, or facing impostor syndrome.",
      be: "Асабістая тэрапеўтычная група ва Уроцлаве для тых, хто шукае працу, будуе бізнес у эміграцыі, жыве ў прафесійным стрэсе або сутыкаецца з сіндромам самазванца.",
      pl: "Stacjonarna grupa terapeutyczna we Wrocławiu dla osób szukających pracy, rozwijających biznes na emigracji, żyjących w stresie zawodowym albo mierzących się z syndromem oszusta."
    },
    details: {
      ru: "2 раза в месяц, пятницы 18:00-21:00. 10-12 участников. 150 zł за встречу. Ведущие: Игорь Смирнов и Екатерина Ермак.",
      en: "Twice a month, Fridays 18:00-21:00. 10-12 participants. 150 zł per meeting. Facilitators: Igor Smirnov and Ekaterina Ermak.",
      be: "2 разы на месяц, пятніцы 18:00-21:00. 10-12 удзельнікаў. 150 zł за сустрэчу. Вядучыя: Ігар Смірноў і Кацярына Ермак.",
      pl: "2 razy w miesiącu, piątki 18:00-21:00. 10-12 uczestników. 150 zł za spotkanie. Prowadzący: Igor Smirnov i Ekaterina Ermak."
    },
    tags: [
      { ru: "выгорание", en: "burnout", be: "выгаранне", pl: "wypalenie" },
      { ru: "эмиграция", en: "migration", be: "эміграцыя", pl: "emigracja" },
      { ru: "работа", en: "work", be: "праца", pl: "praca" }
    ]
  },
  {
    id: "business-therapy-group",
    type: "business-group",
    date: "Дата будет объявлена",
    location: "Wrocław / online",
    registrationUrl: "https://forms.gle/replace-with-your-business-group-form",
    title: {
      ru: "Терапевтическая группа для предпринимателей",
      en: "Therapy-informed group for entrepreneurs",
      be: "Тэрапеўтычная група для прадпрымальнікаў",
      pl: "Grupa terapeutyczna dla przedsiębiorców"
    },
    description: {
      ru: "Закрытая группа для тех, кто несет много ответственности, живет в высокой нагрузке и хочет говорить честно о стрессе, одиночестве, деньгах, власти, усталости и опоре.",
      en: "A closed group for people carrying high responsibility who want an honest space for stress, loneliness, money, power, fatigue, and support.",
      be: "Закрытая група для тых, хто нясе шмат адказнасці і хоча сумленна гаварыць пра стрэс, адзіноту, грошы, уладу, стомленасць і апору.",
      pl: "Zamknięta grupa dla osób z dużą odpowiedzialnością, które chcą rozmawiać szczerze o stresie, samotności, pieniądzach, władzy, zmęczeniu i oparciu."
    },
    details: {
      ru: "Формат: регулярные встречи в небольшой группе. Подходит предпринимателям, руководителям и специалистам, которые сталкиваются с выгоранием, синдромом самозванца и сложными решениями.",
      en: "Format: regular meetings in a small group. For entrepreneurs, leaders, and specialists facing burnout, impostor feelings, and difficult decisions.",
      be: "Фармат: рэгулярныя сустрэчы ў невялікай групе. Для прадпрымальнікаў, кіраўнікоў і спецыялістаў, якія сутыкаюцца з выгараннем, сіндромам самазванца і складанымі рашэннямі.",
      pl: "Format: regularne spotkania w małej grupie. Dla przedsiębiorców, liderów i specjalistów mierzących się z wypaleniem, syndromem oszusta i trudnymi decyzjami."
    },
    tags: [
      { ru: "предприниматели", en: "entrepreneurs", be: "прадпрымальнікі", pl: "przedsiębiorcy" },
      { ru: "выгорание", en: "burnout", be: "выгаранне", pl: "wypalenie" },
      { ru: "ответственность", en: "responsibility", be: "адказнасць", pl: "odpowiedzialność" }
    ]
  },
  {
    id: "cinematic-reflection-club",
    type: "film-club",
    date: "Следующая дата скоро",
    location: "Wrocław",
    registrationUrl: "https://forms.gle/replace-with-your-film-club-form",
    title: {
      ru: "Cinematic Reflection Club",
      en: "Cinematic Reflection Club",
      be: "Cinematic Reflection Club",
      pl: "Cinematic Reflection Club"
    },
    description: {
      ru: "Киновстречи, где фильм становится поводом поговорить о себе, отношениях, близости, выборе и том, как мы встречаемся с миром.",
      en: "Film meetings where cinema becomes a way to speak about ourselves, relationships, closeness, choice, and contact with the world.",
      be: "Кінасустрэчы, дзе фільм становіцца нагодай пагаварыць пра сябе, адносіны, блізкасць, выбар і кантакт са светам.",
      pl: "Spotkania filmowe, w których kino staje się sposobem rozmowy o sobie, relacjach, bliskości, wyborze i kontakcie ze światem."
    },
    details: {
      ru: "Можно использовать эту карточку как шаблон: замените дату, описание, ссылку на Google Form и при необходимости добавьте изображение.",
      en: "Use this card as a template: replace the date, description, Google Form link, and optionally add an image.",
      be: "Можна выкарыстоўваць гэтую картку як шаблон: замяніце дату, апісанне, спасылку на Google Form і пры патрэбе дадайце выяву.",
      pl: "Możesz użyć tej karty jako szablonu: zmień datę, opis, link do Google Form i opcjonalnie dodaj obraz."
    },
    tags: [
      { ru: "кино", en: "cinema", be: "кіно", pl: "kino" },
      { ru: "отношения", en: "relationships", be: "адносіны", pl: "relacje" },
      { ru: "разговор", en: "conversation", be: "размова", pl: "rozmowa" }
    ]
  }
];
