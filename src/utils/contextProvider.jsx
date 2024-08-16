
import React, { createContext, useState } from 'react'
import card1 from '../assets/img/card-1.webp';
import card2 from '../assets/img/sedan/changan-alsvin-655ec2290d1ad.jpg';
import card3 from '../assets/img/sedan/front-left-side-47.webp';
import card4 from '../assets/img/sedan/motor283-the-top-5-sedan-cars-of-2023-1704647346251.webp';
import card5 from '../assets/img/sedan/rear-left-view-121.avif';
import card6 from '../assets/img/sedan/reliable-used-sedan-audi-a4-dt.avif';
import card7 from '../assets/img/sedan/what is a sedan.webp';
import cab1 from '../assets/img/cabriolet/2020-audi-a5-cabriolet-101-1567777493.jpg';
import cab2 from '../assets/img/cabriolet/3_4.jpeg';
import cab3 from '../assets/img/cabriolet/6_4.jpeg';
import cab4 from '../assets/img/cabriolet/Best Convertible Cars in History 3.webp';
import cab5 from '../assets/img/cabriolet/bmw-4-series-convertible-1.jpg';
import cab6 from '../assets/img/cabriolet/chevrolet-corvette-chevrolet-corvette-stingray-coupe-convertible-2021-oem.webp';
import pick1 from '../assets/img/pickup/106931128-1629477854132-gettyimages-1181913330-p1145069.jpeg';
import pick2 from '../assets/img/pickup/2019-Ford-Ranger-XL-STX-15.avif';
import pick3 from '../assets/img/pickup/5dd56925fd9db214e57958e8.webp';
import pick4 from '../assets/img/pickup/7-isuzu-d-max-top-10.webp';
import pick5 from '../assets/img/pickup/Isuzu-D-Max-V-Cross-4x4-AT-4-jpeg-e1679132542489-1160x653.webp';
import pick6 from '../assets/img/pickup/chevrolet-colorado-high-country-storm-whilte-philippines-5ebe5dcd8c5e9.jpg';
import suv1 from '../assets/img/suv/KIA_EV9-003_3600x2400.webp';
import suv2 from '../assets/img/suv/Lamborghini-Urus-2.webp';
import suv3 from '../assets/img/suv/Luxury-SUVs.jpg';
import suv4 from '../assets/img/suv/Mahindra-Scorpio-N-header.webp';
import suv5 from '../assets/img/suv/chevrolet-trax-lead-js-110922.jpg';
import suv6 from '../assets/img/suv/front-left-side-47.webp';
import mini1 from '../assets/img/minivan/2021-toyota-sienna-limited-awd-15k-update-118-1653069638.jpg';
import mini6 from '../assets/img/minivan/2022-honda-odyssey-exterior-3.jpg';
import mini2 from '../assets/img/minivan/2022-kia-carnival-profile.avif';
import mini3 from '../assets/img/minivan/210716140154-chrysler-pacifica-2021.jpg';
import mini4 from '../assets/img/minivan/JDPA_2020 Kia Sedona Blue Front View.webp';
import mini5 from '../assets/img/minivan/Most Reliable Minivans.jpg';
export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [test, setTest] = useState('Hello Test')
    const [cars, setCars] = useState([
        {
            id: 1,
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id: 2,
            img: card2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id: 3,
            img: card3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id: 4,
            img: card4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id: 5,
            img: card5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id: 6,
            img: card6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'sedan',
        },
        {
            id: 7,
            img: cab1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id: 8,
            img: cab2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id: 9,
            img: cab3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id: 10,
            img: cab4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id: 11,
            img: cab5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id: 12,
            img: cab6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'cabriolet',
        },
        {
            id: 13,
            img: pick1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id: 14,
            img: pick2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id: 15,
            img: pick3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id: 16,
            img: pick4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id: 17,
            img: pick5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id: 18,
            img: pick6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'pickup',
        },
        {
            id: 19,
            img: suv1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id: 20,
            img: suv2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id: 21,
            img: suv3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id: 22,
            img: suv4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id: 23,
            img: suv5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id: 24,
            img: suv6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'suv',
        },
        {
            id: 25,
            img: mini1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id: 26,
            img: mini2,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id: 27,
            img: mini3,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id: 28,
            img: mini4,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id: 29,
            img: mini5,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
        {
            id: 30,
            img: mini6,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
            filtre: 'minivan',
        },
    ])



    return (
        <>
            <MyContext.Provider value={{ cars, setCars }} >
                {children}
            </MyContext.Provider>
        </>
    )
}
