import dynamic from "next/dynamic";


const Mobile = dynamic(()=>import("./mobileProjectsCarousel"), {loading: ()=>null});
const Desktop = dynamic(()=>import("./desktopProjectsCarousel"), {loading: ()=>null});

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
            <div className="xl:hidden">
                <Mobile projects={projects}/>
            </div>
            <div className="hidden xl:block">
                <Desktop projects={projects}/>
            </div>
        </> 
    );
}