import React, { useState } from "react";
import './questionSection.sass';

export const QuestionsSection = () => {

    const [showanswer,setShowanswer] = useState(false)
    const [expandedquestion,setExpandedquestion] = useState(0)

    const clickshowanswer =  (index)=>{
        setExpandedquestion(expandedquestion == index ? null : index)
    }

    const Qr = [
        {
            question: 'How does it works?',
            answer: `Imperdiet ut tristique viverra nunc.
                 Ultrices orci vel auctor cursus turpis nibh 
                 placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.
                 Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut.
                  Pellentesque id nibh sed nulla non nulla`
        },
        {
            question: 'Can i rent a car without a credit car?',
            answer: `Imperdiet ut tristique viverra nunc.
                 Ultrices orci vel auctor cursus turpis nibh 
                 placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.
                 Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut.
                  Pellentesque id nibh sed nulla non nulla`
        },
        {
            question: 'What are the requierment for renting a car?',
            answer: `Imperdiet ut tristique viverra nunc.
                 Ultrices orci vel auctor cursus turpis nibh 
                 placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.
                 Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut.
                  Pellentesque id nibh sed nulla non nulla`
        },
        {
            question: 'Does car rental allow me to tow with or attach a hitch to the rental vehicle?',
            answer: `Imperdiet ut tristique viverra nunc.
                 Ultrices orci vel auctor cursus turpis nibh 
                 placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.
                 Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut.
                  Pellentesque id nibh sed nulla non nulla`
        },
        {
            question: 'Does Car Rental offer coverage products for purchase with my rental?',
            answer: `Imperdiet ut tristique viverra nunc.
                 Ultrices orci vel auctor cursus turpis nibh 
                 placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.
                 Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut.
                  Pellentesque id nibh sed nulla non nulla`
        }
    ]

    return (

        <div className="lg:mx-20 mx-5 flex flex-col gap-5 my-9">
            <h1 className="font-bold text-4xl text-center mb-4">Top Car Rental Questions</h1>
            {Qr.map((element,index)=>(

            <div onClick={()=>clickshowanswer(index)} key={index} className="w-[100%] border-2 border-[#c1c7ce] rounded-xl p-5 flex flex-col items-start">
                <div className="w-[100%] flex justify-between items-center">
                <h1 className="font-bold text-xl">{element.question}</h1>
                <svg className={`mr-3 ${expandedquestion == index ? 'rotate-180' : null}`} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64592 5.14592C1.69236 5.09935 1.74754 5.06241 1.80828 5.0372C1.86903 5.012 1.93415 4.99902 1.99992 4.99902C2.06568 4.99902 2.13081 5.012 2.19155 5.0372C2.2523 5.06241 2.30747 5.09935 2.35392 5.14592L7.99992 10.7929L13.6459 5.14592C13.6924 5.09943 13.7476 5.06255 13.8083 5.03739C13.8691 5.01223 13.9342 4.99929 13.9999 4.99929C14.0657 4.99929 14.1308 5.01223 14.1915 5.03739C14.2522 5.06255 14.3074 5.09943 14.3539 5.14592C14.4004 5.1924 14.4373 5.24759 14.4624 5.30833C14.4876 5.36907 14.5005 5.43417 14.5005 5.49992C14.5005 5.56566 14.4876 5.63076 14.4624 5.6915C14.4373 5.75224 14.4004 5.80743 14.3539 5.85392L8.35392 11.8539C8.30747 11.9005 8.2523 11.9374 8.19155 11.9626C8.13081 11.9878 8.06568 12.0008 7.99992 12.0008C7.93415 12.0008 7.86903 11.9878 7.80828 11.9626C7.74754 11.9374 7.69236 11.9005 7.64592 11.8539L1.64592 5.85392C1.59935 5.80747 1.56241 5.7523 1.5372 5.69155C1.512 5.63081 1.49902 5.56568 1.49902 5.49992C1.49902 5.43415 1.512 5.36903 1.5372 5.30828C1.56241 5.24754 1.59935 5.19236 1.64592 5.14592Z" fill="black" />
                </svg>
                </div>
                <div className={`py-3 ${expandedquestion == index ? '' : 'hidden'}`} >
                    {element.answer}
                </div>
            </div>
            ))}

  
        </div>
    )
}