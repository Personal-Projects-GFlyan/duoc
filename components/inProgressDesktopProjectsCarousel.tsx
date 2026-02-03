"use client";

import CircleComponent from "@/components/circle";
import { useEffect, useState } from "react";
import DesktopProjectCard from "./desktopProjectsCard";

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

export default function Carousel({projects}: {projects: ProjectCard[]}) {

    const length = (projects.length)/3;
    
    let pos = 0;
    const group: ProjectCard[][] = [];
    for(let line = 0; line < length; line++) {
        group[line] = [];
        for(let col = 0; col < 3 && pos < projects.length; col++) {
            group[line][col] = projects[pos++];
        }
    }

    const [activeGroup, setActiveGroup] = useState(0);

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
        setLeft(true)
        setActiveGroup(mod(activeGroup-1, group.length));
        setTimeout(() =>{    
            setLeft(false)
            setActive(false);
        }, 250);
    }

    function handleChangeNext() {
        setActive(true);
        setRight(true);
        setActiveGroup(mod(activeGroup+1, group.length));
        setTimeout(() =>{  
            setRight(false);
            setActive(false);
        }, 250); 
    }

    useEffect(()=>{
        if(group[activeGroup].length === 2) {
            setFirstPos(mod(activeGroup * group[0].length + 0,projects.length));
            setSecondPos(mod(activeGroup * group[0].length + 1,projects.length));
        } else if (group[activeGroup].length === 1) {
            setFirstPos(mod(activeGroup * group[0].length + 0,projects.length));
        } else {
            setLeftHiddenPos(mod(activeGroup * group[0].length - 1 , projects.length));
            setFirstPos(mod(activeGroup * group[0].length + 0, projects.length));
            setSecondPos(mod(activeGroup * group[0].length + 1, projects.length));
            setThirdPos(mod(activeGroup * group[0].length + 2, projects.length));
            setRightHiddenPos(mod(activeGroup * group[0].length + 3, projects.length));
        }

    },[activeGroup])

    return(
        <div className="relative min-h-[250px] w-full flex flex-col justify-center items-center">
           <div className="relative w-full flex gap-10 justify-center items-center">
                <button onClick={()=>{handleChangePrevious()}} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                 <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                <div className="relative flex gap-5 justify-center items-center max-w-[790px] min-w-[790px] xl:max-w-[980px] xl:min-w-[980px]">
                    {(group[activeGroup].length === 3)?
                    <>
                            <DesktopProjectCard 
                                id={projects[firstPos].id}
                                title={projects[firstPos].nome} 
                                localization={projects[firstPos].localizacao}
                                imageSrc={projects[firstPos].urlimagem}
                                imageAlt={projects[firstPos].altimagem}
                            />
                            <DesktopProjectCard 
                                id={projects[secondPos].id}
                                title={projects[secondPos].nome} 
                                localization={projects[secondPos].localizacao}
                                imageSrc={projects[secondPos].urlimagem}
                                imageAlt={projects[secondPos].altimagem}
                            />

                            <DesktopProjectCard 
                                id={projects[thirdPos].id}
                                title={projects[thirdPos].nome} 
                                localization={projects[thirdPos].localizacao}
                                imageSrc={projects[thirdPos].urlimagem}
                                imageAlt={projects[thirdPos].altimagem}
                            />
                    </>: 
                    (group[activeGroup].length === 2)?
                    <>
                            <DesktopProjectCard 
                                id={projects[firstPos].id}
                                title={projects[firstPos].nome} 
                                localization={projects[firstPos].localizacao}
                                imageSrc={projects[firstPos].urlimagem}
                                imageAlt={projects[firstPos].altimagem}
                            />
                            <DesktopProjectCard 
                                id={projects[secondPos].id}
                                title={projects[secondPos].nome} 
                                localization={projects[secondPos].localizacao}
                                imageSrc={projects[secondPos].urlimagem}
                                imageAlt={projects[secondPos].altimagem}
                            />
                    </>:
                    <>
                            <DesktopProjectCard 
                                id={projects[righttHiddenPos].id}
                                title={projects[righttHiddenPos].nome} 
                                localization={projects[righttHiddenPos].localizacao}
                                imageSrc={projects[righttHiddenPos].urlimagem}
                                imageAlt={projects[righttHiddenPos].altimagem}
                            />
                    </>
                    }
                </div>
                <button onClick={()=>handleChangeNext()} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/rightButton.svg" alt="Right Button Icon" width={40} height={40} />
                </button>
                <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/rightButton.svg" alt="Right Button Icon" width={40} height={40} />
                </button>
           </div>
           <div className="absolute bottom-[0px] flex gap-2 mt-5 z-40">
                {group.map((projects, index)=>(
                    <CircleComponent key={index} position={index} actualPosition={activeGroup}/>
                ))}            
           </div>
        </div>
    );
}