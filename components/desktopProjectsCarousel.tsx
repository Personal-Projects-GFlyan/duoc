"use client";

import CircleComponent from "@/components/circle";
import { use, useState } from "react";
import DesktopProjectCard from "./desktopProjectCardToCarousel";

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

export default function Carousel({projectsData}: {projectsData: Promise<ProjectCard[]>}) {

    const ListCircles = [CircleComponent, CircleComponent];

    const projects: ProjectCard[] = use(projectsData);

    function mod(n:number , m: number) {
        return ((n % m) + m) % m;
    }

    const [leftHiddenPos, setLeftHiddenPos] = useState(mod(projects.length-1, projects.length));
    const [firstPos, setFirstPos] = useState(0);
    const [secondPos, setSecondPos] = useState(mod(firstPos+1, projects.length));
    const [thirdPos, setThirdPos] = useState(mod(firstPos+2, projects.length));
    const [righttHiddenPos, setRightHiddenPos] = useState(mod(firstPos+3, projects.length));
    const [right, setRight] = useState(false);
    const [left, setLeft] = useState(false);
    const [active, setActive] = useState(false);

    function handleChangePrevious() {
        setActive(true);
        setLeftHiddenPos(mod(leftHiddenPos-3, projects.length));
        setFirstPos(mod(firstPos-3,projects.length));
        setSecondPos(mod(secondPos-4,projects.length));
        setThirdPos(mod(thirdPos-4,projects.length));
        setRightHiddenPos(mod(righttHiddenPos-4,projects.length));
        setLeft(true);
        setTimeout(() =>{    
            setLeft(false)
            setSecondPos(mod(secondPos-3,projects.length));
            setThirdPos(mod(thirdPos-3,projects.length));
            setRightHiddenPos(mod(righttHiddenPos-3,projects.length));
            setActive(false);
        }, 250);
    }

    function handleChangeNext() {
        setActive(true);
        setLeftHiddenPos(mod(leftHiddenPos+4, projects.length));
        setFirstPos(mod(firstPos+4,projects.length));
        setSecondPos(mod(secondPos+4,projects.length));
        setThirdPos(mod(thirdPos+3,projects.length));
        setRightHiddenPos(mod(righttHiddenPos+3,projects.length));
        setRight(true);
        setTimeout(() =>{  
            setRight(false);
            setLeftHiddenPos(mod(leftHiddenPos+3, projects.length));
            setFirstPos(mod(firstPos+3,projects.length));
            setSecondPos(mod(secondPos+3,projects.length));
            setActive(false);
        }, 250); 
    }

    return(
        <div className="relative min-h-[250px] w-full flex flex-col justify-center items-center">
           <div className="relative w-full flex gap-10 justify-center items-center">
                <button onClick={()=>{handleChangePrevious()}} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                 <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                <div className="relative flex gap-10 justify-center items-center max-w-[980px] min-w-[980px]">
                    <div className={right?"absolute transition duration-250 left-0 z-10":left? "hidden":"hidden"}>
                        <DesktopProjectCard 
                            id={projects[leftHiddenPos].id}
                            title={projects[leftHiddenPos].nome} 
                            // category={ListComponents[leftHiddenPos].category}
                            localization={projects[leftHiddenPos].localizacao}
                            imageSrc={projects[leftHiddenPos].urlimagem}
                            imageAlt={projects[leftHiddenPos].altimagem}
                        />
                    </div>

                    <div className={right?"absolute left-0 min-w-[300px] transition durantion-250 translate-x-[340px] z-20": left? "hidden": "min-w-[300px]"}>
                        <DesktopProjectCard 
                            id={projects[firstPos].id}
                            title={projects[firstPos].nome} 
                            // category={ListComponents[firstPos].category}
                            localization={projects[firstPos].localizacao}
                            imageSrc={projects[firstPos].urlimagem}
                            imageAlt={projects[firstPos].altimagem}
                        />
                    </div>
                    <div className={right?"absolute left-0 translate-x-[680px] min-w-[300px] transition durantion-250 z-30":left?"absolute right-0 -translate-x-[680px] transition durantion-250 z-30":"min-w-[300px]"}>
                        <DesktopProjectCard 
                            id={projects[secondPos].id}
                            title={projects[secondPos].nome} 
                            // category={ListComponents[secondPos].category}
                            localization={projects[secondPos].localizacao}
                            imageSrc={projects[secondPos].urlimagem}
                            imageAlt={projects[secondPos].altimagem}
                        />
                    </div>
                    <div className={right?"hidden":left?"absolute right-0 min-w-[300px] transition durantion-250 -translate-x-[340px] z-20":"min-w-[300px]"}>
                        <DesktopProjectCard 
                            id={projects[thirdPos].id}
                            title={projects[thirdPos].nome} 
                            // category={ListComponents[thirdPos].category}
                            localization={projects[thirdPos].localizacao}
                            imageSrc={projects[thirdPos].urlimagem}
                            imageAlt={projects[thirdPos].altimagem}
                        />
                    </div>   
                    <div className={right?"hidden":left?"absolute transition duration-250 right-0 z-10":"hidden"}>
                        <DesktopProjectCard 
                            id={projects[righttHiddenPos].id}
                            title={projects[righttHiddenPos].nome} 
                            // category={ListComponents[righttHiddenPos].category}
                            localization={projects[righttHiddenPos].localizacao}
                            imageSrc={projects[righttHiddenPos].urlimagem}
                            imageAlt={projects[righttHiddenPos].altimagem}
                        />
                    </div> 
                </div>
                <button onClick={()=>handleChangeNext()} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/rightButton.svg" alt="Right Button Icon" width={40} height={40} />
                </button>
                <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/rightButton.svg" alt="Right Button Icon" width={40} height={40} />
                </button>
           </div>
           <div className="absolute bottom-[0px] flex gap-2 mt-5 z-40">
                {ListCircles.map((Circle, index)=>(
                    <Circle key={index+1} position={index+1} actualPosition={(thirdPos+1)/3}/>
                ))}            
           </div>
        </div>
    );
}