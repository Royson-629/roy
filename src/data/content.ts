export const aboutStats = {
  cgpa: 9.10,
  shipped: 2,
  championships: 3
};

export const skills = {
  development: [
    { name: 'Core Java', level: 'I speak it fluently' },
    { name: 'Spring Boot', level: 'Backend wizardry' },
    { name: 'Spring Data JPA', level: 'ORM wrangler' },
    { name: 'PostgreSQL', level: 'Data hoarder' },
    { name: 'Spring JDBC', level: 'Old school cool' },
    { name: 'Spring Security', level: 'Gandalf of APIs' },
    { name: 'Java Servlets', level: 'I survived them' },
    { name: 'REST APIs', level: 'Postman\'s best friend' }
  ],
  tools: [
    { name: 'React (Antigravity AI)', level: 'I just watch it code' },
    { name: 'IntelliJ IDEA', level: 'My second home' },
    { name: 'SQL', level: 'SELECT * FROM magic' },
    { name: 'Data Structures', level: 'Array overthinker' }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'AeroJobs',
    description: 'A live tech hiring platform deployed on Render. Built the core business logic and dynamic routing in Spring Boot, while letting AI design the sleek JSP frontend so I could stay happily in my backend comfort zone.',
    stack: ['Java', 'Spring Boot', 'JSP', 'Render'],
    link: 'https://jobportals-2.onrender.com/',
    repo: 'https://github.com/Royson-629/JobPortals',
    tag: 'Spring Boot App',
    image: '/aerojobs.png',
  },
  {
    id: 2,
    title: 'Movie Review System',
    description: 'My very first full MVC web application. Users can submit structured ratings on the frontend while I manage the chaos of JDBC drivers, DAO layers, and MySQL databases under the hood.',
    stack: ['Java Servlets', 'JDBC', 'Maven', 'MySQL'],
    link: 'https://www.linkedin.com/posts/royson-adrin-menezes-a28363311_java-servlets-jdbc-activity-7479538243550515200-Ed-h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE9AtAABlQbUipe7-bEidOQ-YgVWhx4XwLQ',
    repo: 'https://github.com/Royson-629/MovieReview',
    tag: 'MVC Architecture',
    image: '/moviereview.jpg',
  }
];

export const journey = [
  {
    year: '2026',
    title: 'Overall Student Coordinator (IT Fest)',
    description: 'Orchestrated the technical chaos of the university-wide IT Fest. Managed servers, events, and people who forgot their passwords. Basically a professional firefighter.',
  },
  {
    year: '2024-Present',
    title: 'Student Team Lead (BCA)',
    description: 'Captaining my fellow coding nerds at St. Aloysius to secure Overall Championships. We come, we see, we compile without errors.',
  },
  {
    year: '2024',
    title: 'Assistant Head - IT Expo',
    description: 'Bossed around hardware/software lab allocations and made sure participants had working WiFi during the national IT Fest. Peak logistics era.',
  },
  {
    year: '2024-2027',
    title: 'BCA (St. Aloysius)',
    description: 'Opted for a Bachelor of Computer Applications. Found out software engineering is 10% writing code and 90% screaming at NullPointerExceptions.',
  },
  {
    year: '2023',
    title: 'President/VP - YCS',
    description: 'Ran the Surathkal and Katipalla units for Young Catholic Students. Organized youth development initiatives, and ate a lot of free snacks.',
  }
];

export const achievements = [
  {
    title: 'Ideathon Champion',
    date: 'Feb 2026',
    event: 'ENVI 8 (St. Joseph College)',
    description: 'Pitched an idea so good the judges had to give us 1st Place. National Level Technical Fest domination.',
    result: '1st Place',
    image: '/achievements/envi8.jpg',
  },
  {
    title: 'Coding Demigod',
    date: 'Feb 2026',
    event: 'YENAXIA 2026',
    description: 'Out-coded everyone at Yenepoya Institute\'s National Intercollegiate IT Fest. My keyboard was literally on fire (not literally).',
    result: '1st Place',
    image: '/achievements/Yenixia.jpg',
  },
  {
    title: 'Bug Hunter',
    date: '2025',
    event: 'St. Aloysius Inter-Class',
    description: 'Secured 2nd place finding bugs in other people\'s code. Let\'s be honest, breaking things is way more fun than building them.',
    result: '2nd Place',
    image: '/achievements/Bughunter.jpg',
  },
  {
    title: 'Strange Syntax',
    date: '2025',
    event: 'EXCEL',
    description: 'Deciphered chaotic syntax puzzles better than everyone else, taking home gold. Turns out, code that looks like a cat walked on the keyboard is my specialty.',
    result: '1st Place',
    image: '/achievements/StrangeSyntax.jpg',
  },
  {
    title: 'Serial Hacker',
    date: '2024-2026',
    event: 'Various Hackathons',
    description: 'Participated in the intense 32-Hr CodeSprint Hackathon, survived the 8-Hour INNOVISION Ideathon, and battled through the SIH Internal Hackathon on pure caffeine.',
    result: 'Participant',
    image: '/achievements/hackathon.jpg',
  }
];
