'use client';

export default function Header() {

    const scrollToAbout = () => {
        const targetComponent = document.getElementById("about");
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
                <small className="text-center sm:pr-[400px] font-montserrat">Hello, my name is</small>
                <h1 className="text-6xl text-center font-pt">Bryden Uyehara</h1>
                <p className="text-black text-md text-center font-montserrat">Software Engineer</p>
                <p className="text-gray-500 text-sm text-center font-montserrat">React | Node | Python | SQL</p>
            </div>
            <div className="w-full flex justify-center">
                <div onClick={scrollToAbout} className="scroll hover:cursor-pointer" />
            </div>
        </section>
    )
}