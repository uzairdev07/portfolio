import {
    mobile,
    backend,
    creator,
    github,
    python,
    freelance,
    springboot,
    java,
    c,
    webdev,
    web,
    javascript,
    html,
    css,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Java Software Developer",
        icon: web,
    },
    {
        title: "Problem Solver",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Code Architect",
        icon: creator,
    }
];

const technologies = [
    {
        name: "JAVA",
        icon: java,
    },
    {
        name: "SPRING BOOT",
        icon: springboot,
    },
    {
        name: "PYTHON",
        icon: python,
    },
    {
        name: "C/C++",
        icon: c,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "GITHUB",
        icon: github,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Freelance Java Developer",
        company_name: "Various Clients",
        iconBg: "#383E56",
        icon: freelance,
        date: "2023 - Present",
        points: [
            "Building custom Java applications tailored to clients' specific requirements.",
            "Collaborating closely with clients to understand their needs and deliver high-quality solutions.",
            "Utilizing Java frameworks and libraries to develop robust and scalable software.",
            "Troubleshooting and debugging code to ensure optimal performance.",
        ],
    },
    {
        title: "C/C++ Developer",
        company_name: "Tech Solutions Inc.",
        iconBg: "#E6DEDD",
        date: "2020 - 2022",
        icon: c,
        points: [
            "Developing and maintaining C/C++ applications for various projects.",
            "Working closely with the team to implement efficient algorithms and data structures.",
            "Optimizing code for performance and memory usage.",
            "Participating in code reviews and providing valuable feedback to improve code quality.",
        ],
    },
    {
        title: "Web Design and UI Developer",
        company_name: "Creative Studio",
        iconBg: "#383E56",
        date: "2019 - 2020",
        icon: webdev,
        points: [
            "Creating visually appealing and user-friendly website designs.",
            "Implementing responsive design principles to ensure compatibility across devices.",
            "Collaborating with clients to understand their brand identity and design requirements.",
            "Using HTML, CSS, and JavaScript to bring designs to life.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Store App",
        description:
            "The Store App Desktop is a robust and user-friendly desktop application designed to simplify and enhance the online shopping experience.",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "javafx",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "fxml",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/uzairdev07/StoreApp",
    },
];

export {services, technologies, experiences, testimonials, projects};
