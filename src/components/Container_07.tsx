import Image from "next/image";

import Container07Img from "@/assets/pexels-photo-572056.jpeg";

export function Container07() {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 items-center text-center font-sans text-white text-shadow sm:px-[55px] px-[55px] md:px-[55px] lg:px-[111px] xl:px-[222px]">

            <div>
                <h1 className="text-[33px] py-6">This is a space to talk a bit more about the info-product</h1>
            </div>

            <div>
                <Image
                    className=" shadow-custom-dark"
                    src = {Container07Img}
                    alt = "Metrics computer"
                />
            </div>

            <div className=" text-justify py-11">
                <p className="mb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quae repellendus voluptate consequuntur ducimus a officiis aut mollitia modi quasi! Impedit sapiente nulla autem sed corrupti ipsa velit earum nemo.</p>

                <p className="mb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi saepe, omnis quaerat ullam aliquam similique tempora officia voluptatibus labore fuga ipsam aperiam, eum temporibus officiis totam. Praesentium ducimus reiciendis illo.</p>

                <p className="mb-11">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ratione hic aspernatur pariatur omnis, tempora voluptatum iusto praesentium nobis alias natus veritatis ullam qui adipisci, tenetur ad id maxime eaque?</p>
            </div>

        </div>
    )
}