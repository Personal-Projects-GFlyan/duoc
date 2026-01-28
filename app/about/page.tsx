import Link from "next/link"
import Image from "next/image"
import { HistoryCard, ValueCard }from "@/components/aboutCards"


export default function About() {
    return(
        <main>
            {/* SOBRE */}
            <section className="bg-[#07090A] w-full py-5 lg:py-10 pb-8 px-7 lg:px-10 flex flex-col justify-center items-center">
                <div className="min-h-[100px] w-full"/>
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] lg:text-start px-7 lg:px-10">SOBRE NÓS</h1>
                <h2 className="text-white text-[23px] lg:text-[67px] font-bold">Nossa História</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>
                <p className="text-center text-[12px] lg:text-[22px] lg:max-w-[870px] text-[#D8D8D8] mt-2 lg:mt-10">Transformamos espaços com soluções inteligentes, sustentáveis e humanas. Unimos engenharia e arquitetura com o cuidado que só uma família pode oferecer.</p>
            </section>

            {/* HISTÓRIA */}
            <section className="bg-[#07090A] w-full py-2.5 px-7 xl:px-32 2xl:px-64 xl:py-10">
                <h1 className="text-[#DAA520] text-[14px] lg:text-[22px] lg:text-start">NOSSA HISTÓRIA</h1>
                <div className="xl:flex xl:justify-between">
                    <div className="xl:max-w-[527.5px]">
                        <h2 className="text-white text-[20px] xl:text-[48px] font-bold">Do Lar Para o Mundo</h2>
                        <img src="/line.svg" alt="Line Icon" height={10} width={90} loading="eager" decoding="async" fetchPriority="low" className="xl:hidden"/>
                        <img src="/line.svg" alt="Line Icon" height={10} width={220} loading="eager" decoding="async" fetchPriority="low" className="hidden xl:block"/>
                        <p className="xl:hidden text-[#D8D8D8] text-[12px] text-justify mt-5">
                            A DUOC Arquitetura e Engenharia é uma empresa especializada no desenvolvimento de soluções integradas em arquitetura, engenharia, construção civil, instalações elétricas e automação residencial e empresarial. Atuamos de forma estratégica e colaborativa, acompanhando nossos clientes em todas as etapas do projeto, desde a concepção até a execução final, sempre com foco em qualidade técnica, eficiência e confiança.
                            <br /><br />
                            Nosso propósito é transformar espaços por meio de soluções inteligentes, sustentáveis e humanas, alinhando as necessidades de cada cliente às melhores práticas do mercado, dentro dos prazos, custos e normas técnicas estabelecidos. A DUOC acredita que cada projeto deve unir funcionalidade, estética e desempenho, resultando em ambientes que acolhem, funcionam e inspiram.                        
                            <br /><br />
                            A essência da DUOC está no cuidado com cada detalhe. Trabalhamos com uma abordagem consciente, que valoriza a sustentabilidade, a eficiência energética, a análise criteriosa de custo-benefício e a redução de desperdícios, tanto em novas obras quanto em reformas. Essa visão reflete nosso compromisso com o futuro, com as pessoas e com o ambiente construído.
                            <br /><br />
                            Nossa equipe é formada por profissionais qualificados nas áreas de arquitetura e engenharia, com experiência em projetos residenciais, comerciais e institucionais no Distrito Federal. A atuação integrada entre as disciplinas permite à DUOC entregar soluções completas, personalizadas e tecnicamente sólidas, sempre pautadas pela ética, inovação e comprometimento.
                        </p>
                        <p className="hidden xl:block text-[#D8D8D8] text-[15px] text-justify mt-5">
                            A DUOC Arquitetura e Engenharia é uma empresa especializada no desenvolvimento de soluções integradas em arquitetura, engenharia, construção civil, instalações elétricas e automação residencial e empresarial. Atuamos de forma estratégica e colaborativa, acompanhando nossos clientes em todas as etapas do projeto, desde a concepção até a execução final, sempre com foco em qualidade técnica, eficiência e confiança.
                            <br /><br />
                            Nosso propósito é transformar espaços por meio de soluções inteligentes, sustentáveis e humanas, alinhando as necessidades de cada cliente às melhores práticas do mercado, dentro dos prazos, custos e normas técnicas estabelecidos. A DUOC acredita que cada projeto deve unir funcionalidade, estética e desempenho, resultando em ambientes que acolhem, funcionam e inspiram.                        
                            <br /><br />
                            A essência da DUOC está no cuidado com cada detalhe. Trabalhamos com uma abordagem consciente, que valoriza a sustentabilidade, a eficiência energética, a análise criteriosa de custo-benefício e a redução de desperdícios, tanto em novas obras quanto em reformas. Essa visão reflete nosso compromisso com o futuro, com as pessoas e com o ambiente construído.
                            <br /><br />
                            Nossa equipe é formada por profissionais qualificados nas áreas de arquitetura e engenharia, com experiência em projetos residenciais, comerciais e institucionais no Distrito Federal. A atuação integrada entre as disciplinas permite à DUOC entregar soluções completas, personalizadas e tecnicamente sólidas, sempre pautadas pela ética, inovação e comprometimento.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center min-h-[250px] mt-5 xl:mt-[200px]">
                        <Image src="/office.webp" alt="Office Image" width={220} height={220} priority fetchPriority="high" className="z-10 xl:hidden" />
                        <Image src="/office.webp" alt="Office Image" width={420} height={420} priority fetchPriority="high" className="z-10 hidden xl:block mr-10" />
                        <img src="/square.svg" alt="Square Icon" width={86} height={86} className="relative left-[85px] bottom-[70px] z-0 xl:hidden"/>
                        <img src="/square.svg" alt="Square Icon" width={160} height={160} className="relative left-[145px] bottom-[125px] z-0 hidden xl:block"/>
                    </div>
                </div>
                <div className="flex gap-5 xl:gap-[30px] justify-center items-center relative bottom-[40px] xl:justify-start xl:static xl:max-w-[527.5px]">
                    <HistoryCard title="MISSÃO" text="Transformar espaços com soluções inteligentes, sustentáveis e humanas."/>
                    <HistoryCard title="VISÃO" text="Ser referência em arquitetura, engenharia e automação em Brasília. "/>
                </div>
            </section>

            {/* VALORES */}
            <section className="bg-[#010101] w-full lg:py-10 py-5 flex flex-col justify-center items-center px-7 lg:px-10">
                <h1 className="text-[#DAA520] text-[15px] lg:text-[37px] lg:text-start px-7 lg:px-10">NOSSOS VALORES</h1>
                <h2 className="text-white text-[23px] lg:text-[67px] font-bold">O Que Nos Guia</h2>
                <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-2"/>
                <img src="/line.svg" alt="Line Icon" height={10} width={280} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-2"/>
                <div className="flex flex-wrap mt-5 lg:mt-10 justify-center items-center gap-5 lg:max-w-[1100px]">
                    <ValueCard title="Sustentabilidade e Consciência Energética" text="Trabalhamos com responsabilidade ambiental e soluções que visam o futuro." imgSrc="/leaf.svg" imgAlt="Leaf Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={27.5} dekstopImgHeight={27.5}/>
                    <ValueCard title="Tecnologia e Inovação" text="Incorporamos o que há de mais moderno em automação para facilitar e transformar vidas." imgSrc="/chip.svg" imgAlt="Chip Icon" mobileImgWidth={17.5} mobileImgHeight={17.5} dekstopImgWidth={30} dekstopImgHeight={30}/>
                    <ValueCard title="Pessoalidade e Acolhimento" text="Cuidamos de cada projeto como quem cuida de casa - com escuta, empatia e proximidade." imgSrc="/heart.svg" imgAlt="Heart Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={30} dekstopImgHeight={30}/>
                    <ValueCard title="Comprometimento e Entrega" text="Honramos cada etapa do processo com seriedade, ética e dedicação." imgSrc="/check.svg" imgAlt="Check Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={30} dekstopImgHeight={30}/>
                    <ValueCard title="Família com Essência" text="Nosso diferencial é a raiz afetiva que orienta nossas decisões e fortalece cada relação construída." imgSrc="/people.svg" imgAlt="People Icon" mobileImgWidth={15} mobileImgHeight={15} dekstopImgWidth={30} dekstopImgHeight={30}/>
                </div>
            </section>

            {/* SERVIÇOS */}
            <section className="bg-[#06090B] w-full py-5 lg:py-10 flex flex-col justify-center items-center px-7 lg:px-10">
                <h1 className="text-white text-[20px] lg:text-[33px] font-bold">Conheça Nossos Serviços</h1>
                <p className="text-center text-[12px] lg:text-[22px] lg:max-w-[870px] text-[#D8D8D8] mt-5">Descubra como podemos transformar seu projeto em realidade com nossas soluções integradas.</p>
                <div className="flex justify-between mt-6 gap-5">
                    <Link href="/services" className="font-bold bg-[#DAA520] text-[15px] lg:text-[19px] py-1 px-2.5 lg:px-4 transition hover:scale-105 cursor-pointer">VER SERVIÇOS</Link>
                    <Link href="/#contact" className="text-[#DAA520] text-[17px] lg:text-[21px] flex gap-2 transition hover:scale-105 cursor-pointer">
                        Fale Conosco
                        <img src="/arrow.svg" alt="Arrow Icon" width={15} height={10} loading="eager" decoding="async" fetchPriority="low" className="mb-0.5"/>
                    </Link>
                </div>
            </section>
        </main>
    )
}