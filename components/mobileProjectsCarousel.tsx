"use client";

import { MobileProjectCard } from "./projectCard";
import { useState, useEffect, useRef, RefObject } from "react";
import CircleComponent from "@/components/circle";


export default function Home() {

       
    const ListComponents = [
        {
            title:"Lorem Ipsum 1", 
            category: ["LOREM 1",],
            localization:"Sobradinho, Brasília - DF",
            imageSrc: "/slane.webp",
            imageAlt: "Slane Image"
        },
            {
            title:"Lorem Ipsum 2", 
            category: ["LOREM 2",],
            localization:"Sobradinho, Brasília - DF",
            imageSrc: "/sla1ne.webp",
            imageAlt: "Slane Image"
        },
            {
            title:"Lorem Ipsum 3", 
            category: ["LOREM 3",],
            localization:"Sobradinho, Brasília - DF",
            imageSrc: "/sla2ne.webp",
            imageAlt: "Slane Image"
        },
            {
            title:"Lorem Ipsum 4", 
            category: ["LOREM 4",],
            localization:"Sobradinho, Brasília - DF",
            imageSrc: "/sla3ne.webp",
            imageAlt: "Slane Image"
        },
            {
            title:"Lorem Ipsum 5", 
            category: ["LOREM 5",],
            localization:"Sobradinho, Brasília - DF",
            imageSrc: "/sla4ne.webp",
            imageAlt: "Slane Image"
        },
            {
            title:"Lorem Ipsum 6", 
            category: ["LOREM 6",],
            localization:"Sobradinho, Brasília - DF",
            imageSrc: "/sla5ne.webp",
            imageAlt: "Slane Image"
        }
    ];

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
    
    const ListCard = [MobileProjectCard,
                      MobileProjectCard,
                      MobileProjectCard,
                      MobileProjectCard,
                      MobileProjectCard,
                      MobileProjectCard
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
                    title={ListComponents[index].title} 
                    category={ListComponents[index].category}
                    localization={ListComponents[index].localization}
                    imageSrc={ListComponents[index].imageSrc}
                    imageAlt={ListComponents[index].imageAlt}
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