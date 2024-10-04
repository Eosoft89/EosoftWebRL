import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Fade, FadeProps } from 'react-bootstrap';

interface Props extends FadeProps {
    timeToAppear?: number;
}

function FadeContainer({children, timeToAppear = 100, ...fadeProps }: PropsWithChildren<Props>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, timeToAppear);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Fade {...fadeProps} in={isVisible}>
           <div>
                {children}
           </div>
        </Fade>
    );
}

export default FadeContainer;