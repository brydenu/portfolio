

export default function Navbar() {
    return (
        <nav className="w-full flex flex-col sticky top-0 bg-white pt-14 pb-4 px-40">
            <div className="flex flex-row justify-between">
                <div className="rounded-full border border-black text-md p-2 font-pt h-10 w-10 text-center">BU</div>
                <div className="flex flex-row flex-nowrap justify-center items-center gap-5 text-sm font-montserrat">
                    <a href="#about" className="text-gray-500 hover:text-black duration-200">ABOUT</a>
                    <a href="#projects" className="text-gray-500 hover:text-black duration-200">PROJECTS</a>
                    <a href="#contact" className="text-gray-500 hover:text-black duration-200">CONTACT</a>
                </div>
            </div>
        </nav>
    )
}