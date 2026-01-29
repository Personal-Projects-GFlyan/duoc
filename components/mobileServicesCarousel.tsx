"use client";

import { MobileServiceCard, MobileServiceCardNotNavigable } from "@/components/serviceCardHome";
import { useEffect, useState, use } from "react";
import CircleComponent from "@/components/circle";

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
  const [latePos, setLatePos] = useState(0);
  const [mainPos, setMainPos] = useState(mod(1, services.length));
  const [nextPos, setNextPos] = useState(mod(2, services.length));
  const [hiddenPos, setHiddenPos] = useState(mod(3, services.length));
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  useEffect(() => {
    if (mainPos === 0) {
      setLatePos(services.length - 1);
      setNextPos(mainPos + 1);
    } else if(mainPos === services.length - 1) {
      setLatePos(mainPos - 1);
      setNextPos(0);
    } else {
      setLatePos(mainPos - 1);
      setNextPos(mainPos + 1);
    }
  }, [mainPos]);

  function handleChangePrevious() {
    setRight(true);
    setHiddenPos((mainPos-2+services.length  ) % services.length);
    setTimeout(() =>{
      if (mainPos === 0) {
        setMainPos(services.length - 1);
      } else {
        setMainPos(mainPos - 1);
      }
      setRight(false); 
    }, 350);
  }

  function handleChangeNext() {
    setLeft(true);
    setHiddenPos((mainPos+2) % services.length);
    setTimeout(() =>{    
        if (mainPos === services.length - 1) {
          setMainPos(0);
        } else {
          setMainPos(mainPos + 1);
        }
        setLeft(false);
    }, 350);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <div className="relative flex justify-center items-center gap-5">
          <button onClick={() => handleChangePrevious()} className={(left|| right)?"hidden" : "absolute left-[118px] z-40 h-[222px] w-[78px] cursor-pointer"}>
            &#8203;
          </button> 
          <div className={right? "relative left-[100px] z-20 transition duration-350 translate-x-[95px]" : left ? "relative left-[100px] z-0 transition duration-350 translate-x-[95px] blur-[1.25px] transform scale-[0.8]" : "relative left-[100px] z-10 blur-[1.25px] transform scale-[0.8]"}>
            <MobileServiceCardNotNavigable service={services[latePos]} 
              />
          </div>
          <div className={right ? "relative z-10 transition duration-350 translate-x-[95.35px] blur-[1.25px] scale-[0.8]" : left ? "relative z-20 transition duration-350 -translate-x-[95.35px] blur-[1.5px] scale-[0.8]" : "relative z-20 flex"}>
            <MobileServiceCard service={services[mainPos]}/> 
          </div>
          <div className={right? "relative right-[100px] z-0 transition duration-350 -translate-x-[97.75px] blur-[1.25px] transform scale-[0.8]" : left ? "relative right-[100px] z-20 transition duration-350 -translate-x-[95px]" : "relative right-[100px] z-10 blur-[1.25px] transform scale-[0.8]"}>
            <MobileServiceCardNotNavigable service={services[nextPos]}/>
          </div>
          <div className={right?"absolute z-0 transition -translate-x-[95px] blur-[1.25px] transform scale-[0.8]": left?"absolute z-0 transition translate-x-[95px] blur-[1.25px] transform scale-[0.8]": "hidden"}>
            <MobileServiceCardNotNavigable service={services[hiddenPos]}/>
          </div>
          <button onClick={() => handleChangeNext()} className={(left|| right)?"hidden" : "absolute right-[118px] z-40 h-[222px] w-[78px] cursor-pointer"}>
            &#8203;
          </button>   
      </div>
      <div className="flex gap-2">
        {services.map((service ,index)=>(
          <CircleComponent key={index} position={index} actualPosition={mainPos}/>
        ))}
      </div>
    </div>
  );
}
