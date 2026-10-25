export type CaseStudy = {
  id: string;
  handle: string;
  name: string;
  members: string;
  annualViews: string;
  weeklyVisitors: string;
  weeklyContributions: string;
  started: string;
  story: string;
  url: string;
  accent: string;
};

export const heroStats = [
  { value: "10+", label: "Subreddits Built" },
  { value: "439K+", label: "Total Members" },
  { value: "100M+", label: "Views Generated" },
  { value: "2-3 mo", label: "0 → 25K+ Growth" },
];

export const approachSteps = [
  {
    n: "01",
    title: "Niche Mapping",
    body: "I study a brand's identity, audience, and content universe then map out multiple distinct niches within it. Each one becomes its own subreddit with its own tone, content strategy, and growth plan. No two communities are identical, even if they serve the same brand.",
  },
  {
    n: "02",
    title: "Parallel Launch",
    body: "All subreddits are built simultaneously from zero. Early content is seeded with precision: each post engineered to rank, engage, and trigger Reddit's algorithm. The goal: reach 1K members fast, then let compounding organic growth take over. Most communities hit 5K within weeks.",
  },
  {
    n: "03",
    title: "Ecosystem Growth",
    body: "As communities grow, they cross-pollinate. Members from one subreddit discover another. Content strategies are coordinated across the ecosystem. The brand ends up owning multiple top-ranking communities in its niche, generating millions of views and a loyal, engaged audience at scale.",
  },
];

export const ecosystemSubreddits = [
  { name: "r/MenOfPurpose", tag: "Purpose & Direction", members: "105K" },
  { name: "r/GrowthMindsetbookclub", tag: "Growth & Mindset", members: "112K" },
  { name: "r/MotivationByDesign", tag: "Motivation & Drive", members: "54.5K" },
  { name: "r/PolymathReading", tag: "Reading & Learning", members: "39K" },
  { name: "r/AttractionDynamics", tag: "Attraction & Relationships", members: "95K" },
  { name: "r/explainlikeimfivebook", tag: "Books Explained Simply", members: "34K" },
];

export const services = [
  "Multi-subreddit ecosystem strategy",
  "Niche identification & audience mapping",
  "Subreddit launch from zero",
  "Content strategy & post engineering",
  "Rapid growth: 5K+ members in weeks",
  "Community moderation & management",
  "Engagement & retention optimization",
  "Cross-community growth coordination",
  "Analytics tracking & reporting",
];

export const totals = [
  { value: "100M+", label: "Views Generated" },
  { value: "300K+", label: "Members Built" },
  { value: "10+", label: "Subreddits Managed" },
  { value: "4-5 mo", label: "Avg. 0 → 25K Growth" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "menofpurpose",
    handle: "r/MenOfPurpose",
    name: "Men Of Purpose",
    members: "105K",
    annualViews: "9.1M",
    weeklyVisitors: "100K+",
    weeklyContributions: "2K+",
    started: "24",
    story:
      "Explosive momentum: 5K by week 2, 10K by week 3. Top post: 1.5M views.",
    url: "https://www.reddit.com/r/MenOfPurpose/",
    accent: "from-emerald-300 to-teal-500",
  },
  {
    id: "growthmindsetbookclub",
    handle: "r/GrowthMindsetbookclub",
    name: "Growth Mindset Book Club",
    members: "112K",
    annualViews: "12M",
    weeklyVisitors: "40K+",
    weeklyContributions: "100+",
    started: "—",
    story: "Built around reading and mindset growth, with members sharing books and takeaways that keep the community coming back.",
    url: "https://www.reddit.com/r/Growthmindsetbookclub/",
    accent: "from-amber-300 to-orange-500",
  },
  {
    id: "motivationbydesign",
    handle: "r/MotivationByDesign",
    name: "Motivation by Design",
    members: "54.5K",
    annualViews: "10.2M",
    weeklyVisitors: "70K+",
    weeklyContributions: "1.8K",
    started: "60",
    story:
      "Hit 5K in 1 month, 10K in 1.5 months, scaled to 54.5K in 4 to 5 months. Top post: 2.1M views.",
    url: "https://www.reddit.com/r/MotivationByDesign/",
    accent: "from-orange-400 to-rose-500",
  },
  {
    id: "polymathreading",
    handle: "r/PolymathReading",
    name: "Polymath Reading",
    members: "39K",
    annualViews: "4M",
    weeklyVisitors: "50K+",
    weeklyContributions: "500+",
    started: "—",
    story: "Built around wide-ranging reading, bringing curious readers together across many subjects.",
    url: "https://www.reddit.com/r/PolymathReading/",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    id: "attractiondynamics",
    handle: "r/AttractionDynamics",
    name: "Attraction Dynamics",
    members: "95K",
    annualViews: "8M",
    weeklyVisitors: "80K+",
    weeklyContributions: "1.1K+",
    started: "—",
    story: "Built around attraction and relationship dynamics, with discussion kept practical and community-led.",
    url: "https://www.reddit.com/r/AttractionDynamics/",
    accent: "from-yellow-300 to-amber-500",
  },
  {
    id: "explainlikeimfivebook",
    handle: "r/explainlikeimfivebook",
    name: "Explain Like I'm Five Book",
    members: "34K",
    annualViews: "2.8M",
    weeklyVisitors: "5K+",
    weeklyContributions: "100+",
    started: "—",
    story: "Built to explain books simply, in plain language anyone can follow.",
    url: "https://www.reddit.com/r/explainlikeimfivebook",
    accent: "from-green-300 to-emerald-500",
  },
];

export const clients = [
  {
    name: "Befreed",
    meta: "7 to 8 Months · 10+ Subreddits",
    subs: [
      "r/MenOfPurpose",
      "r/GrowthMindsetbookclub",
      "r/MotivationByDesign",
      "r/PolymathReading",
      "r/AttractionDynamics",
      "r/explainlikeimfivebook",
      "r/SocialBlueprint",
      "r/PrimeManhood",
      "r/SocialChemistry"
    ],
    note: "+ more subreddits",
  },
  {
    name: "Client 2",
    meta: "Active · Growing",
    subs: [],
    note: "Details available on request",
  },
];
