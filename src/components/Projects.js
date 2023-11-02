import Project from "./Project"

export default function Projects() {

    const cafe2GoData = {
        title: "Cafe2Go",
        description: "Remote coffee ordering website, users to create accounts to customize, save, and order drinks while being able to track status of drinks and when they're ready. Guest ordering is also an option.",
        liveUrl: "https://cafe2go.brydenuyehara.com",
        ghUrl: "https://github.com/brydenu/cafe2go",
        image: "/cafe_mockup.jpg",
        imgAltText: "Macbook with Cafe2Go web app on screen"
    }
    
    return (
        <section className="w-full min-h-screen flex flex-col mt-48" id="projects">
            <div className="w-full ">
                <h2 className="text-4xl text-center sm:text-start font-pt">Current Project</h2>
                <p className="text-center sm:text-start text-sm font-montserrat my-1 pb-12 sm:pb-0 py-2 sm:py-0">What I&apos;m working on right now</p>
            </div>
            <Project data={cafe2GoData} />
            <div className="w-full">
                <h3 className="text-lg font-montserrat text-center my-12">Check out my other projects on my <a href="https://www.github.com/brydenu" target="_blank" className="underline">Github</a></h3>
            </div>
        </section>
    )
}