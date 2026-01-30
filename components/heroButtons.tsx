import dynamic from "next/dynamic"
import Link from "next/link";

const Quote = dynamic(()=> import("./quoteButton"), {loading:()=>null});

export default function HeroButtons() {
    return(
        <div className="flex mt-7 lg:mt-14 md:flex-row-reverse md:justify-start md:absolute md:left-10 px] 2xl:left-0 gap-2 md:gap-5">
            
                <button className="border border-[#DAA520] text-[#DAA520] font-bold text-[13px] md:text-[21px] py-1 px-1.5 md:px-8 md:transition md:hover:scale-105">
                    <Link href={"/projects"}>
                        VER PROJETOS
                    </Link>
                </button>
            <Quote/>
        </div>
    )
}