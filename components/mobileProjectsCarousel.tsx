"use client";

import { useState, useEffect, useRef } from "react";
import CircleComponent from "@/components/circle";
import MobileProjectCard from "./mobileProjectsCard";

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

export default function Carousel({projects}: {projects: ProjectCard[]}) {

   const ListRef = useRef<(HTMLDivElement | null)[]>([]);
   const containerRef = useRef<HTMLDivElement | null>(null);
   const [active, setActive] = useState(0);

    useEffect(() => {
        const setActiveCircle = (cardRef: HTMLDivElement | null, index: number) => {
            if (!cardRef) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(index);
                    }
                },
                {
                    root: containerRef.current,
                    threshold: 0.51
                }
            );
            observer.observe(cardRef);
            return () => observer.disconnect();
        }

        ListRef.current.map((cardRef, index)=>(
            setActiveCircle(cardRef, index)
        ));

    }, []);

    return( 
        <div className="w-full flex flex-col justify-center items-center gap-5 mt-5 ">
            <div ref={containerRef} className="flex gap-1 w-full max-w-[400px] overflow-auto scrollbar-hide snap-x snap-mandatory rounded-xl scroll-smooth">
               {projects.map((project, index)=>(
                <MobileProjectCard key={index}
                    ref={(el) => {ListRef.current[index] = el}}
                    id={project.id}
                    title={project.nome} 
                    // category={ListComponents[index].category}
                    localization={project.localizacao}
                    imageSrc={project.urlimagem}
                    imageAlt={project.altimagem}
                />
               ))}
            </div>
            <div className="flex gap-2">
                {projects.map((project, index)=>(
                    <CircleComponent key={index} position={index} actualPosition={active}/>
                ))}
            </div>
        </div>
    );
}