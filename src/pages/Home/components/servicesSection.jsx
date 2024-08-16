import React from "react";
import carShow from '../../../assets/img/pexels-tkirkgoz-19362988.jpg';


export const ServicesSection = () => {

    return (
        <div className="mx-20 flex justify-around items-center p-10 max-[430px]:hidden">
            <div className="p-4  flex justify-center w-[45%]">
                <img className="rounded-xl" src={carShow} width={500} alt="" srcset="" />
            </div>
            <div className="p-4  flex flex-col gap-4">
                <div className="flex flex-col gap-3 mb-4">
                    <div className="flex gap-4 items-center">
                        <p className="text-white p-[5px] px-[15px] rounded-full text-2xl bg-[#5937e0]">1</p>
                        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit.</p>
                </div>
                <div className="flex flex-col gap-3 mb-4">
                    <div className="flex gap-4 items-center">
                        <p className="text-white p-[5px] px-[15px] rounded-full text-2xl bg-[#5937e0]">2</p>
                        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit.</p>
                </div>
                <div className="flex flex-col gap-3 mb-4">
                    <div className="flex gap-4 items-center">
                        <p className="text-white p-[5px] px-[15px] rounded-full text-2xl bg-[#5937e0]">3</p>
                        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit.</p>
                </div>
                <div className="flex flex-col gap-3 mb-4">
                    <div className="flex gap-4 items-center">
                        <p className="text-white p-[5px] px-[15px] rounded-full text-2xl bg-[#5937e0]">4</p>
                        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit.</p>
                </div>
                <div className="flex flex-col gap-3 mb-4">
                    <div className="flex gap-4 items-center">
                        <p className="text-white p-[5px] px-[15px] rounded-full text-2xl bg-[#5937e0]">5</p>
                        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit.</p>
                </div>
            </div>
        </div>
    )
}