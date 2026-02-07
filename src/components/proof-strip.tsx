import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface MetricCardProps {
    value: string | string[]
    label: string
    isAnimated?: boolean
    isRotating?: boolean
}

function MetricCard({ value, label, isAnimated, isRotating }: MetricCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [count, setCount] = useState(0)
    const [rotateIndex, setRotateIndex] = useState(0)

    useEffect(() => {
        if (!isInView) return

        if (isAnimated && typeof value === "string") {
            // Extract numeric part (e.g., "2M+" -> 2)
            const numericMatch = value.match(/^(\d+)/)
            const target = numericMatch ? parseInt(numericMatch[1]) : 0

            const duration = 2000
            const steps = 60
            const increment = target / steps
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                    setCount(target)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)

            return () => clearInterval(timer)
        }
    }, [isInView, isAnimated, value])

    useEffect(() => {
        if (!isRotating || !Array.isArray(value)) return

        const interval = setInterval(() => {
            setRotateIndex((prev) => (prev + 1) % value.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [isRotating, value])

    const displayValue = () => {
        if (isRotating && Array.isArray(value)) {
            return value[rotateIndex]
        }
        if (isAnimated && typeof value === "string") {
            const suffix = value.replace(/^\d+/, "") // Everything after the number
            return `${count}${suffix}`
        }
        return value
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center p-6 md:p-8"
        >
            <div className="relative h-16 flex items-center justify-center overflow-hidden">
                {isRotating && Array.isArray(value) ? (
                    value.map((v, i) => (
                        <motion.span
                            key={v}
                            className="absolute text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground"
                            initial={{ opacity: 0, y: 40 }}
                            animate={
                                rotateIndex === i
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: rotateIndex > i ? -40 : 40 }
                            }
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            {v}
                        </motion.span>
                    ))
                ) : (
                    <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                        {displayValue()}
                    </span>
                )}
            </div>
            <span className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
                {label}
            </span>
        </motion.div>
    )
}

export function ProofStrip() {
    return (
        <section className="py-16 md:py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                    <MetricCard value="10+" label="Years of Experience" isAnimated />
                    <MetricCard value="2M+" label="Users Impacted" isAnimated />
                    <MetricCard value={["B2B", "B2C", "B2B2C"]} label="Business Models" isRotating />
                    <MetricCard value={["Web", "Mobile", "SaaS"]} label="Platforms" isRotating />
                </div>
            </div>
        </section>
    )
}
