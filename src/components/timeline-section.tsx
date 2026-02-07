import { useEffect, useRef, useState } from "react"
import { Briefcase, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Company logo imports - using inline SVG placeholders for now
// These will be replaced with actual logo files

type TimelineEntry = {
    icon: React.ComponentType<{ className?: string }>
    title: string
    subtitle: string
    description: string
    companyLogo?: string
}

const timelineEntries: TimelineEntry[] = [
    {
        icon: Building2,
        title: "Kerberus",
        subtitle: "Head of Product Analytics • 2025–Present",
        description: "Leading product analytics initiatives to drive data-informed decisions and optimize product performance.",
    },
    {
        icon: Building2,
        title: "WaveBL",
        subtitle: "Head of Product Growth • 2023–2025",
        description: "Drove product-led growth strategies, optimizing user acquisition, activation, and retention in the trade finance sector.",
    },
    {
        icon: Building2,
        title: "Tarya Fintech",
        subtitle: "Product Team Lead • 2021–2023",
        description: "Led product team in developing innovative fintech solutions, from roadmap to production delivery.",
    },
    {
        icon: Building2,
        title: "AWS",
        subtitle: "Biz Dev & Enterprise Account Manager • 2019–2021",
        description: "Managed enterprise accounts and business development for cloud solutions across diverse industries.",
    },
    {
        icon: Building2,
        title: "Yael Group",
        subtitle: "Head of Product • 2017–2019",
        description: "Headed product strategy and execution for multiple product lines, driving cross-functional collaboration.",
    },
    {
        icon: Building2,
        title: "Bank of Jerusalem",
        subtitle: "Head of Product • 2014–2017",
        description: "Led digital product transformation and innovation in banking services.",
    },
    {
        icon: Building2,
        title: "Epsilon",
        subtitle: "Head of Data Management • 2008–2014",
        description: "Built and managed data infrastructure and analytics capabilities for enterprise clients.",
    },
]

export function TimelineSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const sentinelRefs = useRef<(HTMLDivElement | null)[]>([])

    const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
        sentinelRefs.current[i] = el
    }

    useEffect(() => {
        if (!sentinelRefs.current.length) return

        let frame = 0
        const updateActiveByProximity = () => {
            frame = requestAnimationFrame(updateActiveByProximity)
            const centerY = window.innerHeight / 3
            let bestIndex = 0
            let bestDist = Infinity

            sentinelRefs.current.forEach((node, i) => {
                if (!node) return
                const rect = node.getBoundingClientRect()
                const mid = rect.top + rect.height / 2
                const dist = Math.abs(mid - centerY)
                if (dist < bestDist) {
                    bestDist = dist
                    bestIndex = i
                }
            })

            if (bestIndex !== activeIndex) setActiveIndex(bestIndex)
        }

        frame = requestAnimationFrame(updateActiveByProximity)
        return () => cancelAnimationFrame(frame)
    }, [activeIndex])

    return (
        <section id="experience" className="py-20 md:py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-center">
                        Work Experience
                    </h2>
                    <p className="mb-12 text-base text-muted-foreground md:text-lg text-center">
                        A journey through product leadership roles across fintech, enterprise software, and cloud platforms.
                    </p>

                    <div className="mt-12 space-y-12 md:space-y-16">
                        {timelineEntries.map((entry, index) => {
                            const isActive = index === activeIndex

                            return (
                                <div
                                    key={index}
                                    className="relative flex flex-col gap-4 md:flex-row md:gap-12"
                                >
                                    {/* Sticky meta column */}
                                    <div className="top-24 flex h-min w-full md:w-56 shrink-0 items-center gap-4 md:sticky">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`p-2 rounded-lg transition-colors ${isActive
                                                        ? "bg-primary text-primary-foreground"
                                                        : "bg-muted text-muted-foreground"
                                                    }`}
                                            >
                                                <Briefcase className="h-4 w-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium">{entry.title}</span>
                                                <span className="text-xs text-muted-foreground">
                                                    {entry.subtitle.split("•")[1]?.trim()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sentinel for scroll detection */}
                                    <div
                                        ref={(el) => setSentinelRef(el, index)}
                                        aria-hidden
                                        className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                                    />

                                    {/* Content column */}
                                    <article
                                        className={`flex flex-col rounded-2xl border p-4 md:p-6 transition-all duration-300 flex-1 ${isActive
                                                ? "border-border bg-muted/50 shadow-lg"
                                                : "border-border/50 bg-background"
                                            }`}
                                    >
                                        <div className="space-y-3">
                                            <h3
                                                className={`text-lg font-medium transition-colors ${isActive ? "text-foreground" : "text-foreground/70"
                                                    }`}
                                            >
                                                {entry.subtitle.split("•")[0]?.trim()}
                                            </h3>
                                            <p
                                                className={`text-sm leading-relaxed transition-colors ${isActive ? "text-muted-foreground" : "text-muted-foreground/70"
                                                    }`}
                                            >
                                                {entry.description}
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
