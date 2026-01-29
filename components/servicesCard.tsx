import Link from "next/link";
import Image from "next/image";

type Service = {
    id: number,
    nome: string,
    descricao: string,
    urlimagem: string;
    escopo: string[];
}

type CardProps = {
    position: number,
    service: Service,
}

function isPair(position: number) {
    return position%2 === 0;
}

export async function ServicesCard({position, service}: CardProps) {

    return(
        <article className="w-full max-w-[400px] lg:max-w-[600px] xl:max-w-full">
            <div className={isPair(position)?"xl:flex justify-between":"xl:flex xl:flex-row-reverse justify-between"}>
                
                    <div className={isPair(position)?"xl:mt-2 xl:mr-5 relative w-full h-[195px] sm:h-[220px] md:h-[250px] lg:h-[320px] xl:h-[387.5px] rounded-xl transition hover:scale-[1.02]":"xl:mt-2 xl:ml-5 relative w-full h-[195px] sm:h-[220px] md:h-[250px] lg:h-[320px] xl:h-[387.5px] rounded-xl transition hover:scale-[1.02]"}>
                        <Link href={`/service/${service.id}`}>
                            <Image
                                src={service.urlimagem}
                                alt={`${service.nome} Imagem`}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </Link>
                    </div>
                
                <div className="xl:max-w-[631px]">        
                    <h1 className="text-[#D8D8D8] text-[21px] md:text-[25px] lg:text-[31px] font-bold mt-5 xl:mt-0 ">{service.nome}</h1>
                    <img src="/line.svg" alt="Line Icon" height={10} width={130} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-5"/>
                    <p className="text-[#D8D8D8]/80 mt-4 text-[13.5px] md:text-[17px] lg:text-[20px] text-justify line-clamp-6 xl:line-clamp-5">{service.descricao}</p>
                    <ul className="grid grid-cols-2 list-disc marker:text-[#DAA520] text-[#D8D8D8]/60 font-bold text-[10px] md:text-[13.5px] lg:text-[15px] mx-4 gap-7 mt-2.5 lg:mt-4 xl:mt-5 gap-y-1.5">
                        {service.escopo.map((name, index)=>(
                            <li key={index}><span className="line-clamp-1 xl:line-clamp-2">{name}</span></li>
                        ))}
                    </ul>
                    <Link href={`/service/${service.id}`} className="flex gap-1 text-[#DAA520] text-[13.5px] md:text-[17px] lg:text-[20px] mt-2.5 ml-1 xl:ml-5 cursor-pointer transition hover:scale-[1.02] xl:hover:scale-[1.05] xl:w-[250px]">
                        Ver detalhes completo
                        <img src="/arrow.svg" alt="Arrow Icon" width={13.5} height={10} loading="eager" decoding="async" fetchPriority="low" className="mt-[2.5px]"/>
                    </Link>
                </div>
            </div>
        </article>
    );
}


export async function OtherServiceCard({odd, service}: {odd:boolean, service: Service}) {
    return(
        <article className="p-7 bg-[#1F1F1F] rounded-xl w-full max-w-[400px] lg:max-w-[600px] xl:max-w-full">
            <div className={odd?"xl:flex flex-row-reverse justify-between":"xl:flex justify-between"}>
                <div className={odd?"xl:mt-2 xl:ml-5 relative w-full h-[195px] sm:h-[220px] md:h-[250px] lg:h-[320px] xl:h-[387.5px] rounded-xl overflow-hidden transition hover:scale-[1.02]":"xl:mt-2 xl:mr-5 relative w-full h-[195px] sm:h-[220px] md:h-[250px] lg:h-[320px] xl:h-[387.5px] rounded-xl overflow-hidden transition hover:scale-[1.02]"}>
                    <Link href={`/service/${service.id}`}>
                        <Image
                            src={service.urlimagem}
                            alt={`${service.nome} Imagem`}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </Link>
                </div>
                <div className="xl:max-w-[631px]">        
                    <h1 className="text-[#D8D8D8] text-[21px] md:text-[25px] lg:text-[31px] font-bold mt-5 xl:mt-0 ">{service.nome}</h1>
                    <img src="/line.svg" alt="Line Icon" height={10} width={75} loading="eager" decoding="async" fetchPriority="low" className="lg:hidden mt-5"/>
                    <img src="/line.svg" alt="Line Icon" height={10} width={100} loading="eager" decoding="async" fetchPriority="low" className="hidden lg:block mt-5"/>
                    <p className="text-[#D8D8D8]/80 mt-4 text-[13.5px] md:text-[17px] lg:text-[20px] text-justify line-clamp-6 xl:line-clamp-5">{service.descricao}</p>
                    <ul className="grid grid-cols-2 list-disc marker:text-[#DAA520] text-[#D8D8D8]/60 font-bold text-[10px] md:text-[13.5px] lg:text-[15px] mx-4 gap-7 mt-2.5 lg:mt-4 xl:mt-5 gap-y-1.5">
                        {service.escopo.map((name, index)=>(
                            <li key={index}><span className="line-clamp-1 xl:line-clamp-2">{name}</span></li>
                        ))}
                    </ul>
                    <Link href={`/service/${service.id}`} className="flex gap-1 text-[#DAA520] text-[13.5px] md:text-[17px] lg:text-[20px] mt-2.5 ml-1 xl:ml-5 cursor-pointer transition hover:scale-[1.02] xl:hover:scale-[1.05] xl:w-[250px]">
                        Ver detalhes completo
                        <img src="/arrow.svg" alt="Arrow Icon" width={13.5} height={10} loading="eager" decoding="async" fetchPriority="low" className="mt-[2.5px]"/>
                    </Link>
                </div>
            </div>
        </article>
    );
}