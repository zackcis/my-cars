import React, { useState } from "react";
import card1 from '../../../assets/img/card-1.webp';
import card2 from '../../../assets/img/sedan/changan-alsvin-655ec2290d1ad.jpg';
import card3 from '../../../assets/img/sedan/front-left-side-47.webp';
import card4 from '../../../assets/img/sedan/motor283-the-top-5-sedan-cars-of-2023-1704647346251.webp';
import card5 from '../../../assets/img/sedan/rear-left-view-121.avif';
import card6 from '../../../assets/img/sedan/reliable-used-sedan-audi-a4-dt.avif';
import card7 from '../../../assets/img/sedan/what is a sedan.webp';
import cab1 from '../../../assets/img/cabriolet/2020-audi-a5-cabriolet-101-1567777493.jpg';
import cab2 from '../../../assets/img/cabriolet/3_4.jpeg';
import cab3 from '../../../assets/img/cabriolet/6_4.jpeg';
import cab4 from '../../../assets/img/cabriolet/Best Convertible Cars in History 3.webp';
import cab5 from '../../../assets/img/cabriolet/bmw-4-series-convertible-1.jpg';
import cab6 from '../../../assets/img/cabriolet/chevrolet-corvette-chevrolet-corvette-stingray-coupe-convertible-2021-oem.webp';
import pick1 from '../../../assets/img/pickup/106931128-1629477854132-gettyimages-1181913330-p1145069.jpeg';
import pick2 from '../../../assets/img/pickup/2019-Ford-Ranger-XL-STX-15.avif';
import pick3 from '../../../assets/img/pickup/5dd56925fd9db214e57958e8.webp';
import pick4 from '../../../assets/img/pickup/7-isuzu-d-max-top-10.webp';
import pick5 from '../../../assets/img/pickup/Isuzu-D-Max-V-Cross-4x4-AT-4-jpeg-e1679132542489-1160x653.webp';
import pick6 from '../../../assets/img/pickup/chevrolet-colorado-high-country-storm-whilte-philippines-5ebe5dcd8c5e9.jpg';
import suv1 from '../../../assets/img/suv/KIA_EV9-003_3600x2400.webp';
import suv2 from '../../../assets/img/suv/Lamborghini-Urus-2.webp';
import suv3 from '../../../assets/img/suv/Luxury-SUVs.jpg';
import suv4 from '../../../assets/img/suv/Mahindra-Scorpio-N-header.webp';
import suv5 from '../../../assets/img/suv/chevrolet-trax-lead-js-110922.jpg';
import suv6 from '../../../assets/img/suv/front-left-side-47.webp';
import mini1 from '../../../assets/img/minivan/2021-toyota-sienna-limited-awd-15k-update-118-1653069638.jpg';
import mini6 from '../../../assets/img/minivan/2022-honda-odyssey-exterior-3.jpg';
import mini2 from '../../../assets/img/minivan/2022-kia-carnival-profile.avif';
import mini3 from '../../../assets/img/minivan/210716140154-chrysler-pacifica-2021.jpg';
import mini4 from '../../../assets/img/minivan/JDPA_2020 Kia Sedona Blue Front View.webp';
import mini5 from '../../../assets/img/minivan/Most Reliable Minivans.jpg';
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOilBarrel } from "react-icons/md";
import { IoSnow } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export const FirstSection = () => {
    const navigate = useNavigate()
    const cars = [

        {
            id : 1,
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id : 2,
            img: card2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id : 3,
            img: card3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id : 4,
            img: card4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id : 5,
            img: card5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id : 6,
            img: card6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id : 7,
            img: cab1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id : 8,
            img: cab2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id : 9,
            img: cab3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id : 10,
            img: cab4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id : 11,
            img: cab5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id : 12,
            img: cab6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id : 13,
            img: pick1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id : 14,
            img: pick2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id : 15,
            img: pick3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id : 16,
            img: pick4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id : 17,
            img: pick5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id : 18,
            img: pick6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id : 19,
            img: suv1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id : 20,
            img: suv2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id : 21,
            img: suv3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id : 22,
            img: suv4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id : 23,
            img: suv5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id : 24,
            img: suv6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id : 25,
            img: mini1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id : 26,
            img: mini2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id : 27,
            img: mini3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id : 28,
            img: mini4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id : 29,
            img: mini5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id : 30,
            img: mini6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
    ];
    const [selectedtype , setSelectedtype] = useState('all');
    const filteredCars = selectedtype === 'all' ? cars : cars.filter(car => car.filtre === selectedtype);
    const handleClick = (type) => {
        setSelectedtype(type);
    };

    return (

        <div className="flex flex-col justify-center items-center gap-6 lg:mx-20 p-5">
            <h1 className="font-bold text-5xl text-center my-7">Select Vehicle group</h1>
            <div className="flex max-[430px]:flex-wrap max-[430px]:gap-4 max-[430px]:items-center justify-around w-[80%]">
                <p onClick={() => setSelectedtype('all')} className={`max-[430px]:w-[40%] p-3 rounded-3xl flex gap-3 cursor-pointer
                ${selectedtype === 'all' ? 'bg-[#5937e0] text-white' : 'bg-[#f9f8f8] hover:bg-[#5937e0] hover:text-white'}`}>All veciles</p>
                <p onClick={() => setSelectedtype('sedan')} className={`max-[430px]:w-[40%] p-3 rounded-3xl flex gap-3 cursor-pointer
                ${selectedtype === 'sedan' ? 'bg-[#5937e0] text-white' : 'bg-[#f9f8f8] hover:bg-[#5937e0] hover:text-white'}`}>
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_4079)">
                            <path d="M27.7608 12.7462L19.4521 11.9205L18.7121 10.0706C18.0857 8.50443 16.5909 7.49243 14.9041 7.49243C10.0156 7.49243 19.9187 7.49243 9.83723 7.49243C8.67638 7.49243 7.56524 7.98727 6.78872 8.85014L4.07335 11.8672H2.96221C1.60532 11.8672 0.501397 12.9711 0.501397 14.328C0.501397 14.8111 0.489257 15.0817 0.536559 15.4216C0.792046 17.3233 2.43385 18.7575 4.35558 18.7575H5.06588C5.40908 19.7735 6.37065 20.5074 7.50104 20.5074C8.63143 20.5074 9.59301 19.7735 9.93621 18.7575H19.0651C19.4083 19.7735 20.3699 20.5074 21.5003 20.5074C22.6307 20.5074 23.5922 19.7735 23.9354 18.7575H24.6457C26.7709 18.7575 28.4999 17.0285 28.4999 14.9033V13.5624C28.5 13.1409 28.1803 12.7879 27.7608 12.7462ZM17.189 10.6799L17.6639 11.8672H13.3611L12.5408 9.13297H14.9042C15.9162 9.13303 16.8131 9.74019 17.189 10.6799ZM8.00813 9.94761C8.47405 9.42991 9.14071 9.13303 9.83723 9.13303H10.828L11.6483 11.8673H6.28048L8.00813 9.94761ZM7.50104 18.8669C6.98843 18.8669 6.5714 18.4499 6.5714 17.9373C6.5714 17.4247 6.98843 17.0076 7.50104 17.0076C8.01366 17.0076 8.43068 17.4247 8.43068 17.9373C8.43068 18.4499 8.01366 18.8669 7.50104 18.8669ZM21.5003 18.8669C20.9877 18.8669 20.5707 18.4499 20.5707 17.9373C20.5707 17.4247 20.9877 17.0076 21.5003 17.0076C22.0129 17.0076 22.43 17.4247 22.43 17.9373C22.43 18.4499 22.0129 18.8669 21.5003 18.8669ZM26.8594 14.9034C26.8594 16.124 25.8664 17.117 24.6458 17.117H23.9356C23.5924 16.101 22.6308 15.3671 21.5004 15.3671C20.37 15.3671 19.4084 16.101 19.0652 17.117H9.93621C9.59301 16.101 8.63143 15.3671 7.50104 15.3671C6.37065 15.3671 5.40908 16.101 5.06588 17.117H4.35558C3.59819 17.117 2.91666 16.7295 2.51593 16.1327H2.68879C3.14179 16.1327 3.50906 15.7654 3.50906 15.3124C3.50906 14.8594 3.14179 14.4921 2.68879 14.4921H2.14194V14.3281C2.14194 13.8758 2.50991 13.5078 2.96221 13.5078H11.9305V14.4374C11.9305 14.8905 12.2978 15.2577 12.7508 15.2577C13.2038 15.2577 13.571 14.8905 13.571 14.4374V13.5078H18.8348L26.8594 14.3053V14.9034Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_4079">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    Sedan</p>
                <p onClick={() => setSelectedtype('cabriolet')} className={`max-[430px]:w-[40%] p-3 rounded-3xl flex gap-3 cursor-pointer
                ${selectedtype === 'cabriolet' ? 'bg-[#5937e0] text-white' : 'bg-[#f9f8f8] hover:bg-[#5937e0] hover:text-white'}`}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_4084)">
                        <path d="M27.6024 13.3253C24.8836 11.6911 21.5326 10.9043 18.6991 10.9763L16.3303 8.60745C16.01 8.2871 15.4905 8.2871 15.1702 8.60745C14.8498 8.92781 14.8498 9.44717 15.1702 9.76753L17.073 11.6703C15.312 12.6388 13.5289 12.6847 12.0236 12.3909C11.9681 12.1972 11.9546 12.1504 11.2886 9.83583C11.1634 9.40041 10.7091 9.14885 10.2735 9.27414C9.83816 9.39937 9.58666 9.85382 9.71184 10.2892L10.157 11.8365C9.1863 11.4932 8.18449 11.2536 7.16102 11.1197C7.29807 10.8161 7.38305 10.465 7.38305 10.0625C7.38305 9.60948 7.01577 9.2422 6.56275 9.2422C6.10972 9.2422 5.74245 9.60948 5.74245 10.0625C5.74245 10.6351 5.26054 10.9139 5.0605 11.0049C5.00275 11.0148 3.54835 11.306 0.659958 11.8831C0.0125752 12.0124 -0.226352 12.8195 0.252596 13.2792L1.09702 14.0899L0.488242 14.9053C0.301923 15.1549 0.272939 15.4885 0.413649 15.7665C1.07421 17.0718 2.39277 17.8827 3.85476 17.8827H4.56504C4.90825 18.8988 5.86987 19.6327 7.0003 19.6327C8.13073 19.6327 9.09234 18.8988 9.43556 17.8827H18.5648C18.908 18.8988 19.8696 19.6327 21.0001 19.6327C22.1305 19.6327 23.0921 18.8988 23.4353 17.8827H24.1456C26.2709 17.8827 27.9999 16.1536 27.9999 14.0283C28.0001 13.7405 27.8491 13.4736 27.6024 13.3253ZM7.0003 17.992C6.48766 17.992 6.07062 17.575 6.07062 17.0624C6.07062 16.5497 6.48766 16.1327 7.0003 16.1327C7.51293 16.1327 7.92997 16.5497 7.92997 17.0624C7.92997 17.575 7.51293 17.992 7.0003 17.992ZM21.0001 17.992C20.4875 17.992 20.0705 17.575 20.0705 17.0624C20.0705 16.5497 20.4875 16.1327 21.0001 16.1327C21.5128 16.1327 21.9298 16.5497 21.9298 17.0624C21.9298 17.575 21.5128 17.992 21.0001 17.992ZM24.1457 16.2421H23.4354C23.0922 15.226 22.1306 14.4921 21.0002 14.4921C19.8698 14.4921 18.9081 15.226 18.5649 16.2421H9.43561C9.0924 15.226 8.13078 14.4921 7.00035 14.4921C5.86992 14.4921 4.90831 15.226 4.56509 16.2421H3.85476C3.17938 16.2421 2.55721 15.9407 2.14203 15.4326L2.84519 14.4907C3.09281 14.159 3.05453 13.6948 2.75594 13.4082L2.52237 13.184L5.28001 12.633C6.85839 12.6422 8.39481 12.9235 9.84795 13.4695C9.90991 13.4928 9.97171 13.5145 10.0336 13.5367L9.76663 14.0705C9.56396 14.4756 9.72813 14.9684 10.1333 15.171C10.54 15.3745 11.032 15.208 11.2339 14.8043L11.6423 13.9878C14.1533 14.4941 16.5766 14.0501 18.6553 12.6189C21.0083 12.5362 23.9209 13.1568 26.3139 14.4761C26.1062 15.4828 25.2129 16.2421 24.1457 16.2421Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_4084">
                            <rect width="28" height="28" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                   Cabriolet</p>
                <p onClick={() => setSelectedtype('pickup')} className={`max-[430px]:w-[40%] p-3 rounded-3xl flex gap-3 cursor-pointer
                ${selectedtype === 'pickup' ? 'bg-[#5937e0] text-white' : 'bg-[#f9f8f8] hover:bg-[#5937e0] hover:text-white'}`}>
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_4089)">
                            <path d="M28.3367 14.3178L27.6438 12.015C27.5452 11.6873 27.2535 11.4552 26.912 11.4328L20.7911 11.0315L20.0574 9.19687C19.4303 7.63068 17.9356 6.61873 16.2494 6.61873C9.57529 6.61873 10.0567 6.60101 9.88197 6.65526C9.67597 6.71892 9.50338 6.86367 9.40358 7.04763C9.31991 7.20146 9.38521 6.95363 8.57723 10.9936H1.32028C0.867266 10.9936 0.5 11.3608 0.5 11.8138V16.7355C0.5 18.0924 1.60393 19.1963 2.96084 19.1963H4.60664C4.96467 20.4572 6.12564 21.3838 7.49971 21.3838C8.87379 21.3838 10.0347 20.4572 10.3928 19.1963H18.6061C18.9641 20.4572 20.1251 21.3838 21.4992 21.3838C22.8732 21.3838 24.0341 20.4573 24.3922 19.1964C24.709 19.1965 24.8179 19.1968 24.8862 19.1942C27.3467 19.1112 29.0489 16.6838 28.3367 14.3178ZM18.5343 9.80639L19.0091 10.9936H13.9293L13.6559 8.25929H16.2494C17.2611 8.25935 18.158 8.86668 18.5343 9.80639ZM10.7971 8.25935H12.0071L12.2806 10.9936H10.2502L10.7971 8.25935ZM7.49971 19.7433C6.74588 19.7433 6.13258 19.13 6.13258 18.3761C6.13258 17.6223 6.74588 17.009 7.49971 17.009C8.25355 17.009 8.86685 17.6223 8.86685 18.3761C8.86685 19.13 8.25355 19.7433 7.49971 19.7433ZM21.4991 19.7433C20.7453 19.7433 20.132 19.13 20.132 18.3761C20.132 17.6223 20.7453 17.009 21.4991 17.009C22.253 17.009 22.8663 17.6223 22.8663 18.3761C22.8663 19.13 22.253 19.7433 21.4991 19.7433ZM24.8287 17.5547C24.7921 17.5559 24.7882 17.5558 24.3922 17.5559C24.0342 16.295 22.8732 15.3684 21.4991 15.3684C20.1251 15.3684 18.9642 16.295 18.6061 17.5558H10.3928C10.0348 16.295 8.87379 15.3684 7.49971 15.3684C6.12564 15.3684 4.96472 16.295 4.60664 17.5558H2.96084C2.50853 17.5558 2.14056 17.1879 2.14056 16.7356V15.6965H3.12489C3.57791 15.6965 3.94517 15.3293 3.94517 14.8763C3.94517 14.4232 3.57791 14.056 3.12489 14.056H2.14056V12.6342H12.3667V13.5638C12.3667 14.0168 12.734 14.3841 13.187 14.3841C13.64 14.3841 14.0073 14.0168 14.0073 13.5638V12.6342H20.1599L26.2368 13.0327L26.5447 14.056H25.9834C25.5304 14.056 25.1631 14.4232 25.1631 14.8763C25.1631 15.3293 25.5304 15.6965 25.9834 15.6965H26.8395C26.7082 16.6965 25.8896 17.5189 24.8287 17.5547Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_4089">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                    Pickup</p>
                <p onClick={() => setSelectedtype('suv')} className={`max-[430px]:w-[40%] p-3 rounded-3xl flex gap-3 cursor-pointer
                ${selectedtype === 'suv' ? 'bg-[#5937e0] text-white' : 'bg-[#f9f8f8] hover:bg-[#5937e0] hover:text-white'}`}>
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_4094)">
                            <path d="M28.4363 14.727C28.3867 14.4514 28.3931 14.5018 27.6445 12.0137C27.545 11.6829 27.2489 11.4499 26.9039 11.4309L19.4423 11.0221L18.7117 9.1956C18.0853 7.62943 16.5905 6.61743 14.9037 6.61743C14.5099 6.61743 3.13233 6.61743 2.68835 6.61743C2.32956 6.61743 2.01244 6.85061 1.90543 7.19304C0.443484 11.8713 0.529448 11.5892 0.517363 11.6491C0.493903 11.7638 0.501012 11.3298 0.501012 16.7342C0.501012 18.0911 1.60493 19.195 2.96182 19.195H4.60762C4.96564 20.4558 6.12659 21.3824 7.50066 21.3824C8.87472 21.3824 10.0356 20.4558 10.3937 19.195H18.6069C18.9649 20.4558 20.1259 21.3824 21.4999 21.3824C22.874 21.3824 24.0349 20.4558 24.393 19.195H24.7548C27.1277 19.195 28.8587 17.012 28.4363 14.727ZM17.1886 9.80489L17.6635 10.9922H13.3607L12.5404 8.25797H14.9038C15.9158 8.25803 16.8127 8.86519 17.1886 9.80489ZM10.8276 8.25803L11.6479 10.9923H7.18879L7.73564 8.25803H10.8276ZM3.29146 8.25803H6.06256L5.51571 10.9923H2.43702L3.29146 8.25803ZM7.5006 19.7418C6.74677 19.7418 6.13348 19.1285 6.13348 18.3747C6.13348 17.6209 6.74677 17.0076 7.5006 17.0076C8.25443 17.0076 8.86772 17.6209 8.86772 18.3747C8.86772 19.1285 8.25449 19.7418 7.5006 19.7418ZM21.4999 19.7418C20.7461 19.7418 20.1328 19.1285 20.1328 18.3747C20.1328 17.6209 20.7461 17.0076 21.4999 17.0076C22.2537 17.0076 22.867 17.6209 22.867 18.3747C22.867 19.1285 22.2538 19.7418 21.4999 19.7418ZM24.8335 17.5532C24.7832 17.5548 24.806 17.5544 24.3929 17.5544C24.0349 16.2935 22.874 15.367 21.4999 15.367C20.1258 15.367 18.9649 16.2935 18.6069 17.5544H10.3936C10.0356 16.2935 8.87467 15.367 7.5006 15.367C6.12654 15.367 4.96564 16.2935 4.60756 17.5544H2.96177C2.50947 17.5544 2.1415 17.1864 2.1415 16.7341V15.6951H3.12582C3.57883 15.6951 3.9461 15.3278 3.9461 14.8748C3.9461 14.4218 3.57883 14.0546 3.12582 14.0546H2.1415V12.6328H5.3679V13.5624C5.3679 14.0154 5.73516 14.3827 6.18817 14.3827C6.64118 14.3827 7.00844 14.0154 7.00844 13.5624V12.6328H11.9301V13.5624C11.9301 14.0154 12.2973 14.3827 12.7503 14.3827C13.2033 14.3827 13.5706 14.0154 13.5706 13.5624V12.6328H18.8526L26.2394 13.0375L26.5454 14.0546H25.9841C25.5311 14.0546 25.1638 14.4218 25.1638 14.8748C25.1638 15.3278 25.5311 15.6951 25.9841 15.6951H26.8398C26.711 16.6755 25.9123 17.5168 24.8335 17.5532Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_4094">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                    Suv</p>
                <p onClick={() => setSelectedtype('minivan')} className={`max-[430px]:w-[40%] p-3 rounded-3xl flex gap-3 cursor-pointer
                ${selectedtype === 'minivan' ? 'bg-[#5937e0] text-white' : 'bg-[#f9f8f8] hover:bg-[#5937e0] hover:text-white'}`}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_4099)">
                            <path d="M27.2609 12.7461L18.9519 11.9204L18.2119 10.0705C17.5854 8.50423 16.0906 7.49219 14.4037 7.49219C13.1863 7.49219 7.38532 7.49219 6.27414 7.49219C5.11455 7.49219 4.00451 7.98601 3.22801 8.84711C-0.0519002 12.4252 0.164059 12.17 0.0893018 12.3171C0.0402475 12.414 0.0117009 12.5176 0.00349779 12.623C-0.00125998 12.6844 0.00021657 12.5174 0.00021657 14.9033C0.00021657 17.0286 1.72926 18.7577 3.85456 18.7577H4.56484C4.90805 19.7738 5.86967 20.5077 7.00011 20.5077C8.13054 20.5077 9.09216 19.7738 9.43538 18.7577H18.5647C18.9079 19.7738 19.8696 20.5077 21 20.5077C22.1304 20.5077 23.0921 19.7738 23.4353 18.7577H24.1455C26.2708 18.7577 27.9999 17.0286 27.9999 14.9033V13.5624C28.0001 13.1408 27.6804 12.7878 27.2609 12.7461ZM16.6886 10.6797L17.1635 11.8671H12.8605L12.0402 9.13274H14.4036C15.4158 9.13274 16.3127 9.73999 16.6886 10.6797ZM7.82052 9.13274H10.3274L11.1477 11.8671H7.82052V9.13274ZM4.43988 9.95294C4.89487 9.44659 5.52498 9.16047 6.17991 9.13526V11.8671H2.6853L4.43988 9.95294ZM7.00022 18.867C6.48758 18.867 6.07054 18.45 6.07054 17.9374C6.07054 17.4247 6.48758 17.0077 7.00022 17.0077C7.51285 17.0077 7.9299 17.4247 7.9299 17.9374C7.9299 18.45 7.51285 18.867 7.00022 18.867ZM21.0001 18.867C20.4875 18.867 20.0704 18.45 20.0704 17.9374C20.0704 17.4247 20.4875 17.0077 21.0001 17.0077C21.5127 17.0077 21.9298 17.4247 21.9298 17.9374C21.9298 18.45 21.5127 18.867 21.0001 18.867ZM26.3594 14.9033C26.3594 16.124 25.3664 17.1171 24.1457 17.1171H23.4354C23.0922 16.101 22.1306 15.3671 21.0002 15.3671C19.8697 15.3671 18.9081 16.101 18.5649 17.1171H9.43549C9.09227 16.101 8.13065 15.3671 7.00022 15.3671C5.86978 15.3671 4.90816 16.101 4.56495 17.1171H3.85467C2.634 17.1171 1.64094 16.124 1.64094 14.9033V13.5077H11.4299V14.4374C11.4299 14.8904 11.7972 15.2577 12.2502 15.2577C12.7033 15.2577 13.0705 14.8904 13.0705 14.4374V13.5077H18.3345L26.3595 14.3052V14.9033H26.3594Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_4099">
                                <rect width="28" height="28" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                   Minivan</p>
            </div>
            <div className="card-container w-[100%] flex max-[430px]:flex-col flex-wrap gap-9 justify-center ">
                {filteredCars.map((element, index) =>



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
                        <button onClick={() => { navigate(`/details/${element.id}`) }} className="w-[100%] bg-[#5937e0] rounded-lg self-center p-2 text-white"><b>View details</b></button>
                    </div>



                )}

            </div>
        </div>
    )
}