"use client";

import { useState, useEffect, useRef } from "react";
import CircleComponent from "./circle";

type  Info_imagem = {
    alt: string, 
    pos: number, 
    url: string
};

export default function ProjectCarousel({info_imagem}: {info_imagem: Info_imagem[]}) {

    const [actice, setActive] = useState(0);
    const listRef = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        const setActiveImage = (imageRef: HTMLDivElement | null, index: number) => {
            if (!imageRef) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(index);
                    }
                },
                {
                    root: null,
                    threshold: 0.51
                }
            );
            observer.observe(imageRef);
            return () => observer.disconnect();
        };
        listRef.current.map((imageRef, index)=>(
            setActiveImage(imageRef, index)
        ));
    }, []);

    return(
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-full min-h-[200px] max-w-[375px] md:max-w-[500px] md:min-h-[300px] flex gap-0.5 mt-10 overflow-auto scrollbar-hide snap-x snap-mandatory rounded-xl scroll-smooth">
                {info_imagem.map((item, index) => (
                    <img ref={(el) => {listRef.current[index] = el}} key={index} src={item.url} alt={item.alt} className="snap-center h-[200px] md:h-[300px] w-full shrink-0"/>
                ))}
            </div>
            <div className="flex gap-2">
                {info_imagem.map((item, index)=>(
                    <CircleComponent key={index} position={index} actualPosition={actice}/>
                ))}
            </div>
        </div>
    );
}