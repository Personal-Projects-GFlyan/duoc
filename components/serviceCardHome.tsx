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
    service: Service;
};

export function MobileServiceCard({service}: CardProps) {
    return (
        <article style={{ height: `${280}px`, width: `${175}px` }} className=" bg-[#0B0E10] text-black rounded-xl border border-[#424242] relative overflow-hidden">
            <Link href={`/service/${service.id}`} className="cursor-pointer">
                <div className="relative w-[175px] h-[112.5px]">
                    <Image src={service.urlimagem} alt={`${service.nome} Imagem`} fill className="object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
                    <h1 className="absolute bottom-0 text-white font-bold ml-2.5 text-[12.441px] z-30">{service.nome}</h1>
                </div>
            </Link>
            <section className="px-2.5 mt-4 p">
                <p className="text-[8.647px] text-gray-400 line-clamp-3">{service.descricao}</p>
                <ul className="text-[8.647px] text-gray-400 list-disc mx-5 mt-3 font-bold marker:text-amber-400 ">
                    {service.escopo.map((item, index)=>(
                        <li key={index}><span className="line-clamp-1">{item}</span></li>
                    ))}
                </ul>
                <Link href={`/service/${service.id}`} className="text-[9px] text-amber-400 cursor-pointer ml-2 flex gap-1 absolute bottom-5">
                    Saiba Mais
                    <img src="/arrow.svg" alt="Arrow Icon" width={10} height={1} loading="eager" decoding="async" fetchPriority="low"/>
                </Link>
            </section>
    
        </article>  
    );
}

export function MobileServiceCardNotNavigable({service}: CardProps) {
    return (
        <article style={{ height: `${280}px`, width: `${175}px` }} className=" bg-[#0B0E10] text-black rounded-xl border border-[#424242] relative overflow-hidden">
                <div className="relative w-[175px] h-[112.5px]">
                    <Image src={service.urlimagem} alt={`${service.nome} Imagem`} fill className="object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
                    <h1 className="absolute bottom-0 text-white font-bold ml-2.5 text-[12.441px] z-30">{service.nome}</h1>
                </div>
            <section className="px-2.5 mt-4 p">
                <p className="text-[8.647px] text-gray-400 line-clamp-3">{service.descricao}</p>
                <ul className="text-[8.647px] text-gray-400 list-disc mx-5 mt-3 font-bold marker:text-amber-400 ">
                    {service.escopo.map((item, index)=>(
                        <li key={index}><span className="line-clamp-1">{item}</span></li>
                    ))}
                </ul>
                <p className="text-[9px] text-amber-400 ml-2 flex gap-1 absolute bottom-5">
                    Saiba Mais
                    <img src="/arrow.svg" alt="Arrow Icon" width={10} height={1} loading="eager" decoding="async" fetchPriority="low"/>
                </p>
            </section>
    
        </article>  
    );
}





export function DesktopServiceCard({service}: CardProps) {
    return (
        <article style={{ height: `${420}px`, width: `${300}px` }} className=" bg-[#0B0E10] text-black rounded-xl border border-[#424242] overflow-hidden transition hover:scale-105">
            <Link href={`/service/${service.id}`} className="cursor-pointer">
                <div className="relative w-[300px] h-[200px]">
                    <Image src={service.urlimagem} alt={`${service.nome} Imagem`} fill className="object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
                    <h1 className="absolute bottom-0 text-white font-bold ml-5 z-30">{service.nome}</h1>
                </div>
            </Link>
            <section className="px-5 mt-5">
                <p className="text-[13px] text-gray-400 line-clamp-3">{service.descricao}</p>
                <ul className="text-[13px] text-gray-400 list-disc mx-5 mt-4 font-bold marker:text-amber-400">
                    {service.escopo.map((item, index)=>(
                        <li key={index}><span className="line-clamp-1">{item}</span></li>
                    ))}
                </ul>
                <Link href={`/service/${service.id}`} className="text-[13px] text-amber-400 cursor-pointer flex mt-4 gap-1 ml-5 transition hover:scale-105">
                    Saiba Mais
                    <img src="/arrow.svg" alt="Arrow Icon" width={12.5} height={1} loading="eager" decoding="async" fetchPriority="low" className="mt-[3px]"/>
                </Link>
            </section>
    
        </article>  
    );
}
