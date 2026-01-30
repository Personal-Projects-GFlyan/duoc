type HistoryCardProps = {
    title: string,
    text: string;
}

export function HistoryCard({title, text}: HistoryCardProps) {
    return(
        <article className="p-2.5 border border-[#1F1F1F] bg-[#0E1011] w-[142px] md:w-[250px] rounded-xl">
            <h1 className="font-bold text-[9px] md:text-[13px] text-[#DAA520]">{title}</h1>
            <h2 className="text-[9px] md:text-[13px] text-[#D8D8D8] mt-1">{text}</h2>
        </article>
    );
}

type ValueCardProps = {
    title: string,
    text: string,
    imgSrc: string,
    imgAlt: string,
    mobileImgWidth: number,
    mobileImgHeight: number,
    dekstopImgWidth: number,
    dekstopImgHeight: number;
}

export function ValueCard({title, text, imgSrc, imgAlt, mobileImgWidth, mobileImgHeight, dekstopImgWidth, dekstopImgHeight}: ValueCardProps) {
    return(
        <article className="p-2.5 md:p-7 border border-[#1F1F1F] bg-[#0E1011] rounded-xl w-[142px] md:w-[325px] h-[100px] md:h-[185px]">
            <img src={imgSrc} alt={imgAlt} width={mobileImgWidth} height={mobileImgHeight} loading="eager" decoding="async" fetchPriority="low" className="md:hidden"/>
            <img src={imgSrc} alt={imgAlt} width={dekstopImgWidth} height={dekstopImgHeight} loading="eager" decoding="async" fetchPriority="low" className="hidden md:block"/>
            <h1 className="font-bold text-[7px] md:text-[14px] text-[#D8D8D8] mt-2">{title}</h1>    
            <h2 className="text-[6px] md:text-[13px] text-[#D8D8D8] mt-2">{text}</h2>
        </article>
    );

}