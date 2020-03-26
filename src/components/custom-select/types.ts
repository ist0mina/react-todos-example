export type OptionSelect = {
    key: string;
    value: string;
};

export interface CustomSelectProps {
    controlId: string;
    title?: string;
    data?: OptionSelect[];
    selected?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};