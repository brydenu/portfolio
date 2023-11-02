'use client';
import { useState, useEffect } from "react";

export default function Header() {
    const [textVisible, setTextVisible] = useState([false, false, false, false, false, false, false, false]);
    
    useEffect(() => {
        // Trigger each line's fade-in effect after a delay
        const timeoutIds = textVisible.map((_, index) => 
            setTimeout(() => {
                setTextVisible(prevState => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                });
            }, 600 * index) // Delay each line by 1 second
        );

        // Clear timeouts if the component unmounts
        return () => timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    }, []);


    const scrollToAbout = () => {
        const targetComponent = document.getElementById("skills");
        if (targetComponent) {
            const navbarHeight = 116;
            const targetPosition = targetComponent.getBoundingClientRect().top + window.scrollY - navbarHeight;
            
            window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
            });
        }
    }
    return (
        <section className="w-full min-h-screen flex flex-col justify-evenly align-center" id="header">
            <div className="flex flex-col justify-center align-center">
                <small className={`text-center sm:pr-[400px] font-montserrat`}>
                    <span className={`opacity-0 ${textVisible[0] ? 'fadeIn' : ""}`}>Hello,</span> <span className={`opacity-0 ${textVisible[2] ? 'fadeIn' : ""}`}>my name is</span>
                </small>
                <h1 className={`opacity-0 text-6xl text-center font-pt ${textVisible[3] ? 'fadeIn' : ''}`}>
                    Bryden Uyehara
                </h1>
                <p className={`opacity-0 text-black text-md text-center font-montserrat ${textVisible[5] ? 'fadeIn' : ''}`}>
                    Software Engineer
                </p>
                <p className={`opacity-0 text-gray-500 text-sm text-center font-montserrat ${textVisible[7] ? 'fadeIn' : ''}`}>
                    React | Node | Python | SQL
                </p>
            </div>
            <div className="w-full flex justify-center">
                <div onClick={scrollToAbout} className="scroll hover:cursor-pointer" />
            </div>
        </section>
    )
}