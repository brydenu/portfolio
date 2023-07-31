import Skill from "./Skill"

export default function Skills() {

    const row1Skills = [
        {
            src: "/skills/html5.png",
            title: "HTML5",
        },
        {
            src: "/skills/css.png",
            title: "CSS",
        },
        {
            src: "/skills/javascript.png",
            title: "JavaScript",
        },
        {
            src: "/skills/python.png",
            title: "Python"
        },
        {
            src: "/skills/react.png",
            title: "React"
        },
        {
            src: "/skills/database.png",
            title: "Database Management"
        }
    ]

    const row2Skills = [
        {
            src: "/skills/postgresql.png",
            title: "PostgreSQL",
        },
        {
            src: "/skills/sass.png",
            title: "Sass",
        },
        {
            src: "/skills/iphonex.png",
            title: "Responsive Design"
        },
        {
            src: "/skills/github.png",
            title: "Github"
        },
        {
            src: "/skills/tailwind-css.png",
            title: "TailwindCSS"
        }
    ]

    return (
        <section className="w-full flex flex-col justify-center align-middle font-montserrat my-24" id="skills">
            <h2 className="font-pt text-4xl text-center mb-8">Skills</h2>
            <div className="w-full flex flex-row flex-wrap sm:flex-nowrap justify-center">
                {row1Skills.map((skill) => <Skill imgSrc={skill.src} title={skill.title} />)}
            </div>
            <div className="w-full flex flex-row flex-wrap sm:flex-nowrap justify-center">
                {row2Skills.map((skill) => <Skill imgSrc={skill.src} title={skill.title} />)}
            </div>
        </section>
    )
}