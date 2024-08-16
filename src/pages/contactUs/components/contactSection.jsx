import React from "react";
import { FaCar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export const ContactSection = () => {

    return (
        <div className="lg:mx-20 p-4 my-9 max-[430px]:flex max-[430px]:justify-center max-[430px]:items-center">
            <div className="flex max-[430px]:flex-col max-[430px]:gap-7 justify-between max-[430px]:justify-center  mb-[5%]">

                <div className="flex items-center gap-2 ">
                    <div className="bg-[#ff9e0c] p-2 rounded-full">
                        <CiLocationOn className="text-white text-2xl" />
                    </div>
                    <div>
                        <p className="">Adresse</p>
                        <p className="font-bold">Irlend, Dublin Mikhmaj 005</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 ">
                    <div className="bg-[#ff9e0c] p-2 rounded-full">
                        <MdOutlineEmail className="text-white text-2xl" />
                    </div>
                    <div>
                        <p className="">Email</p>
                        <p className="font-bold">Ba9i.hamza@ma3tanich.nemra</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 ">
                    <div className="bg-[#ff9e0c] p-2 rounded-full">
                        <CiPhone className="text-white text-2xl" />
                    </div>
                    <div>
                        <p className="">phone</p>
                        <p className="font-bold">00212699312362</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 ">
                    <div className="bg-[#ff9e0c] p-2 rounded-full">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9999 25.6667C20.4432 25.6667 25.6666 20.4434 25.6666 14C25.6666 7.55672 20.4432 2.33337 13.9999 2.33337C7.5566 2.33337 2.33325 7.55672 2.33325 14C2.33325 20.4434 7.5566 25.6667 13.9999 25.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 7V14L18.6667 16.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <p className="">Opening Hours</p>
                        <p className="font-bold">Sun-Mon: 10am-10pm</p>
                    </div>
                </div>

            </div>
        </div>
    )
}