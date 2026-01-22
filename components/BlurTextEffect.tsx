'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
    children: string;
    className?: string;
    textGradient?: string;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ children, className = '', textGradient }) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const chars = containerRef.current.querySelectorAll('span.char');

        // Initial state
        gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });

        // Animation
        gsap.to(chars, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.015,
            // We do NOT clear 'filter' completely if it's needed, but for text it's better to clear it to avoid rendering issues.
            // However, we must ensure style props for gradient aren't wiped if we used 'clearProps: all'.
            // 'clearProps: filter' is safe.
            clearProps: 'filter',
        });
    }, [children]);

    const totalChars = children.length;

    return (
        <span className={`inline-block ${className}`} ref={containerRef}>
            {children.split('').map((char, i) => {
                const style: React.CSSProperties = { whiteSpace: 'pre' };

                if (textGradient) {
                    style.backgroundImage = textGradient;
                    style.backgroundSize = '100% 100%'; // Stretch gradient across the CHAR? No.
                    // To simulate continuous gradient:
                    // The background needs to be huge (width of the whole word).
                    // Example: if 10 chars, width is approx 1000% of one char. 
                    // But chars have different widths. This is an approximation.
                    // Better: Use background-attachment: fixed? Or try the % trick.
                    // The % trick assumes equal width chars which is false for fonts.
                    // BUT for a visual effect, it's often "good enough".

                    // Let's refine: The best way for 'continuous' gradient on split text is usually background-clip + text color transparent on EACH char
                    // IF we can size the background to the word. 
                    // Since we can't easily measure word width here without ref,
                    // We will use 'background-attachment: fixed' if the gradient allows, OR
                    // we accept that 'one gradient per char' might be what the user wants?
                    // "Igual o do sua agencia" -> Sua Agencia is White. Digital is Gradient.
                    // If the user liked the "Digital" look before the split, it was continuous.

                    // Implementing the 'approximation' strategy:
                    style.color = 'transparent';
                    style.backgroundClip = 'text';
                    style.WebkitBackgroundClip = 'text';
                    style.backgroundImage = textGradient;
                    style.backgroundSize = `${totalChars * 100}% 100%`;
                    style.backgroundPosition = `${(i / (totalChars - 1)) * 100}% 0`;
                }

                return (
                    <span key={`${char}-${i}`} className="char inline-block" style={style}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                );
            })}
        </span>
    );
};
