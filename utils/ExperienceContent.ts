import { ExperienceContentType } from "@/types/ExperienceContentType";
import ScrumImg from '@/public/imgs/scrum.jpg';
import DevSec from '@/public/imgs/sec.jpg';
import db from '@/public/imgs/db.jpg';
import Mobile from '@/public/imgs/mobile.png';
import fsd from '@/public/imgs/fsd.jpg';

export const ExperienceContent: ExperienceContentType[] = [
    {
        path: ScrumImg,
        description: `As a Scrum Master, I led a dynamic development team for two years,
         closely collaborating with the Product Owner to ensure smooth sprint planning and execution.
         I played a key role in facilitating Scrum ceremonies and empowering the team by clarifying the scope of epics, stories, and overall project boundaries.
         My focus was on fostering a collaborative environment that maximized productivity while adhering to Agile principles.`,
        title: 'Scrum Master (2 years)'
    },
    {
        path: fsd,
        description: `With six years of full-stack development experience, 
        I've built robust and secure applications from front to back, ensuring the highest standards of code quality.
          I've worked with technologies like Symfony, Next.js, and NestJS to deliver essential services for one of Mexico's top public universities. 
          I managed critical functions for workers, students,
         and IT resources, always implementing best practices in both security and development.`,
        title: 'Full-Stack Developer (6 years)'
    },
    {
        path: Mobile,
        description: `I developed a Flutter-based mobile app that improved neighborhood safety by enabling secure taxi requests.
         This app was designed to enhance the security of local residents by connecting them with trusted drivers within a closed, safe system.
         The project demonstrated my ability to create impactful solutions using mobile technology to address community needs.`,
        title:'Mobile Developer'
    },
    {
        path:db,
        description: `I have extensive experience managing data with PostgreSQL for large-scale systems like a university's database
         and Firebase Cloud Firestore for mobile app data storage. My expertise in database management ensures efficiency,
         scalability, and security for all stored information.        `,
        title: 'Databases and Infrastructure'
    },
    {
        path: DevSec,
        description: `Beyond my core development experience, I bring valuable skills in design patterns,
         penetration testing, and bug bounty practices. I also have hands-on experience with Docker and Kubernetes,
         allowing me to streamline deployments and manage containerized applications efficiently.`,
        title: 'Additional Skills'
    }
]