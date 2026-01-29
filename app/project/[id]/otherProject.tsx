import {use} from 'react'
import dynamic from 'next/dynamic';

const Carousel = dynamic(()=>import("@/components/otherProjectsCarousel"), {loading:()=>null});

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}


export default function OtherProjects({otherProjects}: {otherProjects: Promise<ProjectCard[]>}) {
    const projects = use(otherProjects);
    if(projects.length === 0) {
        return(
            <></>
        );
    } else { 
        return(
            <section className="bg-[#0B0E10] w-full py-10 px-7 lg:p-10 flex justify-center items-center">
                <div className='w-full max-w-[1456px]'>
                    {(projects.length === 1)?(<></>): 
                    (<Carousel projects={projects}/>)}
                </div>
            </section>
        );
    }
}