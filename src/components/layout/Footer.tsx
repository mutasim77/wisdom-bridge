import { Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-6 px-4 relative z-10">
            <div className="container mx-auto max-w-6xl bg-[#f5e9c9] p-4 rounded-xl border-2 border-[#b39f7d] shadow-md text-center">
                <div className="text-sm text-[#6b4c35] flex justify-center items-center gap-2">
                    Made with <Heart className="h-5 w-5 animate-pulse text-red-400" /> by <a href="https://mutasim.top" className="text-red-500">Mut</a>
                </div>
            </div>
        </footer>
    )
}

