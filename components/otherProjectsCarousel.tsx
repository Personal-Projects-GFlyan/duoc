import dynamic from "next/dynamic";
import Link from "next/link";
import DesktopProjectCard from "./desktopOtherProjectCard";

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

const Mobile = dynamic(()=> import("@/components/mobileOtherProjectsCarousel"), {loading: ()=> null});

export default function OtherProjectsCarousel({projects}: {projects: ProjectCard[]}) {
    return(
        <>
            <div className="lg:hidden flex flex-col justify-center items-center">
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] text-center">EXPLORE MAIS</h1>
                <h2 className="text-[#D8D8D8] text-[23px] lg:text-[50px] text-center font-bold">Outros Projetos</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="mt-2"/>
                <Mobile projects={projects}/>
                <div className="flex justify-between mt-6 gap-5">
                    <Link href="/projects" className="font-bold bg-[#DAA520] text-[14px] md:text-[16.5px] py-1 px-5">
                        VER TODOS OS PROJETOS
                    </Link>
                </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center items-center">
                <h1 className="text-[#DAA520] text-[37px] text-center">EXPLORE MAIS</h1>
                <h2 className="text-[#D8D8D8] text-[50px] text-center font-bold">Outros Serviços</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="mt-2"/> 
                <div className="mt-10 grid grid-cols-3 w-full gap-5">
                    {projects.map((project, index)=>(
                        <DesktopProjectCard
                            key={index}
                            id={project.id}
                            title={project.nome} 
                            localization={project.localizacao}
                            imageSrc={project.urlimagem}
                            imageAlt={project.altimagem}
                        />
                    ))}
                </div>
                <Link href="/projects" className="font-bold bg-[#DAA520] text-[19px] py-1 px-4 transition hover:scale-105 cursor-pointer mt-10">
                        VER TODOS OS PROJETOS
                </Link>
            </div>
        </>
    )

}