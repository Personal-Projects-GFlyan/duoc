import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const socialMedia = [
        {name: "LinkedIn", url: "/linkedin.svg", link: "https://www.linkedin.com/in/duocengenharia", mobileWidth: 18, mobileHeight: 18  , desktopWidth: 23, desktopHeight: 23},
        {name: "Instagram", url: "/instagram.svg", link: "https://www.instagram.com/duocengenharia/", mobileWidth: 20, mobileHeight: 20, desktopWidth: 25, desktopHeight: 25},
        {name: "WhatsApp", url: "/whatsapp-footer.svg", link: "https://wa.me/5561995255617", mobileWidth: 19, mobileHeight: 19, desktopWidth: 25, desktopHeight: 25},
    ]
    return(
        <footer className="flex flex-col lg:flex-row justify-between items-center bg-[#202020] py-5 px-7 lg:px-10">
            <Image src="/LOGO.svg" alt="Logo" width={150} height={50} className="hidden lg:block"/> 
            <p className="text-[#FFFFFF]/60 text-center text-[10px]">© 2026 DUOC Arquitetura e Engenharia.<br/>Todos os direitos reservados.</p>
            <ul className="flex mt-2.5 gap-5">
                {socialMedia.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link}>
                            <Image src={item.url} alt={`${item.name} Icon`} width={item.mobileWidth} height={item.mobileHeight} className="lg:hidden"/>
                            <Image src={item.url} alt={`${item.name} Icon`} width={item.desktopWidth} height={item.desktopHeight} className="hidden lg:block cursor-pointer hover:scale-115 transition"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}