/**
 * Site copy in all supported languages.
 * To whitelabel: rewrite the strings, keep the keys.
 * To add a language: add a code to `languages` and a matching dictionary.
 */

export type Lang = 'en' | 'bg' | 'de' | 'fr' | 'es'

export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'bg', label: 'Български', flag: '🇧🇬' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

const en = {
  nav: {
    home: 'Home',
    about: 'About us',
    services: 'Services',
    work: 'Our work',
    contact: 'Contact us',
    book: 'Book now',
  },
  hero: {
    eyebrow: 'Premium barbershop',
    titleA: 'Sharp looks.',
    titleB: 'Timeless craft.',
    subtitle:
      'Precision cuts, classic hot towel shaves and modern styling — by master barbers who treat every chair like a stage.',
    ctaPrimary: 'Book an appointment',
    ctaSecondary: 'See our work',
    scroll: 'Scroll',
  },
  marquee: [
    'Precision cuts',
    'Hot towel shaves',
    'Beard sculpting',
    'Walk-ins welcome',
    'Master barbers',
  ],
  about: {
    eyebrow: 'About us',
    title: 'More than a haircut — a ritual.',
    p1: "What started as a two-chair shop has grown into the city's home of classic barbering. We blend old school technique — straight razors, hot towels, honest conversation — with a modern eye for style.",
    p2: 'Every barber on our team trains for years before touching a chair. The result: cuts that hold their shape for weeks, fades with seamless gradients, and beards sculpted to fit your face — not a template.',
    stats: {
      years: 'Years of craft',
      clients: 'Happy clients',
      rating: 'Average rating',
    },
  },
  services: {
    eyebrow: 'Services',
    title: 'The menu',
    subtitle:
      'Crafted services, honest prices. Every visit ends with a hot towel and a firm handshake.',
    items: [
      { name: 'Classic Cut', desc: 'Scissor or clipper cut, finished with styling and product advice.' },
      { name: 'Skin Fade', desc: 'Seamless zero-gradient fade, sharp lines, razor-finished neck.' },
      { name: 'Beard Trim & Shape', desc: 'Sculpted to your face, hot towel, oil finish.' },
      { name: 'Hot Towel Shave', desc: 'Traditional straight-razor shave with hot towels and balm.' },
      { name: 'Cut & Beard Combo', desc: 'The full service — cut, beard and hot towel in one sitting.' },
      { name: 'Kids Cut', desc: 'Patient, friendly cuts for gentlemen under 12.' },
    ],
  },
  work: {
    eyebrow: 'Our work',
    title: 'Crafted in the chair',
    subtitle: 'Fresh from the chair — a rotating selection of our latest fades, cuts and beard work.',
  },
  contact: {
    eyebrow: 'Contact us',
    title: 'Come say hello',
    subtitle: 'Drop by, call ahead or book your slot — the chair is waiting.',
    visit: 'Visit us',
    call: 'Call us',
    write: 'Write to us',
    hours: 'Opening hours',
    weekdays: 'Monday – Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    directions: 'Get directions',
    book: 'Book your chair',
    bookHint: "Call or drop us a line — we'll find you a slot.",
  },
  footer: {
    tagline: 'Sharp looks, timeless craft.',
    rights: 'All rights reserved.',
  },
}

export type Dict = typeof en

const bg: Dict = {
  nav: {
    home: 'Начало',
    about: 'За нас',
    services: 'Услуги',
    work: 'Нашата работа',
    contact: 'Контакти',
    book: 'Запази час',
  },
  hero: {
    eyebrow: 'Премиум бръснарница',
    titleA: 'Остър стил.',
    titleB: 'Вечен занаят.',
    subtitle:
      'Прецизни подстригвания, класическо бръснене с гореща кърпа и модерен стайлинг — от майстори бръснари, за които всеки стол е сцена.',
    ctaPrimary: 'Запази час',
    ctaSecondary: 'Виж работата ни',
    scroll: 'Надолу',
  },
  marquee: [
    'Прецизни подстригвания',
    'Бръснене с гореща кърпа',
    'Оформяне на брада',
    'Добре дошли без час',
    'Майстори бръснари',
  ],
  about: {
    eyebrow: 'За нас',
    title: 'Повече от подстригване — ритуал.',
    p1: 'Започнахме като малък салон с два стола, а днес сме домът на класическото бръснарство в града. Съчетаваме старата школа — бръснач, гореща кърпа и истински разговор — с модерен усет за стил.',
    p2: 'Всеки бръснар в екипа ни се обучава години, преди да застане зад стола. Резултатът: подстригвания, които пазят формата си седмици, плавни преходи и брада, оформена за твоето лице — не по шаблон.',
    stats: {
      years: 'Години занаят',
      clients: 'Доволни клиенти',
      rating: 'Среден рейтинг',
    },
  },
  services: {
    eyebrow: 'Услуги',
    title: 'Менюто',
    subtitle:
      'Майсторски услуги, честни цени. Всяко посещение завършва с гореща кърпа и здраво ръкостискане.',
    items: [
      { name: 'Класическо подстригване', desc: 'С ножица или машинка, финал със стайлинг и съвет за продукти.' },
      { name: 'Skin Fade', desc: 'Плавен преход до нула, остри линии, врат с бръснач.' },
      { name: 'Оформяне на брада', desc: 'Извайана за твоето лице, гореща кърпа, финал с олио.' },
      { name: 'Бръснене с гореща кърпа', desc: 'Традиционно бръснене с бръснач, горещи кърпи и балсам.' },
      { name: 'Коса + брада комбо', desc: 'Пълната услуга — подстригване, брада и гореща кърпа наведнъж.' },
      { name: 'Детско подстригване', desc: 'Търпеливи и приятелски подстригвания за господа под 12 г.' },
    ],
  },
  work: {
    eyebrow: 'Нашата работа',
    title: 'Създадено на стола',
    subtitle: 'Прясно от стола — селекция от последните ни фейдове, подстригвания и бради.',
  },
  contact: {
    eyebrow: 'Контакти',
    title: 'Заповядайте при нас',
    subtitle: 'Отбий се, обади се предварително или запази час — столът те чака.',
    visit: 'Посетете ни',
    call: 'Обадете се',
    write: 'Пишете ни',
    hours: 'Работно време',
    weekdays: 'Понеделник – Петък',
    saturday: 'Събота',
    sunday: 'Неделя',
    closed: 'Затворено',
    directions: 'Виж на картата',
    book: 'Запази своя стол',
    bookHint: 'Обади се или ни пиши — ще ти намерим час.',
  },
  footer: {
    tagline: 'Остър стил, вечен занаят.',
    rights: 'Всички права запазени.',
  },
}

const de: Dict = {
  nav: {
    home: 'Start',
    about: 'Über uns',
    services: 'Leistungen',
    work: 'Unsere Arbeit',
    contact: 'Kontakt',
    book: 'Termin buchen',
  },
  hero: {
    eyebrow: 'Premium Barbershop',
    titleA: 'Scharfer Look.',
    titleB: 'Zeitloses Handwerk.',
    subtitle:
      'Präzise Schnitte, klassische Heißtuch-Rasuren und modernes Styling — von Meisterbarbieren, für die jeder Stuhl eine Bühne ist.',
    ctaPrimary: 'Termin buchen',
    ctaSecondary: 'Unsere Arbeit ansehen',
    scroll: 'Scrollen',
  },
  marquee: [
    'Präzise Schnitte',
    'Heißtuch-Rasur',
    'Bartpflege',
    'Ohne Termin willkommen',
    'Meisterbarbiere',
  ],
  about: {
    eyebrow: 'Über uns',
    title: 'Mehr als ein Haarschnitt — ein Ritual.',
    p1: 'Was als kleiner Laden mit zwei Stühlen begann, ist heute die Adresse für klassische Barbierkunst in der Stadt. Wir verbinden alte Schule — Rasiermesser, heiße Tücher, ehrliche Gespräche — mit einem modernen Blick für Stil.',
    p2: 'Jeder Barbier in unserem Team trainiert jahrelang, bevor er an den Stuhl darf. Das Ergebnis: Schnitte, die wochenlang ihre Form halten, nahtlose Fades und Bärte, die zu Ihrem Gesicht passen — nicht zu einer Schablone.',
    stats: {
      years: 'Jahre Handwerk',
      clients: 'Zufriedene Kunden',
      rating: 'Durchschnittsbewertung',
    },
  },
  services: {
    eyebrow: 'Leistungen',
    title: 'Das Menü',
    subtitle:
      'Handwerkliche Leistungen, ehrliche Preise. Jeder Besuch endet mit einem heißen Tuch und einem festen Händedruck.',
    items: [
      { name: 'Klassischer Haarschnitt', desc: 'Schere oder Maschine, Finish mit Styling und Produktberatung.' },
      { name: 'Skin Fade', desc: 'Nahtloser Übergang auf null, scharfe Linien, Nacken mit Rasiermesser.' },
      { name: 'Bartschnitt & Konturen', desc: 'Geformt für Ihr Gesicht, heißes Tuch, Öl-Finish.' },
      { name: 'Heißtuch-Rasur', desc: 'Traditionelle Rasiermesser-Rasur mit heißen Tüchern und Balsam.' },
      { name: 'Haar & Bart Kombi', desc: 'Das volle Programm — Schnitt, Bart und heißes Tuch in einer Sitzung.' },
      { name: 'Kinderhaarschnitt', desc: 'Geduldige, freundliche Schnitte für Gentlemen unter 12.' },
    ],
  },
  work: {
    eyebrow: 'Unsere Arbeit',
    title: 'Am Stuhl gefertigt',
    subtitle: 'Frisch vom Stuhl — eine wechselnde Auswahl unserer neuesten Fades, Schnitte und Bärte.',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Schauen Sie vorbei',
    subtitle: 'Kommen Sie vorbei, rufen Sie an oder buchen Sie Ihren Termin — der Stuhl wartet.',
    visit: 'Besuchen Sie uns',
    call: 'Rufen Sie an',
    write: 'Schreiben Sie uns',
    hours: 'Öffnungszeiten',
    weekdays: 'Montag – Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag',
    closed: 'Geschlossen',
    directions: 'Route anzeigen',
    book: 'Sichern Sie sich Ihren Stuhl',
    bookHint: 'Anrufen oder schreiben — wir finden einen Termin für Sie.',
  },
  footer: {
    tagline: 'Scharfer Look, zeitloses Handwerk.',
    rights: 'Alle Rechte vorbehalten.',
  },
}

const fr: Dict = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    work: 'Nos réalisations',
    contact: 'Contact',
    book: 'Réserver',
  },
  hero: {
    eyebrow: 'Barbershop premium',
    titleA: 'Style affûté.',
    titleB: 'Savoir-faire intemporel.',
    subtitle:
      'Coupes de précision, rasages classiques à la serviette chaude et coiffage moderne — par des maîtres barbiers pour qui chaque fauteuil est une scène.',
    ctaPrimary: 'Réserver un créneau',
    ctaSecondary: 'Voir nos réalisations',
    scroll: 'Défiler',
  },
  marquee: [
    'Coupes de précision',
    'Rasage serviette chaude',
    'Sculpture de barbe',
    'Sans rendez-vous',
    'Maîtres barbiers',
  ],
  about: {
    eyebrow: 'À propos',
    title: "Plus qu'une coupe — un rituel.",
    p1: "Ce qui a commencé comme une échoppe à deux fauteuils est devenu la maison du barbier classique de la ville. Nous mêlons la vieille école — coupe-chou, serviettes chaudes, vraies conversations — à un regard moderne sur le style.",
    p2: "Chaque barbier de l'équipe se forme pendant des années avant de toucher un fauteuil. Résultat : des coupes qui tiennent des semaines, des dégradés sans démarcation et des barbes sculptées pour votre visage — pas pour un gabarit.",
    stats: {
      years: 'Années de métier',
      clients: 'Clients satisfaits',
      rating: 'Note moyenne',
    },
  },
  services: {
    eyebrow: 'Services',
    title: 'La carte',
    subtitle:
      'Des services soignés, des prix honnêtes. Chaque visite se termine par une serviette chaude et une poignée de main franche.',
    items: [
      { name: 'Coupe classique', desc: 'Ciseaux ou tondeuse, finition coiffage et conseils produits.' },
      { name: 'Skin fade', desc: 'Dégradé à blanc sans démarcation, lignes nettes, nuque au rasoir.' },
      { name: 'Taille de barbe', desc: 'Sculptée pour votre visage, serviette chaude, finition à l’huile.' },
      { name: 'Rasage serviette chaude', desc: 'Rasage traditionnel au coupe-chou, serviettes chaudes et baume.' },
      { name: 'Combo coupe + barbe', desc: 'Le service complet — coupe, barbe et serviette chaude en une séance.' },
      { name: 'Coupe enfant', desc: 'Coupes patientes et bienveillantes pour les gentlemen de moins de 12 ans.' },
    ],
  },
  work: {
    eyebrow: 'Nos réalisations',
    title: 'Façonné au fauteuil',
    subtitle: 'Tout juste sortis du fauteuil — une sélection de nos derniers dégradés, coupes et barbes.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Venez nous voir',
    subtitle: 'Passez nous voir, appelez ou réservez votre créneau — le fauteuil vous attend.',
    visit: 'Notre adresse',
    call: 'Appelez-nous',
    write: 'Écrivez-nous',
    hours: 'Horaires',
    weekdays: 'Lundi – Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
    closed: 'Fermé',
    directions: 'Itinéraire',
    book: 'Réservez votre fauteuil',
    bookHint: 'Appelez ou écrivez-nous — on vous trouve un créneau.',
  },
  footer: {
    tagline: 'Style affûté, savoir-faire intemporel.',
    rights: 'Tous droits réservés.',
  },
}

const es: Dict = {
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    work: 'Nuestro trabajo',
    contact: 'Contacto',
    book: 'Reservar',
  },
  hero: {
    eyebrow: 'Barbería premium',
    titleA: 'Estilo afilado.',
    titleB: 'Oficio eterno.',
    subtitle:
      'Cortes de precisión, afeitados clásicos con toalla caliente y estilismo moderno — de manos de maestros barberos para quienes cada silla es un escenario.',
    ctaPrimary: 'Reservar cita',
    ctaSecondary: 'Ver nuestro trabajo',
    scroll: 'Desliza',
  },
  marquee: [
    'Cortes de precisión',
    'Afeitado con toalla caliente',
    'Perfilado de barba',
    'Sin cita previa',
    'Maestros barberos',
  ],
  about: {
    eyebrow: 'Nosotros',
    title: 'Más que un corte — un ritual.',
    p1: 'Lo que empezó como un local de dos sillas es hoy la casa de la barbería clásica de la ciudad. Mezclamos la vieja escuela — navaja, toallas calientes y buena conversación — con una mirada moderna del estilo.',
    p2: 'Cada barbero del equipo se forma durante años antes de tocar una silla. El resultado: cortes que aguantan semanas, degradados sin saltos y barbas esculpidas para tu cara — no para una plantilla.',
    stats: {
      years: 'Años de oficio',
      clients: 'Clientes felices',
      rating: 'Valoración media',
    },
  },
  services: {
    eyebrow: 'Servicios',
    title: 'La carta',
    subtitle:
      'Servicios artesanos, precios honestos. Cada visita termina con una toalla caliente y un buen apretón de manos.',
    items: [
      { name: 'Corte clásico', desc: 'Tijera o máquina, acabado con peinado y consejo de productos.' },
      { name: 'Skin fade', desc: 'Degradado a cero sin saltos, líneas marcadas, nuca a navaja.' },
      { name: 'Arreglo de barba', desc: 'Esculpida para tu cara, toalla caliente, acabado con aceite.' },
      { name: 'Afeitado con toalla caliente', desc: 'Afeitado tradicional a navaja con toallas calientes y bálsamo.' },
      { name: 'Combo corte + barba', desc: 'El servicio completo — corte, barba y toalla caliente en una sesión.' },
      { name: 'Corte infantil', desc: 'Cortes pacientes y amables para caballeros menores de 12.' },
    ],
  },
  work: {
    eyebrow: 'Nuestro trabajo',
    title: 'Hecho en la silla',
    subtitle: 'Recién salido de la silla — una selección de nuestros últimos degradados, cortes y barbas.',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Ven a vernos',
    subtitle: 'Pásate, llama antes o reserva tu hueco — la silla te espera.',
    visit: 'Visítanos',
    call: 'Llámanos',
    write: 'Escríbenos',
    hours: 'Horario',
    weekdays: 'Lunes – Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
    closed: 'Cerrado',
    directions: 'Cómo llegar',
    book: 'Reserva tu silla',
    bookHint: 'Llama o escríbenos — te encontramos hueco.',
  },
  footer: {
    tagline: 'Estilo afilado, oficio eterno.',
    rights: 'Todos los derechos reservados.',
  },
}

export const translations: Record<Lang, Dict> = { en, bg, de, fr, es }
