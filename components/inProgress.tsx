"use client";

import { useState, Ref, useEffect, use } from "react";
import MobileProjectCard from "./mobileProjectsCard";
import DesktopProjectCard from "./desktopProjectsCard";
import dynamic from "next/dynamic";

const Carousel = dynamic(()=> import("@/components/inProgressCarousel"), {ssr: false});

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

type S_P_InProgress = {
  id: number
  nome: string,
  projects: ProjectCard[];
}

export default function InProgress({servicesAndProjectsInProgress, allProjectsInProgress} : {servicesAndProjectsInProgress: S_P_InProgress[], allProjectsInProgress: ProjectCard[]}) {
    const [active, setActive] = useState(0);
    const [projects, setProjects] = useState<ProjectCard[]>([]);
    
    function isActive(value: number) {
        return value === active;
    }

    useEffect(()=>{
        if(active) {
            for(const service of servicesAndProjectsInProgress) {
                if(service.id === active){
                    setProjects(service.projects);
                    break;
                }
            }
        } else {
            setProjects(allProjectsInProgress);
        }
    },[active]);

    return(
        <>
            <ul className=" text-[#999999] text-[11px] md:text-[18px]  flex flex-col justify-center items-center mt-5">
                <li className={!active?"rounded-xl md:rounded-2xl bg-[#DAA520] border border-[#DAA520] px-5 py-1 text-[#000000] font-bold" :"border border-[#999999] rounded-xl md:rounded-2xl bg-[#0F0F0F] px-5 py-1"}>
                    <button className="line-clamp-1 text-start" 
                            onClick={()=>{setActive(0)}}>
                        Todos
                    </button>
                </li>
                {(servicesAndProjectsInProgress.length === 1)?
                    <></>:
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {servicesAndProjectsInProgress.map((service, index)=>(
                            <li key={index} className={isActive(service.id)?"rounded-xl md:rounded-2xl bg-[#DAA520] border-[#DAA520] text-[#000000] px-3 py-1 font-bold" :"border border-[#999999] rounded-xl md:rounded-2xl bg-[#0F0F0F] px-3 py-1"}
                        >
                                <button className="line-clamp-1 text-start"
                                        onClick={()=>{setActive(service.id)}}>
                                    {service.nome}
                                </button>
                            </li>
                        ))}
                    </div>
                }
            </ul>
            <div className="w-full">
                {projects.length===1?(
                    projects.map((project, index)=>(
                        <div key={index} className="w-full mt-5 xl:mt-6 flex justify-center items-center">
                            <div className="lg:hidden rounded-xl overflow-hidden max-w-[400px] w-full">
                                <MobileProjectCard id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/> 
                            </div>
                            <div className="hidden lg:block">
                                <DesktopProjectCard  id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                            </div>
                        </div>
                    ))
                ):
                <>
                 <Carousel projects={projects}/>
                </>}
                
            </div>

        </>
    );
}