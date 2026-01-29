"use client";

import Link from "next/link";
import { Ref } from "react";

type CardPropsMobile = {
    ref?: Ref<HTMLDivElement> | null;
    // category: string[],
    id: number,
    title: string,
    localization: string,
    imageSrc: string,
    imageAlt: string;
}

export default function MobileOtherProjectCard({ref, id, title, localization, imageSrc, imageAlt}:CardPropsMobile) {
    return(
        <article ref={ref} className="relative snap-center h-[200px] md:h-[300px] w-full shrink-0">
            <Link href={`/project/${id}`} className="cursor-pointer">
                <img src={imageSrc} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="snap-center h-[200px] md:h-[300px] w-full z-10"/>
                <div className="p-5 z-30 absolute bottom-0 w-full overflow-clip">
                    {/* <h1 className="text-[#DAA520] font-bold text-[10px] absolute top-[7.5px]">{category}</h1> */}
                    <h1 className="text-white font-bold text-[18px] md:text-[22px]">{title}</h1>
                    <div className="flex gap-1 md:gap-1.5"> 
                        <img src="/localization.svg" alt="Localization Icon" width={7.5} height={5} loading="eager" decoding="async" fetchPriority="low" className="md:hidden"/>
                        <img src="/localization.svg" alt="Localization Icon" width={12.5} height={5} loading="eager" decoding="async" fetchPriority="low" className="hidden md:block"/>
                        <h2 className="text-[10px] md:text-[15px] text-white italic">{localization}</h2>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
            </Link>
        </article>   
    );
}