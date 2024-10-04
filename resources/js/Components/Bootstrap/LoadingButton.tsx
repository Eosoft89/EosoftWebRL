import { ButtonHTMLAttributes } from "react";
import { Button, Spinner } from "react-bootstrap";

function LoadingButton({disabled, children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <Button
            {...props}
            variant="primary"
            disabled={disabled}
        >
            {!disabled ? children : 
            (<>
                <Spinner 
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                {" "} Cargando...
            </>)        
            }
        </Button>      
        
    );
}

export default LoadingButton;