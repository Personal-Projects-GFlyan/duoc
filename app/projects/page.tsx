import Projects from "@/components/projects";
import Link from "next/link";
import { Suspense } from "react";

export default function ProjectsPage() {
    return(
        <main>
            <section className="bg-[#07090A] w-full py-10 px-7 lg:p-10 text-[#D8D8D8] flex justify-center items-center">
                <div className="w-full max-w-[1456px]">
                    <h1 className="text-[23px] md:text-[30px] lg:text-[67px] font-bold mt-[75px] max-w-[1456px]">Portfólio</h1>
                    <h2 className="text-left text-[12px] md:text-[18px] lg:text-[22px] text-[#D8D8D8] mt-2 max-w-[1456px]">Conheça os projetos que realizamos com excelência técnica, inovação e cuidado em cada detalhe.</h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={250} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-7"/>
                </div>
            </section>

            <Suspense fallback={<div className='h-screen bg-[#07090A] flex flex-col justify-center items-center'>
                                    <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 animate-spin rounded-full">
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
                                    </div>
                                </div>}>
                <Projects/>
            </Suspense>

            <section className="bg-[#0B0E10] w-full py-10 flex flex-col justify-center items-center px-7 lg:p-10">
                <h1 className="text-white text-[20px] c lg:text-[33px] text-center font-bold">Vamos realizar seu projeto?</h1>
                <p className="text-center text-[12px] md:text-[17px] lg:text-[22px] max-w-[280px] md:max-w-[400px] lg:max-w-[870px] text-[#D8D8D8] mt-5">Entre em contato e transforme suas ideias em realidade com a expertise da DUOC.</p>
                <div className="flex justify-between mt-6 gap-5">
                    <Link href="/#contact" className="font-bold bg-[#DAA520] text-[14px] md:text-[16.5px] lg:text-[19px] py-1 px-5 lg:px-4 transition hover:scale-105 cursor-pointer">
                        SOLICITAR ORÇAMENTO
                    </Link>
                </div>
            </section>
        </main>
    )
}