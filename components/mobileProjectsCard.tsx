"use client";

import Link from "next/link";
import { Ref } from "react";

type CardPropsMobile = {
    ref?: Ref<HTMLDivElement> | null;
    id: number,
    title: string,
    localization: string,
    imageSrc: string,
    imageAlt: string;
}

export default function MobileProjectCard({ref, id, title, localization, imageSrc, imageAlt}:CardPropsMobile) {
    return(
        <article ref={ref} className="relative snap-center w-full max-w-[400px] h-[200px] md:h-[300px] shrink-0 rounded-xl overflow-hidden mx-auto">
            <Link href={`/project/${id}`}>
                <img src={imageSrc} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="object-cover object-center w-full h-full z-10"/>
                <div className="p-5 z-30 absolute bottom-0 max-w-[275px] overflow-clip">
                    <h1 className="text-white font-bold text-[18px]">{title}</h1>
                    <div className="flex gap-1"> 
                        <img src="/localization.svg" alt="Localization Icon" width={7.5} height={5} loading="eager" decoding="async" fetchPriority="low"/>
                        <h2 className="text-[10px] text-white italic">{localization}</h2>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
            </Link>
        </article>
    );
}