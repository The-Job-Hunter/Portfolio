import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
    Cloud,
    ClipboardList,
    Palette,
    Calendar,
    MessageSquare,
    CheckCircle,
    BarChart2,
    Tag,
    CloudLightning,
    Lightbulb,
    TrendingUp,
    Cog,
    Database,
    Bot,
    Brain,
    Plug,
} from "lucide-react"

const tools = [
    { name: "AWS", icon: Cloud },
    { name: "Jira", icon: ClipboardList },
    { name: "Figma", icon: Palette },
    { name: "Monday", icon: Calendar },
    { name: "Slack", icon: MessageSquare },
    { name: "Asana", icon: CheckCircle },
    { name: "Google Analytics", icon: BarChart2 },
    { name: "Google GTM", icon: Tag },
    { name: "Salesforce", icon: CloudLightning },
    { name: "Pendo", icon: Lightbulb },
    { name: "Mixpanel", icon: TrendingUp },
    { name: "Make", icon: Cog },
    { name: "Airtable", icon: Database },
    { name: "AI Automation", icon: Bot },
    { name: "Claude", icon: Brain },
    { name: "MCP", icon: Plug },
]

export function TechStackSection() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [hoveredTool, setHoveredTool] = useState<string | null>(null)

    return (
        <section className="py-20 md:py-32 bg-muted/30 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm mb-4">
                            Tech & Tools
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                            Tools I Work With
                        </h2>
                    </div>

                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
                        {tools.map((tool, index) => {
                            const IconComponent = tool.icon
                            return (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredTool(tool.name)}
                                    onMouseLeave={() => setHoveredTool(null)}
                                >
                                    <div
                                        className={`
                      aspect-square rounded-xl border bg-background 
                      flex items-center justify-center
                      transition-all duration-300 cursor-pointer
                      ${hoveredTool === tool.name
                                                ? "shadow-lg scale-110 border-primary"
                                                : "shadow-sm hover:shadow-md"
                                            }
                    `}
                                    >
                                        <IconComponent
                                            className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 ${hoveredTool === tool.name
                                                    ? "text-primary"
                                                    : "text-muted-foreground"
                                                }`}
                                        />
                                    </div>

                                    {/* Tooltip */}
                                    <div
                                        className={`
                      absolute -bottom-8 left-1/2 -translate-x-1/2 
                      px-2 py-1 bg-foreground text-background text-xs rounded-md
                      whitespace-nowrap z-20 pointer-events-none
                      transition-opacity duration-200
                      ${hoveredTool === tool.name ? "opacity-100" : "opacity-0"}
                    `}
                                    >
                                        {tool.name}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
