import React, { PropsWithChildren, useEffect, useState } from 'react'

type Props = {}

function AnimatedContainer({children}: PropsWithChildren) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            style={{
                opacity: 0,
                transform: 'translateY(20vh)',
                visibility: 'hidden',
                transition: 'opacity 0.6s ease-out, transform 1.2s ease-out',
                willChange: 'opacity, visibility',
            }}
        >
            {children}
        </div>
    );
}

export default AnimatedContainer