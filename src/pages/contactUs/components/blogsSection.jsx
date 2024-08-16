import React from "react";
import blog1 from '../../../assets/img/car3.webp'

export const BlogsSection = ()=>{

    return(
        <div className="lg:mx-20 mx-5 p-5 flex flex-col gap-7 py-8">
                <h1 className="font-bold text-center text-4xl">Latest blog posts & news</h1>
            <div className="flex max-[430px]:flex-col justify-around items-center ">
                <div className="flex flex-col gap-5 items-start lg:w-[32%]">
                    <img className="rounded-3xl" src={blog1} width={400} alt="" />
                    <p className="font-bold text-xl">How to choose the right car</p>
                    <p className="text-[#666666]">News / 12 April 2024</p>
                </div>
                <div className="flex flex-col gap-5 items-start lg:w-[32%]">
                    <img className="rounded-3xl" src={blog1} width={400} alt="" />
                    <p className="font-bold text-xl">How to choose the right car</p>
                    <p className="text-[#666666]">News / 12 April 2024</p>
                </div>
                <div className="flex flex-col gap-5 items-start lg:w-[32%]">
                    <img className="rounded-3xl" src={blog1} width={400} alt="" />
                    <p className="font-bold text-xl">How to choose the right car</p>
                    <p className="text-[#666666]">News / 12 April 2024</p>
                </div>
            </div>
        </div>
    )
}