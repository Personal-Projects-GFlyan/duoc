import Carousel from "@/components/projectCarousel";
import { getProjectInfo } from "@/lib/supabase/server";

export default async function ProjectInfos({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    const project = await getProjectInfo(Number(id));
    return (
        <>
        <section className="bg-[#07090A] w-full py-5 px-7 lg:p-10 text-[#D8D8D8] min-h-screen">
            <h1 className="text-[23px] md:text-[30px] lg:text-[67px] font-bold mt-[75px]">{project.nome}</h1>
            <h2 className="text-left text-[12px] md:text-[18px] lg:text-[22px] text-[#D8D8D8] mt-2">{project.descricao}</h2>
            <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
            <img src="/line.svg" alt="Line Icon" height={10} width={250} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-7"/>
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center xl:flex-row xl:items-start xl:gap-10 w-full max-w-[1680px]">
                    <div className="w-full">
                        <Carousel info_imagem={project.info_imagem}/>
                    </div>
                    <article className="bg-[#0E1011] border border-[#1F1F1F] rounded-xl p-5 md:p-7 lg:p-10 w-full max-w-[375px] md:max-w-[500px] lg:max-w-[600px] lg:w-full lg:min-h-[250px] lg:max-h-[250px] xl:min-w-[420px] xl:max-w-full mt-5 lg:mt-10">
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
                </div>
            </div>
        </section>

        </>);
}