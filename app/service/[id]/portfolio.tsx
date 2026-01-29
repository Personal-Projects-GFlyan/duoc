"use client";

import { use } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

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
            <section className="bg-[#0B0E10] w-full py-10 lg:p-10 px-7 flex justify-center items-center">
                <div className="w-full max-w-[1456px] flex flex-col justify-center items-center">
                    <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] px-7 lg:px-10">PORTFÓLIO</h1>
                    <h2 className="text-white text-[23px] lg:text-[50px] lg:max-w-[800px] text-center font-bold">Projetos de <span className="text-[#DAA520]">{serviceName}</span></h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/> 
                    <div className="lg:hidden flex flex-col md:flex-row gap-5 mt-5 justify-center items-center w-full max-w-[1456px]">
                        {projects.map((project, index) => (
                            <Mobile key={index} id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                        ))}
                    </div>
                    <div className="hidden lg:grid mt-10 grid-cols-2 gap-10 w-full max-w-[1456px]">
                        {projects.map((project, index) => (
                            <Desktop key={index} id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                        ))}
                    </div>
                    <div className="flex justify-between mt-6 gap-5">
                        <Link href="/projects" className="font-bold bg-[#DAA520] text-[14px] lg:text-[19px] py-1 px-5 lg:px-4 transition hover:scale-105 cursor-pointer mt-5">
                            VER PORTIFÓLIO COMPLETO
                        </Link>
                    </div>
                </div>
            </section>
        );
    } else {
        return(<></>);
    }
}