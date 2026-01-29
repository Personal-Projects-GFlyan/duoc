import { getServices_ScopeLimitedBy3 } from "@/lib/supabase/server"
import { ServicesCard } from "./servicesCard";

export default async function Services() {
    const services = await getServices_ScopeLimitedBy3();
    return(
        <>
                {services.map((service, index) => (
                    <ServicesCard key={service.id} position={index} service={service}/>
                ))}
        </>
    );
}