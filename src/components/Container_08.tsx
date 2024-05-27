import Image from "next/image";

import Container08Img from "@/assets/12 maneiras.png";

export function Container08() {
    return (
        <div className="px-11 py-11 sm:px-11 md:px-[111px] lg:px-[300px] xl:px-[300px] items-center text-center font-sans">

        <div className="pb-6">
            <h1 className="text-[22px] font-bold">Here is everything that you will receive:</h1>
        </div>

        <div>
            <h2 className="text-[44px] font-bold text-blue-600 text-shadow-md">Name of your infoproduct</h2>
        </div>

        <div>
            <Image
            className=""
            src={Container08Img}
            alt="mockup number one"
            />
        </div>

        <div className="pb-6">
            <p className=" line-through">Total price is of the product $x.xx</p>
        </div>

        <div className="pb-6">
            <h2 className="text-[111px] font-bold text-blue-600">+</h2>
        </div>

        <div className="pb-6">
            <h1 className="text-[22px] font-bold">Space for presenting the Bonus:</h1>
        </div>

        <div>
            <h2 className="text-[44px] font-bold text-blue-600 text-shadow-md">In here you put the name of the bonus</h2>
        </div>

        <div>
            <Image
            src={Container08Img}
            alt="mockup number two"
            />
        </div>

        <div className="pb-6">
            <p className=" line-through">Total price is of first bonus $x.xx</p>
        </div>

        <div>
            <p className=" justify-center text-justify pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur veritatis laboriosam inventore officia, nulla magni, nisi id repudiandae eius doloribus a. Reprehenderit tempore consequatur obcaecati repellendus delectus! Libero, amet.</p>
        </div>

        <div className="pb-6">
            <p className=" line-through">Total price is of everything $x.xx</p>
        </div>

        <div>
            <h2 className="text-[44px] font-bold text-red-500 text-shadow-md">Present the the actual price of the product $x.xx</h2>
        </div>

        <div className="mt-11">
            <button className="bg-blue-600 text-white font-sans p-4 rounded shadow-custom-light hover:shadow-custom-dark hover:bg-black hover:animate-pulse">
            Click here and change your life forever!
            </button>
        </div>

        </div>
    )
}