import React from "react";


export const NumbersSection = ()=>{

    return(
        <div className="lg:mx-28 flex max-[430px]:flex-col max-[430px]:items-center justify-around p-10 my-5 max-[430px]:gap-8">
            <div className="flex flex-col justify-center items-start max-[430px]:items-center gap-2 max-[430px]:ga">
                <h1 className="text-7xl font-bold text-[#5937e0] ">20K+</h1>
                <p className="font-bold">Happy Customers</p>
            </div>
            <div className="flex flex-col justify-center items-start max-[430px]:items-center gap-2 max-[430px]:ga">
                <h1 className="text-7xl font-bold text-[#5937e0] ">540+</h1>
                <p className="font-bold">Count of cars</p>
            </div>
            <div className="flex flex-col justify-center items-start max-[430px]:items-center gap-2 max-[430px]:ga">
                <h1 className="text-7xl font-bold text-[#5937e0] ">25+</h1>
                <p className="font-bold">Years of Experience</p>
            </div>
        </div>
    )
}