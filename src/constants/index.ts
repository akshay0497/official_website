import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    angular,
    vue,
    django,
    php,
    Python,
    Kotlin,
    csharp,
    aspnetCore,
    aspnet,
    bootstrap,
    SQLServer,
    Java,
    mudblazor,
    aams,
    assets,
    attendance,
    digital,
    dms,
    elib,
    erp,
    escrap,
    face,
    health,
    inventory,
    opac,
    pole,
    vtss,
    vmss,
    wms,
    uppcl,
    uprvunl,
    upassembly,
    jkcement,
    smartcity,
} from "../assets";

// const technologies = [
//     {
//         name: "html",
//         icon: html,
//     },
//     {
//         name: "css",
//         icon: css,
//     },
//     {
//         name: "javascript",
//         icon: javascript,
//     },
//     {
//         name: "typescript",
//         icon: typescript,
//     },
//     {
//         name: "reactjs",
//         icon: reactjs,
//     },
//     {
//         name: "tailwind",
//         icon: tailwind,
//     },
//     {
//         name: "nodejs",
//         icon: nodejs,
//     },
//     {
//         name: "mongodb",
//         icon: mongodb,
//     },
//     {
//         name: "git",
//         icon: git,
//     },
//     {
//         name: "figma",
//         icon: figma,
//     },
//     {
//         name: "angular",
//         icon: angular,
//     },
//     {
//         name: "vue",
//         icon: vue,
//     },
//     {
//         name: "django",
//         icon: django,
//     },
//     {
//         name: "php",
//         icon: php,
//     },
//     {
//         name: "Python",
//         icon: Python,
//     },
//     {
//         name: "Kotlin",
//         icon: Kotlin,
//     },
//     {
//         name: "csharp",
//         icon: csharp,
//     },
//     {
//         name: "aspnetCore",
//         icon: aspnetCore,
//     },
//     {
//         name: "aspnet",
//         icon: aspnet,
//     },
//     {
//         name: "bootstrap",
//         icon: bootstrap,
//     },
//     {
//         name: "SQLServer",
//         icon: SQLServer,
//     },
//     {
//         name: "Java",
//         icon: Java,
//     },
//     {
//         name: "mudblazor",
//         icon: mudblazor,
//     }
// ];

const technologies = [
    {
      name: "HTML 5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS 3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "React JS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Node JS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    },
    {
      name: "Angular",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    },
    {
        name: "Redux",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
        name: "My SQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
        name: "Dot Net",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
    },
    {
        name: "Dot Net Core",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
    },
    
  ];

const products = [
    {
        id: 1,
        images: attendance,
        title: "Attendance Management System",
        description: "Automates attendance using Face Recognition, Biometric, and RFID."
    },
    {
        id: 2,
        images: vtss,
        title: "Vehicle Tracking System (VTS)",
        description: "Real-time vehicle tracking for route optimization and timely delivery."
    },
    {
        id: 3,
        images: vmss,
        title: "Vehicle Workshop Management System (VWMS)",
        description: "Streamlines repairs, inventory, and workshop management."
    },
    {
        id: 4,
        images: face,
        title: "Face Recognition and Detection Using AI",
        description: "Leverages AI for facial identification and verification."
    },
    {
        id: 5,
        images: escrap,
        title: "e-Scrap (Landfill Automation)",
        description: "Optimizes scrap handling and tracking in industrial environments."
    },
    {
        id: 6,
        images: inventory,
        title: "Inventory Management System",
        description: "Streamlines inventory control with GIS mapping and real-time visibility."
    },
    {
        id: 7,
        images: aams,
        title: "Advertisement Management System",
        description: "Automates planning and execution of advertising campaigns."
    },
    {
        id: 8,
        images: erp,
        title: "Digital Academic System (DAS-ERP)",
        description: "An ERP solution for optimizing organizational processes."
    },
    {
        id: 9,
        images: assets,
        title: "Asset Management System (RFID)",
        description: "Tracks and manages assets using RFID and GIS mapping."
    },
    {
        id: 10,
        images: pole,
        title: "Pole and Street Light Management System",
        description: "Manages street light inventory and operational status efficiently."
    },
    {
        id: 11,
        images: elib,
        title: "DigiLib Library Management System",
        description: "An advanced system leveraging RFID/Barcode for seamless library operations."
    },
    {
        id: 12,
        images: digital,
        title: "Digital Library / e-Library",
        description: "Transforms traditional libraries into versatile digital spaces."
    },
    {
        id: 13,
        images: wms,
        title: "Workflow Management System",
        description: "Centralized management of documents and workflows."
    },
    {
        id: 14,
        images: dms,
        title: "Document Management System (DMS)",
        description: "Streamlines storage and retrieval of digital documents."
    },
    {
        id: 15,
        images: opac,
        title: "OPAC",
        description: "Web-based tool for libraries to provide easy collection access."
    },
    {
        id: 16,
        images: health,
        title: "Health Management System",
        description: "Streamlines healthcare facility and patient care management."
    },
];

const Corporate_clients = [
    {
        id: 1,
        logo: uppcl,
        title: "Uttar Pradesh Power Corporation Limited"
    },
    {
        id: 2,
        logo: uprvunl,
        title: "Uttar Pradesh Rajya Vidyut Utpadan Nigam Limited"
    },
    {
        id: 3,
        logo: upassembly,
        title: "Uttar Pradesh Assembly"
    },
    {
        id: 4,
        logo: jkcement,
        title: "J. K. Cement Pvt. Ltd."
    },
    {
        id: 5,
        logo: smartcity,
        title: "Smart City"
    }
];

//   { name: 'Home', href: '#' },
const menuItems = [
    {
        title: "Home",
        child: []
    },
    {
        title: "Our Processes",
        child: [
            "Requirement Analysis",
            "Acceptance Testing",
            "Project Proposal",
            "Project Design",
            "Project Development",
            "Installation",
        ],
    },
    {
        title: "Products",
        child: [
            "Library Automation System",
            "Campsys ERP Management",
            "File Tracking System",
            "Android Apps",
            "E-Commerce Development",
            "E-Secure",
        ],
    },
    {
        title: "Our Clients",
        child: [
            "Be Our Partner",
        ],
    },
    {
        title: "Our Technology",
        child: []
    },
    {
        title: "About Us",
        child: [
            "Company Profile",
            "Objectives",
            "Management & Staff",
            "IT Service"
        ]
    },
    {
        title: "Career",
        child: []
    },
];


export { technologies, products, Corporate_clients, menuItems };