import { FaLinkedin, FaInstagram, FaGithub, FaCode, FaReact } from "react-icons/fa";
import { CiDesktopMouse2 } from "react-icons/ci";
import imgProject from '/assets/image/img-project.png'


export const navbarItems = () => [
    {
        id: 1,
        name: "Home",
        target: "home",
        offset: -100,
    },
    {
        id: 2,
        name: "About",
        target: "about",
        offset: -70,
    },
    {
        id: 3,
        name: "My Service",
        target: "myservice",
        offset: -70,
    },
    {
        id: 4,
        name: "Projects",
        target: "projects",
        offset: -70,
    },
];

export const sosmedIcons = () => [
    {
        id: 1,
        target: "https://www.linkedin.com/in/andi-aji-saputra-093b21198/",
        icon: FaLinkedin,
    },
    {
        id: 2,
        target: "https://www.instagram.com/andiasaputra/",
        icon: FaInstagram,
    },
    {
        id: 3,
        target: "https://github.com/andiajisaputra3",
        icon: FaGithub,
    },
];

export const cardsItems = {
    education: [
        { id: 1, heading: 'SMK Integral Hidayatullah (2016 - 2019)', content: 'Computer and Network Engineering' },
        { id: 2, heading: 'University of Muhammadiyah Malang (2019 - 2024)', content: 'Bachelor of Engineering - GPA 3.81' }
    ],
    experience: [
        { id: 1, heading: 'Internship (2016)', content: 'PT. Berau Coal - February to May' },
        { id: 2, heading: 'Internship (2022)', content: 'PT. Sinar Nusantara Industries - August to September' }
    ],
    certificate: [
        { id: 1, heading: 'Oracle Academy (2021)', content: 'Database Foundation' },
        { id: 2, heading: 'Prograte (2021)', content: 'HTML & CSS' },
        { id: 3, heading: 'Dicoding (2023)', content: 'HTML | CSS | JavaScripts | React' }
    ],
    skills: [
        { id: 1, heading: 'Technical Skills', content: 'HTML | CSS | JavaScripts | React | SQL' },
        { id: 2, heading: 'Soft Skills', content: 'Growth Mindset | Self-Regulated Learning | Learning Drive | Grit | Critical Thinking | Problem Solving | Creative Thinking | Learning Agility' }
    ]
}

export const serviceItems = () => [
    {
        id: 1,
        title: 'Front End',
        desc: 'Related to web development projects using HTML, CSS, JS and SQL',
        icon: FaCode,
        animateCard: false,
        target: "home",
    },
    {
        id: 2,
        title: 'React',
        desc: 'Related to web development projects using React',
        icon: FaReact,
        animateCard: true,
        target: "home",
    },
    {
        id: 3,
        title: 'General',
        desc: 'Relating to project administration and software project management',
        icon: CiDesktopMouse2,
        animateCard: false,
        target: "home",
    },
];

export const projectItems = () => [
    {
        id: 1,
        title: 'Cooming Soon',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: imgProject,
        target: '#home'
    },
    {
        id: 2,
        title: 'Cooming Soon',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: imgProject,
        target: '#home'
    },
    {
        id: 3,
        title: 'Cooming Soon',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: imgProject,
        target: '#home'
    },
]