import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    Rocket,
    TrendingUp,
    Palette,
    BarChart3,
    Users,
} from "lucide-react"

const expertiseAreas = [
    {
        title: "Strategy & Roadmaps",
        subtitle: "MVP → Production, Agile delivery",
        icon: Rocket,
    },
    {
        title: "GTM & Growth",
        subtitle: "Positioning, pricing, messaging, campaigns",
        icon: TrendingUp,
    },
    {
        title: "UX & Platform Scale",
        subtitle: "Design system, localization, scalability",
        icon: Palette,
    },
    {
        title: "Analytics, AI & Automation",
        subtitle: "Product analytics, in-app guidance, automation",
        icon: BarChart3,
    },
    {
        title: "Leadership & Execution",
        subtitle: "Cross-functional leadership, mentoring, release management",
        icon: Users,
    },
]

export function ExpertiseSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="py-20 md:py-32 bg-muted/30 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm mb-4">
                            Areas of Expertise
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                            What I Bring to the Table
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expertiseAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-background/80 backdrop-blur-sm">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <area.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-foreground">
                                                {area.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {area.subtitle}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
