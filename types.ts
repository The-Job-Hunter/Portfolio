export interface TimelineItem {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string[];
    logo?: string;
}

export interface ExpertiseItem {
    icon: string;
    title: string;
    description: string;
    colSpan: number;
    variant: 'default' | 'primary' | 'dark';
}

export interface StatItem {
    values: string[];
    label: string;
}