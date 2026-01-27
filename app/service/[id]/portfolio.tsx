"use client";

import { use } from "react";
import dynamic from "next/dynamic";

const Mobile = dynamic(()=> import('@/components/mobileProjectCard'), {ssr: false});
const Desktop = dynamic(()=> import('@/components/desktopProjectCard'));

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

export function Portfolio({serviceName, projectsData}: {serviceName: string, projectsData: Promise<ProjectCard[]| null>}) {

    const projects = use(projectsData);

    if(projects != null && projects.length > 0) {
        return(
            <section className="bg-[#0B0E10] w-full pt-5 pb-10 lg:py-10 px-7 lg:px-10 flex flex-col justify-center items-center">
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] px-7 lg:px-10">PORTFÓLIO</h1>
                <h2 className="text-white text-[23px] lg:text-[50px] lg:max-w-[800px] text-center font-bold">Projetos de <span className="text-[#DAA520]">{serviceName}</span></h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/> 
                <div className="lg:hidden flex flex-col gap-5 mt-5">
                    {projects.map((project, index) => (
                        <Mobile key={index} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                    ))}
                </div>
                <div className="hidden lg:flex mt-10 justify-center items-center w-full 2xl:max-w-[1444px] gap-5 xl:gap-14">
                    {projects.map((project, index) => (
                        <Desktop key={index} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                    ))}
                </div>
            </section>
        );
    } else {
        return(<></>);
    }
}