import { meta, shopify, starbucks, tesla ,accenture,db} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    angular,
    spring,
    powerbi,
    gcp,
    bitbucket
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: spring,
        name: "Spring-boot",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: powerbi,
        name: "powerbi",
        type: "Visualization",
    },
    {
        imageUrl: gcp,
        name: "GCP",
        type: "Cloud",
    },
    {
        imageUrl: bitbucket,
        name: "BITBUCKET",
        type: "Version Control",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Data Engineering Associate",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#ffffff",
        date: "June 2022 - August 2022",
        points: [
            "Indian Hotel,Tourism Data Analysis.",
            "To analyse the hotel tourism dataset and customer dataset and visualize them for a better understanding using PowerBi,Pyspark and Databricks.",
        ],
    },
    {
        title: "Graduate Analyst",
        company_name: "Deutsche Bank",
        icon: db,
        iconBg: "#ffffff",
        date: "July 2023 -Present",
        points: [
            "Solve various issues using sonarqube.",
            "Written Gatling scripts to perform performance testing.",
            "Written frontend in Angular and backend in Java to feed an xml and make modification and convert that to Pdf.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mohnishjain19',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mohnish-jain-9377831b4/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Cognitive Health Analysis',
        description: 'Developed a web application than can be used for Depression Screening. ',
        link: 'https://github.com/mohnishjain19/Final_Year_project',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'E-commerce Website',
        description: 'Create a fully functional mern stack Ecommerce website using  react, redux, express, node, mongodb.',
        link: 'https://github.com/mohnishjain19/Ecommerce_Project/tree/master',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Bidding Players',
        description: 'Created a simple java bidding project using d HashSets, ArrayList, Objects, Classes, Swings, Exception Handling.',
        link: 'https://github.com/mohnishjain19/Bidding-Players',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Book-store',
        description: 'Used Node js ,Express ,Rest Apis ,mongodb ,react.js ,bootstarp to create this fully functioning website.',
        link: 'https://github.com/mohnishjain19/Book_store',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Mission Million Books',
        description: 'Used react.js ,bootstrap to prepare this website.',
        link: 'https://github.com/mohnishjain19/misbah_project',
    }
];