"use client";

import { use, useState, useEffect, useRef, RefObject } from "react";
import CircleComponent from "@/components/circle";
import dynamic from "next/dynamic";

const Mobile = dynamic(() => import("@/components/mobileProjectCard"), { ssr: false });

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

export default function Home({projectsData}: {projectsData: Promise<ProjectCard[]>}) {

    const projects: ProjectCard[] = use(projectsData);

   const ListCircle = [CircleComponent, 
                       CircleComponent, 
                       CircleComponent,
                       CircleComponent,
                       CircleComponent,
                       CircleComponent
    ];

   const ListRef = [useRef<HTMLDivElement | null>(null),
                    useRef<HTMLDivElement | null>(null),
                    useRef<HTMLDivElement | null>(null),
                    useRef<HTMLDivElement | null>(null),
                    useRef<HTMLDivElement | null>(null),
                    useRef<HTMLDivElement | null>(null)
    ];
    
    const ListCard = [Mobile,
                      Mobile,
                      Mobile,
                      Mobile,
                      Mobile,
                      Mobile
    ];

   const [active, setActive] = useState(0);

  useEffect(() => {

    const setActiveCircle = (cardRef:RefObject<HTMLDivElement | null>, index:number) => {
        if (!cardRef?.current ) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(index);
                }
            },
            {
                threshold: 0.80
            }
        );
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }

    ListRef.map((cardRef, index)=>(
        setActiveCircle(cardRef, index)
    ));

  }, []);

    return( 
        <div className="w-full flex flex-col justify-center items-center gap-5 mt-5 ">
            <div className="flex gap-1 max-w-[300px] overflow-auto scrollbar-hide snap-x snap-mandatory rounded-xl scroll-smooth">
               {ListCard.map((Card, index)=>(
                <Card key={index}
                    ref={ListRef[index]}
                    title={projects[index].nome} 
                    // category={ListComponents[index].category}
                    localization={projects[index].localizacao}
                    imageSrc={projects[index].urlimagem}
                    imageAlt={projects[index].altimagem}
                />
               ))}
            </div>
            <div className="flex gap-2">
                {ListCircle.map((Circle, index)=>(
                    <Circle key={index} position={index} actualPosition={active}/>
                ))}
            </div>
        </div>
    );
}