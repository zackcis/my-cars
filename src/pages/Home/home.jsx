
import { AppSection } from './components/appSection';
import { CardSection } from './components/cardSection';
import { FirstSection } from './components/firstSection';
import { NumbersSection } from './components/numbersSection';
import { SearchSection } from './components/searchSection';
import { ServicesSection } from './components/servicesSection';
import { ValueSection } from './components/valueSection';
export const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <ValueSection/>
            <ServicesSection/>
            <CardSection/>
            <NumbersSection/>
            <AppSection/>
            <SearchSection/>
        </>
    );
}
