import { ExperienceContentType } from "@/types/ExperienceContentType";
import Image from 'next/image';

export default function ExperienceCard({path,title,description}:ExperienceContentType){
    return (<>
    <div className="flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-700 m-5">
                        <Image
                            style={{maxHeight: 250}}
                            priority={true}
                            src={path} 
                            alt={`${title} Image`} 
                            className="max-w-full max-h-full object-contain pb-5"
                            />
                        <div className="flex justify-center items-center font-bold text-xl mb-2">{title}</div>
                        <div className="flex justify-center items-center p-5">
                            <p className="text-green-200">
                               {description}
                            </p>
                        </div>
        </div>
    </div>
    </>)
}