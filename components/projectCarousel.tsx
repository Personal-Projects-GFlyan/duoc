import dynamic from "next/dynamic";

const Mobile = dynamic(() => import("@/components/mobileProjectCarousel"), { loading: ()=>null });
const Desktop = dynamic(()=> import("@/components/desktopProjectCarousel"), {loading: ()=> null});  

type  Info_imagem = {
    alt: string, 
    pos: number, 
    url: string
};

export default function ProjectCarousel({info_imagem}: {info_imagem: Info_imagem[]}) {
    return(
        <>
            <div className="lg:hidden">
                <Mobile info_imagem={info_imagem}/>
            </div>
            <div className="hidden lg:block">
                <Desktop info_imagem={info_imagem}/>
            </div>
        </>
    )

}