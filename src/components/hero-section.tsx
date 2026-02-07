import { useEffect, useMemo, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MeshGradient } from "@paper-design/shaders-react"

const titles = [
    "Great user experience",
    "Automation & AI",
    "Customer empathy",
    "The right data",
    "Humor",
    "Roadmap",
    "Positioning & messaging",
    "Iteration",
    "Teamwork",
    "Scalability",
    "Go-to-market (GTM)",
    "Pricing strategy",
    "Design systems",
    "Growth loops",
    "Stakeholder alignment",
    "Prioritization",
    "Analytics & insights",
    "Onboarding & activation",
]

export function HeroSection() {
    const [titleNumber, setTitleNumber] = useState(0)
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const update = () =>
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
        }, 2500)
        return () => clearTimeout(timeoutId)
    }, [titleNumber])

    const scrollToContact = useCallback(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }, [])

    // Subtle gray/white colors for executive look
    const gradientColors = useMemo(
        () => ["#f8f9fa", "#e9ecef", "#dee2e6", "#f1f3f5", "#e3e6ea", "#f5f5f5"],
        []
    )

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center">
            {/* Background gradient */}
            <div className="fixed inset-0 w-screen h-screen -z-10">
                {mounted && (
                    <>
                        <MeshGradient
                            width={dimensions.width}
                            height={dimensions.height}
                            colors={gradientColors}
                            distortion={0.6}
                            swirl={0.4}
                            grainMixer={0}
                            grainOverlay={0}
                            speed={0.3}
                            offsetX={0.08}
                        />
                        <div className="absolute inset-0 pointer-events-none bg-white/30 dark:bg-black/60" />
                    </>
                )}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
                <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col text-center">
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-3xl tracking-tight font-light">
                            <span className="text-foreground/80">I turn ideas into products through</span>
                            <span className="relative flex w-full justify-center overflow-hidden md:pb-4 md:pt-2 h-[1.2em]">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-medium text-foreground"
                                        initial={{ opacity: 0, y: 50 }}
                                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                                        animate={
                                            titleNumber === index
                                                ? { y: 0, opacity: 1 }
                                                : { y: titleNumber > index ? -100 : 100, opacity: 0 }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto mt-6">
                            Head of Product with 10+ years of experience building and scaling products
                            across SaaS, Web, and Mobile platforms.
                        </p>
                    </div>

                    <div className="flex flex-row gap-4 mt-8">
                        <Button size="lg" className="gap-2" onClick={scrollToContact}>
                            <Linkedin className="w-5 h-5" />
                            Let's connect
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
