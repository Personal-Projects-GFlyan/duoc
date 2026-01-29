"use client";

import CircleComponent from "@/components/circle";
import { DesktopServiceCard } from "@/components/serviceCardHome";
import { useState, use } from "react";

type Service = {
    id: number,
    nome: string,
    descricao: string,
    urlimagem: string;
    escopo: string[];
}

function mod(n:number , m: number) {
    return ((n % m) + m) % m;
}

export default function Carousel({services}: {services: Service[]}) {

    const ListCircles = [CircleComponent, CircleComponent];
    const [leftHiddenPos, setLeftHiddenPos] = useState(mod(services.length-1, services.length));
    const [firstPos, setFirstPos] = useState(0);
    const [secondPos, setSecondPos] = useState(mod(firstPos+1, services.length));
    const [thirdPos, setThirdPos] = useState(mod(firstPos+2, services.length));
    const [righttHiddenPos, setRightHiddenPos] = useState(mod(firstPos+3, services.length));
    const [right, setRight] = useState(false);
    const [left, setLeft] = useState(false);
    const [active, setActive] = useState(false);

    function handleChangePrevious() {
        setActive(true);
        setLeftHiddenPos(mod(leftHiddenPos-3, services.length));
        setFirstPos(mod(firstPos-3,services.length));
        setSecondPos(mod(secondPos-4,services.length));
        setThirdPos(mod(thirdPos-4,services.length));
        setRightHiddenPos(mod(righttHiddenPos-4,services.length));
        setLeft(true);
        setTimeout(() =>{    
            setLeft(false)
            setSecondPos(mod(secondPos-3,services.length));
            setThirdPos(mod(thirdPos-3,services.length));
            setRightHiddenPos(mod(righttHiddenPos-3,services.length));
            setActive(false);
        }, 250);
    }

    function handleChangeNext() {
        setActive(true);
        setLeftHiddenPos(mod(leftHiddenPos+4, services.length));
        setFirstPos(mod(firstPos+4,services.length));
        setSecondPos(mod(secondPos+4,services.length));
        setThirdPos(mod(thirdPos+3,services.length));
        setRightHiddenPos(mod(righttHiddenPos+3,services.length));
        setRight(true);
        setTimeout(() =>{  
            setRight(false);
            setLeftHiddenPos(mod(leftHiddenPos+3, services.length));
            setFirstPos(mod(firstPos+3,services.length));
            setSecondPos(mod(secondPos+3,services.length));
            setActive(false);
        }, 250); 
    }

    return(
        <div className="relative min-h-[475px] w-full flex flex-col justify-center items-center">
           <div className="relative w-full flex gap-10 justify-center items-center">
                <button onClick={()=>{handleChangePrevious()}} className={active?"hidden":"z-30 cursor-pointer"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                 <button className={active?"z-30 cursor-pointer":"hidden"}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={40} height={40} />
                </button>
                <div className="relative flex gap-10 justify-center items-center max-w-[980px] min-w-[980px]">
                    <div className={right?"absolute transition duration-250 left-0 z-10":left? "hidden":"hidden"}>
                        <DesktopServiceCard 
                            service={services[leftHiddenPos]} 
                        />
                    </div>

                    <div className={right?"absolute left-0 min-w-[300px] transition durantion-250 translate-x-[340px] z-20": left? "hidden": "min-w-[300px]"}>
                        <DesktopServiceCard 
                            service={services[firstPos]} 
                        />
                    </div>
                    <div className={right?"absolute left-0 translate-x-[680px] min-w-[300px] transition durantion-250 z-30":left?"absolute right-0 -translate-x-[680px] transition durantion-250 z-30":"min-w-[300px]"}>
                        <DesktopServiceCard 
                            service={services[secondPos]}
                        />
                    </div>
                    <div className={right?"hidden":left?"absolute right-0 min-w-[300px] transition durantion-250 -translate-x-[340px] z-20":"min-w-[300px]"}>
                        <DesktopServiceCard 
                            service={services[thirdPos]}
                        />
                    </div>   
                    <div className={right?"hidden":left?"absolute transition duration-250 right-0 z-10":"hidden"}>
                        <DesktopServiceCard 
                            service={services[righttHiddenPos]}
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