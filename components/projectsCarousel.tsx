import { getProjectsInfos_LimitedBy6 } from "@/lib/supabase/server";
import dynamic from "next/dynamic";


const Mobile = dynamic(()=>import("./mobileProjectsCarousel"), {loading: ()=>null});
const Desktop = dynamic(()=>import("./desktopProjectsCarousel"), {loading: ()=>null});


export default async function ProjectsCarousel() {
    const projects = await getProjectsInfos_LimitedBy6();
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