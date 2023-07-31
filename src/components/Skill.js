import Image from "next/image";

export default function Skill({ imgSrc, title }) {
    return (
        <div className="flex flex-col justify-evenly align-middle text-center w-[75px] mx-5 my-2">
            <div className="w-full flex justify-center align-middle">
                <Image
                    src={imgSrc}
                    width={48}
                    height={48}
                    alt={`${title} icon`}
                />
            </div>
            <p className="text-gray-400 text-sm">{title}</p>
        </div>
    )
}