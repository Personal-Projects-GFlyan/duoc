import Image from "next/image";
import Link from "next/link";
import HeroButtons from "@/components/heroButtons";
import CardWho from "@/components/card-who";
import ServicesCarousel from "@/components/servicesCarousel";
import ProjectsCarousel from "@/components/projectsCarousel";

export default function Home() {

    const partnerLabels = [
        {title: "ABB", urlSvg: "/ABB-Logo.svg", widthMobile: 100, heigthMobile: 40, widthDesktop: 150, heigthDesktop: 80},
        {title: "Schneider Electric", urlSvg: "/Schneider-Logo.svg", widthMobile: 125, heigthMobile: 40, widthDesktop: 150, heigthDesktop: 80},
        {title: "Solar Edge", urlSvg: "/Solar-Logo.svg", widthMobile: 125, heigthMobile: 40, widthDesktop: 150, heigthDesktop: 80},
        {title: "UKS Quadros Elétricos", urlSvg: "/UKS-Logo.svg", widthMobile: 70, heigthMobile: 20, widthDesktop: 75, heigthDesktop: 40},
    ]
    const contactLabels = [
        {title: "Localização", subtitle: "Assis Chateaubriand, 3º Andar, Salas 306, 308 e 310. Asa Sul, Brasília - DF", urlSvg: "/Pin.svg", url:"https://maps.app.goo.gl/5HpK5qe26eEuMwNt5", widthMobile: 12.5, heigthMobile: 12.5, widthDesktop: 22.5, heigthDesktop: 22.5},
        {title: "Telefone", subtitle: "(61) 99525-5617", urlSvg: "/Phone.svg", url:"tel:+5561995255617", widthMobile: 15, heigthMobile: 15, widthDesktop: 25, heigthDesktop: 25},
        {title: "WhatsApp", subtitle: "(61) 99525-5617", urlSvg: "/WhatsApp.svg", url:"https://wa.me/5561995255617", widthMobile: 15, heigthMobile: 15, widthDesktop: 25, heigthDesktop: 25},
        {title: "E-mail", subtitle: "contato@duoc.com.br", urlSvg: "/Email.svg", url:"mailto:contato@duoc.com.br", widthMobile: 15, heigthMobile: 15, widthDesktop: 25, heigthDesktop: 25},
    ]

    return(
            <main>
                {/* Hero */}
                <section className="relative w-full h-[360px] md:h-[420px] lg:h-[650px]">
                    <Image src="/hero-desktop.webp" alt="Hero Image" fill priority fetchPriority="high" className="" sizes="100vw"/>
                    <div className="absolute top-[125px] lg:top-[200px] w-full px-7 lg:px-10">
                        <h1 className="text-white text-[32px] md:text-[45px] lg:text-[75px] font-bold w-[320px] md:w-[420px] lg:w-[762px] leading-[1]">Inovação, Técnica e <span className="text-[#DAA520] text-[32px] md:text-[45px] lg:text-[75px] font-bold ">Sensibilidade</span></h1>
                        <p className="text-[#D8D8D8] text-[12px] md:text-[17px] lg:text-[23px] w-[256px] md:w-[420px] lg:w-[700px] text-justify mt-2">
                            Transformamos espaços com soluções inteligentes, sustentáveis e humanas. <span className="mt-2 block md:inline">Unimos engenharia e arquitetura com o cuidado que só uma família pode oferecer.</span>
                        </p>
                        <HeroButtons/>
                    </div>
                </section>

                {/*Quem Somos*/}
                <section id="about" className="bg-[#07090A] w-full py-5 md:py-10 pb-8">
                    <h1 className="text-[#DAA520] text-[17px] md:text-[22px] text-center md:text-start font-medium px-7 md:px-10">QUEM SOMOS</h1>
                    <div className="flex flex-col xl:flex-row justify-between pt-4 md:pt-0">
                        <section className="flex gap-7 md:gap-5 md:flex-col px-7 md:px-10">
                            <div className="md:relative">
                                <h1 className="text-white text-[26px] md:text-[50px] font-bold">DUOC</h1>
                                <div className="relative md:static flex flex-col md:flex-col-reverse">
                                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="md:hidden absolute bottom-[11.5px]"/>
                                    <img src="/line.svg" alt="Line Icon" height={10} width={160} loading="eager" decoding="async" fetchPriority="low" className="hidden md:block md:mt-7"/>
                                    <h2 className="text-[#DAA520] text-[6.22px] md:text-[30px] font-bold md:absolute md:top-[58px]">Arquitetura e Engenharia</h2>
                                </div>
                            </div>
                            <p className="md:hidden text-[#D8D8D8] text-[10px] w-[265px] text-justify">
                                Nascendo do lar para o mundo, unindo arquitetura, engenharia e automação com cuidado, confiança e inovação.
                            </p>
                            <p className="hidden md:block text-[#D8D8D8] text-justify w-[600px] my-5">
                                A DUOC nasce do lar para o mundo, unindo engenharia e arquitetura com o cuidado e a confiança que só uma família pode oferecer.
                                <br />
                                <br />
                                Atuamos nas áreas de Arquitetura, Engenharia e Automação Residencial e Empresarial, oferecendo soluções que unem técnica, inovação e sensibilidade em cada projeto. Nosso propósito é transformar espaços com soluções inteligentes, sustentáveis e humanas, criando ambientes que acolhem, funcionam e inspiram.                        
                            </p>
                            <Link href={"/about"} className="hidden bg-[#DAA520] font-bold text-[17px] py-1 w-[200px] transition hover:scale-105 md:block text-center">
                                    CONHEÇA MAIS
                            </Link>
                        </section>

                        <div className="flex xl:flex-col gap-5 xl:gap-10 pt-6 pl-7 md:pt-10 xl:px-10 xl:pt-0 overflow-auto scrollbar-hide">
                            <div className="flex gap-5 md:gap-10">
                                <CardWho title="Confiança" text="Honramos cada etapa do processo com seriedade, ética e dedicação." srcImage="/shield.svg" altImage="Confidence Icon" heightImageMobile={15} widthImageMobile={15} heightImageDesktop={20} widthImageDesktop={20}/>
                                <CardWho title="Inovação" text="Incorporamos o que há de mais moderno em automação e tecnologia." srcImage="/light-on.svg" altImage="Innovation Icon" heightImageMobile={20} widthImageMobile={20} heightImageDesktop={25} widthImageDesktop={25}/>
                            </div>
                            <div className="flex gap-5 md:gap-10">
                                <CardWho title="Cuidado" text="Cuidamos de cada projeto como quem cuida de casa." srcImage="/care.svg" altImage="Care Icon" heightImageMobile={20} widthImageMobile={20} heightImageDesktop={25} widthImageDesktop={25}/>
                                <CardWho title="Família" text="Nossa raiz afetiva fortalece cada relação construída." srcImage="/family.svg" altImage="Family Icon" heightImageMobile={25} widthImageMobile={25} heightImageDesktop={30} widthImageDesktop={30}/>
                                <div className="lg:hidden w-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden w-full flex justify-center pt-8">
                        <Link href={"/about"} className="border border-[#DAA520] text-[#DAA520] font-bold text-[13px] py-1 w-[225px] text-center">
                                CONHEÇA MAIS
                        </Link>
                    </div>
                </section>

                {/*Nossos Serviços*/}
                <section id="services" className="bg-[#0B0E10] min-h-[400px] w-full flex flex-col justify-center items-center overflow-hidden py-5 md:py-10">
                    <h1 className="text-[#DAA520] text-[17px] md:text-[22px] text-center md:text-start font-medium px-7 md:px-10">NOSSOS SERVIÇOS</h1>
                    <h2 className="text-white text-center font-bold mt-2 md:text-[30px]">
                        Soluções Completas em
                        <br /> 
                        <span className="text-[#DAA520]">Engenharia e Automação</span>
                    </h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="md:hidden"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={150} loading="eager" decoding="async" fetchPriority="low" className="hidden md:block mt-2"/>

                    <ServicesCarousel/>
                    <Link href={"/services"} className="block text-[#0B0E10] bg-[#DAA520] mt-5 lg:mt-10 font-bold text-[13px] lg:text-[17px] py-1 w-[225px] lg:w-[300px] transition hover:scale-105 text-center">
                            CONHEÇA NOSSOS SERVIÇOS
                    </Link>
                </section>

                {/*Portfólio*/}
                <section id="projects" className="bg-[#06090B] min-h-[400px] w-full px-7 md:px-10 py-5 md:py-10 flex flex-col justify-center items-center">
                    <h1 className="text-[#DAA520] text-[17px] md:text-[22px] text-center md:text-start font-medium px-7 md:px-10">PORTFÓLIO </h1>
                    <h2 className="text-white text-center font-bold mt-2 md:text-[30px]">
                        Projetos <span className="text-[#DAA520]">Recentes</span>
                    </h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="md:hidden"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={150} loading="eager" decoding="async" fetchPriority="low" className="hidden md:block mt-2"/>
                    <ProjectsCarousel/>
                    <Link href={"/projects"} className="block text-[#0B0E10] bg-[#DAA520] mt-5 lg:mt-10 font-bold text-[13px] lg:text-[17px] py-1 w-[225px] lg:w-[300px] transition hover:scale-105 text-center">
                            VER PORTFÓLIO COMPLETO
                    </Link>
                </section>

                {/*Parceiros*/}
                <section id="partners" className="bg-[#0B0E10] min-h-[400px] w-full px-7 md::px-10 py-5 md::py-10 flex flex-col justify-center items-center">
                    <h1 className="text-[#DAA520] text-[17px] md:text-[22px] text-center md:text-start font-medium px-7 md:px-10">PARCEIROS </h1>
                    <h2 className="text-white text-center font-bold mt-2 md:text-[30px]">
                        Parcerias de <span className="text-[#DAA520]">Confiança</span>
                    </h2>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="md:hidden"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={150} loading="eager" decoding="async" fetchPriority="low" className="hidden md:block mt-2"/>
                    <div className="flex flex-wrap gap-5 lg:gap-10 mt-10 xl:mt-5    justify-center items-center">
                        {partnerLabels.map((label, index)=>(
                            <div key={index} >
                                <img src={label.urlSvg} alt={`${label.title} Logo`}  width={label.widthMobile} height={label.heigthMobile} loading="eager" decoding="async" fetchPriority="low" className="xl:hidden"/>
                                <img src={label.urlSvg} alt={`${label.title} Logo`}   width={label.widthDesktop} height={label.heigthDesktop} loading="eager" decoding="async" fetchPriority="low" className="hidden xl:block"/>
                            </div>
                        ))}
                    </div>
                    <p className="text-[#D8D8D8] text-[12px] md:text-[16px] text-center mt-7 md:mt-5 md:mx-[75px] xl:mx-[250px]" >Mantemos parcerias construídas com base na confiança, na transparência e no compromisso com a qualidade. Trabalhamos ao lado de profissionais e empresas que compartilham dos mesmos valores e da busca contínua por soluções inovadoras e eficientes.</p>
                </section>

                {/*Fale Conosco*/}
                <section id="contact" className="bg-[#010101] w-full px-7 md:px-10 py-5 md:py-10">
                    <h1 className="text-[#DAA520] text-[17px] md:text-[22px] md:text-start font-medium ">FALE CONCOSCO</h1>
                    <div className="lg:flex justify-between">
                        <div className="lg:max-w-[501px]">
                            <h2 className="text-white font-bold mt-2 lg:text-[39px]">
                                Pronto para  <span className="text-[#DAA520]">Transformar</span> <br className="hidden md:block"/> seu Espaço
                            </h2>
                            <img src="/lastLine.svg" alt="Line Icon" height={5} width={205} loading="eager" decoding="async" fetchPriority="low" className="md:hidden"/>
                            <img src="/lastLine.svg" alt="Line Icon" height={10} width={180} loading="eager" decoding="async" fetchPriority="low" className="hidden md:block mt-2"/>
                            <p className="text-[#D8D8D8] text-[12px] md:text-[16px] mt-2 md:text-justify">Entre em contato conosco para uma consulta personalizada. Nossa equipe está pronta para entender suas necessidades e apresentar as melhores soluções.</p>
                            <div className=" flex flex-wrap justify-center md:grid md:grid-cols-2 lg:flex lg:justify-start items-center lg:items-start lg:flex-col mt-5 gap-1 md:gap-5">
                                {contactLabels.map((label, index)=>(
                                    <Link key={index} href={label.url}>
                                        <article className="flex h-[50px] md:h-auto w-[150px] md:w-auto">
                                            <div className="min-h-[35px] max-h-[35px] md:min-h-[67.5px] md:max-h-[67.5px] min-w-[35px] max-w-[35px] md:min-w-[67.5px] md:max-w-[67.5px] bg-[#DAA520] rounded-md flex justify-center items-center">
                                                <img src={label.urlSvg} alt={`${label.title} Imagem`} width={label.widthMobile} height={label.heigthMobile}  loading="eager" decoding="async" fetchPriority="low" className="md:hidden"/>
                                                <img src={label.urlSvg} alt={`${label.title} Imagem`} width={label.widthDesktop} height={label.heigthDesktop}  loading="eager" decoding="async" fetchPriority="low" className="hidden md:block"/>
                                            </div>
                                            <div className="text-white ml-2">
                                                <h1 className="text-[10px] md:text-[16px] font-bold">{label.title}</h1>
                                                <h2 className="text-[9px] md:text-[15px] line-clamp-1 lg:line-clamp-2">{label.subtitle}</h2>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <form action="/" method="POST" className="px-7 pb-7 pt-3.5 md:py-5 border border-[#1F1F1F] bg-[#0E1011] flex flex-col gap-3 rounded-lg md:min-w-[500px] md:justify-center mt-3 md:mt-7 lg:mt-0">
                            <div>
                                <label htmlFor="name" className="text-[#D8D8D8] font-bold text-[9.5px] md:text-[14px]">Nome Completo</label>
                                <input type="text" id="name" autoComplete="name" inputMode="text" placeholder="Seu nome" className="w-full border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] mt-1.5 pl-2 text-[9.5px] md:text-[14px] h-[30px] md:h-[45px] focus:outline-none"/>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-[#D8D8D8] font-bold text-[9.5px] md:text-[14px]">E-mail</label>
                                    <input type="email" id="email" autoComplete="email" inputMode="email" placeholder="seu@email.com" className="border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] pl-2 mt-1.5 text-[9.5px] md:text-[14px] h-[30px] md:h-[45px] focus:outline-none"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-[#D8D8D8] font-bold text-[9.5px] md:text-[14px]">Telefone</label>
                                    <input type="tel" id="phone" autoComplete="tel" inputMode="tel" placeholder="(61) 99999-9999" className="border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] pl-2 mt-1.5 text-[9.5px] md:text-[14px] h-[30px] md:h-[45px] focus:outline-none"/>
                                </div>
                            </div>
                            <div className="flex flex-col relative">
                                <label htmlFor="select" className="text-[#D8D8D8] font-bold text-[9.5px] md:text-[14px]">Assunto</label>
                                <select name="select" id="select" defaultValue="duvidas" className="cursor-pointer appearance-none border border-[#464646] bg-[#0E1011] rounded-md text-[#D8D8D8] pl-2 mt-1.5 text-[9.5px] md:text-[14px] h-[30px] md:h-[45px] focus:outline-none">
                                    <option value="duvidas">Dúvidas</option>
                                    <option value="orcamento" >Orçamento</option>
                                </select>
                                <img src="invertedTriangle.svg" alt="Select Icon" width={7.5}  height={7.5} loading="eager" decoding="async" fetchPriority="low" className="absolute right-[10px] bottom-[11px] md:hidden"/>
                                <img src="invertedTriangle.svg" alt="Select Icon" width={10}  height={10} loading="eager" decoding="async" fetchPriority="low" className="absolute right-[15px] bottom-[15px] hidden md:block"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="text-[#D8D8D8] font-bold text-[9.5px] md:text-[14px]">Mensagem</label>
                                <textarea name="message" id="message" placeholder="Conte-nos sobre seu projeto:" className="w-full border border-[#464646] bg-[#0E1011] rounded-md resize-none text-[#D8D8D8] p-2 mt-1.5 text-[9.5px] md:text-[14px] h-[100px] md:h-[125px] focus:outline-none scrollbar-thin"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#DAA520] py-1 cursor-pointer text-[12px] md:text-[17px] text-[#0E1011] font-bold" > 
                                ENVIAR MENSAGEM 
                            </button>
                            <p className="text-center text-[7px] md:text-[10px] text-[#D8D8D8]/55">Respondemos em até 24 horas úteis.</p>
                        </form>
                    </div>
                </section>
            </main>
    );
}