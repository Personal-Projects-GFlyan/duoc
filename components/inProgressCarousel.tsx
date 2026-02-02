import dynamic from "next/dynamic";


const Mobile = dynamic(()=>import("./mobileProjectsCarousel"), {loading: ()=>null});
const Desktop = dynamic(()=>import("./inProgressDesktopProjectsCarousel"), {loading: ()=>null});
import DesktopProjectCard from "./desktopProjectsCard";


type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}


export default function ProjectsCarousel({projects}: {projects: ProjectCard[]}) {
    return(
        <>
            <div className="lg:hidden">
                <Mobile projects={projects}/>
            </div>
            <div className="hidden lg:block">
                {(projects.length < 4)?
                    <div className="pb-6 mt-5 xl:mt-6 flex justify-center items-center gap-10">
                        {projects.map((project, index)=>(
                            <DesktopProjectCard key={index}  id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                        ))}
                    </div>:
                    <Desktop projects={projects}/>
                }
            </div>
        </> 
    );
}
