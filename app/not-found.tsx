import Link from "next/link";

export default function NotFound() {
    return(
    <main>
        <section className="flex flex-col justify-center items-center h-screen bg-[#07090A] py-10 px-7 lg:p-10">
            <h1 className="text-[#D8D8D8] text-[14px] md:text-[16.5px] lg:text-[19px] font-bold">Sentimos muito, a página acessada não foi encontrada...</h1>
            <div className="flex justify-between mt-6 gap-5">
                <Link href="/" className="font-bold bg-[#DAA520] text-[14px] md:text-[16.5px] lg:text-[19px] py-1 px-5 lg:px-4 transition hover:scale-105 cursor-pointer">
                    RETORNAR
                </Link>
            </div>
        </section>
    </main>)
}