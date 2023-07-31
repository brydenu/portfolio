import Project from "./Project"

export default function Projects() {

    const blfscafeData = {
        title: "BioLife Cafe",
        description: "Remote coffee ordering website, allowing employees of Biolife Solutions to create accounts to customize, save, and order drinks while being able to track status of drinks and when they're ready. Guest ordering is also an option.",
        liveUrl: "https://www.biolifecafe.com",
        ghUrl: "https://github.com/brydenu/blfscafe",
        image: "/biolifecafe_image.png",
        imgAltText: "Macbook with Biolife cafe web app on screen"
    }
    
    return (
        <section className="w-full min-h-screen flex flex-col mt-48" id="projects">
            <div className="w-full ">
                <h2 className="text-4xl text-start font-pt">Projects</h2>
            </div>
            <Project data={blfscafeData} />
        </section>
    )
}