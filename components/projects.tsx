import { getAllProjectsInProgress, getServicesAndProjectsInProgress, getAllProjects, getServicesAndProjects } from "@/lib/supabase/server";
import InProgress from "./inProgress";
import Complete from "./complete";

export default async function Projects() {
    const servicesAndProjectsInProgress = await getServicesAndProjectsInProgress();
    const allProjectsInProgress = await getAllProjectsInProgress();
    const serviceAndProjects = await getServicesAndProjects();
    const allProjects = await getAllProjects();
    return(
        <> 
            {(servicesAndProjectsInProgress.length === 0)?
                <></>:
                <section id="inprogress" className="bg-[#050505] w-full py-10 px-7 lg:p-10 flex justify-center items-center">
                    <div className="w-full max-w-[1456px] flex flex-col justify-center items-center lg:mt-20">
                        <h1 className="text-white text-[23px] lg:text-[50px] lg:max-w-[800px] text-center font-bold">Projetos em <span className="text-[#DAA520]">Andamento</span></h1>
                        <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                        <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/> 
                        <InProgress servicesAndProjectsInProgress={servicesAndProjectsInProgress} allProjectsInProgress={allProjectsInProgress}/>
                    </div>
                </section>}

            {(serviceAndProjects.length === 0)?
                <></>:
                <section className="bg-[#050505] w-full py-10 px-7 lg:p-10 flex justify-center items-center">
                    <div className="w-full max-w-[1456px] flex flex-col justify-center items-center">
                        <h1 className="text-white text-[23px] lg:text-[50px] lg:max-w-[800px] text-center font-bold">Portfólio <span className="text-[#DAA520]">Completo</span></h1>
                        <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                        <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/> 
                        <Complete servicesAndProjects={serviceAndProjects} allProjects={allProjects}/>
                    </div>
                </section>}
        </>
    );
}