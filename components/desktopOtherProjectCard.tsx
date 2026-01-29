import Link from "next/link";

type CardPropsDesktop = {
    // category: string[],
    id: number,
    title: string,
    localization: string,
    imageSrc: string,
    imageAlt: string;
}

export default function DesktopProjectCard({id, title, localization, imageSrc, imageAlt}: CardPropsDesktop) {
    return(
        <article className="relative w-full h-[200px] xl:h-[250px] 2xl:h-[275px] rounded-xl transition hover:scale-105 overflow-hidden">
            <Link href={`/project/${id}`}>
                <img src={imageSrc} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="absolute w-full h-[250px] xl:h-[250px] 2xl:h-[275px] z-10"/>
                <div className="p-5 z-30 absolute bottom-0 max-w-[275px] overflow-clip">
                    {/* <h1 className="text-[#DAA520] font-bold text-[10px] absolute top-[7.5px]">{category}</h1> */}
                    <h2 className="text-white font-bold text-[18px]">{title}</h2>
                    <div className="flex gap-1"> 
                        <img src="/localization.svg" alt="Localization Icon" width={7.5} height={5} loading="eager" decoding="async" fetchPriority="low"/>
                        <h3 className="text-[10px] text-white italic">{localization}</h3>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
            </Link>
        </article>
    );
}