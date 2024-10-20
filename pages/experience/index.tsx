import { Inter } from "next/font/google";
import Image from 'next/image';
import ScrumImg from '@/public/imgs/scrum.jpg';
import ExperienceCard from "@/components/experience/ExperienceCard";
import { ExperienceContent } from "@/utils/ExperienceContent";

export default function Experience() {
    const content = ExperienceContent;
    return(<>
    <div className="flex pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full pt-20 pb-20">
                {content.map(value=>(
                    <ExperienceCard path={value.path} title={value.title} description={value.description}/>
                ))}
        </div>
    </div>
    </>);
}