// ─────────────────────────────────────────────────────────────
// TideSafe site settings. Edit this file to change contact info,
// prices, tide dates and copy without touching the components.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "TideSafe",
  url: "https://tidesafe.net",
  founder: "Brett",

  phoneDisplay: "714-402-2242",
  phoneHref: "tel:+17144022242",
  email: "service@tidesafe.net",

  // Formspree form ID comes from the NEXT_PUBLIC_FORMSPREE_ID env var (set in Vercel).
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",

  youtubeId: "qw9hg4Tw0OM",

  // The tide the countdown runs to (Pacific time).
  countdownTarget: "2026-12-24T00:00:00-08:00",

  serviceArea: [
    "Balboa Island",
    "Lido Isle",
    "Linda Isle",
    "Harbor Island",
    "Bay Island",
    "Balboa Peninsula",
    "Newport Island",
    "Collins Island",
  ],
};

// NOAA predicted high tides for Newport Beach (NOAA station 9410583), feet above MLLW.
// Source: client spreadsheet "Website stats and content.xlsx".
export const kingTides = [
  { date: "Oct 22", iso: "2026-10-22", noaa: 6.53 },
  { date: "Nov 25", iso: "2026-11-25", noaa: 6.89 },
  { date: "Dec 24", iso: "2026-12-24", noaa: 7.0, peak: true },
  { date: "Jan 22", iso: "2027-01-22", noaa: 6.83 },
];

export const kelvinWaveRange = { min: 0.5, max: 1.0 }; // feet (6 to 12 inches)

export type ServiceKey = "elevation" | "certified";

export const services: {
  key: ServiceKey;
  name: string;
  price: string;
  forWho: string;
  bullets: string[];
  featured?: boolean;
}[] = [
  {
    key: "elevation",
    name: "Property Elevation Assessment",
    price: "$800",
    forWho:
      "For homeowners who can identify past high-tide levels on their property.",
    bullets: [
      "Elevation survey",
      "Measure and document key elevations on your property",
      "Determine extreme high-tide risks and water entry points",
      "Identify potential damage areas at differing elevations",
      "Recommendations and water abatement measures",
    ],
  },
  {
    key: "certified",
    name: "Certified Survey Elevation & Flood Risk Assessment",
    price: "$3,100",
    forWho:
      "For homeowners without knowledge of previous high-tide levels. Replaces the Property Elevation Assessment.",
    bullets: [
      "Certified surveyor elevation report",
      "Detailed site map and elevations",
      "Analysis of current and future high-tide impacts",
      "Recommendations for permanent and temporary flood protection",
      "Use for insurance, permitting, or long-term planning",
    ],
    featured: true,
  },
];

// Photo order runs low to high. Levels marked "TODO confirm" are estimates from the photos.
export const tideSteps = [
  {
    label: "Normal tide",
    short: "Normal",
    level: 4.5,
    src: "/photos-v4/tide-normal.webp",
    note: "A typical day on the harbor. The full face of the seawall and the step below it are showing.",
  },
  {
    label: "Typical high tide",
    short: "High",
    level: 6.0, // TODO confirm
    src: "/photos-v4/tide-high.webp",
    note: "An ordinary high tide. Water climbs the seawall, with about a foot of wall still showing.",
  },
  {
    label: "6.7′ tide",
    short: "6.7′",
    level: 6.7,
    src: "/photos-v4/tide-6-7.webp",
    note: "Water is just below the brick cap of the seawall. There's almost no margin left.",
  },
  {
    label: "7.0′ tide",
    short: "7.0′",
    level: 7.0,
    src: "/photos-v4/tide-7-0.webp",
    note: "About what NOAA predicted on July 22, 2026 (6.97′). Water reaches the top of the wall, right at the edge of the lawn.",
  },
  {
    label: "7.5′ tide + 2 sandbag layers",
    short: "7.5′",
    level: 7.5,
    src: "/photos-v4/tide-7-5.webp",
    note: "This is Dec 24 with a 6″ Kelvin wave. Water is over the seawall, and two layers of sandbags keep the lawn dry.",
  },
  {
    label: "8.0′ tide + 4 sandbag layers",
    short: "8.0′",
    level: 8.0,
    src: "/photos-v4/tide-8-0.webp",
    note: "This is Dec 24 with a 12″ Kelvin wave. The water is well above the seawall, and a 15″ barrier stands between the harbor and the house.",
  },
];

export const faqs = [
  {
    q: "What is a king tide?",
    a: "King tides are the highest tides of the year. They happen when the moon is closest to the Earth and lined up with the sun. In Newport Harbor they arrive in the winter months, usually in the morning. They're predictable years ahead, which means you can prepare.",
  },
  {
    q: "What is a Kelvin wave, and why does it matter this year?",
    a: "A Kelvin wave is a large, slow swell of warm ocean water that travels along the equator and then up the West Coast. It's linked to the strengthening El Niño. It raises the average sea level for weeks or months, so every tide sits higher than NOAA's standard predictions. Scientists and news reports estimate an extra 6 to 12 inches along the California coast this season.",
  },
  {
    q: "Why December 24?",
    a: "NOAA's predicted high tide for Newport Bay on December 24, 2026 is 7.0 feet, the highest of this winter's king tides. If the Kelvin wave adds 6 to 12 inches, water could reach 7.5 to 8.0 feet. That's higher than the July 22 tide that flooded some bayfront homes.",
  },
  {
    q: "Which assessment do I need?",
    a: "If you've seen where past high tides reached on your property (a water line on the seawall, a flooded patio, photos), the $800 Property Elevation Assessment is usually enough. If you don't know, or you need documentation for insurance, permits or a sale, choose the $3,100 Certified Survey, which includes a certified surveyor's elevation report.",
  },
  {
    q: "Can the report be used for insurance or permits?",
    a: "Yes. The Certified Survey Elevation & Flood Risk Assessment is prepared for insurance, permitting and long-term planning.",
  },
  {
    q: "How soon can you come out?",
    a: "We schedule assessments in the order requests come in. Calendars fill up before each king tide, so the sooner you reach out, the more time you'll have to act on the recommendations before December 24.",
  },
];

export const sources = [
  {
    title: "NOAA tide predictions, Newport Bay: Nov 20–29, 2026",
    url: "https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=9410583&units=standard&bdate=20261120&edate=20261129&timezone=LST/LDT&clock=12hour&datum=MLLW&interval=hilo&action=dailychart",
  },
  {
    title: "NOAA tide predictions, Newport Bay: Dec 21–27, 2026",
    url: "https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=9410583&units=standard&bdate=20261221&edate=20261227&timezone=LST/LDT&clock=12hour&datum=MLLW&interval=hilo&action=dailychart",
  },
  {
    title: "NOAA tide predictions, Newport Bay: Jan 18–24, 2027",
    url: "https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=9410583&units=standard&bdate=20270118&edate=20270124&timezone=LST/LDT&clock=12hour&datum=MLLW&interval=hilo&action=dailychart",
  },
  {
    title: "ABC7: El Niño-related Kelvin wave headed for SoCal could bring dangerously high sea levels",
    url: "https://abc7.com/post/el-nio-related-kelvin-wave-headed-socal-could-bring-dangerously-high-sea-levels/19824476/",
  },
  {
    title: "ABC7 News: Kelvin wave could raise sea levels by up to 1 foot, scientists say",
    url: "https://abc7news.com/post/el-nio-driven-kelvin-wave-could-raise-bay-area-sea-levels-1-foot-october-scientists-say/19841795/",
  },
  {
    title: "The Weather Network: What is a planetary-scale Kelvin wave, and why is California worried?",
    url: "https://www.theweathernetwork.com/en/news/science/explainers/explainer-what-is-the-planetary-scale-kelvin-wave-headed-for-california",
  },
  {
    title: "NOAA: Relative sea level trend, Los Angeles (long-term record)",
    url: "https://tidesandcurrents.noaa.gov/sltrends/sltrends_station.shtml?id=9410660",
  },
];
