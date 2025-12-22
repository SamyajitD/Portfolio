// Profile data for Samyajit Das
// Easy to edit - just update the values below

export const profile = {
  name: "Samyajit Das",
  title: "Software Engineer & Competitive Programmer",
  location: "West Bengal, India",
  email: "samyajitd@gmail.com",
  phone: "+91-9749766904",
  linkedin: "https://linkedin.com/in/samyajit-das",
  github: "https://github.com/SamyajitD",
  tagline: "Building scalable systems & solving algorithmic challenges",
  about: `I'm a Computer Science student at IIEST Shibpur with a passion for building efficient, 
scalable software solutions. My experience spans from cloud infrastructure at Google to 
full-stack web development. I thrive on competitive programming challenges and have 
achieved top rankings on major platforms including CodeChef (5-star), Codeforces (Candidate Master), 
and LeetCode (Knight).`
};

export const education = [
  {
    institution: "Indian Institute of Engineering Science and Technology, Shibpur",
    location: "West Bengal, India",
    degree: "B.Tech. in Computer Science and Technology",
    score: "CGPA: 8.7/10.00",
    duration: "Nov 2022 – May 2026 (Expected)"
  },
  {
    institution: "Stepping Stone Model School, New Alipurduar",
    location: "West Bengal, India",
    degree: "Higher Secondary Education",
    score: "ISC Boards: 96%",
    duration: "May 2019 – Apr 2021"
  }
];

export const experience = [
  {
    company: "Google",
    location: "Karnataka, India",
    role: "Software Engineering Intern",
    duration: "May 2025 – Aug 2025",
    highlights: [
      "Built a Go + Kubernetes test framework to validate cloud billing behaviors in air-gapped environments; surfaced configuration discrepancies pre-launch and drove fixes with partner teams.",
      "Parallelized test runners and containerized validation jobs; cut end-to-end test cycle time by 37% and increased job throughput under CI.",
      "Executed rigorous billing verification for Google Distributed Cloud (Air-Gapped); ≤0.001% variance versus reference calculations in controlled environments."
    ]
  },
  {
    company: "Friends Transport Company",
    location: "Remote",
    role: "Freelance MERN Developer",
    duration: "Jan 2025 – Feb 2025",
    highlights: [
      "Shipped a MERN web app that automated daily fleet transactions; moved the team from spreadsheets to web workflows, handling 150+ transactions/day with auth, form validations, and admin controls.",
      "Reduced ops time by 58% by templating invoices/work orders and adding bulk actions; cut input errors via server-side checks and idempotent endpoints.",
      "Deployed on Render + MongoDB Atlas with backup/retention; observed 99.9% 30-day uptime during pilot."
    ]
  }
];

export const projects = [
  {
    title: "LeetHelper",
    subtitle: "LeetCode Similar Problem Suggester",
    description: "A problem suggestion engine for LeetCode that uses cosine similarity on solution code vectors to recommend similar problems, enhancing algorithm learning efficiency.",
    tech: ["Python", "JavaScript", "OpenAI", "Tailwind CSS", "NLP"],
    highlights: [
      "Applied cosine similarity to solution code vectors for intelligent problem recommendations",
      "Built an intelligent support bot analyzing 2,862 solutions with OpenAI",
      "Achieved 43% reduction in processing time through NLP optimization"
    ],
    github: "https://github.com/SamyajitD/leethelper",
    live: "https://leet-helper.vercel.app"
  }
  // Add more projects here
];

export const techStack = {
  languages: [
    { name: "Java", icon: "java" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "Go", icon: "go" },
    { name: "C++", icon: "cplusplus" },
    { name: "C", icon: "c" },
    { name: "MySQL", icon: "mysql" }
  ],
  technologies: [
    { name: "Git", icon: "git" },
    { name: "Spring Boot", icon: "spring" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Prometheus", icon: "prometheus" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Docker", icon: "docker" }
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Object Oriented Design",
    "Machine Learning",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Computer Architecture"
  ]
};

export const achievements = {
  hackathons: [
    {
      title: "Amazon ML Challenge 2025",
      result: "1st Runner-Up",
      detail: "Ranked 2nd out of 20,000 teams across India (80,000+ individuals)",
      icon: "🏆"
    }
    // Add more hackathon achievements here
  ],
  competitiveProgramming: [
    {
      platform: "CodeChef",
      achievement: "5-Star Coder",
      detail: "Maximum rating of 2057, top 0.7% worldwide",
      highlight: "Global Rank 43 (div1) out of 26000+ participants in Starters 215",
      link: "https://codechef.com/users/samyajitdas",
      icon: "⭐"
    },
    {
      platform: "Codeforces",
      achievement: "Candidate Master",
      detail: "Top 3% worldwide with max rating 1910",
      highlight: "Global Rank 407 in Codeforces Round 1070 (div 2) (4 problems in 57 min)",
      link: "https://codeforces.com/profile/samyajit125",
      icon: "🎯"
    },
    {
      platform: "LeetCode",
      achievement: "Knight Badge",
      detail: "Top 2.07% worldwide with max rating 2057",
      highlight: "Global Rank 419 in Weekly Contest 480",
      link: "https://leetcode.com/samyajitdas",
      icon: "⚔️"
    }
  ],
  contests: [
    {
      title: "AlgoManiac Contest",
      result: "3rd Place",
      detail: "Convolution 9.0 at Jadavpur University",
      icon: "🥉"
    },
    {
      title: "CyberBlame Contest",
      result: "3rd Place",
      detail: "Annual departmental fest of IIEST Shibpur",
      icon: "🥉"
    }
    // Add more contest achievements here
  ]
};

export const organizations = [
  {
    name: "CodeIIEST — GDSC IIEST",
    role: "Secretary — Co-Lead",
    description: "Facilitated several inter-college competitions in technical fests with 80-100+ participants"
  }
];
