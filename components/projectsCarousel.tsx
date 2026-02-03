import { getProjectsInfos_LimitedBy6 } from "@/lib/supabase/server";
import dynamic from "next/dynamic";
import DesktopProjectCard from "./desktopProjectsCard";

const Mobile = dynamic(()=>import("./mobileProjectsCarousel"), {loading: ()=>null});
const Desktop = dynamic(()=>import("./desktopProjectsCarousel"), {loading: ()=>null});


export default async function ProjectsCarousel() {
    const projects = await getProjectsInfos_LimitedBy6();
    return(
        <>
            <div className="lg:hidden">
                <Mobile projects={projects}/>
            </div>
            <div className="hidden lg:block">
                {(projects.length < 4)?
                <div className="flex gap-5 xl:gap-10 items-center justify-center">
                    {projects.map((project, index)=>(
                        <DesktopProjectCard key={index} id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                    ))}
                </div>:
                <Desktop projects={projects}/>}
            </div>
        </> 
    );
}