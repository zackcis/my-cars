 
import { AppSection } from './components/appSection';
import { BookingSection } from './components/bookingSection';
import {FirstSectionAbout } from './components/firstSection';
import { MemoriesSection } from './components/memoriesSection';
import { NumbersSection } from './components/numbersSection';
import { QuestionsSection } from './components/questionsSection';
import { TestimonialsSection } from './components/testimonialsSection';
import { VideoSection } from './components/videoSection';

export const AboutPage = () => {
    return (
        <>
            <FirstSectionAbout/>
            <VideoSection/>
            <NumbersSection/>
            <MemoriesSection/>
            <AppSection/>
            <TestimonialsSection/>
            <QuestionsSection/>
            <BookingSection/>
            
        </>
    );
}
