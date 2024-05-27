import Image from "next/image";
import Container03img from "@/assets/pexels-photo-5717639.jpeg";

export function Container03() {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 items-center flex flex-col md:flex-row p-[55px] font-sans text-white text-justify">

            <div className="p-12 sm:w-full md:w-full lg:w-2/4 xl:w-2/4">
                <Image className="md:flex shadow-custom-dark" src={Container03img} alt="mulher conversando no celular" />
            </div>

            <div className="sm:w-full md:w-full lg:w-2/4 xl:w-2/4 p-3">
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</p>
                    
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</p>
                    
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</p>
                    
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</p>

                <p className="mb-4"><u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</u></p>

                <ul className="mb-4 list-disc">
                    <li className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</li>
                    <li className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</li>
                    <li className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga ullam voluptatem quasi corrupti a quos earum laudantium id tenetur consequatur rerum soluta amet ad, ducimus expedita cum doloribus vel?</li>
                </ul>
            </div>
            
        </div>
    )
}