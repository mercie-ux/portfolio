export const personal = {
  name: "Mercy Mbao",
  role: "Software Developer",
  tagline: "Crafting exceptional digital experiences with modern technologies.",
  bio: "Software Developer specializing in React, React Native, Next.js, and the MERN stack. Passionate about clean code, innovative solutions, and pushing the boundaries of web development. I turn complex problems into elegant, user-friendly interfaces. I also contribute to open source projects, including Bitcoin Core, warnet and other projects in the Bitcoin ecosystem.",
  location: "Nairobi, Kenya",
  email: "njerimercy77@gmail.com",
  phone: "+254703289388",
  available: true,
};

export const skills = [
  { name: "React / Next.js / TypeScript", level: 95, color: "#EC4899" },
  { name: "HTML5 / CSS3 / JavaScript", level: 92, color: "#F59E0B" },
  { name: "React Native", level: 80, color: "#EC4899" },
  { name: "Python · FastAPI · Flask", level: 85, color: "#F59E0B" },
  { name: "Node.js / PostgreSQL / MongoDB", level: 88, color: "#EC4899" },
  { name: "E2E Testing · Playwright · Jest", level: 83, color: "#F59E0B" },
  { name: "DevOps / Docker / CI/CD", level: 82, color: "#EC4899" },
  { name: "Figma / UI/UX Design", level: 78, color: "#F59E0B" },
];

export const projects = [
  {
    id: 1,
    title: "Growth Full Circle",
    category: "Web App",
    description: "A digital platform promoting mental wellness in the workplace. Built for GrowthFullCircle Agency with a focus on employee wellbeing and accessible mental health resources.",
    tags: ["Next.js", "TailwindCSS", "Python", "SQLite3"],
    color: "#EC4899",
    accent: "#18181B",
    size: "large",
    year: "2024",
    live: "https://www.growthfullcircle.com/",
    github: "https://github.com/mercie-ux/GrowthFullCircle.git",
  },
  {
    id: 2,
    title: "SatsFlo",
    category: "Mobile App",
    description: "A mobile menstrual health app tackling the fragmented, solitary way most women track their cycles. SatsFlo combines cycle and symptom tracking with partner visibility, a community thread, and a gift-token wallet, turning a private data log into a supported, shareable health journey.",
    tags: ["React Native", "Expo", "Node.js", "TypeScript"],
    color: "#6EE7B7",
    accent: "#18181B",
    size: "large",
    year: "2024",
    live: "https://satsflo.app",
    github: "https://github.com/DadaDevelopers/SATSFLO-FRONTEND",
  },
  {
    id: 3,
    title: "Farm Produce",
    category: "E-Commerce",
    description: "Agricultural e-commerce platform enabling farmers to list crops and facilitating buyer-seller transactions with organic product delivery.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    color: "#F59E0B",
    accent: "#18181B",
    size: "medium",
    year: "2024",
    live: "https://farm-produce-phi.vercel.app/",
    github: "https://github.com/mercie-ux/FarmProduce",
  },
  {
    id: 4,
    title: "Chama Vault",
    category: "FinTech",
    description: "A digital vault for chamas (informal savings groups) tackling the trust, transparency, and delay problems of manual contribution tracking. Members contribute and borrow via Bitcoin Lightning payments, giving every transaction instant settlement and an auditable record the whole group can trust.",
    tags: ["Next.js", "LNbits API", "Java", "Lightning Network"],
    color: "#A78BFA",
    accent: "#18181B",
    size: "medium",
    year: "2024",
    live: "https://www.chamavault.xyz/",
    github: "https://github.com/DadaDevelopers/dada-devs-labs-dada-lab2",
  },
  {
    id: 5,
    title: "Telegram AI Bot",
    category: "AI App",
    description: "Personal AI chatbot powered by Gemini, answering questions about skills and experience through natural conversational interaction on Telegram.",
    tags: ["Python", "Flask", "Gemini AI", "Telegram API"],
    color: "#38BDF8",
    accent: "#18181B",
    size: "small",
    year: "2024",
    live: "https://t.me/Merciem_bot",
    github: "https://github.com/mercie-ux/telegrambot",
  },
];

export const openSource = [
  {
    project: "Bitcoin Core",
    role: "Authored a PR and reviewed 3 PRs on bitcoin/bitcoin",
    links: [
      { label: "PR #35893 (authored)", url: "https://github.com/bitcoin/bitcoin/pull/35893#issuecomment-5188523240" },
      { label: "PR #35242 (review)", url: "https://github.com/bitcoin/bitcoin/pull/35242#issuecomment-5197530876" },
      { label: "PR #35576 (review)", url: "https://github.com/bitcoin/bitcoin/pull/35576#issuecomment-4804712579" },
      { label: "PR #35310 (review)", url: "https://github.com/bitcoin/bitcoin/pull/35310#pullrequestreview-4779388489" },
    ],
  },
  {
    project: "Bitcoin Core Fees",
    role: "Frontend development on the fee-rate estimation tool",
    links: [{ label: "View repo", url: "https://github.com/2140-dev/bitcoin-core-fees" }],
  },
  {
    project: "Warnet (Bitcoin Dev Kit)",
    role: "Code review",
    links: [{ label: "PR #615", url: "https://github.com/bitcoin-dev-project/warnet/pull/615#discussion_r3631216037" }],
  },
  {
    project: "LNbits",
    role: "Code review",
    links: [{ label: "PR #3987", url: "https://github.com/lnbits/lnbits/pull/3987#issuecomment-4740072006" }],
  },
  {
    project: "Bitcoin PlainTalk",
    role: "Pull request contribution",
    links: [{ label: "PR #17", url: "https://github.com/wandiamugo/bitcoin-plain-talk/pull/17#event-28995646353" }],
  },
  {
    project: "Tech Sisters Kenya",
    role: "Frontend contribution",
    links: [{ label: "PR #2", url: "https://github.com/Tech-Sisters-Kenya/tsk-website/pull/2#event-28647968325" }],
  },
  {
    project: "Tando BTCPay Plugin",
    role: "Pull request contribution",
    links: [{ label: "PR #7", url: "https://github.com/tando-me/Tando-BTCPay-Plugin/pull/7" }],
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/mercie-ux", handle: "@mercie-ux" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mercy-njeri-979201162/", handle: "Mercy Njeri" },
  { name: "Twitter / X", url: "https://x.com/junearsenic7", handle: "@junearsenic7" },
];
