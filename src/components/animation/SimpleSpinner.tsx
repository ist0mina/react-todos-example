import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface SimpleSpinnerProps {
    title?: string;
    size?: FontAwesomeIconProps['size'];
}

export const SimpleSpinner: React.FC<SimpleSpinnerProps> = ({ title = '', size = "lg" }: SimpleSpinnerProps) => {
    return (
        <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faSpinner} spin size={size} className="mr-2"/>{title}
        </div>
    )
}