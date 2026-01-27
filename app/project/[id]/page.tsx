export default function Home({params}: {params: Promise<{id: string}>}) {
    return (
        <main className="h-screen bg-black flex justify-center items-center text-white">
            <h1>Hello World</h1>
        </main>
    );
}