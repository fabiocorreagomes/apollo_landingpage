import Image from "next/image"
import Container06Img from "@/assets/pexels-photo-5081915.webp"

export function Container06() {
    return (
        <div className="flex flex-col md:flex-row pt-11 font-sans">

            <div className="px-[100px] pb-11 sm:w-full md:w-full lg:w-2/4 xl:w-2/4">               
                <Image className="shadow-custom-dark"
                src={Container06Img}
                alt="Person holding a celphone"/>
            </div>

            <div className="px-[55px] pt-5 text-xl sm:w-full md:w-full lg:w-2/4 xl:w-2/4">
                <ul className="list-disc">
                    <li className="mb-12">Benefits list example for show to client;</li>
                    <li className="mb-12">Benefits list example for show to client;</li>
                    <li className="mb-12">Benefits list example for show to client;</li>
                    <li className="mb-12">Benefits list example for show to client;</li>
                    <li className="mb-12">Benefits list example for show to client;</li>
                    <li className="mb-12">Benefits list example for show to client;</li>
                    <li className="mb-12">Benefits list example for show to client;</li>
                    <li className="mb-12 font-bold underline">Benefits list example for show to client;</li>
                </ul>
            </div>

        </div>
    )
}