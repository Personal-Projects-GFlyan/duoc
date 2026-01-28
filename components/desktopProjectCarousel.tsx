"use client";

import { useEffect, useRef, useState } from "react";
import CircleComponent from "./circle";

type  Info_imagem = {
    alt: string, 
    pos: number, 
    url: string
};

function mod(x:number, y:number): number {
    return (((x%y)+y)%y);
}


export default function ProjectCarousel({info_imagem}: {info_imagem: Info_imagem[]}) {

    
    const listRef = useRef<(HTMLDivElement|null)[]>([]);

    const [previousPos, setPreviousPos] = useState(info_imagem.length-1);
    const [mainPos, setMainsPos] = useState(0);
    const [nextPos, setNextPos] = useState((mainPos+1)%info_imagem.length);
    const [active, setActive] = useState(0);     
    const [previous, setPrevious] = useState(false);
    const [next, setNext] = useState(false);

    useEffect(()=>{
        setActive(mainPos);
    },[mainPos])

    function previousImage() {
        setPrevious(true);
        setTimeout(()=>{
            setNextPos(mainPos);
            setMainsPos(previousPos);
            setPreviousPos(mod(previousPos-1, info_imagem.length));
            setPrevious(false);
        },200)
    }

    function nextImage() {
        setNext(true);
        setTimeout(()=>{
            setPreviousPos(mainPos);
            setMainsPos(nextPos);
            setNextPos(mod(nextPos+1, info_imagem.length));
            setNext(false);
        },200)
    }

    return(
        <div className="flex flex-col justify-center items-center gap-5 w-full">
            <div className="flex gap-5 mt-10">
                <button className="cursor-pointer min-w-[50px] min-h-[50px]" aria-label="Left Button" onClick={previousImage}>
                    <img src="/leftButton.svg" alt="Left Button Icon" width={50} height={50}/>
                    &#8203;
                </button>
                <div className="relative rounded-xl min-w-[600px] max-w-[600px] min-h-[350px] max-h-[350px] 2xl:min-w-[800px] 2xl:max-w-[800px] 2xl:min-h-[500px] 2xl:max-h-[500px] flex overflow-hidden">
                    <img src={info_imagem[previousPos].url} alt={info_imagem[previousPos].alt} className={previous?"absolute right-[600px] translate-x-[600px] 2xl:right-[800px] 2xl:translate-x-[800px] transition duration-200 w-[600px] h-[350px] 2xl:w-[800px] 2xl:h-[500px] z-10":next?"hidden":"absolute right-[800px] w-[600px] h-[350px] 2xl:w-[800px] 2xl:h-[500px]"}/>

                    <img src={info_imagem[mainPos].url} alt={info_imagem[mainPos].alt} className={"absolute w-[600px] h-[350px] 2xl:w-[800px] 2xl:h-[500px]"}/>
                
                    <img src={info_imagem[nextPos].url} alt={info_imagem[nextPos].alt} className={previous?"hidden":next?"absolute left-[600px] -translate-x-[600px] 2xl:left-[800px] 2xl:-translate-x-[800px] transition duration-200 w-[600px] h-[350px] 2xl:w-[800px] 2xl:h-[500px] z-10":"absolute left-[800px] w-[600px] h-[350px] 2xl:w-[800px] 2xl:h-[500px] z-10"}/>

                </div>
                <button className="cursor-pointer min-w-[50px] min-h-[50px]" aria-label="Right Button" onClick={nextImage}>
                    <img src="/rightButton.svg" alt="Right Button Icon" width={50} height={50}/>
                    &#8203;
                </button>
            </div>
            <div className="flex gap-3">
                {info_imagem.map((item, index)=>(
                    <CircleComponent key={index} position={index} actualPosition={active}/>
                ))}
            </div>
        </div>
    );

}