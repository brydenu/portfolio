'use client';

import { useState } from "react"
import sendEmail from "@/utils/sendEmail";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitStatus, setSubmitStatus] = useState("unsent");
    const [formFieldError, setFormFieldError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setFormFieldError(true);
            return;
        }
        const data = {
            to: "brydevu@gmail.com",
            from: "brydevu@gmail.com",
            subject: "Message from brydenuyehara.com",
            text: `Name: ${name} - Email: ${email} - Message: ${message}`,
            html: `<div><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></div>`
        }
        const sentEmail = await sendEmail(data);

        if (sentEmail.status === 200) {
            setSubmitStatus("success");
        } else {
            setSubmitStatus("error");
        }
        console.log("sentEmail", sentEmail);
    }

    return (
        <section className="w-full flex flex-col bg-black pt-20 px-4 sm:px-40 text-white font-montserrat pb-10" id="contact">
            <div className="w-full flex flex-col gap-5">
                <h2 className="text-5xl text-center">Contact</h2>
                <p className="text-md font-montserrat text-center">
                    I&apos;m always open to grabbing a coffee (virtually or IRL),
                    and I always love hearing about new ideas and opportunities.
                    Feel free to reach out and let&apos;s see how we can work together!
                </p>
            </div>
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col sm:flex-row gap-10 pt-12 ">
                    <div className="flex flex-col">
                        <label className="text-sm mb-1" htmlFor="name">NAME</label>
                        <input className="h-10 w-80 text-black px-2" type="text" htmlFor="name" placeholder="Enter your name" value={name} onChange={(e) => {setName(e.target.value)}} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1" htmlFor="email">EMAIL ADDRESS</label>
                        <input className="h-10 w-80 text-black px-2" type="email" htmlFor="email" placeholder="Enter your email address" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="text-sm mb-1">MESSAGE</label>
                    <textarea className="rounded-sm h-80 text-black px-4 pt-2" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                </div>
                {submitStatus !== "success" ? 
                    (
                        <>
                            <button type="submit" className="text-black bg-white w-40 h-10 self-end rounded-sm hover:bg-gray-300 active:bg-black active:text-white active:border-2 active:border-white duration-200">SEND</button>
                            {submitStatus === "error" && (<p className="text-red-700">Error sending email - please try again later, sorry!</p>)}
                            {formFieldError && <p className="text-red-700 text-center">Please fill out all fields before sending a message. Thank you!</p>}
                        </>
                    )
                    :
                (<p className="text-center py-5 font-bold">Message sent. Thank you for reaching out! I'll respond as soon as I can 🤓</p>)
            }
                
            </form>
        </section>
    )
}