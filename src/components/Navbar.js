

export default function Navbar() {
    const handleScrollToAbout = () => {
        window.scrollTo(0, 725);
    }
    const handleScrollToProjects = () => {
        window.scrollTo(0, 1500);
    }
    const handleScrollToContact = () => {
        window.scrollTo(0, 2300);
    }
    return (
        <nav className="w-full flex flex-col sticky top-0 bg-white pt-14 pb-4 px-40 scroll-smooth">
            <div className="flex flex-row justify-between">
                <div className="rounded-full border border-black text-md p-2 font-pt h-10 w-10 text-center">BU</div>
                <div className="flex flex-row flex-nowrap justify-center items-center gap-5 text-sm font-montserrat">
                    <p onClick={handleScrollToAbout} className="hover:cursor-pointer text-gray-500 hover:text-black duration-200">ABOUT</p>
                    <p onClick={handleScrollToProjects} className="hover:cursor-pointer text-gray-500 hover:text-black duration-200">PROJECTS</p>
                    <p onClick={handleScrollToContact} className="hover:cursor-pointer text-gray-500 hover:text-black duration-200">CONTACT</p>
                </div>
            </div>
        </nav>
    )
}

///arf