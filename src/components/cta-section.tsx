import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="contact" className="py-24 md:py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10">
                        Interested in collaborating or just want to chat about product, growth, or AI?
                        I'd love to hear from you.
                    </p>
                    <Button
                        size="lg"
                        className="gap-3 px-8 py-6 text-base"
                        asChild
                    >
                        <a
                            href="https://www.linkedin.com/in/yonih/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-5 h-5" />
                            Contact me on LinkedIn
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
