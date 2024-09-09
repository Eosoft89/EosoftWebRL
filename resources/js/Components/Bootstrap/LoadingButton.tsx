import { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";

function LoadingButton({disabled, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <Button
            {...props}
            variant="primary"
            disabled={disabled}
        >
            {!disabled ? children : "Cargando..." }
        </Button>      
    );
}

export default LoadingButton;