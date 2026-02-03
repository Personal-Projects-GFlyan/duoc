import ProjectCarousel from "@/components/projectCarousel";
import { getOtherProjectsInfos_LimitedBy3, getProjectInfo } from "@/lib/supabase/server";
import OtherProjectsCarousel from "@/components/otherProjectsCarousel";
import { notFound } from "next/navigation";

export default async function Project({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const project = await getProjectInfo(Number(id));
    if(!project) {
        notFound();
    }
    const otherProjects = await getOtherProjectsInfos_LimitedBy3(Number(id));
    return (
        <>
            <section className="bg-[#07090A] w-full py-10 px-7 lg:px-10 lg:py-20 text-[#D8D8D8] flex justify-center items-center">
                <div className="w-full max-w-[1456px]">
                    <h1 className="text-[23px] md:text-[30px] lg:text-[67px] font-bold mt-[75px] max-w-[1456px]">{project.nome}</h1>
                    <h2 className="text-left text-[12px] md:text-[18px] lg:text-[22px] text-[#D8D8D8] mt-2 max-w-[1456px]">{project.descricao}</h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={250} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-7"/>
                    <div className="flex flex-col justify-center items-center xl:gap-10 w-full">
                        <div className="w-full lg:mt-14">
                            <ProjectCarousel info_imagem={project.info_imagem}/>
                        </div>
                        <div className="flex flex-col xl:flex-row w-full xl:gap-10"> 
                            <article className="bg-[#0E1011] border border-[#1F1F1F] rounded-xl p-5 md:p-7 lg:p-10 w-full  mt-5 lg:mt-10">
                                <h1 className="font-bold text-[14px] md:text-[18px] lg:text-[22px]">Informações do Projeto</h1>
                                <ul className="text-[12px] m-5 flex flex-col gap-3  md:text-[15px] lg:text-[18px] lg:gap-2">
                                    <li className="flex gap-2">
                                        <img src="/pin-project.svg" alt="Localization Icon" width={16} height={16} loading="eager" decoding="async" fetchPriority="low" className="xl:hidden"/>
                                        <img src="/pin-project.svg" alt="Localization Icon" width={22} height={22} loading="eager" decoding="async" fetchPriority="low" className="hidden xl:block"/>
                                        {project.localizacao}
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/calendar-project.svg" alt="Calendar Icon" width={16} height={16} loading="eager" decoding="async" fetchPriority="low" className="xl:hidden"/>
                                        <img src="/calendar-project.svg" alt="Calendar Icon" width={22} height={22} loading="eager" decoding="async" fetchPriority="low" className="hidden xl:block"/>
                                        Ano: {project.ano}
                                    </li>
                                    <li className="flex gap-2">
                                        <img src="/clock-project.svg" alt="Duration Icon" width={16} height={16} loading="eager" decoding="async" fetchPriority="low" className="xl:hidden"/>
                                        <img src="/clock-project.svg" alt="Duration Icon" width={22} height={22} loading="eager" decoding="async" fetchPriority="low" className="hidden xl:block"/>
                                        Duracao: {project.duracao}
                                    </li>
                                </ul>
                            </article>
                            <article className="bg-[#0E1011] border border-[#1F1F1F] rounded-xl p-5 md:p-7 lg:p-10 w-full mt-5 lg:mt-10">
                                <h1 className="font-bold text-[14px] md:text-[18px] lg:text-[22px]">Serviço Relacionado</h1>
                                <ul className="text-[12px] m-5 flex flex-col gap-3  md:text-[15px] lg:text-[18px] lg:gap-2">
                                        {project.servico_nome.map((servico, index)=>(
                                            <li key={index}>{servico}</li>
                                        ))}
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {(otherProjects.length === 0)?<></>:
            <section className="bg-[#0B0E10] w-full py-10 px-7 lg:px-10 lg:py-14 flex justify-center items-center">
                <div className='w-full max-w-[1456px]'>
                    {(otherProjects.length === 1)?(<></>): 
                    (<OtherProjectsCarousel projects={otherProjects}/>)}
                </div>
            </section>
            }
        </>);
}