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
    "SOFTWARE ENGINEER",
  links: {
    linkedin: "https://www.linkedin.com/in/pranto-suwarno-59b014165/",
    github: "https://github.com/Prantoe",
    instagram: "https://www.instagram.com/pranto.soearno/",
    resume: "https://drive.google.com/file/d/1W0pzOo1Gb-W70BYKehOfZ4qaJt7m1_7O/view?usp=sharing",
  },
  education: [
    {
      name: "Universitas Mercubuana Yogyakarta",
      place: "Yogyakarta, Indonesia",
      date: "sep, 2017 - graduate",
      degree: "bachelor of informatics engineering",
      gpa: "",
      description:
        "",
      skills: [
        "Software Engineering",
        "web programming",
        "Graphic design",
        
      ]
    },
  ],
  experience: [
    {
      name: "PT. Valutac Inovasi Kreasi",
      place: "Tangerang Regency, Indonesia",
      date: "Jun, 2022 - present",
      position: "Software Engineer",
      description:
        "",
      skills: ["Django", "Python", "Tailwind", "Node.js", "Json", "Laravel","Codeigniter", "TypeSript", "SQLITE", "Mongodb"]
    },
    {
      name: "Sepasar.id",
      place: "Yogyakarta, Indonesia",
      date: "Okt 2020 - Jan 2022",
      position: "Web Developer",
      description:
        "",
      skills: ["HTML", "CSS", "bootstrap", "Javascript", "es6", "Postman","MSQL"]
    },
    {
      name: "IMKOM academy",
      place: "Yogyakarta, Indonesia",
      date: "Jan, 2019 - Jan, 2020",
      position: "Education Mentor",
      description: "working part time as a graphic design teacher",
      skills: ["Corel Draw", "figma", "Adobe XD", "Photoshop"]
    },
    
  ],
  skills: [
    {
      title: "UX/UI Design and CSS",
      info: ["Figma", "Adobe XD", "Photoshop", "Corel Draw", "Tailwind", "Codeigniter"],
      icon: "fa fa-pencil-square-o",
      description:
        " Diary react app with some new features: Dark mode, upload images, tags, filter search with title/content/tag "
    },
    {
      title: "Language",
      info: [
        "Django", "Python", "PHP", "Javascript", "PayloadCMS",],
      icon: "fa fa-code"
    },
    
    {
      title: "Web technologies",
      info: ["Vue", "Node", "Postman", "GIT", "MongoDb Compass"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    {
      name: "Company Profile Website",
      title: "Sepasar.id",
      pictures: [
        {
          img: require("./src/assets/portfolio/sepasar/laptop.png"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/sepasar/iphone.png"),
          title: "mobile"
        },
      ],
      technologies: ["PHP", "Codeigniter", "Bootstrap"],
      category: "Company Profile Website ",
      github: "https://sepasar.id/",
      date: "Okt, 2021",
      visit: "https://sepasar.id/",
      description:
        "Sepasar.id merupakan sebuah aplikasi yang digunakan untuk mendukung edukasi di Pasar. Pada awal pengembangan ini sepasar pertama kali diimplementasikan di Pasar Sambilegi, Maguwoharjo, Sleman, DIY pada tahun 2020"
    },
    {
      name: "Home Decore website",
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
      technologies: ["Laravel", "Tailwind", "Mysql", "Javascript"],
      category: "Website Furniture",
      github: "",
      date: "Mar, 2022",
      visit: "https://frl-furniture.com/",
      description:
        "FRL Furniture adalah perusahaan yang didirikan pada September 2018 di Jl. Gedongkuning Selatan No 9 B Banguntapan Bantul Yogyakarta, dan mulai menjual dengan sitem online pada tahun 2020"
    },
    {
      name: "healthcare application",
      title: "Perawat.id",
      pictures: [
        {
          img: require("./src/assets/portfolio/perawat/imac.png"),
          title: "Website"
        },
        {
          img: require("./src/assets/portfolio/perawat/iphone.png"),
          title: "Mobile"
        },
        
      ],
      technologies: ["Vue.js", "Node.js", "Tailwind"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2022",
      visit: "https://perawat.id/",
      description:
        "Perawat.ID berlokasi di Jakarta memberikan solusi untuk perawatan dirumah oleh tenaga medis yang profesional dan berpengalaman. Dengan bantuan teknologi memudahkan pasien dalam mendapatkan layanan prima dari perawat dan dokter dirumah sendiri."
    },
    
  ],
};

export default info;
