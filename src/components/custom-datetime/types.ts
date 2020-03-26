export interface CustomDatetimeProps {
    controlId: string;
    title?: string;
    selected?: Date;
    disabled?: boolean;    
    onChange?: (date: Date | null) => void;    
};
