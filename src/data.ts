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
  { value: "290K+", label: "Total Members" },
  { value: "100M+", label: "Views Generated" },
  { value: "4-5 mo", label: "0 → 25K+ Growth" },
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
  { name: "r/MotivationByDesign", tag: "Motivation & Drive", members: "54.5K" },
  { name: "r/RelentlessMen", tag: "Resilience & Grit", members: "42.3K" },
  { name: "r/MenOfPurpose", tag: "Purpose & Direction", members: "44.1K" },
  { name: "r/PotentialUnlocked", tag: "Growth & Potential", members: "22.9K" },
  { name: "r/SelfDevDaily", tag: "Habits & Self-Improvement", members: "16K" },
  { name: "r/psychesystems", tag: "Psychology & mindset", members: "39.9K" },
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
    id: "motivationbydesign",
    handle: "r/MotivationByDesign",
    name: "Motivation by Design",
    members: "54.5K",
    annualViews: "10.2M",
    weeklyVisitors: "330K+",
    weeklyContributions: "5.5K+",
    started: "60",
    story:
      "Hit 5K in 1 month, 10K in 1.5 months, scaled to 54.5K in 4 to 5 months. Top post: 2.1M views.",
    url: "https://www.reddit.com/r/MotivationByDesign/",
    accent: "from-orange-400 to-rose-500",
  },
  {
    id: "relentlessmen",
    handle: "r/RelentlessMen",
    name: "Relentless Men",
    members: "42.3K",
    annualViews: "6.4M",
    weeklyVisitors: "220K+",
    weeklyContributions: "4.2K+",
    started: "60",
    story:
      "Hit 5K in 1 month, 10K in 1.5 months, scaled to 42.3K in 4 to 5 months. Top post: 1.1M views.",
    url: "https://www.reddit.com/r/RelentlessMen/",
    accent: "from-amber-300 to-orange-500",
  },
  {
    id: "menofpurpose ",
    handle: "r/MenOfPurpose",
    name: "Men Of Purpose",
    members: "44.1K",
    annualViews: "5.1M",
    weeklyVisitors: "150K+",
    weeklyContributions: "5k+",
    started: "24",
    story:
      "Explosive momentum: 5K by week 2, 10K by week 3. Top post: 1.5M views.",
    url: "https://www.reddit.com/r/MenOfPurpose/",
    accent: "from-emerald-300 to-teal-500",
  },
  {
    id: "potentialunlocked",
    handle: "r/PotentialUnlocked",
    name: "Potential Unlocked",
    members: "22.9K",
    annualViews: "1.6M",
    weeklyVisitors: "32K+",
    weeklyContributions: "1.1K+",
    started: "20",
    story:
      "Hit 5K in 1 month, 10K in 1.5 months, scaled to 22.9K in 4 to 5 months.",
    url: "https://www.reddit.com/r/PotentialUnlocked/",
    accent: "from-yellow-300 to-amber-500",
  },
  {
    id: "psychesystems",
    handle: "r/psychesystems",
    name: "Psyche Systems",
    members: "39.9K",
    annualViews: "1M",
    weeklyVisitors: "35.3K",
    weeklyContributions: "706",
    started: "16",
    story:
      "112 members by week 2. Scaled to 39.9K, 38.9K net members gained in 4 to 5 months.",
    url: "https://www.reddit.com/r/psychesystems/",
    accent: "from-violet-400 to-fuchsia-500",
  },
  {
    id: "selfdevdaily",
    handle: "r/SelfDevDaily",
    name: "Self Dev Daily",
    members: "16K",
    annualViews: "3.2M",
    weeklyVisitors: "1K+",
    weeklyContributions: "500+",
    started: "10",
    story:
      "Hit 2.5K in 1 month, 5K in 1.5 months, scaled to 16K in 4 to 5 months.",
    url: "https://www.reddit.com/r/SelfDevDaily/",
    accent: "from-green-300 to-emerald-500",
  },


];

export const clients = [
  {
    name: "Befreed",
    meta: "7 to 8 Months · 10+ Subreddits",
    subs: [
      "r/MotivationByDesign",
      "r/RelentlessMen",
      "r/MenOfPurpose",
      "r/PotentialUnlocked",
      "r/SelfDevDaily",
      "r/PsycheSystems",
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
