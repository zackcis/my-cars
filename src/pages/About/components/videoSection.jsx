import React from "react";

export const VideoSection = ()=>{

    return(
        <div className="lg:mx-28 mx-10 flex justify-center items-center h-[90vh] my-10 ">
            <iframe className="w-[100%] h-[100%] rounded-3xl" width="" height=""
             src="https://www.youtube.com/embed/u8aEYPIImc0?si=Wu1rp-GGqyf4g2LU&amp;start=27"
             title="YouTube video player" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}