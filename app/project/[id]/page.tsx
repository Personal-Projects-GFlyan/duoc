import { Suspense } from "react";
import Link from "next/link";
import ProjectInfos from "./project";

export default function Project({params}: {params: Promise<{id: string}>}) {
    return (
        <main>
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
                <ProjectInfos params={params} />
                
            </Suspense>
            <section className="bg-[#06090B] w-full py-5 lg:pb-10 flex flex-col justify-center items-center px-7 lg:px-10">
                <h1 className="text-white text-[20px] md:text-[25px] lg:text-[33px] text-center font-bold">Gostou deste projeto?</h1>
                <p className="text-center text-[12px] md:text-[17px] lg:text-[22px] max-w-[280px] md:max-w-[400px] lg:max-w-[870px] text-[#D8D8D8] mt-5">Entre em contato para discutir como podemos criar algo especial para você.</p>
                <div className="flex justify-between mt-6 gap-5">
                    <Link href="/#contact" className="font-bold bg-[#DAA520] text-[14px] md:text-[16.5px] lg:text-[19px] py-1 px-5 lg:px-4 transition hover:scale-105 cursor-pointer">
                        FALAR COM ESPECIALISTA
                    </Link>
                </div>
            </section>
        </main>
    );
}