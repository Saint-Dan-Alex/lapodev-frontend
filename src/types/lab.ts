export interface LabEvent {
    title: string;
    date: string;
    isoDate?: string;
    location?: string;
    category: 'past' | 'current' | 'upcoming';
    description: string;
}

export interface LabPublication {
    title: string;
    author: string;
    date: string;
    type: string;
}

export interface ResearchDomain {
    title: string;
    subtitle?: string;
    intro: string;
    goals: string[];
    concepts?: Record<string, string>;
    quote?: string;
}

export interface ResearchAxis {
    id: number;
    label: string;
}

export interface Member {
    id: string;
    name: string;
    grade?: string;
    category: 'academic' | 'scientific' | 'administrative' | 'technical';
    bio?: string;
    bibliography?: string;
    office?: string;
    email?: string;
}
