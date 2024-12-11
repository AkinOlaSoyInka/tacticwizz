import Link from 'next/link';

export default function Page(){
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="header">TacticWizz</h1>
        <p className="intro"> Want to learn more about the beautiful game?</p>
        <button className="landingButton"> <Link href="/positions">Continue</Link> </button>
    </div>
)
}