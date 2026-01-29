import Link from "next/link"
import Image from "next/image"
import { Suspense } from 'react'
import Services from "@/components/services"

export default async function ServicesPage() {
    return(
        <main>
            {/* HISTÓRIA */}
            <section className="w-full pt-5 pb-10 lg:py-10 px-7 lg:px-10 h-[270px] lg:h-[400px]">
                <Image src="/background.webp" alt="Hero Image"  priority fetchPriority="high" fill className="max-w-full max-h-[270px] lg:max-h-[400px]" sizes="100vw"/>
                <h1 className="text-white text-[23px] md:text-[30px] lg:text-[67px] font-bold absolute top-[90px] lg:top-[150px]">Nossos Serviços</h1>
                <p className="text-left text-[12px] md:text-[18px] lg:text-[22px] lg:max-w-[870px] text-[#D8D8D8] mt-2 absolute top-[130px] mr-7 lg:top-[245px]">Soluções completas em arquitetura, engenharia e automação para transformar seus espaços com excelência técnica e cuidado personalizado.</p>
                <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5 absolute top-[190px]"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={250} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-7 absolute top-[315px]"/>
            </section>

            {/* SERVIÇOS */}
            <section className="w-full min-h-screen bg-[#0B0E10] py-10 lg:py-10 px-7 lg:px-10 flex justify-center items-center ">
                <div className="w-full max-w-[1456px] flex flex-col justify-center items-center gap-14">
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
                        <Services/>
                    </Suspense>
                </div>
            </section>

            {/* CONTATO */}
            <section className="bg-[#06090B] w-full py-5 lg:p-10 flex flex-col justify-center items-center px-7">
                <h1 className="text-white text-[20px] md:text-[25px]  lg:text-[33px] font-bold">Conheça Nossos Serviços</h1>
                <p className="text-center text-[12px] md:text-[17px] lg:text-[22px] max-w-[280px] md:max-w-[400px] lg:max-w-[870px] text-[#D8D8D8] mt-5">Entre em contato e receba uma consultoria personalizada para suas necessidades.</p>
                <div className="flex justify-between mt-6 gap-5">
                    <Link href="/#contact" className="font-bold bg-[#DAA520] text-[14px] lg:text-[19px] py-1 px-5 lg:px-4 transition hover:scale-105 cursor-pointer">
                        SOLICITAR ORÇAMENTO
                    </Link>
                </div>
            </section>
        </main>
    )
}




