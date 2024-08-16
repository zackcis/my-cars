import React from "react";
import her from '../../../assets/img/client3.png'
import zack from '../components/../../../assets/img/cient2.png'
import './testimonialsSection.sass'
export const TestimonialsSection = () => {



    

    return (
        <div className="lg:mx-20 flex flex-col gap-5">
            <h1 className="text-center font-bold text-5xl">Review from our customers</h1>
            <div className="flex max-[430px]:flex-col max-[430px]:gap-5 justify-between items-center py-20 h-[100%]">
                <div className="bg-[#f9f9f9] max-[430px]:w-[90%] lg:w-[30%] h-[480px]  flex flex-col  items-start rounded-3xl">
                    <svg className="m-10 mb-0" width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.62832 32C6.86431 32 5.33038 31.5188 4.02655 30.5564C2.72271 29.5138 1.72566 28.1103 1.0354 26.3459C0.345133 24.5815 0 22.5764 0 20.3308C0 17.604 0.421829 14.9975 1.26549 12.5113C2.18584 9.94486 3.56637 7.57895 5.40708 5.41354C7.24779 3.24812 9.62537 1.44361 12.5398 0L17.3717 4.69173C15.3009 5.41354 13.4602 6.41604 11.8496 7.69925C10.3156 8.98246 9.05015 10.4261 8.0531 12.0301C7.13274 13.6341 6.48083 15.2782 6.09735 16.9624L6.55752 17.203C6.86431 16.9624 7.24779 16.7619 7.70796 16.6015C8.16814 16.4411 8.85841 16.3609 9.77876 16.3609C10.6991 16.3609 11.6578 16.6416 12.6549 17.203C13.6519 17.7644 14.4572 18.6065 15.0708 19.7293C15.7611 20.7719 16.1062 22.1754 16.1062 23.9398C16.1062 25.3835 15.7611 26.7068 15.0708 27.9098C14.4572 29.1128 13.5752 30.1153 12.4248 30.9173C11.2743 31.6391 10.0089 32 8.62832 32ZM30.2566 32C28.4926 32 26.9587 31.5188 25.6549 30.5564C24.351 29.5138 23.354 28.1103 22.6637 26.3459C21.9735 24.5815 21.6283 22.5764 21.6283 20.3308C21.6283 17.604 22.0501 14.9975 22.8938 12.5113C23.8142 9.94486 25.1947 7.57895 27.0354 5.41354C28.8761 3.24812 31.2537 1.44361 34.1681 0L39 4.69173C36.9292 5.41354 35.0885 6.41604 33.4779 7.69925C31.944 8.98246 30.6785 10.4261 29.6814 12.0301C28.7611 13.6341 28.1091 15.2782 27.7257 16.9624L28.1858 17.203C28.4926 16.9624 28.8761 16.7619 29.3363 16.6015C29.7965 16.4411 30.4867 16.3609 31.4071 16.3609C32.3274 16.3609 33.2861 16.6416 34.2832 17.203C35.2802 17.7644 36.0855 18.6065 36.6991 19.7293C37.3894 20.7719 37.7345 22.1754 37.7345 23.9398C37.7345 25.3835 37.3894 26.7068 36.6991 27.9098C36.0855 29.1128 35.2035 30.1153 34.0531 30.9173C32.9027 31.6391 31.6372 32 30.2566 32Z" fill="#5937E0" />
                    </svg>
                    <p className="text-center p-10 py-16 mb-6 h-[100%]">
                        He was the one and the love of my life but the overcontroll and his domination in
                        everything gone wrong and become toxic we were young but he was mature sometiles
                        but the most of times he was immature and perv
                    </p>

                    <div className="w-[100%] bg-[#5937e0] p-9 py-14 rounded-b-3xl relative">
                        <div className="flex flex-col items-center justify-center absolute bottom-6 right-[35%]">
                            <div className=" flex justify-center items-center w-full">
                                <img className="  kaoutar" src={her} width={80} height={40} alt="" srcset="" />
                            </div>
                            <p className="text-center text-[#b0b0b0]">Web developer</p>
                            <p className="font-bold text-center text-white">Kaoutar Ouarighi</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f9f9f9] max-[430px]:w-[90%] lg:w-[30%] h-[480px]  flex flex-col  items-start rounded-3xl">
                    <svg className="m-10 mb-0" width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.62832 32C6.86431 32 5.33038 31.5188 4.02655 30.5564C2.72271 29.5138 1.72566 28.1103 1.0354 26.3459C0.345133 24.5815 0 22.5764 0 20.3308C0 17.604 0.421829 14.9975 1.26549 12.5113C2.18584 9.94486 3.56637 7.57895 5.40708 5.41354C7.24779 3.24812 9.62537 1.44361 12.5398 0L17.3717 4.69173C15.3009 5.41354 13.4602 6.41604 11.8496 7.69925C10.3156 8.98246 9.05015 10.4261 8.0531 12.0301C7.13274 13.6341 6.48083 15.2782 6.09735 16.9624L6.55752 17.203C6.86431 16.9624 7.24779 16.7619 7.70796 16.6015C8.16814 16.4411 8.85841 16.3609 9.77876 16.3609C10.6991 16.3609 11.6578 16.6416 12.6549 17.203C13.6519 17.7644 14.4572 18.6065 15.0708 19.7293C15.7611 20.7719 16.1062 22.1754 16.1062 23.9398C16.1062 25.3835 15.7611 26.7068 15.0708 27.9098C14.4572 29.1128 13.5752 30.1153 12.4248 30.9173C11.2743 31.6391 10.0089 32 8.62832 32ZM30.2566 32C28.4926 32 26.9587 31.5188 25.6549 30.5564C24.351 29.5138 23.354 28.1103 22.6637 26.3459C21.9735 24.5815 21.6283 22.5764 21.6283 20.3308C21.6283 17.604 22.0501 14.9975 22.8938 12.5113C23.8142 9.94486 25.1947 7.57895 27.0354 5.41354C28.8761 3.24812 31.2537 1.44361 34.1681 0L39 4.69173C36.9292 5.41354 35.0885 6.41604 33.4779 7.69925C31.944 8.98246 30.6785 10.4261 29.6814 12.0301C28.7611 13.6341 28.1091 15.2782 27.7257 16.9624L28.1858 17.203C28.4926 16.9624 28.8761 16.7619 29.3363 16.6015C29.7965 16.4411 30.4867 16.3609 31.4071 16.3609C32.3274 16.3609 33.2861 16.6416 34.2832 17.203C35.2802 17.7644 36.0855 18.6065 36.6991 19.7293C37.3894 20.7719 37.7345 22.1754 37.7345 23.9398C37.7345 25.3835 37.3894 26.7068 36.6991 27.9098C36.0855 29.1128 35.2035 30.1153 34.0531 30.9173C32.9027 31.6391 31.6372 32 30.2566 32Z" fill="#5937E0" />
                    </svg>
                    <p className="text-center p-10 py-16 mb-6 h-[100%]">
                        She was and still the love of my heart sometimes i think that god is punishing me cus he knows there is no huùan in this
                        She was and still the love of my heart sometimes
                    </p>

                    <div className="w-[100%] bg-[#5937e0] p-9 py-14 rounded-b-3xl relative">
                        <div className="flex flex-col items-center justify-center absolute bottom-6 right-[35%]">
                            <div className=" flex justify-center items-center w-full">
                                <img className="kaoutar" src={zack} width={80} height={40} alt="" srcset="" />
                            </div>
                            <p className="text-center text-[#b0b0b0]">Web developer</p>
                            <p className="font-bold text-center text-white">Zakaria Dahar</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f9f9f9] max-[430px]:w-[90%] lg:w-[30%] h-[480px]  flex flex-col  items-start rounded-3xl">
                    <svg className="m-10 mb-0" width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.62832 32C6.86431 32 5.33038 31.5188 4.02655 30.5564C2.72271 29.5138 1.72566 28.1103 1.0354 26.3459C0.345133 24.5815 0 22.5764 0 20.3308C0 17.604 0.421829 14.9975 1.26549 12.5113C2.18584 9.94486 3.56637 7.57895 5.40708 5.41354C7.24779 3.24812 9.62537 1.44361 12.5398 0L17.3717 4.69173C15.3009 5.41354 13.4602 6.41604 11.8496 7.69925C10.3156 8.98246 9.05015 10.4261 8.0531 12.0301C7.13274 13.6341 6.48083 15.2782 6.09735 16.9624L6.55752 17.203C6.86431 16.9624 7.24779 16.7619 7.70796 16.6015C8.16814 16.4411 8.85841 16.3609 9.77876 16.3609C10.6991 16.3609 11.6578 16.6416 12.6549 17.203C13.6519 17.7644 14.4572 18.6065 15.0708 19.7293C15.7611 20.7719 16.1062 22.1754 16.1062 23.9398C16.1062 25.3835 15.7611 26.7068 15.0708 27.9098C14.4572 29.1128 13.5752 30.1153 12.4248 30.9173C11.2743 31.6391 10.0089 32 8.62832 32ZM30.2566 32C28.4926 32 26.9587 31.5188 25.6549 30.5564C24.351 29.5138 23.354 28.1103 22.6637 26.3459C21.9735 24.5815 21.6283 22.5764 21.6283 20.3308C21.6283 17.604 22.0501 14.9975 22.8938 12.5113C23.8142 9.94486 25.1947 7.57895 27.0354 5.41354C28.8761 3.24812 31.2537 1.44361 34.1681 0L39 4.69173C36.9292 5.41354 35.0885 6.41604 33.4779 7.69925C31.944 8.98246 30.6785 10.4261 29.6814 12.0301C28.7611 13.6341 28.1091 15.2782 27.7257 16.9624L28.1858 17.203C28.4926 16.9624 28.8761 16.7619 29.3363 16.6015C29.7965 16.4411 30.4867 16.3609 31.4071 16.3609C32.3274 16.3609 33.2861 16.6416 34.2832 17.203C35.2802 17.7644 36.0855 18.6065 36.6991 19.7293C37.3894 20.7719 37.7345 22.1754 37.7345 23.9398C37.7345 25.3835 37.3894 26.7068 36.6991 27.9098C36.0855 29.1128 35.2035 30.1153 34.0531 30.9173C32.9027 31.6391 31.6372 32 30.2566 32Z" fill="#5937E0" />
                    </svg>
                    <p className="text-center p-10 py-16 mb-6 h-[100%]">
                        He was the one and the love of my life but the overcontroll and his domination in
                        everything gone wrong and become toxic we were young but he was mature sometiles
                        but the most of times he was immature and perv
                    </p>

                    <div className="w-[100%] bg-[#5937e0] p-9 py-14 rounded-b-3xl relative">
                        <div className="flex flex-col items-center justify-center absolute bottom-6 right-[35%]">
                            <div className=" flex justify-center items-center w-full">
                                <img className="  kaoutar" src={her} width={80} height={40} alt="" srcset="" />
                            </div>
                            <p className="text-center text-[#b0b0b0]">Web developer</p>
                            <p className="font-bold text-center text-white">Kaoutar Ouarighi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}