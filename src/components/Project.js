import Image from "next/image";

export default function Project({ data }) {

    const { title, description, liveUrl, ghUrl, image, imgAltText } = data;
    
    return (
        <div className="flex flex-col sm:flex-row font-montserrat">
            <div className="flex flex-col justify-center sm:justify-evenly">
                <h3 className="text-3xl font-bold text-center sm:text-start">{title}</h3>
                <p className="text-md text-center sm:text-start py-6 sm:py-0">
                    {description}
                </p>
                <div className="flex flex-row gap-2">
                    <button className="w-40 h-10 bg-black text-white bold rounded" href={liveUrl}>Live Site</button>
                    <button className="w-40 h-10 bg-white border-2 border-black text-black bold rounded" href={ghUrl}>Github Repo</button>
                </div>
            </div>
            <Image
                src={image}
                width={600}
                height={600}
                alt={imgAltText}
            />
        </div>
    )
}