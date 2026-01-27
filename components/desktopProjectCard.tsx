type CardPropsDesktop = {
    // category: string[],
    title: string,
    localization: string,
    imageSrc: string,
    imageAlt: string;
}

export default function DesktopProjectCard({title, localization, imageSrc, imageAlt}: CardPropsDesktop) {
    return(
        <article className="relative min-w-[450px] max-w-[450px] min-h-[300px] max-h-[300px] xl:max-w-[500px] xl:min-w-[500px] xl:max-h-[350px] xl:min-h-[350px] 2xl:max-w-[650px] 2xl:min-w-[550px] 2xl:max-h-[350px] 2xl:min-h-[350px]  rounded-xl overflow-hidden">
            <img src={imageSrc} alt={imageAlt} loading="eager" decoding="async" fetchPriority="low" className="absolute w-[450px] h-[300px] xl:w-[500px] xl:h-[350px] 2xl:w-[650px]  z-10"/>
            <div className="p-5 z-30 absolute bottom-0 max-w-[275px] overflow-clip">
                {/* <h1 className="text-[#DAA520] font-bold text-[10px] absolute top-[7.5px]">{category}</h1> */}
                <h2 className="text-white font-bold text-[18px]">{title}</h2>
                <div className="flex gap-1"> 
                    <img src="/localization.svg" alt="Localization Icon" width={7.5} height={5} loading="eager" decoding="async" fetchPriority="low"/>
                    <h3 className="text-[10px] text-white italic">{localization}</h3>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
        </article>
    );
}