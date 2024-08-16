import React from "react";
import { FirstSection } from "./components/firstSection";
import { ContactSection } from "./components/contactSection";
import { BlogsSection } from "./components/blogsSection";
import { PartnerSection } from "./components/partnerSection";



export const ContactUsPage = ()=>{

    return(
        <>
        <FirstSection/>
        <ContactSection/>
        <BlogsSection/>
        <PartnerSection/>
        </>
    )
}