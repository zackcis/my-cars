import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";

export const ValueSection = ()=>{


    return(
        <div className="lg:mx-20 flex max-[430px]:flex-col justify-between items-center max-[430px]:p-9 lg:p-12 max-[430px]:gap-10">
            <div className="lg:w-[25%] flex flex-col items-center justify-center gap-5">
                <FaMapLocationDot className="text-5xl"/>
                <p className="text-2xl font-bold">Availability</p>
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio porro similique iusto </p>
            </div>
            <div className="lg:w-[25%] flex flex-col items-center justify-center gap-3">
                <FaCarSide className="text-5xl"/>
                <p className="text-2xl font-bold">Comfort</p>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, delectus.</p>
            </div>
            <div className="lg:w-[25%] flex flex-col items-center justify-center gap-3">
                <LuWallet className="text-5xl"/>
                <p className="text-2xl font-bold">Saving</p>
                <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus atque.</p>
            </div>
        </div>
    )
}