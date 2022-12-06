export interface TransectionProps {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    date: string;
    art: {
        icon: string;
        background: string;
    };
}

export interface TransectionSectionProps {
    data: Array<TransectionProps>;
}

export interface TransectionAviProps {
    icon: string;
    background: string;
}
