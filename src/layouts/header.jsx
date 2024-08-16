import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";







export const Header = () => {
    const [sidebaropened ,setSidebaropened] = useState(false)
    const clickonbar = ()=>{
        setSidebaropened(!sidebaropened)
    }



    return (
        <div className="flex justify-between items-center px-1 lg:px-20 my-6 relative">
            <div className="flex gap-3  items-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.3383 25.8956C46.0008 22.1072 45.4448 21.3694 45.2348 21.0919C44.752 20.4506 43.9795 20.0316 43.162 19.5919C43.1158 19.5674 43.0759 19.5326 43.0454 19.4901C43.015 19.4476 42.9948 19.3985 42.9865 19.3469C42.9783 19.2953 42.9821 19.2424 42.9977 19.1925C43.0134 19.1426 43.0404 19.097 43.0767 19.0594C43.2281 18.9058 43.3445 18.7213 43.4178 18.5186C43.4911 18.3158 43.5196 18.0995 43.5014 17.8847C43.4661 17.5037 43.289 17.1499 43.0051 16.8934C42.7211 16.6369 42.3512 16.4965 41.9686 16.5H40.5061C40.4434 16.5004 40.3808 16.5044 40.3186 16.5122C40.2759 16.4937 40.2317 16.4789 40.1864 16.4681C39.3201 14.6372 38.1342 12.1303 35.6761 10.9069C32.0301 9.09375 25.3139 9 24.0014 9C22.6889 9 15.9726 9.09375 12.3314 10.9041C9.87327 12.1275 8.68733 14.6344 7.82108 16.4653L7.81358 16.4803C7.77038 16.4864 7.72795 16.4971 7.68702 16.5122C7.62481 16.5044 7.56221 16.5004 7.49952 16.5H6.03421C5.65161 16.4965 5.28166 16.6369 4.99774 16.8934C4.71381 17.1499 4.53665 17.5037 4.5014 17.8847C4.48474 18.099 4.51457 18.3145 4.58884 18.5162C4.6631 18.718 4.78006 18.9013 4.93171 19.0538C4.96799 19.0914 4.99502 19.137 5.01067 19.1869C5.02632 19.2368 5.03016 19.2896 5.02189 19.3413C5.01361 19.3929 4.99345 19.4419 4.963 19.4844C4.93254 19.527 4.89263 19.5618 4.8464 19.5863C4.0289 20.0287 3.25265 20.4478 2.77358 21.0863C2.56358 21.3675 2.00858 22.1016 1.67014 25.89C1.48264 28.0219 1.45452 30.2288 1.60171 31.65C1.91015 34.6031 2.48858 36.3881 2.51296 36.4622C2.60172 36.7317 2.76511 36.9705 2.98415 37.1509C3.2032 37.3313 3.46892 37.4458 3.75046 37.4812V37.5C3.75046 37.8978 3.90849 38.2794 4.1898 38.5607C4.4711 38.842 4.85263 39 5.25046 39H10.5005C10.8983 39 11.2798 38.842 11.5611 38.5607C11.8424 38.2794 12.0005 37.8978 12.0005 37.5C12.8076 37.5 13.3692 37.3556 13.9645 37.2019C14.824 36.9703 15.7025 36.8162 16.5895 36.7416C19.4498 36.4688 22.2942 36.375 24.0014 36.375C25.6739 36.375 28.6439 36.4688 31.5089 36.7416C32.3994 36.8164 33.2814 36.9711 34.1442 37.2038C34.7142 37.35 35.2551 37.485 36.0042 37.4991C36.0042 37.8969 36.1622 38.2784 36.4436 38.5597C36.7249 38.841 37.1064 38.9991 37.5042 38.9991H42.7542C43.152 38.9991 43.5336 38.841 43.8149 38.5597C44.0962 38.2784 44.2542 37.8969 44.2542 37.4991V37.4878C44.5364 37.4531 44.8029 37.3388 45.0227 37.1584C45.2425 36.978 45.4064 36.7388 45.4955 36.4688C45.5198 36.3947 46.0983 34.6097 46.4067 31.6566C46.5539 30.2344 46.5276 28.0312 46.3383 25.8956ZM10.5323 17.7478C11.2823 16.1541 12.1401 14.3503 13.6673 13.59C15.8742 12.4913 20.4483 11.9962 24.0014 11.9962C27.5545 11.9962 32.1286 12.4875 34.3355 13.59C35.8626 14.3503 36.7167 16.155 37.4705 17.7478L37.5642 17.9513C37.619 18.0671 37.6433 18.195 37.6346 18.3228C37.6259 18.4507 37.5847 18.5742 37.5147 18.6815C37.4448 18.7889 37.3485 18.8765 37.2351 18.9361C37.1216 18.9957 36.9948 19.0252 36.8667 19.0219C33.7514 18.9375 27.1889 18.6675 24.0014 18.6675C20.8139 18.6675 14.2514 18.9441 11.1314 19.0284C11.0033 19.0318 10.8765 19.0023 10.7631 18.9427C10.6496 18.8831 10.5533 18.7955 10.4834 18.6881C10.4134 18.5807 10.3722 18.4572 10.3635 18.3294C10.3548 18.2016 10.3791 18.0736 10.4339 17.9578C10.4667 17.8884 10.5014 17.8181 10.5323 17.7478ZM11.6508 25.2131C10.0381 25.4072 8.41509 25.503 6.79077 25.5C5.79702 25.5 4.77233 25.2188 4.58202 24.3337C4.45171 23.7384 4.46577 23.4038 4.53608 23.0672C4.59514 22.7812 4.6889 22.5731 5.15765 22.5C6.3764 22.3125 7.05796 22.5478 9.05296 23.1356C10.3758 23.5247 11.3301 24.0431 11.8739 24.4537C12.1467 24.6562 12.0014 25.185 11.6508 25.2131ZM32.4051 32.9006C31.1714 33.0413 28.7039 32.9897 24.0295 32.9897C19.3551 32.9897 16.8886 33.0413 15.6548 32.9006C14.3817 32.7591 12.7589 31.5553 13.867 30.4828C14.6048 29.7759 16.3261 29.2472 18.6183 28.95C20.9105 28.6528 21.8808 28.5 24.0201 28.5C26.1595 28.5 27.0314 28.5938 29.422 28.9509C31.8126 29.3081 33.6192 29.8434 34.1733 30.4837C35.1839 31.6313 33.6773 32.7516 32.4051 32.9062V32.9006ZM43.4208 24.3328C43.2333 25.2216 42.202 25.4991 41.212 25.4991C39.5566 25.4994 37.9026 25.4037 36.2583 25.2122C35.9714 25.185 35.8383 24.6816 36.1289 24.4528C36.6642 24.0319 37.6289 23.5238 38.9498 23.1347C40.9448 22.5469 42.0951 22.3116 43.0833 22.5075C43.3242 22.5553 43.4517 22.8141 43.4667 22.9762C43.5328 23.4278 43.5173 23.8877 43.4208 24.3337V24.3328Z" fill="black" />
                </svg>

                <h3 className="font-bold">InnovaCars</h3>
            </div>

            <div className={`bg-white flex max-[430px]:flex-col justify-around z-50 lg:w-[45%] max-[430px]:w-[100%]  items-center max-[430px]:absolute max-[430px]:top-14 ${!sidebaropened ? 'max-[430px]:hidden' : null }`}>
    
                <Link onClick={clickonbar} className="max-[430px]:border-black max-[430px]:border-2 max-[430px]:w-[100%] max-[430px]:p-3 " to="/">Home</Link>
                <Link onClick={clickonbar} className="max-[430px]:border-black max-[430px]:border-2 max-[430px]:w-[100%] max-[430px]:p-3 " to="/vehicles">Vehicles</Link>
                <Link onClick={clickonbar} className="max-[430px]:border-black max-[430px]:border-2 max-[430px]:w-[100%] max-[430px]:p-3 " to="/aboutus">aboutus</Link>
                <Link onClick={clickonbar} className="max-[430px]:border-black max-[430px]:border-2 max-[430px]:w-[100%] max-[430px]:p-3 " to="/contactus">contactus</Link>

            </div>

            <div className="flex items-center gap-3 max-[430px]:hidden">
                <FaPhone className="text-white p-2 rounded-full bg-[#5937e0] text-4xl phone" />
                <div className="">
                    <p>Need help?</p>
                    <p className="font-bold ">+212 69931-2362</p>
                </div>
            </div>
            <FaBars onClick={clickonbar} className="text-[#5937e0] lg:hidden size-5" />

        </div>
    )
}