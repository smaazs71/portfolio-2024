export const headerLinks = [
  {
    title: "Portfolio",
    section: "portfolio",
    icon: "/navbar-icons/portfolio-icon.svg",
  },
  {
    title: "Journey",
    section: "journey",
    icon: "/navbar-icons/journey-icon.svg",
  },
  {
    title: "Education",
    section: "education",
    icon: "/navbar-icons/education-icon.svg",
  },
  {
    title: "Eminence",
    section: "eminence",
    icon: "/navbar-icons/eminence-icon.svg",
  },
  {
    title: "Contact",
    section: "contact",
    icon: "/navbar-icons/contact-icon.svg",
  },
];

export const projects = [
  {
    id: "job_4",
    name: "CloudHire",
    description:
      "<p>At <strong>Cloudhire</strong>, I spearhead the development of scalable, cloud-based solutions for <strong>cloudhire.ai</strong> using <mark>MERN, Python, and AWS Cloud</mark>. In my role as a Full Stack Developer (Jan 2025 – Current), I implemented advanced credit systems, automated the conversion of WebM videos to HLS via AWS Lambda triggered by SQS, and developed a ChatGPT-powered tool to generate AI-based resumes. I also resolved critical MongoDB query issues, fixed API and CORS errors, integrated Aadhaar/PAN validation APIs, streamlined interview scheduling with Calendly, and consolidated our codebase using a MonoRepo architecture. Previously, as a Senior Backend Developer (Apr 2024 – Dec 2024), I architected high-availability APIs, built AI-driven resume parsing and interview scoring tools using ChatGPT and Whisper, designed AWS S3-based storage solutions, automated document workflows, developed a Chrome extension for job board data extraction, and implemented CI/CD pipelines on AWS EC2 with integrated PhonePe payment processing and ETL pipelines for data migration.</p>",
    category: "job",
    stack:
      "Express.js, OpenAI API, AWS, MERN, Amazon S3, GitHub Actions, Node.js, Next.js, Python, AWS Lambda, MongoDB, Amazon SQS, AWS EC2, Selenium, Ffmpeg, Mongoose ODM, Private Server, Batch Processing",
    year: "April 2024 - current",
    key_words:
      "Cloudhire, Full Stack, AI, AWS, MERN, Python, CI/CD, Payment Integration, Video Conversion, Resume Parsing, MonoRepo, Chrome Extension",
    src_code_url: "",
    view_demo_url: "jobs.cloudhire.ai",
    gif_path: "/portfolio/cloudhire-logo.svg",
    images_path: ["/portfolio/cloudhire-logo.svg"],
    skills:
      "Full Stack Development, Backend Architecture, AI & ML Integration, Cloud Computing, CI/CD, Payment Integration, Video Processing, API Integration, MonoRepo Management",
  },
  {
    id: "job_3",
    name: "AP Furniture",
    description:
      "<p>The <strong>TheAP Portfolio WebApp</strong> elegantly showcases <mark>AP Furniture</mark>'s premium trolleys and stands while highlighting the company's rich history and essential contacts to drive business engagement. Built with <mark>Next.js</mark>, it features a dynamic digital showroom that presents premium furniture collections in a visually stunning manner. The responsive design, powered by <mark>Tailwind CSS</mark>, ensures an intuitive UI/UX across all devices, while a secure, role-specific management system developed on Linux efficiently handles inventory, employee data, and product information.</p>",
    category: "job",
    stack: "NextJS, ReactJS, Tailwind CSS",
    year: "Feb 2023 - Apr 2024",
    key_words:
      "AP Furniture, Portfolio, WebApp, Business Engagement, Digital Showroom",
    src_code_url: "https://github.com/smaazs71/theap",
    view_demo_url: "https://theap.vercel.app/",
    gif_path: "/portfolio/theap.gif",
    images_path: ["/portfolio/theap-2.png"],
    skills: "NextJS, ReactJS, Tailwind CSS, Portfolio Design, Web Development",
  },
  {
    id: "job_2",
    name: "Infosys",
    description:
      "<p>At <strong>Infosys</strong>, I specialized in full-stack development using <mark>Angular, Spring Boot, and React</mark> within a modern microservices architecture. Contributing to the AOST project for <strong>American Express</strong>, I developed and maintained robust backend systems for enterprise financial solutions. My work enhanced system scalability and flexibility through strategic API development and specialized microservices training, optimizing backend design and service separation for high performance and maintainability.</p>",
    category: "job",
    stack: "Angular, Spring Boot, React, Microservices",
    year: "2021 - 2023",
    key_words:
      "Infosys, Angular, Spring Boot, React, Microservices, Enterprise Solutions",
    src_code_url: "",
    view_demo_url: "",
    gif_path: "/portfolio/infosys.gif",
    images_path: ["/portfolio/infosys-logo.svg"],
    skills:
      "Full Stack Development, Microservices, Frontend & Backend Integration, Client Solutions",
  },
  {
    id: "job_1",
    name: "American Express",
    description:
      "<p>At <strong>American Express</strong>, I contributed to enhancing enterprise-level applications by refining <mark>React.js</mark> and <em>Spring Boot</em> solutions. I collaborated closely with stakeholders to gather business requirements, conducted rigorous testing, and resolved critical bugs, ensuring the delivery of secure, scalable, and high-performance financial systems.</p>",
    category: "job",
    stack: "Spring Boot, React, Selenium, Splunk, Jenkins, PostgreSQL",
    year: "2021 - 2023",
    key_words:
      "American Express, Spring Boot, React, Selenium, Splunk, Jenkins, PostgreSQL",
    src_code_url: "",
    view_demo_url: "",
    gif_path: "/portfolio/american-express.gif",
    images_path: ["/portfolio/american-express.svg"],
    skills:
      "Full Stack Development, Application Enhancement, Testing & Debugging, Client Collaboration",
  },
  {
    id: "freelancing_3",
    name: "Occasion",
    description:
      "<p>The <strong>Occasion App</strong> is a cutting-edge Next.js application deployed on Vercel that presents dynamic invitation cards. The app features a web view where invitation details—such as guest names, venue location, type of invitees, special guests, and venue name—are dynamically updated via query strings in the URL. It includes a comprehensive dashboard for managing guest lists (names and counts) and invitation details, and it gracefully handles errors like unlisted guests.</p>",
    category: "freelancing",
    stack: "NextJS, JavaScript, Vercel",
    year: "Nov 2024 - Dec 2025",
    key_words:
      "NextJS, Invitation, Dashboard, Dynamic Data, Guest List, Query String, Error Handling",
    src_code_url: "https://github.com/smaazs71/occasion",
    view_demo_url: "https://occasion.vercel.app",
    gif_path: "/portfolio/occasion-app.gif",
    images_path: ["/portfolio/occasion-app.png"],
    skills:
      "NextJS, Dynamic Web Apps, Dashboard Development, Query String Integration, Error Handling, UI/UX Design",
  },
  {
    id: "freelancing_2",
    name: "Utells App",
    description:
      "<p>The <strong>Utells App</strong> is a dynamic ReactJS-based solution developed at Acranox Technologies. It features advanced <mark>Redux state management</mark> with withReducer for enhanced scalability and modularity, an optimized <strong>user authentication system</strong> for seamless login, and integration with the <mark>Google Maps API</mark> for real-time location tracking and dynamic retrieval of nearby places. Additionally, it includes intuitive <em>dashboard applications</em> for managing user data, incident reports, and facility tracking, ensuring a comprehensive and engaging user experience.</p>",
    category: "freelancing",
    stack: "ReactJS, Redux, JavaScript, Google Maps API",
    year: "Dec 2024 - Mar 2025",
    key_words: "ReactJS, Redux, Authentication, Google Maps, Dashboard, UI/UX",
    src_code_url: "",
    view_demo_url: "",
    gif_path: "/portfolio/utells-app.gif",
    images_path: ["/portfolio/utells-app.png"],
    skills:
      "ReactJS, Redux, State Management, Authentication, API Integration, UI/UX Design",
  },
  {
    id: "freelancing_1",
    name: "Managis",
    description:
      "<p>The <strong>Managis App</strong> is a robust, full-stack solution built with the <mark>MERN stack</mark> designed to streamline business operations. It provides a secure platform for managing <strong>billing</strong>, <strong>payment records</strong>, <mark>inventory</mark>, and <em>employee administration</em> including attendance tracking, ensuring efficient and reliable day-to-day operations.</p>",
    category: "freelancing",
    stack: "MERN, React, Redux, NodeJS, Express, MongoDB",
    year: "Jun 2021 & Sept 2021",
    key_words:
      "MERN, Billing, Payment, Inventory, Employee Management, Redux, NodeJS",
    src_code_url: "",
    view_demo_url: "",
    gif_path: "/portfolio/ap-management.gif",
    images_path: ["/portfolio/ap-management.png"],
    skills:
      "Full Stack Development, API Integration, Database Management, MERN",
  },
  {
    id: "college_1",
    name: "Id Prediction",
    description:
      "<p>This <strong>machine learning</strong> project in <mark>Python</mark> predicts various identity proof types and accurately <em>extracts data</em> from documents, showcasing practical applications of deep learning in automated ID verification.</p>",
    category: "college",
    stack: "Python, Google Colab, Machine Learning",
    year: "2019",
    key_words: "Id Prediction, Machine Learning, Python, Data Extraction",
    src_code_url:
      "https://github.com/smaazs71/Id-proof-Prediction-and-Extraction-of-data",
    view_demo_url: "",
    gif_path: "/portfolio/id-prediction.gif",
    images_path: ["/portfolio/id-prediction.png"],
    skills: "Machine Learning, Data Extraction, Python Programming",
  },
  {
    id: "college_2",
    name: "Minip",
    description:
      "<p><strong>Minip</strong> is a website inspired by Amazon's e-commerce model, developed with <mark>PHP, jQuery, and MySQL</mark> to deliver an effective online storefront experience. It demonstrates core e-commerce functionalities and a user-friendly design for seamless shopping.</p>",
    category: "college",
    stack: "PHP, jQuery, MySQL",
    year: "2018",
    key_words: "Minip, E-commerce, PHP, jQuery, MySQL",
    src_code_url: "https://github.com/smaazs71/minip",
    view_demo_url: "",
    gif_path: "/portfolio/minip.gif",
    images_path: ["/portfolio/minip.png"],
    skills: "Web Development, E-commerce, PHP Programming",
  },
  {
    id: "college_3",
    name: "RCOE Print",
    description:
      "<p><strong>RCOE Print</strong> is a PHP-based website that allows users to store and print documents directly. Built with <mark>AWS, PHP, and Bootstrap</mark>, it streamlines document management and provides a user-friendly interface for efficient workflow.</p>",
    category: "college",
    stack: "AWS, PHP, Bootstrap",
    year: "2020",
    key_words: "RCOE Print, Document Management, PHP, AWS, Bootstrap",
    src_code_url: "https://github.com/smaazs71/online-printing-service",
    view_demo_url: "",
    gif_path: "/portfolio/rcoe-print.gif",
    images_path: ["/portfolio/rcoe-print.png"],
    skills: "Web Development, Document Management, PHP, AWS",
  },
  {
    id: "college_4",
    name: "Maze Game",
    description:
      "<p>This <strong>C++ maze game</strong> generates a unique maze with each play using adjustable parameters and a graphics library, offering an engaging experience in <mark>game development</mark> and problem-solving.</p>",
    category: "college",
    stack: "C Programming Language, C++",
    year: "2018",
    key_words: "Maze Game, C++, Game Development, C Programming",
    src_code_url: "https://github.com/smaazs71/Maze-Game",
    view_demo_url: "",
    gif_path: "/portfolio/maze.gif",
    images_path: ["/portfolio/maze.png"],
    skills: "Game Development, C/C++ Programming, Graphics Programming",
  },
  {
    id: "college_5",
    name: "Smart Home Automation",
    description:
      "<p>The <strong>Smart Home Automation</strong> system leverages an Android app, <mark>AI</mark>, and <em>NodeMCU (ESP8266)</em> to offer innovative features such as speech recognition, command storage, and automated scheduling, thereby enhancing home management efficiency.</p>",
    category: "college",
    stack: "Android, NodeMCU, Web-development",
    year: "2019 - 2020",
    key_words: "Smart Home Automation, Android, NodeMCU, AI, Home Automation",
    src_code_url: "https://github.com/smaazs71/Smart-Home-Automation-using-AI",
    view_demo_url: "",
    gif_path: "/portfolio/smart-home-automation-2.gif",
    images_path: ["/portfolio/smart-home-automation-3.png"],
    skills: "IoT, Mobile App Development, AI Integration, Home Automation",
  },
  {
    id: "college_6",
    name: "Tic Tac Toe",
    description:
      "<p>A classic <strong>Tic Tac Toe</strong> game in <mark>Java</mark> featuring AI, enabling users to enjoy interactive gameplay against the computer or a friend.</p>",
    category: "college",
    stack: "Java",
    year: "2017",
    key_words: "Tic Tac Toe, Java, Game Development, AI",
    src_code_url: "https://github.com/smaazs71/Tic-Tac-Toe",
    view_demo_url: "",
    gif_path: "/portfolio/tic-tac-toe.gif",
    images_path: ["/portfolio/tic-tac-toe.png"],
    skills: "Game Development, Java Programming, AI Integration",
  },
  {
    id: "assignment_1",
    name: "Acceron - Location sharing using socket-io in Microservice",
    description:
      "<p>A full-stack project using <strong>Node.js, Express, Socket.IO, React, and Leaflet</strong> for real-time location sharing between taxi drivers and passengers, demonstrating robust <mark>real-time communication</mark> and scalable microservices architecture.</p>",
    category: "assignment",
    stack: "NodeJS, Express, SocketIO, Microservices",
    year: "2023",
    key_words:
      "Location Sharing, NodeJS, Express, Socket.IO, Real-time, Microservices",
    src_code_url: "https://github.com/smaazs71/LocationSharingApp",
    view_demo_url: "",
    gif_path: "/portfolio/location-sharing-microservice.gif",
    images_path: ["/portfolio/location-sharing-microservice.png"],
    skills:
      "Real-time Communication, Full Stack Development, Web Sockets, Geolocation",
  },
  {
    id: "assignment_2",
    name: "Vigor Backend - Email validation By OTP",
    description:
      "<p>A secure backend system built in <strong>Node.js</strong> that employs an OTP mechanism for robust <mark>email validation</mark> and authentication, ensuring enhanced security and reliable communication.</p>",
    category: "assignment",
    stack: "NodeJS, Express, NodeMailer, Gmail",
    year: "2023",
    key_words: "Email Validation, OTP, NodeJS, Express, Security",
    src_code_url:
      "https://github.com/smaazs71/Vigor-Assessment/tree/main/backend",
    view_demo_url: "",
    gif_path: "/portfolio/vigor-backend.gif",
    images_path: ["/portfolio/vigor-backend.png"],
    skills: "Backend Development, Authentication, Security, Node.js",
  },
  {
    id: "assignment_3",
    name: "Vigor Frontend - complex transition layout from figma",
    description:
      "<p>A sophisticated transition layout for Vigor Launchpad built with <strong>Next.js, Tailwind CSS, and Headless UI</strong>. This project converts detailed Figma designs into a dynamic, responsive <mark>user interface</mark> that significantly enhances the overall user experience.</p>",
    category: "assignment",
    stack: "Next, Tailwind, Headless/UI",
    year: "2023",
    key_words: "Vigor Frontend, Next.js, Tailwind, Figma, UI/UX",
    src_code_url:
      "https://github.com/smaazs71/Vigor-Assessment/tree/main/frontend",
    view_demo_url: "https://vigor-assessment-frontend.vercel.app/",
    gif_path: "/portfolio/vigor-frontend.gif",
    images_path: ["/portfolio/vigor-frontend.png"],
    skills: "Frontend Development, UI/UX Design, Responsive Design, Next.js",
  },
  {
    id: "assignment_4",
    name: "Portfolio 2020",
    description:
      "<p>A dynamic, PHP-powered portfolio website that showcases my professional journey with interactive elements designed to highlight my <strong>skills</strong> and <mark>achievements</mark> in web development.</p>",
    category: "assignment",
    stack: "PHP, JavaScript",
    year: "2020",
    key_words: "Portfolio, PHP, JavaScript, Web Development",
    src_code_url: "https://github.com/smaazs71/portfolio",
    view_demo_url: "https://pfmaaz.000webhostapp.com/",
    gif_path: "/portfolio/portfolio-old.gif",
    images_path: ["/portfolio/portfolio-old.png"],
    skills: "Web Development, PHP, JavaScript, Portfolio Design",
  },
];

// [
//   {
//     "id": "job_4",
//     "name": "CloudHire",
//     "description": "<p>At <strong>Cloudhire</strong>, I spearhead the development of scalable, cloud-based solutions for <strong>cloudhire.ai</strong> by leveraging <mark>MERN, Python, and AWS Cloud</mark> across multiple roles. As a <em>Full Stack Developer</em> (Jan 2025 – Current), I enhanced customer experiences by implementing robust <strong>credit systems</strong>, automating video conversion with <strong>AWS Lambda</strong> triggered by SQS, and developing a <mark>ChatGPT-powered resume generator</mark>. I also improved frontend reliability by resolving <strong>MongoDB</strong> queries, API bugs, and CORS errors, integrated <em>Aadhaar/PAN validation APIs</em>, streamlined interview scheduling with <mark>Calendly</mark>, and consolidated our codebase using a <strong>MonoRepo architecture</strong>. Previously, as a <em>Senior Backend Developer</em> (Apr 2024 – Dec 2024), I architected a <mark>high-availability backend</mark>, built AI-driven tools such as <strong>resume parsing</strong> and <em>interview scoring APIs</em> using ChatGPT and Whisper, designed AWS S3-based storage solutions, automated document workflows, developed a <strong>Chrome extension</strong> for job board data extraction, and implemented <mark>CI/CD pipelines</mark> on AWS EC2 along with <strong>PhonePe payment integration</strong> and ETL pipelines for data migration.</p>",
//     "category": "job",
//     "stack": "Express.js, OpenAI API, AWS, MERN, Amazon S3, GitHub Actions, Node.js, Next.js, Python, AWS Lambda, MongoDB, Amazon SQS, AWS EC2, Selenium, Ffmpeg, Mongoose ODM, Private Server, Batch Processing",
//     "year": "April 2024 - current",
//     "key_words": "Cloudhire, Full Stack, AI, AWS, MERN, Python, CI/CD, Payment Integration, Video Conversion, Resume Parsing, MonoRepo, Chrome Extension",
//     "src_code_url": "",
//     "view_demo_url": "jobs.cloudhire.ai",
//     "gif_path": "/portfolio/cloudhire-logo.svg",
//     "images_path": ["/portfolio/cloudhire-logo.svg"],
//     "skills": "Full Stack Development, Backend Architecture, AI & ML Integration, Cloud Computing, CI/CD, Payment Integration, Video Processing, API Integration, MonoRepo Management"
//   },
//   {
//     id: "job_3",
//     name: "AP Furniture",
//     description:
//      //"<p>The <strong>TheAP Portfolio WebApp</strong> elegantly showcases <mark>AP Furniture</mark>'s premium trolleys and stands, highlighting the company's history and contacts to drive <mark>business engagement</mark>.</p>",
//     "<p>The <strong>TheAP Portfolio WebApp</strong> elegantly showcases <mark>AP Furniture</mark>'s premium trolleys and stands, highlighting the company's history and contacts to drive <mark>business engagement</mark>. Built with <mark>Next.js</mark>, it features a dynamic <mark>digital showroom</mark> that presents premium furniture collections in a visually stunning manner. The use of <mark>Tailwind CSS</mark> ensures a responsive and intuitive <mark>UI/UX</mark>, significantly enhancing customer engagement across all devices. Additionally, <strong>a secure, role-specific management system was developed on Linux</strong> to efficiently handle <em>inventory, employee data, and product information, ensuring smooth and reliable operations</em>.</p>",
//      category: "job",
//     stack: "NextJS, ReactJS, Tailwind CSS",
//     year: "Feb 2023 - Apr 2024",
//     key_words: "AP Furniture, Portfolio, WebApp, Business Engagement",
//     src_code_url: "https://github.com/smaazs71/theap",
//     view_demo_url: "https://theap.vercel.app/",
//     gif_path: "/portfolio/theap.gif",
//     images_path: ["/portfolio/theap-2.png"],
//     skills: "NextJS, ReactJS, Tailwind CSS, Portfolio Design, Web Development",
//   },

//   {
//     id: "job_2",
//     name: "Infosys",
//     description:
//       //"<p>At <strong>Infosys</strong>, I specialized in full-stack development, focusing on <mark>Angular, Spring Boot, and React</mark> within a modern <em>microservices architecture</em> and contributed to the AOST project for <strong>American Express</strong>.</p>",
//        "<p>At <strong>Infosys</strong>, I specialized in full-stack development with <mark>Angular, Spring Boot, and React</mark> within a modern <em>microservices architecture</em>, contributing to the AOST project for <strong>American Express</strong>. I developed and maintained <em>robust backend systems</em> using <mark>Spring Boot and React.js</mark> tailored for <em>enterprise financial solutions</em>, enhancing system scalability and flexibility through strategic <mark>API development</mark> in a <em>microservices</em> environment. Additionally, my specialized training in microservices enabled me to optimize backend design and service separation, ensuring high performance and maintainability in complex financial systems.</p>",
//     category: "job",
//     stack: "Angular, Spring Boot, React, Microservices",
//     year: "2021 - 2023",
//     key_words: "Infosys, Angular, Spring Boot, React, Microservices",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/infosys.gif",
//     images_path: ["/portfolio/infosys-logo.svg"],
//     skills:
//       "Full Stack Development, Microservices, Frontend & Backend Integration, Client Solutions",
//   },
//   {
//     id: "job_1",
//     name: "American Express",
//     description:
//       "<p>I contributed to <strong>American Express</strong> projects by enhancing <mark>React.js</mark> and <em>Spring Boot</em> applications, collaborating on business requirements, testing, and debugging to deliver secure, scalable solutions.</p>",
//     category: "job",
//     stack: "Spring Boot, React, Selenium, Splunk, Jenkins, PostgreSQL",
//     year: "2021 - 2023",
//     key_words:
//       "American Express, Spring Boot, React, Selenium, Splunk, Jenkins, PostgreSQL",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/american-express.gif",
//     images_path: ["/portfolio/american-express.svg"],
//     skills:
//       "Full Stack Development, Application Enhancement, Testing & Debugging, Client Collaboration",
//   },
//   {
//     id: "freelancing_2",
//     name: "Utells App",
//     description:
//       "<p>The <strong>Utells App</strong> is a dynamic ReactJS-based solution developed at Acranox technologies, featuring advanced <mark>Redux state management</mark> with withReducer for enhanced scalability and modularity. It offers a robust, optimized <strong>user authentication system</strong> for seamless login and authorization, integrates the <mark>Google Maps API</mark> for real-time location tracking and dynamic retrieval of nearby places, and includes intuitive <em>dashboard applications</em> for managing user data, incident reports, and facility tracking.</p>",
//     category: "freelancing",
//     stack: "ReactJS, Redux, JavaScript, Google Maps API",
//     year: "Dec 2024 - Mar 2025",
//     key_words: "ReactJS, Redux, Authentication, Google Maps, Dashboard, UI/UX",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/utells-app.gif",
//     images_path: ["/portfolio/utells-app.png"],
//     skills:
//       "ReactJS, Redux, State Management, Authentication, API Integration, UI/UX Design",
//   },
//   {
//     id: "freelancing_1",
//     name: "Managis",
//     description:
//       "<p>The <strong>Managis App</strong> is a robust, full-stack solution built with the <mark>MERN stack</mark>. It offers a secure system for managing <strong>billing</strong>, <strong>payment records</strong>, <mark>inventory</mark>, and <em>employee administration</em>, including attendance tracking.</p>",
//     category: "freelancing",
//     stack: "MERN, React, Redux, NodeJS, Express, MongoDB",
//     year: "Jun 2021 & Sept 2021",
//     key_words:
//       "MERN, Billing, Payment, Inventory, Employee Management, Redux, NodeJS",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/ap-management.gif",
//     images_path: ["/portfolio/ap-management.png"],
//     skills:
//       "Full Stack Development, API Integration, Database Management, MERN",
//   },
//   {
//     id: "college_1",
//     name: "Id Prediction",
//     description:
//       "<p>This <strong>machine learning</strong> program in <mark>Python</mark> predicts identity proof types and <em>extracts data</em> accurately.</p>",
//     category: "college",
//     stack: "Python, Google Colab, Machine Learning",
//     year: "2019",
//     key_words: "Id Prediction, Machine Learning, Python, Data Extraction",
//     src_code_url:
//       "https://github.com/smaazs71/Id-proof-Prediction-and-Extraction-of-data",
//     view_demo_url: "",
//     gif_path: "/portfolio/id-prediction.gif",
//     images_path: ["/portfolio/id-prediction.png"],
//     skills: "Machine Learning, Data Extraction, Python Programming",
//   },
//   {
//     id: "college_2",
//     name: "Minip",
//     description:
//       "<p><strong>Minip</strong> is a website inspired by Amazon's e-commerce platform, developed with <mark>PHP, jQuery, and MySQL</mark> to deliver an effective online storefront experience.</p>",
//     category: "college",
//     stack: "PHP, jQuery, MySQL",
//     year: "2018",
//     key_words: "Minip, E-commerce, PHP, jQuery, MySQL",
//     src_code_url: "https://github.com/smaazs71/minip",
//     view_demo_url: "",
//     gif_path: "/portfolio/minip.gif",
//     images_path: ["/portfolio/minip.png"],
//     skills: "Web Development, E-commerce, PHP Programming",
//   },
//   {
//     id: "college_3",
//     name: "RCOE Print",
//     description:
//       "<p><strong>RCOE Print</strong> is a PHP website that enables users to store and print documents directly, built with <mark>AWS, PHP, and Bootstrap</mark> to facilitate efficient <em>document management</em>.</p>",
//     category: "college",
//     stack: "AWS, PHP, Bootstrap",
//     year: "2020",
//     key_words: "RCOE Print, Document Management, PHP, AWS, Bootstrap",
//     src_code_url: "https://github.com/smaazs71/online-printing-service",
//     view_demo_url: "",
//     gif_path: "/portfolio/rcoe-print.gif",
//     images_path: ["/portfolio/rcoe-print.png"],
//     skills: "Web Development, Document Management, PHP, AWS",
//   },
//   {
//     id: "college_4",
//     name: "Maze Game",
//     description:
//       "<p>This <strong>C++ maze game</strong> generates a unique maze on every play using adjustable parameters and a graphics library, offering an engaging <mark>game development</mark> experience.</p>",
//     category: "college",
//     stack: "C Programming Language, C++",
//     year: "2018",
//     key_words: "Maze Game, C++, Game Development, C Programming",
//     src_code_url: "https://github.com/smaazs71/Maze-Game",
//     view_demo_url: "",
//     gif_path: "/portfolio/maze.gif",
//     images_path: ["/portfolio/maze.png"],
//     skills: "Game Development, C/C++ Programming, Graphics Programming",
//   },
//   {
//     id: "college_5",
//     name: "Smart Home Automation",
//     description:
//       "<p>A <strong>Smart Home Automation</strong> system that uses an Android app, <mark>AI</mark>, and <em>NodeMCU (ESP8266)</em> to deliver features such as speech recognition, command storage, and automated scheduling.</p>",
//     category: "college",
//     stack: "Android, NodeMCU, Web-development",
//     year: "2019 - 2020",
//     key_words: "Smart Home Automation, Android, NodeMCU, AI, Home Automation",
//     src_code_url: "https://github.com/smaazs71/Smart-Home-Automation-using-AI",
//     view_demo_url: "",
//     gif_path: "/portfolio/smart-home-automation-2.gif",
//     images_path: ["/portfolio/smart-home-automation-3.png"],
//     skills: "IoT, Mobile App Development, AI Integration, Home Automation",
//   },
//   {
//     id: "college_6",
//     name: "Tic Tac Toe",
//     description:
//       "<p>A classic <strong>Tic Tac Toe</strong> game in <mark>Java</mark> featuring AI, allowing users to play against the computer or a friend.</p>",
//     category: "college",
//     stack: "Java",
//     year: "2017",
//     key_words: "Tic Tac Toe, Java, Game Development, AI",
//     src_code_url: "https://github.com/smaazs71/Tic-Tac-Toe",
//     view_demo_url: "",
//     gif_path: "/portfolio/tic-tac-toe.gif",
//     images_path: ["/portfolio/tic-tac-toe.png"],
//     skills: "Game Development, Java Programming, AI Integration",
//   },
//   {
//     id: "assignment_1",
//     name: "Acceron - Location sharing using socket-io in Microservice",
//     description:
//       "<p>A full-stack project using <strong>Node.js, Express, Socket.IO, React, and Leaflet</strong> for real-time location sharing between taxi drivers and passengers, demonstrating robust <mark>real-time communication</mark>.</p>",
//     category: "assignment",
//     stack: "NodeJS, Express, SocketIO, Microservices",
//     year: "2023",
//     key_words:
//       "Location Sharing, NodeJS, Express, Socket.IO, Real-time, Microservices",
//     src_code_url: "https://github.com/smaazs71/LocationSharingApp",
//     view_demo_url: "",
//     gif_path: "/portfolio/location-sharing-microservice.gif",
//     images_path: ["/portfolio/location-sharing-microservice.png"],
//     skills:
//       "Real-time Communication, Full Stack Development, Web Sockets, Geolocation",
//   },
//   {
//     id: "assignment_2",
//     name: "Vigor Backend - Email validation By OTP",
//     description:
//       "<p>A secure backend system built in <strong>Node.js</strong> that employs an OTP mechanism for robust <mark>email validation</mark> and authentication.</p>",
//     category: "assignment",
//     stack: "NodeJS, Express, NodeMailer, Gmail",
//     year: "2023",
//     key_words: "Email Validation, OTP, NodeJS, Express, Security",
//     src_code_url:
//       "https://github.com/smaazs71/Vigor-Assessment/tree/main/backend",
//     view_demo_url: "",
//     gif_path: "/portfolio/vigor-backend.gif",
//     images_path: ["/portfolio/vigor-backend.png"],
//     skills: "Backend Development, Authentication, Security, Node.js",
//   },
//   {
//     id: "assignment_3",
//     name: "Vigor Frontend - complex transition layout from figma",
//     description:
//       "<p>A sophisticated transition layout for Vigor Launchpad built with <strong>Next.js, Tailwind CSS, and Headless UI</strong>, converting Figma designs into a dynamic, responsive <mark>user interface</mark>.</p>",
//     category: "assignment",
//     stack: "Next, Tailwind, Headless/UI",
//     year: "2023",
//     key_words: "Vigor Frontend, Next.js, Tailwind, Figma, UI/UX",
//     src_code_url:
//       "https://github.com/smaazs71/Vigor-Assessment/tree/main/frontend",
//     view_demo_url: "https://vigor-assessment-frontend.vercel.app/",
//     gif_path: "/portfolio/vigor-frontend.gif",
//     images_path: ["/portfolio/vigor-frontend.png"],
//     skills: "Frontend Development, UI/UX Design, Responsive Design, Next.js",
//   },
//   {
//     id: "assignment_4",
//     name: "Portfolio 2020",
//     description:
//       "<p>A dynamic, PHP-powered portfolio website that showcases my professional journey with interactive elements highlighting my <strong>skills</strong> and <mark>achievements</mark>.</p>",
//     category: "assignment",
//     stack: "PHP, JavaScript",
//     year: "2020",
//     key_words: "Portfolio, PHP, JavaScript, Web Development",
//     src_code_url: "https://github.com/smaazs71/portfolio",
//     view_demo_url: "https://pfmaaz.000webhostapp.com/",
//     gif_path: "/portfolio/portfolio-old.gif",
//     images_path: ["/portfolio/portfolio-old.png"],
//     skills: "Web Development, PHP, JavaScript, Portfolio Design",
//   },
// ];

//   export const projects = [
//   {
//     id: "freelancing_2",
//     name: "The Ap",
//     description:
//       "TheAP Portfolio WebApp is designed for an elegant showcase of AP Furniture's trolleys and stands, featuring company history, details, and contacts to enhance business engagement.",
//     category: "freelancing",
//     stack: "NextJS, ReactJS, Tailwind CSS",
//     year: "2023",
//     key_words: "AP Furniture, Portfolio, WebApp, Business Engagement",
//     src_code_url: "https://github.com/smaazs71/theap",
//     view_demo_url: "https://theap.vercel.app/",
//     gif_path: "/portfolio/theap.gif",
//     images_path: ["/portfolio/theap-2.png"],
//     skills: "NextJS, ReactJS, Tailwind CSS, Portfolio Design, Web Development",
//   },
//   {
//     id: "freelancing_1",
//     name: "AP Management",
//     description:
//       "The AP Management App is a comprehensive solution built with the MERN stack, featuring a secure system for managing billing, payment records, stock, employee administration, and attendance.",
//     category: "freelancing",
//     stack: "MERN, React, Redux, NodeJS, Express, MongoDB",
//     year: "2020 & 2023",
//     key_words:
//       "MERN, Billing, Payment, Inventory, Employee Management, Redux, NodeJS",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/ap-management.gif",
//     images_path: ["/portfolio/ap-management.png"],
//     skills:
//       "Full Stack Development, API Integration, Database Management, MERN",
//   },
//   {
//     id: "job_3",
//     name: "CloudHire",
//     description:
//       "At Cloudhire, I leverage MERN, Python, and AWS Cloud to build scalable systems for cloudhire.ai. As a Full Stack Developer, I enhanced customer experiences with advanced credit systems, seamless Aadhaar/PAN authentication APIs, and an AI-powered resume generator, while previously architecting high-availability APIs, developing AI-driven resume parsing and interview scoring tools, and streamlining recruitment workflows with CI/CD pipelines and integrated payment gateway solutions.",
//     category: "job",
//     stack:
//       "Express.js, OpenAI API, AWS, Batch script, MERN, Amazon S3, Selenium Testing, Github Actions, Node.js, Ffmpeg, Next.js, Python, Mongoose ODM, AWS Lambda, Private server, Batch Processing, React.js, Selenium, MongoDB, Amazon SQS, GitHub, AWS EC2",
//     year: "April 2024 - current",
//     key_words:
//       "Cloudhire, Full Stack, AI, AWS, MERN, Python, CI/CD, Payment Integration",
//     src_code_url: "",
//     view_demo_url: "jobs.cloudhire.ai",
//     gif_path: "",
//     images_path: ["/portfolio/cloudhire-logo.svg"],
//     skills:
//       "Full Stack Development, Backend Architecture, AI Integration, Cloud Computing, CI/CD, Payment Integration",
//   },
//   {
//     id: "job_2",
//     name: "Infosys",
//     description:
//       "Trained in full-stack development with a focus on Angular, Spring Boot, and microservices architecture during my tenure at Infosys, contributing as a React and Spring Boot developer for the American Express client on the AOST project.",
//     category: "job",
//     stack: "Angular, Spring boot, React, Microservices",
//     year: "2021 - 2023",
//     key_words: "Infosys, Angular, Spring Boot, React, Microservices",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/infosys.gif",
//     images_path: ["/portfolio/cloudhire-logo.svg"],
//     skills:
//       "Full Stack Development, Microservices, Frontend & Backend Integration, Client Solutions",
//   },
//   {
//     id: "job_1",
//     name: "American Express",
//     description:
//       "I contributed to the development and enhancement of React.js and Spring Boot applications for American Express, collaborating on business requirements, testing, and bug resolution to deliver secure, scalable solutions.",
//     category: "job",
//     stack: "Spring boot, React, Selenium, Splunk, Jenkins, PostgressQL",
//     year: "2021 -2023",
//     key_words:
//       "American Express, Spring Boot, React, Selenium, Splunk, Jenkins, PostgreSQL",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/american-express.gif",
//     images_path: ["/portfolio/american-express.svg"],
//     skills:
//       "Full Stack Development, Application Enhancement, Testing & Debugging, Client Collaboration",
//   },
//   {
//     id: "college_1",
//     name: "Id Prediction",
//     description:
//       "A machine learning program in Python that predicts the type of identity proof and extracts data from it.",
//     category: "college",
//     stack: "Python, Google Colab, Machine Learning",
//     year: "2019",
//     key_words: "Id Prediction, Machine Learning, Python, Data Extraction",
//     src_code_url:
//       "https://github.com/smaazs71/Id-proof-Prediction-and-Extraction-of-data",
//     view_demo_url: "",
//     gif_path: "/portfolio/id-prediction.gif",
//     images_path: ["/portfolio/id-prediction.png"],
//     skills: "Machine Learning, Data Extraction, Python Programming",
//   },
//   {
//     id: "college_2",
//     name: "Minip",
//     description:
//       "A website similar to Amazon's e-commerce platform, developed using PHP, jQuery, and MySQL.",
//     category: "college",
//     stack: "PHP, jQuery, MySQL",
//     year: "2018",
//     key_words: "Minip, E-commerce, PHP, jQuery, MySQL",
//     src_code_url: "https://github.com/smaazs71/minip",
//     view_demo_url: "",
//     gif_path: "/portfolio/minip.gif",
//     images_path: ["/portfolio/minip.png"],
//     skills: "Web Development, E-commerce, PHP Programming",
//   },
//   {
//     id: "college_3",
//     name: "RCOE Print",
//     description:
//       "A PHP website that enables users to store documents and print them directly, built using AWS, PHP, and Bootstrap.",
//     category: "college",
//     stack: "AWS, PHP, Bootstrap",
//     year: "2020",
//     key_words: "RCOE Print, Document Management, PHP, AWS, Bootstrap",
//     src_code_url: "https://github.com/smaazs71/online-printing-service",
//     view_demo_url: "",
//     gif_path: "/portfolio/rcoe-print.gif",
//     images_path: ["/portfolio/rcoe-print.png"],
//     skills: "Web Development, Document Management, PHP, AWS",
//   },
//   {
//     id: "college_4",
//     name: "Maze Game",
//     description:
//       "A C++ maze game that generates a unique maze every time you play using adjustable parameters and a graphics library.",
//     category: "college",
//     stack: "C Programming Language, C++",
//     year: "2018",
//     key_words: "Maze Game, C++, Game Development, C Programming",
//     src_code_url: "https://github.com/smaazs71/Maze-Game",
//     view_demo_url: "",
//     gif_path: "/portfolio/maze.gif",
//     images_path: ["/portfolio/maze.png"],
//     skills: "Game Development, C/C++ Programming, Graphics Programming",
//   },
//   {
//     id: "college_5",
//     name: "Smart Home Automation",
//     description:
//       "A home automation system using an Android app, AI, and NodeMCU (ESP8266) to provide speech recognition, command storage, and automatic scheduling.",
//     category: "college",
//     stack: "Android, NodeMCU, Web-development",
//     year: "2019 - 2020",
//     key_words: "Smart Home Automation, Android, NodeMCU, AI, Home Automation",
//     src_code_url: "https://github.com/smaazs71/Smart-Home-Automation-using-AI",
//     view_demo_url: "",
//     gif_path: "/portfolio/smart-home-automation-2.gif",
//     images_path: ["/portfolio/smart-home-automation-3.png"],
//     skills: "IoT, Mobile App Development, AI Integration, Home Automation",
//   },
//   {
//     id: "college_6",
//     name: "Tic Tac Toe",
//     description:
//       "A Java program featuring AI that allows users to play Tic Tac Toe against the computer or another person.",
//     category: "college",
//     stack: "Java",
//     year: "2017",
//     key_words: "Tic Tac Toe, Java, Game Development, AI",
//     src_code_url: "https://github.com/smaazs71/Tic-Tac-Toe",
//     view_demo_url: "",
//     gif_path: "/portfolio/tic-tac-toe.gif",
//     images_path: ["/portfolio/tic-tac-toe.png"],
//     skills: "Game Development, Java Programming, AI Integration",
//   },
//   {
//     id: "assignment_1",
//     name: "Acceron - Location sharing using socket-io in Microservice",
//     description:
//       "A full-stack project using Node.js, Express, Socket.IO, React, and Leaflet for real-time location sharing between taxi drivers and passengers.",
//     category: "assignment",
//     stack: "NodeJS, Express, SocketIO, Microservices",
//     year: "2023",
//     key_words:
//       "Location Sharing, NodeJS, Express, Socket.IO, Real-time, Microservices",
//     src_code_url: "https://github.com/smaazs71/LocationSharingApp",
//     view_demo_url: "",
//     gif_path: "/portfolio/location-sharing-microservice.gif",
//     images_path: ["/portfolio/location-sharing-microservice.png"],
//     skills:
//       "Real-time Communication, Full Stack Development, Web Sockets, Geolocation",
//   },
//   {
//     id: "assignment_2",
//     name: "Vigor Backend - Email validation By OTP",
//     description:
//       "A secure backend system in Node.js that employs an OTP mechanism for robust email validation.",
//     category: "assignment",
//     stack: "NodeJS, Express, NodeMailer, Gmail",
//     year: "2023",
//     key_words: "Email Validation, OTP, NodeJS, Express, Security",
//     src_code_url:
//       "https://github.com/smaazs71/Vigor-Assessment/tree/main/backend",
//     view_demo_url: "",
//     gif_path: "/portfolio/vigor-backend.gif",
//     images_path: ["/portfolio/vigor-backend.png"],
//     skills: "Backend Development, Authentication, Security, Node.js",
//   },
//   {
//     id: "assignment_3",
//     name: "Vigor Frontend - complex transition layout from figma",
//     description:
//       "A complex transition layout for Vigor Launchpad built with Next.js, Tailwind CSS, and Headless UI, based on Figma designs.",
//     category: "assignment",
//     stack: "Next, Tailwind, Headless/UI",
//     year: "2023",
//     key_words: "Vigor Frontend, Next.js, Tailwind, Figma, UI/UX",
//     src_code_url:
//       "https://github.com/smaazs71/Vigor-Assessment/tree/main/frontend",
//     view_demo_url: "https://vigor-assessment-frontend.vercel.app/",
//     gif_path: "/portfolio/vigor-frontend.gif",
//     images_path: ["/portfolio/vigor-frontend.png"],
//     skills: "Frontend Development, UI/UX Design, Responsive Design, Next.js",
//   },
//   {
//     id: "assignment_4",
//     name: "Portfolio 2020",
//     description:
//       "A dynamic PHP-powered portfolio website that showcases my professional journey with interactive elements highlighting my skills and achievements.",
//     category: "assignment",
//     stack: "PHP, javascript",
//     year: "2020",
//     key_words: "Portfolio, PHP, JavaScript, Web Development",
//     src_code_url: "https://github.com/smaazs71/portfolio",
//     view_demo_url: "https://pfmaaz.000webhostapp.com/",
//     gif_path: "/portfolio/portfolio-old.gif",
//     images_path: ["/portfolio/portfolio-old.png"],
//     skills: "Web Development, PHP, JavaScript, Portfolio Design",
//   },
// ];

// export const projects =
// [
//   {
//     id: "freelancing_2",
//     name: "The Ap",
//     description:
//       "TheAP Portfolio WebApp is designed for an elegant showcase of AP Furniture's trolleys and stands, featuring company history, details, and contacts to enhance business engagement.",
//     category: "freelancing",
//     stack: "NextJS, ReactJS, Tailwind CSS",
//     year: "2023",
//     key_words: "string",
//     src_code_url: "https://github.com/smaazs71/theap",
//     view_demo_url: "https://theap.vercel.app/",
//     gif_path: "/portfolio/theap.gif",
//     images_path: ["/portfolio/theap-2.png"],
//   },
//   {
//     id: "freelancing_1",
//     name: "AP Management",
//     description:
//       "The AP Management App, developed with React JS, Redux, Express, and MongoDB, serves as a comprehensive solution for company operations. It efficiently handles billing, payment records, stock management, employee administration, attendance, and more.",
//     category: "freelancing",
//     stack: "MERN, React, Redux, NodeJS, Express, MongoDB",
//     year: "2020 & 2023",
//     key_words: "string",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/ap-management.gif",
//     images_path: ["/portfolio/ap-management.png"],
//   },

//   {
//     id: "job_3",
//     name: "CloudHire",
//     description:
//       "At Cloudhire, I leverage MERN, Python, and AWS to build scalable systems for cloudhire.ai. As a Full Stack Developer, I enhanced customer experiences with advanced credit systems, seamless Aadhaar/PAN authentication APIs, and an AI-powered resume generator. Previously, as a Senior Backend Developer, I architected high-availability APIs, developed AI-driven resume parsing and interview scoring tools, and streamlined recruitment workflows with CI/CD pipelines and integrated payment gateway solutions.",
//     category: "job",
//     stack:
//       "Express.js · OpenAI API · Amazon Web Services (AWS) · Batch script · MERN Stack · Amazon S3 · Selenium Testing · Github Actions · Node.js · Ffmpeg · Next.js · Python (Programming Language) · Mongoose ODM · AWS Lambda · Private server · Batch Processing · React.js · Selenium · MongoDB · Amazon SQS · GitHub · Amazon EC2",
//     year: "April 2024 - current",
//     key_words: "Infosys Angular, Spring boot, React, Microservices 2021 - 2023",
//     src_code_url: "",
//     view_demo_url: "jobs.cloudhire.ai",
//     // gif_path: "/portfolio/infosys.gif",
//     images_path: ["/portfolio/cloudhire-logo.svg"],
//   },

//   {
//     id: "job_2",
//     name: "Infosys",
//     description:
//       "Trained in full-stack development with a focus on Angular, Spring Boot, and microservices architecture during my tenure at Infosys. Contributed as a React and Spring Boot developer for the American Express client on the AOST project.",
//     category: "job",
//     stack: "Angular, Spring boot, React, Microservices",
//     year: "2021 - 2023",
//     key_words: "Infosys Angular, Spring boot, React, Microservices 2021 - 2023",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/infosys.gif",
//     images_path: ["/portfolio/cloudhire-logo.svg"],
//   },
//   {
//     id: "job_1",
//     name: "American Express",
//     description:
//       "Contributed to the development and enhancement of React.js and Spring Boot applications for Amex using Spring Boot, React.js, Selenium, Jenkins and Splunk. Collaborated on business requirements, conducted  testing, and provided bug resolution, ensuring high-quality deliverables aligned with client needs.",
//     category: "job",
//     stack: "Spring boot, React, Selenium, Splunk, Jenkins, PostgressQL",
//     year: "2021 -2023",
//     key_words:
//       "American Express Spring boot, React, Selenium, Splunk, Jenkins, PostgressQL 2021 -2023",
//     src_code_url: "",
//     view_demo_url: "",
//     gif_path: "/portfolio/american-express.gif",
//     images_path: ["/portfolio/american-express.svg"],
//   },

//   {
//     id: "college_1",
//     name: "Id Prediction",
//     description:
//       "A machine learning program executed in python that predicts the type of Identity proof and extracts the data from it.",
//     category: "college",
//     stack: "Python, Google Colab, Machine Learning",
//     year: "2019",
//     key_words:
//       "Id proof Prediction and Extraction of data college Python, Google Colab, Machine Learning 2019",
//     src_code_url:
//       "https://github.com/smaazs71/Id-proof-Prediction-and-Extraction-of-data",
//     view_demo_url: "",
//     gif_path: "/portfolio/id-prediction.gif",
//     images_path: ["/portfolio/id-prediction.png"],
//   },
//   {
//     id: "college_2",
//     name: "Minip",
//     description:
//       "A website similar to Amazon E-Commerce website, designed using PHP.",
//     category: "college",
//     stack: "PHP, jQuery, MySQL",
//     year: "2018",
//     key_words: "Minip college PHP, jQuery, MySQL 2018",
//     src_code_url: "https://github.com/smaazs71/minip",
//     view_demo_url: "",
//     gif_path: "/portfolio/minip.gif",
//     images_path: ["/portfolio/minip.png"],
//   },
//   {
//     id: "college_3",
//     name: "RCOE Print",
//     description:
//       "A website in PHP that allows a user to store their documents and print from there itself.",
//     category: "college",
//     stack: "AWS, PHP, Bootstrap",
//     year: "2020",
//     key_words: "RCOE Print college AWS, PHP, Bootstrap ",
//     src_code_url: "https://github.com/smaazs71/online-printing-service",
//     view_demo_url: "",
//     gif_path: "/portfolio/rcoe-print.gif",
//     images_path: ["/portfolio/rcoe-print.png"],
//   },
//   {
//     id: "college_4",
//     name: "Maze Game",
//     description:
//       "Using graphics library in C++ this program generates a different Maze game everytime you play based on certain changeable parameters.",
//     category: "college",
//     stack: "C Programming Language, C++",
//     year: "2018",
//     key_words: "C Programming Language, C++ 2018 college Maze Game",
//     src_code_url: "https://github.com/smaazs71/Maze-Game",
//     view_demo_url: "",
//     gif_path: "/portfolio/maze.gif",
//     images_path: ["/portfolio/maze.png"],
//   },
//   {
//     id: "college_5",
//     name: "Smart Home Automation",
//     description:
//       "Home Automation system using Android App with AI and NodeMCU (ESP8266 Wifi module). With features like Speech recognition, Command Store, Floating widget service and Automatic scheduling system.",
//     category: "college",
//     stack: "Android, NodeMCU, Web-development",
//     year: "2019 - 2020",
//     key_words:
//       "Smart Home Automation AI college 2019 - 2020 Android, NodeMCU, Web-development",
//     src_code_url: "https://github.com/smaazs71/Smart-Home-Automation-using-AI",
//     view_demo_url: "",
//     gif_path: "/portfolio/smart-home-automation-2.gif",
//     images_path: ["/portfolio/smart-home-automation-3.png"],
//   },
//   {
//     id: "college_6",
//     name: "Tic Tac Toe",
//     description:
//       "A Java program with AI which allows you to play Tic tac toe game with the program or a person.",
//     category: "college",
//     stack: "Java",
//     year: "2017",
//     key_words: "Tic Tac Toe Java college 2017",
//     src_code_url: "https://github.com/smaazs71/Tic-Tac-Toe",
//     view_demo_url: "",
//     gif_path: "/portfolio/tic-tac-toe.gif",
//     images_path: ["/portfolio/tic-tac-toe.png"],
//   },

//   {
//     id: "assignment_1",
//     name: "Acceron - Location sharing using socket-io in Microservice",
//     description:
//       "A full-stack project using Node.js, Express, Socket.IO, React, and Leaflet for real-time location sharing  between taxi drivers and passengers.",
//     category: "assignment",
//     stack: "NodeJS, Express, SocketIO, Microservices",
//     year: "2023",
//     key_words: "string",
//     src_code_url: "https://github.com/smaazs71/LocationSharingApp",
//     view_demo_url: "",
//     gif_path: "/portfolio/location-sharing-microservice.gif",
//     images_path: ["/portfolio/location-sharing-microservice.png"],
//   },
//   {
//     id: "assignment_2",
//     name: "Vigor Backend - Email validation By OTP",
//     description:
//       "Ensures secure email validation in Node.js, employing a one-time password (OTP) system for robust authentication.",
//     category: "assignment",
//     stack: "NodeJS, Express, NodeMailer, Gmail",
//     year: "2023",
//     key_words: "string",
//     src_code_url:
//       "https://github.com/smaazs71/Vigor-Assessment/tree/main/backend",
//     view_demo_url: "",
//     gif_path: "/portfolio/vigor-backend.gif",
//     images_path: ["/portfolio/vigor-backend.png"],
//   },
//   {
//     id: "assignment_3",
//     name: "Vigor Frontend - complex transition layout from figma",
//     description:
//       "For a pre-job assessment, I crafted a complex transition layout for Vigor Launchpad, showcasing my skills in frontend development based on Figma designs.",
//     category: "assignment",
//     stack: "Next, Tailwind, Headless/UI",
//     year: "2023",
//     key_words: "string",
//     src_code_url:
//       "https://github.com/smaazs71/Vigor-Assessment/tree/main/frontend",
//     view_demo_url: "https://vigor-assessment-frontend.vercel.app/",
//     gif_path: "/portfolio/vigor-frontend.gif",
//     images_path: ["/portfolio/vigor-frontend.png"],
//   },
//   {
//     id: "assignment_4",
//     name: "Portfolio 2020",
//     description:
//       "My PHP-powered Portfolio website is a dynamic showcase of my professional journey, featuring interactive elements to highlight skills and achievements.",
//     category: "assignment",
//     stack: "PHP, javascript",
//     year: "2020",
//     key_words: "string",
//     src_code_url: "https://github.com/smaazs71/portfolio",
//     view_demo_url: "https://pfmaaz.000webhostapp.com/",
//     gif_path: "/portfolio/portfolio-old.gif",
//     images_path: ["/portfolio/portfolio-old.png"],
//   },
// ];

export const journeyData = [
  {
    title: "FULL STACK DEVELOPER",
    Date: "Jan 2025 - Current",
    companyName: "Cloudhire",
    companyLogo: "/client/cloudhire-logo.svg",
    description:
      "At Cloudhire, I drive innovation as a Full Stack Developer using the <strong>MERN stack</strong>, <strong>Python</strong>, and <strong>AWS Cloud</strong>. I implemented advanced <mark>credit systems</mark>, automated video conversion with <strong>AWS Lambda</strong> and <strong>SQS</strong>, and built a <em>ChatGPT-powered resume generator</em>. I also enhanced system reliability by debugging <code>MongoDB</code> queries, fixing API bugs, and refining UI/UX designs based on <strong>Figma</strong>. Additionally, I integrated identity verification via <strong>Aadhaar/PAN APIs</strong>, streamlined scheduling with <strong>Calendly</strong>, and unified our codebase with a <mark>MonoRepo architecture</mark> using <strong>Turbo</strong>.",
  },
  {
    title: "Senior Backend Developer",
    Date: "April 2024 - Dec 2025",
    companyName: "Cloudhire",
    companyLogo: "/client/cloudhire-logo.svg",
    description:
      "At <strong>Cloudhire</strong> as a <strong>Senior Backend Developer</strong>, I architected a <mark>high-availability backend</mark> for <strong>cloudhire.ai</strong>, built <em>AI-powered</em> resume parsing and interview scoring APIs using <strong>ChatGPT</strong> and <strong>Whisper</strong>, designed <strong>AWS S3 storage</strong>, and automated <mark>PDF updates</mark>. I also developed a <strong>Chrome extension</strong> for job boards, implemented <strong>Selenium scripts</strong> for LinkedIn applications, set up <strong>CI/CD pipelines</strong> on <strong>AWS EC2</strong> with <strong>GitHub Actions</strong>, integrated <strong>PhonePe payments</strong>, and built an <mark>ETL pipeline</mark> to migrate data to <strong>MongoDB</strong>.",
  },
  {
    title: "FULL STACK DEVELOPER (MERN, NextJS)",
    Date: "Feb 2023 - Apr 2024",
    companyName: "AP Furniture",
    companyLogo: "/client/AP-furniture-logo-wobg.png",
    description:
      "  At <strong>AP Furniture</strong>, I served as a <strong>MERN Developer</strong> where I built a <em>Next.js-based digital showroom</em> to highlight premium furniture collections, implemented <strong>Tailwind CSS</strong> for responsive UI/UX, and developed a <mark>secure, role-specific system</mark> on Linux to manage inventory, employees, and products.",
  },
  {
    title: "FULL STACK DEVELOPER",
    Date: "Sep 2021 - Feb 2023",
    companyName: "Infosys",
    companyLogo: "/client/infosys-logo.svg",
    description:
      "At <strong>Infosys</strong> (Client: <strong>Amex</strong>), I served as a <strong>System Engineer</strong>, developing and maintaining backend systems using <strong>Spring Boot</strong> and <strong>React.js</strong> for enterprise financial solutions. I enhanced scalability through robust API development in a <mark>microservices environment</mark> and optimized backend design with specialized microservices training.",
  },
  {
    title: "FREELANCING (React JS)",
    Date: "Jun 2021 and Sep 2021",
    companyName: "Naaz Furniture",
    companyLogo: "/client/naaz-furniture-logo.png",
    description:
      "As a <strong>Freelance Developer</strong> at <strong>Naaz Furniture</strong> in <mark>Mumbai</mark> (Jun 2021 - Sept 2021), I built a <em>React-based management system</em> to streamline tracking of products, stock, and employee data.",
  },
];

export const educationData = [
  {
    title: "Saint Andrew's High School",
    date: "Jun 2001 - Mar 2013",
    score: "77.09%",
    url: "https://saintandrewschoolbandra.in/",
    description:
      "Established in the year 1927, affiliated with MSBSHSE, providing primary to secondary education.",
  },
  {
    title: "Rizvi College of A.S.C.",
    date: "2013 – 2015",
    score: "64.31%",
    url: "http://www.rizvicollege.edu.in/",
    description:
      "Affiliated with the University of Mumbai, offering undergraduate and postgraduate programs.",
  },
  {
    title: "Rizvi College of Engineering",
    date: "July 2016 - Oct 2020",
    score: "74.37%",
    url: "https://eng.rizvi.edu.in/",
    description:
      "Affiliated with the University of Mumbai, offering engineering programs.",
  },
];

export const clientData = [
  {
    name: "Infosys pvt. ltd.",
    logo: "/client/infosys-logo.svg",
    url: "https://www.infosys.com/",
  },
  {
    name: "Cloudhire.ai",
    logo: "/client/cloudhire-logo.svg",
    url: "https://www.cloudhire.ai/",
  },
  {
    name: "American Express",
    logo: "/client/american-express-logo.svg",
    url: "https://www.americanexpress.com/",
  },
  {
    name: "AP Furniture",
    logo: "/client/AP-furniture-logo-wobg.png",
    url: "https://theap.vercel.app/",
  },
  {
    name: "Utells",
    logo: "/client/utells-logo.svg",
    // url: "https://www.utells.com/",
  },
  {
    name: "Naaz Furniture",
    logo: "/client/naaz-furniture-logo.png",
    url: "https://www.indiamart.com/naaz-furnituremumbai/?srsltid=AfmBOoqNPQhm5dRnzdmRXgkghc5Oi8XwD5l9ueDFYl2IFtALWqh6F9eo",
  },
  {
    name: "Acranox Technologies",
    logo: "/client/acranox-logo-wobg.png",
    url: "https://acranoxtech.com/",
  },
  {
    name: "Lady Look Creation",
    logo: "/client/lady-look-creation-logo.svg",
    url: "https://www.justdial.com/jdmart/Mumbai/Lady-Look-Creation-Opposite-Railway-Station-Bandra-East/022PXX22-XX22-200322000331-M2Y8_BZDET/catalogue",
  },
];

export const listTestimoni = [
  {
    name: "Usama",
    image: "/display-icons/dummy-profile-picture.jpeg",
    city: "Mumbai",
    country: "India",
    rating: "4.9",
    testimoni:
      "Working with Mohamed Maaz Shaikh at AP Furniture was a pleasure. His creative solutions and attention to detail transformed our space. We appreciate his professionalism and commitment to excellence.",
  },
  {
    name: "Renu Agarwal",
    image: "/display-icons/dummy-profile-picture.jpeg",
    city: "Bangalore",
    country: "India",
    rating: "4.8",
    testimoni:
      "Mohamed Maaz Shaikh's contribution to our project at Infosys was invaluable. His technical expertise and collaborative approach significantly enhanced our team's performance. A true professional!",
  },
  {
    name: "Lydia",
    image: "/display-icons/dummy-profile-picture.jpeg",
    city: "",
    country: "USA",
    rating: "5.0",
    testimoni:
      "We engaged with Mohamed Maaz Shaikh for a project at American Express, and his dedication to delivering high-quality results was exceptional. His insights and innovative solutions greatly contributed to our success.",
  },
  {
    name: "Sibani Sankar",
    image: "/display-icons/dummy-profile-picture.jpeg",
    city: "Bangalore",
    country: "India",
    rating: "4.8",
    testimoni:
      "Collaborating with M. Maaz Shaikh at Infosys on the American Express project was a pleasure. His dedication and attention to detail played a crucial role in the success of our initiatives. A truly valuable team member!",
  },
  {
    name: "Vratant",
    image: "/display-icons/dummy-profile-picture.jpeg",
    city: "Jaipur",
    country: "India",
    rating: "4.7",
    testimoni:
      "Maaz's creative prowess at Infosys in Mumbai brought a unique perspective to our projects for American Express. His innovative ideas and commitment to excellence made our collaborations memorable and successful.",
  },
];

export const footerLinks = [
  // {
  //   title: "About",
  //   links: [
  //     { title: "Portfolio", url: "#portfolio", image_path: "" },
  //     { title: "Journey", url: "#journey", image_path: "" },
  //     { title: "Education", url: "#education", image_path: "" },
  //     { title: "Eminence", url: "#eminence", image_path: "" },
  //   ],
  // },
  {
    title: "Latest Projects",
    links: [
      {
        title: "The Ap",
        url: "https://theap.vercel.app",
        image_path: "/social-media/ap-furniture-short-logo.svg",
      },
      {
        title: "Lady Look Creation",
        url: "https://ll-creation.vercel.app/",
        image_path: "/social-media/lady-look-creation-logo.jpeg",
      },
      // { title: "Podcast", url: "/", image_path: "" },
      // { title: "Invite a friend", url: "/", image_path: "" },
    ],
  },
  {
    title: "Links",
    links: [
      {
        title: "Linked In",
        url: "https://www.linkedin.com/in/mohamed-maaz-shaikh",
        image_path: "/social-media/linkedin.svg",
      },
      {
        title: "GitHub",
        url: "https://github.com/smaazs71",
        image_path: "/social-media/github.svg",
      },
      {
        title: "Previous Portfolio",
        url: "https://pfmaaz.000webhostapp.com/",
        image_path: "",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      // { title: "Discord", url: "/", image_path: "/discord.svg" },
      {
        title: "Instagram",
        url: "https://www.instagram.com/shaikhms71/",
        image_path: "/social-media/instagram.svg",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/Mr_M_Maaz",
        image_path: "/social-media/twitter.svg",
      },
      {
        title: "Facebook",
        url: "https://www.facebook.com/mmaaz.shaikh.3/",
        image_path: "/social-media/facebook.svg",
      },
    ],
  },
];
