import { Inter } from "next/font/google";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image';
import UserImg from "@/public/profile.png"
import useSound from "use-sound";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [play] = useSound(`init-sound-effect.mp3`);

  play();
  
  return (<>
  <div className="flex items-center justify-center h-screen pt-20 md:pt-0">
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full pt-10">
    <div 
      className='flex justify-start items-center px-5' 
      style={{ minHeight: '95vh', minWidth: '300px', overflow: 'hidden' }}>
      <TypeAnimation
        sequence={[
          `Software security engineer\t
          With over six years of experience\t
          Frameworks:\t
          [\"Symfony\", \"NextJS\", \"NestJS\", \"Flutter\"]\t
          Databases:\t
          [\"\tPostgreSQL\", \"Cloud firestore\"]\t
          Languages:\t
          [\"Spanish (Native)\", \"English(Advanced)\"]`
        ]}
        wrapper="h2"
        speed={50}
        style={{ fontSize: '2em', display: 'display-inline', whiteSpace:'pre-line', tabSize: "10px" }}
        repeat={0}
        omitDeletionAnimation={true}
      />
    </div>
    <div className="flex justify-center items-center">
            <Image
              priority={true}
              src={UserImg} 
              alt="Portfolio Image" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
    </div>
  </div>
  </>);
}
