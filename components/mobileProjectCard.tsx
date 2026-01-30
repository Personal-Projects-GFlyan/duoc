import Link from "next/link";

type CardPropsMobile = {
    // category: string[],
    id: number,
    title: string,
    localization: string,
    imageSrc: string,
    imageAlt: string;
}

export default function MobileProjectCard({ id, title, localization, imageSrc, imageAlt}:CardPropsMobile) {
    return(
        <article className="relative snap-center h-[200px] md:h-[225px] w-full shrink-0 overflow-hidden rounded-xl max-w-[360px] md:max-w-full">
            <Link href={`/project/${id}`}>
                <img src={imageSrc} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="h-[200px] md:h-[225px] w-full z-10"/>
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