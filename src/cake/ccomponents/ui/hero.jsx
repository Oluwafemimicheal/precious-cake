import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section
            className="min-h-screen overflow-hidden text-white"
            style={{
                backgroundImage: `
                    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                    linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4c1d95 50%, #7c3aed 75%, #a855f7 100%)
                `,
                backgroundSize: '60px 60px, cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
            }}
        >
            <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 py-24 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
                <div className="relative z-10 w-full p-10 lg:px-40">
                    <p className="mb-6 inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-white/80 shadow-sm shadow-white/5">
                        Cakes <ArrowRight size={14} /> Pastries <ArrowRight size={14} /> Events
                    </p>

                    <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-5xl">
                        Experience the <span className="bg-linear-to-r from-pink-300 via-orange-200 to-yellow-200 bg-clip-text text-transparent">rich flavor</span> that keeps you coming back.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm text-white/80 sm:text-base">
                        Crafted with premium ingredients and artful presentation, our cakes and pastries turn every celebration into a memorable experience.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button className="bg-white text-purple-950 hover:bg-white/90">
                            Shop Now
                        </Button>
                        <Button className="bg-white text-purple-950 hover:bg-white/90">
                            Get in touch
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    )
}
