import Image from "next/image"

export default function About() {
    return (
        <section className="flex flex-col w-full pb-20" id="about">
            <div className="w-full ">
                <h2 className="text-4xl text-end font-pt">About</h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-14">
                <Image
                    src="/html-tag-window.png"
                    width={400}
                    height={400}
                    alt="HTML tag icon"
                />
                <div className="font-montserrat text-md flex flex-col justify-evenly text-center font-montserrat">
                    <p>
                        Hello again! Thank you for visiting my portfolio!
                        My name is Bryden and I'm a software engineer based out of
                        Seattle, Washington. I love being creative, and finding solutions
                        to every day problems with technology or otherwise.
                    </p>
                    <p>
                        Outside of code, I love learning all sorts of things and trying new
                        hobbies when I can. I am addicted to the feeling I get when I start
                        to see improvements, whether it is as a software engineer or otherwise.
                    </p>
                </div>
            </div>
        </section>
    )
}