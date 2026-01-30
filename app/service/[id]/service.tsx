import { OtherServiceCard } from "@/components/servicesCard";
import { getOtherServices_LimitedBy2, getServiceInfosById, getProjectsByServiceId_LimitedBy2 } from "@/lib/supabase/server"
import { notFound } from "next/navigation";
import MobileProjectCard from "@/components/mobileProjectCard";
import DesktopProjectCard from "@/components/desktopProjectCard";
import Link from "next/link";

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

export default async function Service({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const serviceInfos = await getServiceInfosById(Number(id));
    if(!serviceInfos) {
        notFound();
    }
    const projects = await getProjectsByServiceId_LimitedBy2(Number(id));
    const otherServices: Service[] = await getOtherServices_LimitedBy2(Number(id));

    return(
        <>
            <section className="bg-[#07090A] w-full pt-5 pb-10 lg:py-10 px-7 lg:px-10 text-[#D8D8D8] flex justify-center items-center">
                <div className="w-full max-w-[1456px]">
                    <h1 className="text-[23px] md:text-[30px] lg:text-[67px] font-bold mt-[75px]">{serviceInfos.nome}</h1>
                    <p className="text-left text-[12px] md:text-[18px] lg:text-[22px] mt-2">{serviceInfos.descricao}</p>
                    <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={250} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-7"/>
                </div>
            </section>

            <section className="bg-[#07090A] px-7 lg:px-10 pb-14 flex justify-center items-center">
                <div className="w-full max-w-[1456px] flex flex-col sm:flex-row gap-7 overflow-auto scrollbar-hide xl:grid xl:grid-cols-3">
                    <article className="bg-[#0E1011] text-[#D8D8D8] p-7 rounded-xl border-[1px] border-[#1F1F1F] max-w-[360px] sm:min-w-[360px] lg:max-w-full">
                        <h1 className="text-[15px] md:text-[19px] lg:text-[22px] font-bold">Escopo do Serviço</h1>
                        <ul className="mt-3 flex flex-col gap-2">
                            {serviceInfos.escopo.map((item, index) => (
                                <li key={index} className="text-[11px] md:text-[14px] lg:text-[16px] flex gap-1.5 items-start">
                                    <img src="/check-list.svg" alt="Check List Icon" height={10} width={12.5} className="mt-1 lg:hidden"/>
                                    <img src="/check-list.svg" alt="Check List Icon" height={10} width={15} className="hidden lg:block mt-2"/>
                                {item}</li>
                            ))}
                        </ul>
                    </article>
                    <article className="bg-[#0E1011] text-[#D8D8D8] p-7 rounded-xl border-[1px] border-[#1F1F1F] max-w-[360px] sm:min-w-[360px] lg:max-w-full">
                        <h1 className="text-[15px] md:text-[19px]  lg:text-[22px] font-bold">Diferenciais</h1>
                        <ul className="mt-3 flex flex-col gap-2">
                            {serviceInfos.diferencial.map((item, index) => (
                                <li key={index} className="text-[11px] md:text-[14px] lg:text-[16px] flex gap-1.5 items-start">
                                    <img src="/check-list.svg" alt="Check List Icon" height={10} width={12.5} className="mt-1 lg:hidden"/>
                                    <img src="/check-list.svg" alt="Check List Icon" height={10} width={15} className="hidden lg:block mt-2"/>
                                {item}</li>                        
                            ))}
                        </ul>
                    </article>
                    <article className="bg-[#0E1011] text-[#D8D8D8] p-7 rounded-xl border-[1px] border-[#1F1F1F] max-w-[360px] sm:min-w-[360px] lg:max-w-full">
                        <h1 className="text-[15px] md:text-[19px]  lg:text-[22px] font-bold">Benefícios</h1>
                        <ul className="mt-3 flex flex-col gap-2">
                            {serviceInfos.beneficio.map((item, index) => (
                                <li key={index} className="text-[11px] md:text-[14px] lg:text-[16px] flex gap-1.5 items-start">
                                    <img src="/check-list.svg" alt="Check List Icon" height={10} width={12.5} className="mt-1 lg:hidden"/>
                                    <img src="/check-list.svg" alt="Check List Icon" height={10} width={15} className="hidden lg:block mt-2"/>
                                {item}</li>                        
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            {/* PORFÓLIO */}
            {(projects.length === 0)?<></>:
            <section className="bg-[#0B0E10] w-full py-10 lg:p-10 px-7 flex justify-center items-center">
                <div className="w-full max-w-[1456px] flex flex-col justify-center items-center">
                    <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] px-7 lg:px-10">PORTFÓLIO</h1>
                    <h2 className="text-white text-[23px] lg:text-[50px] lg:max-w-[800px] text-center font-bold">Projetos de <span className="text-[#DAA520]">{serviceInfos.nome}</span></h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/> 
                    <div className="lg:hidden flex flex-col md:grid md:grid-cols-2 gap-5 mt-5 justify-center items-center w-full max-w-[1456px]">
                        {projects.map((project, index) => (
                            <MobileProjectCard key={index} id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                        ))}
                    </div>
                    <div className="hidden lg:grid mt-10 grid-cols-2 gap-10 w-full max-w-[1456px]">
                        {projects.map((project, index) => (
                            <DesktopProjectCard key={index} id={project.id} title={project.nome} localization={project.localizacao} imageSrc={project.urlimagem} imageAlt={project.altimagem}/>
                        ))}
                    </div>
                    <div className="flex justify-between mt-6 gap-5">
                        <Link href="/projects" className="font-bold bg-[#DAA520] text-[14px] lg:text-[19px] py-1 px-5 lg:px-4 transition hover:scale-105 cursor-pointer mt-5">
                            VER PORTFÓLIO COMPLETO
                        </Link>
                    </div>
                </div>
            </section>}

            {(otherServices.length === 0)?<></>:
            <section className="bg-[#06090B] w-full py-10 lg:p-10 px-7 flex flex-col justify-center items-center">
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] text-center">EXPLORE MAIS</h1>
                <h2 className="text-[#D8D8D8] text-[23px] lg:text-[50px] text-center font-bold">Outros Serviços</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/> 
                <div className="flex flex-col gap-7 mt-5 lg:mt-10 w-full 2xl:max-w-[1456px] justify-center items-center">
                    {otherServices.map((service, index) => (
                        <OtherServiceCard
                        key={index} 
                        odd={isOdd(index)}
                        service={service}/>))}        
                </div>
            </section>}
        </>
    );
}