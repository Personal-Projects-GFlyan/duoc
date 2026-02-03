"use client";

import { useState, useEffect } from "react";
import DesktopProjectCard from "./dektopProjectCardForProjectPage";
import MobileProjectCard from "./mobileProjectsCard";

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

export default function Complete({servicesAndProjects, allProjects} : {servicesAndProjects: S_P_InProgress[], allProjects: ProjectCard[]}) {
    const [active, setActive] = useState(0);
    const [projects, setProjects] = useState<ProjectCard[]>([]);    
    function isActive(value: number) {
        return value === active;
    }

    useEffect(()=>{
        if(active) {
            for(const service of servicesAndProjects) {
                if(service.id === active){
                    setProjects(service.projects);
                    break;
                }
            }
        } else {
            setProjects(allProjects);
        }
        console.log(projects);

    },[active]);

    return(
        <>
            <ul className=" text-[#999999] text-[11px] md:text-[18px]  flex flex-col justify-center items-center mt-7 sm:mt-10">
                <li className={!active?"rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#DAA520] border border-[#DAA520] px-5 py-1 sm:py-1.5 text-[#000000] font-bold" :"border border-[#999999] rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#0F0F0F] px-5 py-1 sm:py-1.5"}>
                    <button className="w-full truncate text-start" 
                            onClick={()=>{setActive(0)}}>
                        Todos
                    </button>
                </li>
                {(servicesAndProjects.length === 1)?
                    <></>:
                    <div className="flex flex-wrap  justify-center items-center gap-5 mt-5">
                        {servicesAndProjects.map((service, index)=>(
                            <li key={index} className={isActive(service.id)?"rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#DAA520] border-[#DAA520] text-[#000000] px-3 py-1 sm:py-1.5 font-bold" :"border border-[#999999] rounded-xl sm:rounded-2xl md:rounded-3xl bg-[#0F0F0F] px-3 py-1 sm:py-1.5"}>
                                <button className="max-w-[60px] sm:max-w-[150px] md:max-w-[175px] xl:max-w-[150px] 2xl:max-w-[200px] w-full truncate text-start"
                                        onClick={()=>{setActive(service.id)}}>  
                                    {service.nome}
                                </button>
                            </li>
                        ))}
                    </div>
                }
            </ul>
            <div className="w-full lg:min-w-full lg:max-w-full mt-5 sm:mt-10 lg:mt-10 flex justify-center items-center flex-col gap-5 lg:flex-row lg:flex-wrap lg:gap-10">
                {projects.map((project, index)=>(
                    <div key={index} className="w-full lg:w-auto">
                        <div className="lg:hidden w-full">
                            <MobileProjectCard id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                        </div>
                        <div className="hidden lg:block min-w-[400px] xl:min-w-[525px]">
                            <DesktopProjectCard id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}