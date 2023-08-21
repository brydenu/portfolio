export default function Contact() {

    return (
        <section className="w-full flex flex-col bg-black pt-20 px-40 text-white font-montserrat pb-10" id="contact">
            <div className="w-full flex flex-col gap-5">
                <h2 className="text-5xl text-center">Contact</h2>
                <p className="text-md font-montserrat text-center">
                    I&apos;m always open to grabbing a coffee (virtually or IRL),
                    and I always love hearing about new ideas and opportunities.
                    Feel free to reach out and let&apos;s see how we can work together!
                </p>
            </div>
            <form className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row gap-10 pt-12 ">
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">NAME</label>
                        <input className="h-10 w-80 text-black px-2" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">EMAIL ADDRESS</label>
                        <input className="h-10 w-80 text-black px-2" placeholder="Enter your email address" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm mb-1">MESSAGE</label>
                    <textarea className="rounded-sm h-80 text-black px-4 pt-2" />
                </div>
                <button className="text-black bg-white w-40 h-10 self-end rounded-sm hover:bg-black hover:text-white hover:border-2 hover:border-white duration-200">SEND</button>
            </form>
        </section>
    )
}