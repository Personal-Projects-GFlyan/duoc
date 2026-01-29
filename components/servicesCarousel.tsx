import dynamic from "next/dynamic"
import { Suspense } from "react";
import { getServices_ScopeLimitedBy3 } from "@/lib/supabase/server";

const Mobile = dynamic(()=>import('./mobileServicesCarousel'), {loading: ()=>null});
const Desktop = dynamic(()=>import('./desktopServicesCarousel'), {loading: ()=>null});


export default async function ServicesCarousel() {
    const services = await getServices_ScopeLimitedBy3();

    return(
        <>
            <div className="xl:hidden mt-5">
                <Mobile services={services}/>
            </div>
            <div className="hidden xl:block mt-5 w-full">
                <Desktop services={services}/>
            </div>
        </>
    );
}