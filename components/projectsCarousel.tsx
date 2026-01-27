import { getProjectsInfos_LimitedBy6 } from "@/lib/supabase/server";
import dynamic from "next/dynamic";
import { Suspense } from "react";


const Mobile = dynamic(()=>import("./mobileProjectsCarousel"), {loading: ()=>null});
const Desktop = dynamic(()=>import("./desktopProjectsCarousel"), {loading: ()=>null});


export default function ProjectsCarousel() {
    const projects = getProjectsInfos_LimitedBy6();
    return(
        <>
            <div className="xl:hidden">
                <Suspense fallback={<div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 animate-spin rounded-full">
                                        <div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                            background: 'conic-gradient(#DAA520, #000000)',
                                            WebkitMask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            mask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            }}
                                        />
                                    </div>}>
                    <Mobile projectsData={projects}/>
                </Suspense>
            </div>
            <div className="hidden xl:block">
                <Suspense fallback={<div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 animate-spin rounded-full">
                                        <div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                            background: 'conic-gradient(#DAA520, #000000)',
                                            WebkitMask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            mask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                                            }}
                                        />
                                    </div>}>
                    <Desktop projectsData={projects}/>
                </Suspense>
            </div>
        </>
    );
}