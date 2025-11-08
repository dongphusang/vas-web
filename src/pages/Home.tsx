import UpcomingEvent from "../sections/Home/UpcomingEvent.tsx";
import Hero from "../sections/Home/Hero.tsx"
import ProgramOffering from "../sections/Home/ProgramOffering.tsx";
import Donation from "../sections/Home/Donation.tsx"
import Sponsor from "../sections/Home/Sponsor.tsx"

export default function Home() {
    return (
        <>
            {/* Hero */}
            <Hero/>

            {/* Program Offering Section */}
            <ProgramOffering/>

            {/* Upcoming Event Section */}
            <UpcomingEvent/>

            {/* Donation Section */}
            <Donation/>

            {/* Sponsors Section */}
            <Sponsor/>
        </>
        
    );
}