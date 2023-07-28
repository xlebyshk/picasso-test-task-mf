import React, {FC, ReactNode} from 'react';
import './Button.scss'
interface ButtonProps {
    children: ReactNode,
    onClick: () => void
}
const Button: FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button className="decrement" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;