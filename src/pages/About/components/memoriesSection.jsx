import React from "react";
import memory from '../../../assets/img/Audi-Rental-Car-near-me.jpeg'


export const MemoriesSection = () => {
 

    return (
        <div className="lg:mx-28 p-5 flex max-[430px]:flex-col gap-10 items-center">
            <div className="flex flex-col gap-12 lg:w-[60%]">
                <h1 className="text-5xl font-bold lg:w-[80%]">Unlock unforgetable memorieson the road</h1>
                <p className="text-[#d8d8d8]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum quibusdam eaque
                    adipisci nesciunt incidunt doloribus natus accusamus! Aspernatur quae
                    dignissimos ipsum facere laborum voluptatibus enim totam necessitatibus ullam ducimus?</p>
                <div className="flex flex-wrap ">
                    <div className="flex gap-2 w-[50%] my-3">
                        <svg width="60" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#5937E0" />
                            <path d="M22.6654 11L13.4987 20.1667L9.33203 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida
                            . Quis nunc interdum gravida ullamcorper</p>
                    </div>
                    <div className="flex gap-2 w-[50%] my-3">
                        <svg width="60" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#5937E0" />
                            <path d="M22.6654 11L13.4987 20.1667L9.33203 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida
                            . Quis nunc interdum gravida ullamcorper</p>
                    </div>
                    <div className="flex gap-2 w-[50%] my-3">
                        <svg width="60" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#5937E0" />
                            <path d="M22.6654 11L13.4987 20.1667L9.33203 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida
                            . Quis nunc interdum gravida ullamcorper</p>
                    </div>
                    <div className="flex gap-2 w-[50%] my-3">
                        <svg width="60" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#5937E0" />
                            <path d="M22.6654 11L13.4987 20.1667L9.33203 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida
                            . Quis nunc interdum gravida ullamcorper</p>
                    </div>
                </div>
            </div>
            <div className=" p-4 flex justify-center items-center w-[50%] h-[80%] max-[430px]:hidden">
                <img className="rounded-3xl " src={memory} alt="" srcset="" />
            </div>
        </div>
    )
}