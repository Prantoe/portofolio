let info = {
  name: "Pranto Soearno",
  logo_name: "Pranto",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  job:
    "SOFTWARE ENGINEER | FULLSTACK DEVELOPER | GENERATIVE AI & SYSTEM INTEGRATION",
  links: {
    linkedin: "https://www.linkedin.com/in/pranto-suwarno-59b014165/",
    github: "https://github.com/Prantoe",
    instagram: "https://www.instagram.com/pranto.soearno/",
    resume: "https://drive.google.com/drive/folders/1jlAXaFEXNAFX9M90eX-bATOrHpCRhZ0r?usp=drive_link",
  },
  education: [
    {
      name: "Universitas Mercubuana Yogyakarta",
      place: "Yogyakarta, Indonesia",
      date: "Sep, 2017 - Graduate",
      degree: "Bachelor of Informatics Engineering",
      gpa: "3.33 / 4.00",
      description:
        "Studied core computer science and software engineering topics including web programming, software architecture, and graphic design.",
      skills: [
        "Software Engineering",
        "Web Programming",
        "Graphic Design",
      ]
    },
  ],
  experience: [
    {
      name: "InMotion Inovasi Teknologi",
      place: "Jakarta, Indonesia",
      date: "Mar, 2025 - Present",
      position: "Software Engineer / Frontend Developer",
      description:
        "Developed scalable frontend applications for Generative AI, live chat, and analytics systems. Built reusable enterprise dashboards and integrated APIs, AI services, WhatsApp and live-agent systems.",
      skills: ["React.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Zustand", "WebSockets", "Generative AI", "RAG"]
    },
    {
      name: "PT. Valutac Inovasi Kreasi",
      place: "Tangerang Regency, Indonesia",
      date: "Jun, 2022 - Jan, 2025",
      position: "Software Engineer",
      description:
        "Designed backend architecture and built REST APIs using PayloadCMS and Django REST Framework. Implemented Elasticsearch for search optimization and managed Docker deployment.",
      skills: ["Django", "Python", "PayloadCMS", "Node.js", "TypeScript", "Elasticsearch", "Docker", "MongoDB"]
    },
    {
      name: "Sepasar.id",
      place: "Yogyakarta, Indonesia",
      date: "Oct, 2020 - Oct, 2021",
      position: "Web Developer",
      description:
        "Built web applications and dashboards using Laravel. Managed and optimized MySQL databases for a marketplace platform supporting traditional market education.",
      skills: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"]
    },
  ],
  skills: [
    {
      title: "Frontend",
      info: ["React.js", "Nuxt.js", "Vue.js", "Vite", "Tailwind CSS", "Material UI", "Zustand"],
      icon: "fa fa-desktop",
      description: "Building responsive and scalable frontend applications with modern frameworks and state management."
    },
    {
      title: "Backend & Language",
      info: ["Node.js", "TypeScript", "Python", "Django REST Framework", "PayloadCMS", "Laravel", "Lumen", "PHP"],
      icon: "fa fa-code",
      description: "Designing and building robust REST APIs and backend architectures for enterprise-grade applications."
    },
    {
      title: "Database & Tools",
      info: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Elasticsearch", "Docker", "Git", "Postman"],
      icon: "fas fa-laptop-code",
      description: "Managing databases, deployment pipelines, and developer tooling for scalable systems."
    },
    {
      title: "AI & Integration",
      info: ["Generative AI", "RAG", "WebSockets", "RESTful API", "System Integration", "WhatsApp API"],
      icon: "fa fa-cogs",
      description: "Building AI-powered applications, real-time communication systems, and third-party integrations."
    },
    {
      title: "Design",
      info: ["Figma", "Adobe XD", "Photoshop", "Corel Draw"],
      icon: "fa fa-pencil-square-o",
      description: "Creating UI/UX designs and prototypes with industry-standard design tools."
    },
  ],
  portfolio_design: [
    {
      name: "Generative AI Widget",
      title: "Bank Danamon",
      pictures: [
        {
          img: require("./src/assets/portfolio/danamon/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/danamon/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["TypeScript", "React.js", "Zustand", "Postman"],
      category: "AI Application",
      github: "",
      date: "2025",
      visit: "",
      description:
        "Widget chat interaktif yang terintegrasi dengan LLM (Large Language Model), dibangun menggunakan ReactJS dan Zustand. Fitur: percakapan real-time, tampilan responsif, draggable, riwayat percakapan, dan penyimpanan pesan favorit. Dikembangkan untuk kebutuhan internal Bank Danamon."
    },
    {
      name: "Learning Management System",
      title: "BPK Penabur LMS",
      pictures: [
        {
          img: require("./src/assets/portfolio/lms/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/lms/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["TypeScript", "PayloadCMS", "MongoDB", "Elasticsearch", "Docker"],
      category: "Education Platform",
      github: "",
      date: "2023",
      visit: "",
      description:
        "Merancang dan membangun arsitektur backend menggunakan TypeScript, mengembangkan RESTful API dengan PayloadCMS, mengelola database MongoDB, mengoptimalkan pencarian dengan Elasticsearch, serta melakukan deployment menggunakan Docker."
    },
    {
      name: "Inventori System",
      title: "Inventori BPK Penabur",
      pictures: [
        {
          img: require("./src/assets/portfolio/inventori/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/inventori/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["TypeScript", "Nuxt.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Docker"],
      category: "Internal System",
      github: "",
      date: "2023",
      visit: "",
      description:
        "Merancang dan membangun sistem Inventory internal BPK Penabur menggunakan TypeScript dan Nuxt.js di frontend, mengelola backend dengan Supabase dan database PostgreSQL, serta menerapkan Tailwind CSS untuk UI dan Docker untuk deployment."
    },
    {
      name: "Profilling System",
      title: "Profilling BPK Penabur",
      pictures: [
        {
          img: require("./src/assets/portfolio/profilling/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/profilling/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["TypeScript", "PayloadCMS", "MongoDB", "Docker"],
      category: "Internal System",
      github: "",
      date: "2024",
      visit: "",
      description:
        "Merancang dan membangun sistem Profilling seperti Psikotes menggunakan TypeScript, mengembangkan backend dengan PayloadCMS, mengelola database MongoDB, serta melakukan deployment dengan Docker."
    },
    {
      name: "Healthcare Platform",
      title: "Perawat.id",
      pictures: [
        {
          img: require("./src/assets/portfolio/perawat/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/perawat/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["Python", "Django REST Framework", "MongoDB", "RabbitMQ"],
      category: "Healthcare Application",
      github: "",
      date: "2022",
      visit: "https://perawat.id/",
      description:
        "Merancang dan membangun backend untuk Perawat.id menggunakan Python (Django Rest Framework), mengelola database dengan MongoDB, serta mengimplementasikan RabbitMQ untuk message queue guna meningkatkan efisiensi komunikasi antar layanan."
    },
    {
      name: "Marketplace Platform",
      title: "Sepasar.id",
      pictures: [
        {
          img: require("./src/assets/portfolio/sepasar/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/sepasar/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["Lumen", "Laravel", "MySQL"],
      category: "Company Profile Website",
      github: "",
      date: "Oct, 2021",
      visit: "https://sepasar.id/",
      description:
        "Merancang dan membangun backend untuk Sepasar.id menggunakan Lumen untuk API services, mengembangkan web platform dengan Laravel, serta mengelola database dengan MySQL untuk memastikan performa dan skalabilitas sistem."
    },
    {
      name: "CRM System",
      title: "ASAK St. Monika",
      pictures: [
        {
          img: require("./src/assets/portfolio/asak/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/asak/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["Laravel", "MySQL", "Postman"],
      category: "CRM Application",
      github: "",
      date: "2022",
      visit: "",
      description:
        "Sistem CRM (Constituent Relationship Management) yang dirancang untuk yayasan Kristen dalam mengelola proses donasi, penyaluran beasiswa, dan program orang tua asuh bagi pelajar yatim. Mendukung pengelolaan relasi antara donatur, anak asuh, serta administrasi yayasan."
    },
    {
      name: "Investment Platform",
      title: "PHB Investment",
      pictures: [
        {
          img: require("./src/assets/portfolio/phb/laptop.jpeg"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/phb/iphone.jpeg"),
          title: "Mobile"
        },
      ],
      technologies: ["TypeScript", "React Native"],
      category: "Mobile Application",
      github: "",
      date: "2024",
      visit: "",
      description:
        "Platform investasi digital milik Pelaburan Hartanah Berhad (PHB) yang dirancang untuk memudahkan investor dalam mengakses, mengelola, dan memantau portofolio investasi properti mereka secara online. Dikembangkan menggunakan React Native."
    },
    {
      name: "Home Decor Website",
      title: "frl-furniture.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/frl/notebook.png"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/frl/iphone.png"),
          title: "Mobile"
        },
      ],
      technologies: ["Laravel", "Tailwind", "MySQL", "JavaScript"],
      category: "E-Commerce Website",
      github: "",
      date: "Mar, 2022",
      visit: "https://frl-furniture.com/",
      description:
        "FRL Furniture adalah perusahaan furniture yang didirikan pada September 2018 di Yogyakarta. Membangun platform e-commerce dengan sistem katalog produk, manajemen pesanan, dan optimasi database MySQL."
    },
  ],
};

export default info;
