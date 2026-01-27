import { OtherServiceCard } from "@/components/serviceCard";
import { getOtherServices_LimitedBy2, getServiceInfosById, getProjectsByServiceId_LimitedBy2 } from "@/lib/supabase/server"
import { Portfolio } from "./portfolio";

type Service = {
    id: number,
    nome: string,
    descricao: string,
    urlimagem: string;
    escopo: string[];
}

function isOdd(x: number) {
    return x % 2 !== 0;
}

export default async function ServiceInfos({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const serviceInfos = await getServiceInfosById(Number(id));
    const otherServices: Service[] = await getOtherServices_LimitedBy2(Number(id));
    const projects =  getProjectsByServiceId_LimitedBy2(Number(id));

    return(
        <>
            <section className="bg-[#07090A] w-full pt-5 pb-10 lg:py-10 px-7 lg:px-10">
                <h1 className="text-white text-[23px] lg:text-[67px] font-bold mt-[75px]">{serviceInfos.nome}</h1>
                <p className="text-left text-[12px] lg:text-[22px] text-[#D8D8D8] mt-2">{serviceInfos.descricao}</p>
                <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={250} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-7"/>
            </section>

            <section className="bg-[#07090A] px-7 lg:px-10 flex flex-col sm:flex-row gap-7 pb-14 overflow-auto scrollbar-hide 2xl:justify-center 2xl:items-center">
                <article className="bg-[#0E1011] text-[#D8D8D8] p-7 rounded-xl border-[1px] border-[#1F1F1F] max-w-[360px] sm:min-w-[360px] lg:max-w-full">
                    <h1 className="text-[15px] lg:text-[22px] font-bold">Escopo do Serviço</h1>
                    <ul className="mt-3 flex flex-col gap-2">
                        {serviceInfos.escopo.map((item, index) => (
                            <li key={index} className="text-[11px] lg:text-[18px] flex gap-1.5 items-start">
                                <img src="/check-list.svg" alt="Check List Icon" height={10} width={12.5} className="mt-1 lg:hidden"/>
                                <img src="/check-list.svg" alt="Check List Icon" height={10} width={15} className="hidden lg:block mt-2"/>
                            {item}</li>
                        ))}
                    </ul>
                </article>
                <article className="bg-[#0E1011] text-[#D8D8D8] p-7 rounded-xl border-[1px] border-[#1F1F1F] max-w-[360px] sm:min-w-[360px] lg:max-w-full">
                    <h1 className="text-[15px] lg:text-[22px] font-bold">Diferenciais</h1>
                    <ul className="mt-3 flex flex-col gap-2">
                        {serviceInfos.diferencial.map((item, index) => (
                            <li key={index} className="text-[11px] lg:text-[18px] flex gap-1.5 items-start">
                                <img src="/check-list.svg" alt="Check List Icon" height={10} width={12.5} className="mt-1 lg:hidden"/>
                                <img src="/check-list.svg" alt="Check List Icon" height={10} width={15} className="hidden lg:block mt-2"/>
                            {item}</li>                        
                        ))}
                    </ul>
                </article>
                <article className="bg-[#0E1011] text-[#D8D8D8] p-7 rounded-xl border-[1px] border-[#1F1F1F] max-w-[360px] sm:min-w-[360px] lg:max-w-full">
                    <h1 className="text-[15px] lg:text-[22px] font-bold">Benefícios</h1>
                    <ul className="mt-3 flex flex-col gap-2">
                        {serviceInfos.beneficio.map((item, index) => (
                            <li key={index} className="text-[11px] lg:text-[18px] flex gap-1.5 items-start">
                                <img src="/check-list.svg" alt="Check List Icon" height={10} width={12.5} className="mt-1 lg:hidden"/>
                                <img src="/check-list.svg" alt="Check List Icon" height={10} width={15} className="hidden lg:block mt-2"/>
                            {item}</li>                        
                        ))}
                    </ul>
                </article>
            </section>

            {/* PORFÓLIO */}
            <Portfolio serviceName={serviceInfos.nome} projectsData={projects}/>

            <section className="bg-[#06090B] w-full pt-5 pb-10 lg:py-10 px-7 lg:px-10 flex flex-col justify-center items-center">
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] text-center px-7 lg:px-10">EXPLORE MAIS</h1>
                <h2 className="text-white text-[23px] lg:text-[50px] text-center font-bold">Outros Serviços</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/> 
                <div className="flex flex-col gap-7 mt-5 lg:mt-10 2xl:max-w-[1444px]">
                    {otherServices.map((service, index) => (
                        <OtherServiceCard
                        key={index} 
                        odd={isOdd(index)}
                        service={service}/>))}        
                </div>
            </section>
        </>
    );
}