import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="py-20 md:py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-foreground">
                        About Me
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                        I lead end-to-end product: roadmap and delivery from MVP to production,
                        GTM and growth, cross-functional execution, and insight-driven iteration.
                        I've built and scaled products across SaaS/Web/API/Mobile in B2B, B2C,
                        and B2B2C models, with a strong emphasis on analytics, AI, and workflow automation.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
