'use client';

import React, { useRef, useEffect } from 'react';

export default function FadeInSection({ children, sectionId }) {
    const sectionRef = useRef(null);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            sectionRef.current.classList.add('fadeIn');
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '-50px',
            threshold: 0.2
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="fadeInSection" id={sectionId}>
            {children}
        </section>
    );
}