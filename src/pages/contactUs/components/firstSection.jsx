import React, { useState } from "react";
import car from '../../../assets/img/contactus.webp'
import './firsSection.sass'


export const FirstSection = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownVisible3, setDropdownVisible3] = useState(false);
    const [dropdownVisible2, setDropdownVisible2] = useState(false);
    const [selecteditem, setSelecteditem] = useState('Car Type');
    const [selecteditem2, setSelecteditem2] = useState('Place Of Rental');
    const [selecteditem3, setSelecteditem3] = useState('Place Of Return');

    const dropdown = document.querySelector('.dropdown-content');


    console.log(dropdown);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible)
    }
    const selectitem = (item) => {
        setSelecteditem(item)
        toggleDropdown()
    }
    const toggleDropdown3 = () => {
        setDropdownVisible3(!dropdownVisible3)
    }
    const selectitem3 = (item) => {
        setSelecteditem3(item)
        toggleDropdown3()
    }
    const toggleDropdown2 = () => {
        setDropdownVisible2(!dropdownVisible2)
    }
    const selectitem2 = (item) => {
        setSelecteditem2(item)
        toggleDropdown2()
    }

    const carsType = ['Mercedece', 'BMW', 'Audi', 'Fiat', 'Citroen', 'KIA']
    const places = ['Casablanca', 'Rabat', 'Marrakech', 'Eljadida',]

    return (
        <div className="lg:mx-20 flex flex-col gap-9 py-10">
            <div className='flex flex-col text-center p-20 gap-5'>
                <p className='font-bold text-center text-4xl'>Contact Us</p>
                <p className='text-[#b0b0b0]'>Home / <span className='text-black'>Contact Us</span></p>
            </div>
            <div className="flex max-[430px]:flex-col  gap-8 justify-center items-center">
                {/* z-10 w-[30%] h-[100%]  flex justify-center items-center */}
                <div className='z-10 lg:w-[40%] flex justify-center items-center '>
                    <div className=' p-10 lg:w-[80%]  rounded-2xl flex flex-col justify-center items-center gap-6 bg-[#5937e0]'>
                        <h1 className='font-bold text-2xl text-white'>Book Your Car</h1>
                        <div onClick={toggleDropdown} className='bg-[#694be3] w-[100%] p-1 flex justify-between items-center  rounded-lg dropdown-btn text-white'>
                            <p className='ml-3'><span>{selecteditem}</span></p>
                            <svg className={`text-white mr-3  ${dropdownVisible ? 'rotate-180' : null}`} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 5.14592C1.69236 5.09935 1.74754 5.06241 1.80828 5.0372C1.86903 5.012 1.93415 4.99902 1.99992 4.99902C2.06568 4.99902 2.13081 5.012 2.19155 5.0372C2.2523 5.06241 2.30747 5.09935 2.35392 5.14592L7.99992 10.7929L13.6459 5.14592C13.6924 5.09943 13.7476 5.06255 13.8083 5.03739C13.8691 5.01223 13.9342 4.99929 13.9999 4.99929C14.0657 4.99929 14.1308 5.01223 14.1915 5.03739C14.2522 5.06255 14.3074 5.09943 14.3539 5.14592C14.4004 5.1924 14.4373 5.24759 14.4624 5.30833C14.4876 5.36907 14.5005 5.43417 14.5005 5.49992C14.5005 5.56566 14.4876 5.63076 14.4624 5.6915C14.4373 5.75224 14.4004 5.80743 14.3539 5.85392L8.35392 11.8539C8.30747 11.9005 8.2523 11.9374 8.19155 11.9626C8.13081 11.9878 8.06568 12.0008 7.99992 12.0008C7.93415 12.0008 7.86903 11.9878 7.80828 11.9626C7.74754 11.9374 7.69236 11.9005 7.64592 11.8539L1.64592 5.85392C1.59935 5.80747 1.56241 5.7523 1.5372 5.69155C1.512 5.63081 1.49902 5.56568 1.49902 5.49992C1.49902 5.43415 1.512 5.36903 1.5372 5.30828C1.56241 5.24754 1.59935 5.19236 1.64592 5.14592Z" fill="black" />
                            </svg>
                        </div>

                        <div className={`z-10  bg-[#f9f8f8] flex flex-col dropdown-content rounded-lg  ${!dropdownVisible ? 'hidden' : null}`}>
                            {carsType.map((element, index) => (
                                <p key={index} onClick={() => selectitem(element)} className='rounded-lg p-2'>
                                    {element}
                                </p>
                            ))}

                        </div>

                        <div onClick={toggleDropdown2} className='bg-[#694be3] text-white w-[100%] p-1 rounded-lg flex justify-between items-center dropdown-btn2'>
                            <p className='ml-3'><span>{selecteditem2}</span></p>
                            <svg className='mr-3 ' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 5.14592C1.69236 5.09935 1.74754 5.06241 1.80828 5.0372C1.86903 5.012 1.93415 4.99902 1.99992 4.99902C2.06568 4.99902 2.13081 5.012 2.19155 5.0372C2.2523 5.06241 2.30747 5.09935 2.35392 5.14592L7.99992 10.7929L13.6459 5.14592C13.6924 5.09943 13.7476 5.06255 13.8083 5.03739C13.8691 5.01223 13.9342 4.99929 13.9999 4.99929C14.0657 4.99929 14.1308 5.01223 14.1915 5.03739C14.2522 5.06255 14.3074 5.09943 14.3539 5.14592C14.4004 5.1924 14.4373 5.24759 14.4624 5.30833C14.4876 5.36907 14.5005 5.43417 14.5005 5.49992C14.5005 5.56566 14.4876 5.63076 14.4624 5.6915C14.4373 5.75224 14.4004 5.80743 14.3539 5.85392L8.35392 11.8539C8.30747 11.9005 8.2523 11.9374 8.19155 11.9626C8.13081 11.9878 8.06568 12.0008 7.99992 12.0008C7.93415 12.0008 7.86903 11.9878 7.80828 11.9626C7.74754 11.9374 7.69236 11.9005 7.64592 11.8539L1.64592 5.85392C1.59935 5.80747 1.56241 5.7523 1.5372 5.69155C1.512 5.63081 1.49902 5.56568 1.49902 5.49992C1.49902 5.43415 1.512 5.36903 1.5372 5.30828C1.56241 5.24754 1.59935 5.19236 1.64592 5.14592Z" fill="black" />
                            </svg>
                        </div>
                        <div className={`z-10  bg-[#f9f8f8] flex flex-col dropdown-content2 rounded-lg  ${!dropdownVisible2 ? 'hidden' : null}`}>
                            {places.map((element, index) => (
                                <p onClick={() => selectitem2(element)} key={index} className='rounded-lg p-2'>{element}</p>
                            ))}
                        </div>
                        <div onClick={toggleDropdown3} className='bg-[#694be3] text-white w-[100%]  p-1 rounded-lg flex justify-between items-center relative dropdown-btn3'>
                            <p className='ml-3'><span>{selecteditem3}</span></p>
                            <svg className='mr-3' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 5.14592C1.69236 5.09935 1.74754 5.06241 1.80828 5.0372C1.86903 5.012 1.93415 4.99902 1.99992 4.99902C2.06568 4.99902 2.13081 5.012 2.19155 5.0372C2.2523 5.06241 2.30747 5.09935 2.35392 5.14592L7.99992 10.7929L13.6459 5.14592C13.6924 5.09943 13.7476 5.06255 13.8083 5.03739C13.8691 5.01223 13.9342 4.99929 13.9999 4.99929C14.0657 4.99929 14.1308 5.01223 14.1915 5.03739C14.2522 5.06255 14.3074 5.09943 14.3539 5.14592C14.4004 5.1924 14.4373 5.24759 14.4624 5.30833C14.4876 5.36907 14.5005 5.43417 14.5005 5.49992C14.5005 5.56566 14.4876 5.63076 14.4624 5.6915C14.4373 5.75224 14.4004 5.80743 14.3539 5.85392L8.35392 11.8539C8.30747 11.9005 8.2523 11.9374 8.19155 11.9626C8.13081 11.9878 8.06568 12.0008 7.99992 12.0008C7.93415 12.0008 7.86903 11.9878 7.80828 11.9626C7.74754 11.9374 7.69236 11.9005 7.64592 11.8539L1.64592 5.85392C1.59935 5.80747 1.56241 5.7523 1.5372 5.69155C1.512 5.63081 1.49902 5.56568 1.49902 5.49992C1.49902 5.43415 1.512 5.36903 1.5372 5.30828C1.56241 5.24754 1.59935 5.19236 1.64592 5.14592Z" fill="black" />
                            </svg>
                        </div>

                        <div className={`z-10  bg-[#f9f8f8] flex flex-col dropdown-content3 rounded-lg  ${!dropdownVisible3 ? 'hidden' : null}`}>
                            {places.map((element, index) => (
                                <p onClick={() => selectitem3(element)} key={index} className='rounded-lg p-2'>{element}</p>
                            ))}
                        </div>

                        <div className='bg-[#694be3] w-[100%] p-1 rounded-lg flex justify-between items-center'>
                            <p className='ml-3 text-white'><span>Rental Date</span></p>
                            <svg className='mr-3' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3010_3129)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5L14 0.5C14.5304 0.5 15.0391 0.710714 15.4142 1.08579C15.7893 1.46086 16 1.96957 16 2.5V14.5C16 15.0304 15.7893 15.5391 15.4142 15.9142C15.0391 16.2893 14.5304 16.5 14 16.5H2C1.46957 16.5 0.960859 16.2893 0.585786 15.9142C0.210714 15.5391 0 15.0304 0 14.5V2.5ZM15 4.5H11V7.5H15V4.5ZM15 8.5H11V11.5H15V8.5ZM15 12.5H11V15.5H14C14.2652 15.5 14.5196 15.3946 14.7071 15.2071C14.8946 15.0196 15 14.7652 15 14.5V12.5ZM10 15.5V12.5H6V15.5H10ZM5 15.5V12.5H1V14.5C1 14.7652 1.10536 15.0196 1.29289 15.2071C1.48043 15.3946 1.73478 15.5 2 15.5H5ZM1 11.5H5V8.5H1V11.5ZM1 7.5H5V4.5H1V7.5ZM6 4.5V7.5H10V4.5H6ZM10 8.5H6V11.5H10V8.5Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3010_3129">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className='bg-[#694be3] w-[100%] p-1 rounded-lg flex justify-between items-center'>
                            <p className='ml-3 text-white'><span>Return Date</span></p>
                            <svg className='text-white mr-3' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3010_3129)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5L14 0.5C14.5304 0.5 15.0391 0.710714 15.4142 1.08579C15.7893 1.46086 16 1.96957 16 2.5V14.5C16 15.0304 15.7893 15.5391 15.4142 15.9142C15.0391 16.2893 14.5304 16.5 14 16.5H2C1.46957 16.5 0.960859 16.2893 0.585786 15.9142C0.210714 15.5391 0 15.0304 0 14.5V2.5ZM15 4.5H11V7.5H15V4.5ZM15 8.5H11V11.5H15V8.5ZM15 12.5H11V15.5H14C14.2652 15.5 14.5196 15.3946 14.7071 15.2071C14.8946 15.0196 15 14.7652 15 14.5V12.5ZM10 15.5V12.5H6V15.5H10ZM5 15.5V12.5H1V14.5C1 14.7652 1.10536 15.0196 1.29289 15.2071C1.48043 15.3946 1.73478 15.5 2 15.5H5ZM1 11.5H5V8.5H1V11.5ZM1 7.5H5V4.5H1V7.5ZM6 4.5V7.5H10V4.5H6ZM10 8.5H6V11.5H10V8.5Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3010_3129">
                                        <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <button className='bg-[#ff9e0c] text-white font-bold w-[100%] py-2 rounded-full'>Book now</button>
                    </div>
                </div>
                <div className="w-[50%] rounded-xl bg-black">
                    <img src={car} className="w-[100%] max-[430px]:hidden rounded-xl" alt="" />
                </div>
            </div>
        </div>
    )
} 