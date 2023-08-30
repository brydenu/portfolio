'use client';

export default function Navbar() {

const scrollToComponent = (componentName) => {
  const targetComponent = document.getElementById(componentName);
  if (targetComponent) {
    const navbarHeight = 116;
    const targetPosition = targetComponent.getBoundingClientRect().top + window.scrollY - navbarHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
}
    const handleScrollToHeader = () => {
        scrollToComponent("header");
    }
    const handleScrollToAbout = () => {
        scrollToComponent("about");
    }
    const handleScrollToProjects = () => {
        scrollToComponent("projects");
    }
    const handleScrollToContact = () => {
        scrollToComponent("contact");
    }
    return (
        <nav className="w-full flex flex-col sticky top-0 bg-white pt-14 pb-4 px-10 sm:px-40">
            <div className="flex flex-row justify-between">
                <div className="rounded-full border border-black text-md p-2 font-pt h-10 w-10 text-center hover:cursor-pointer" onClick={handleScrollToHeader}>BU</div>
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