import React, { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOilBarrel } from "react-icons/md";
import { IoSnow } from "react-icons/io5";
import card1 from '../../../assets/img/card-1.webp';
import { Link } from "react-router-dom";
import { MyContext } from '../../../utils/contextProvider';


export const OtherCarSection = () => {

    const { cars,setCars} = useContext(MyContext)

    return (
        <div className="lg:mx-20 p-2 my-12">
            <div className="flex justify-between">
                <h3 className="text-4xl font-bold lg:w-[38%] max-[430px]:p-5 lg:p-10">Choose the car that suits you</h3>
                <Link to='/vehicles' className="flex max-[430px]:flex-col max-[430px]:justify-center items-center gap-2 font-bold text-2xl lg:border-none border-black border-2 max-[430px]:w-[200px]">View All <FaLongArrowAltRight />  </Link>
            </div>



            <div className="card-container w-[100%] flex max-[430px]:flex-col flex-wrap gap-9 justify-center">
             {cars.slice(0, 6).map((element,index)=>



                <div key={index} className="card lg:w-[30%] bg-[#fafafa] flex flex-col justify-center gap-9 rounded-lg p-3">
                    <img className="rounded-lg w-100 h-60" src={element.img} alt="" srcset="" />
                    <div className="flex justify-between ">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-bold text-xl ">{element.mark}</h4>
                            <p>{element.mark}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-xl text-[#5937e0]">{element.price}</p>
                            <p>Per day</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-around w-[100%]">
                        <p className="flex items-center gap-2"><TbAutomaticGearbox className="text-xl" /> Automat</p>
                        <p className="flex items-center gap-2"><MdOilBarrel className="text-xl" /> Pb 95</p>
                        <p className="flex items-center gap-2"><IoSnow className="text-xl" /> Air Conditioner</p>
                    </div>
                    <button className="w-[90%] bg-[#5937e0] rounded-lg self-center p-2 text-white"><b>View details</b></button>
                </div>



             )}

            </div>


        </div>
    )
} 