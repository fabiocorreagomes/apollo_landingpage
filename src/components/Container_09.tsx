import Image from "next/image"

import Container09Img from "@/assets/selo_de_garantia.png"

export function Container09() {
    return (
        <div className="flex flex-col px-11 py-11 sm:px-11 md:px-[111px] lg:px-[300px] xl:px-[300px] items-center text-center font-sans">

        <Image
        className=" mb-11 items-center"
        src={Container09Img}
        alt="Selo de garantia"
        />

        <h1 className=" mb-11 text-[22px] font-bold">7 days Guarantee</h1>


        <p className=" mb-11 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione rem accusamus hic velit consequuntur amet incidunt voluptatem culpa sequi odit nam quas ex fugiat molestias, accusantium quia. Doloribus, optio delectus!</p>

        <p className=" mb-11 text-justify"><u><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos consequuntur error maiores repellendus dolore explicabo! Reiciendis ipsam quisquam, ratione harum assumenda quasi natus non! Qui accusamus rem porro molestias eius.</strong></u></p>

        </div>
    )
}