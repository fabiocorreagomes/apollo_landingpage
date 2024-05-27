"use client";

import { useState, FC } from 'react';

const FAQ: FC = () => {
    const [open, setOpen] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto p-4 mb-11">
            <div className="border-b border-gray-300 mb-4 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(1)}>
                    <h3 className="font-medium">Question 1: What is your return policy?</h3>
                    <button className="text-xl">{open === 1 ? '-' : '+'}</button>
                </div>
                {open === 1 && <div className="mt-2 text-justify"><p>Our return policy allows for returns within 30 days of purchase. Please ensure the items are in their original condition.</p></div>}
            </div>

            <div className="border-b border-gray-300 mb-4 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(2)}>
                    <h3 className="font-medium">Question 2: How long does shipping take?</h3>
                    <button className="text-xl">{open === 2 ? '-' : '+'}</button>
                </div>
                {open === 2 && <div className="mt-2 text-justify"><p>Shipping usually takes between 5-7 business days for standard delivery.</p></div>}
            </div>

            <div className="border-b border-gray-300 mb-4 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(3)}>
                    <h3 className="font-medium">Question 3: Do you ship internationally?</h3>
                    <button className="text-xl">{open === 3 ? '-' : '+'}</button>
                </div>
                {open === 3 && <div className="mt-2 text-justify"><p>Yes, we ship to most countries worldwide. Additional shipping fees may apply.</p></div>}
            </div>

            <div className="border-b border-gray-300 mb-4 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(4)}>
                    <h3 className="font-medium">Question 4: This is the fourth question?</h3>
                    <button className="text-xl">{open === 4 ? '-' : '+'}</button>
                </div>
                {open === 4 && <div className="mt-2 text-justify"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusantium cupiditate provident est porro numquam omnis ad velit error a rerum labore, quaerat vero, alias tempore sunt minus assumenda! Reiciendis.</p></div>}
            </div>
            
            <div className="border-b border-gray-300 mb-4 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(5)}>
                    <h3 className="font-medium">Question 5: This is the fifth question?</h3>
                    <button className="text-xl">{open === 5 ? '-' : '+'}</button>
                </div>
                {open === 5 && <div className="mt-2 text-justify"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus labore, quo iste cumque itaque dolorem nihil cupiditate aliquam! Iste obcaecati inventore omnis sit ea earum quod saepe iure recusandae.</p></div>}
            </div>

            <div className="border-b border-gray-300 mb-4 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(6)}>
                    <h3 className="font-medium">Question 6: This is the sixth question?</h3>
                    <button className="text-xl">{open === 6 ? '-' : '+'}</button>
                </div>
                {open === 6 && <div className="mt-2 text-justify"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque perferendis fugit sapiente doloribus nisi harum, ab sed autem asperiores! Neque, repellat repudiandae magni aut nemo autem velit ad. Maxime, deleniti?</p></div>}
            </div>

            <div className="border-b border-gray-300 mb-4 pb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(7)}>
                    <h3 className="font-medium">Question 7: This is the seventh?</h3>
                    <button className="text-xl">{open === 7 ? '-' : '+'}</button>
                </div>
                {open === 7 && <div className="mt-2 text-justify"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste, at culpa illum numquam animi placeat similique nemo hic, praesentium reprehenderit ipsam eligendi voluptatibus quas voluptatem suscipit temporibus, dicta eos.</p></div>}
            </div>
        </div>
    );
};

export default FAQ;