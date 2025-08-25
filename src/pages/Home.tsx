import landingGallery from "../assets/landing-gallery.png";
import orgLogo from "../assets/org-logo.svg"
import krystalBeautyLogo from "../assets/sponsor-krystalbeauty-logo.svg"
import waldenLogo from "../assets/sponsor-walden-logo.svg"
import innovaLogo from "../assets/sponsor-innova-logo.svg"
import pharmaChoiceLogo from "../assets/sponsor-pharma-logo.svg"
import nickelCitySurplusLogo from "../assets/sponsor-nickelcity-logo.svg"
import teamTalaricoLogo from "../assets/sponsor-talarico-logo.svg"
import eyeLevelLogo from "../assets/sponsor-eyelevel-logo.svg"
import scotiaWealthLogo from "../assets/sponsor-scotia-logo.svg"
import { HOME } from "../assets/HomeContent";
import CardTypeOne from "../components/CardTypeOne";
import "./style.css";
import EventCard from "../components/EventCard";
import EventCardDetails from "../components/EventCardDetails";
import SponsorCard from "../components/SponsorCard";

export default function Home() {
    return (
        <>
            <div className="flex flex-col p-5 mb-20 gap-y-20 bg-[#FAF5EF] bg-[url('../assets/lotus-background.png')] bg-no-repeat bg-center bg-contain lg:bg-cover">
                {/* Welcome */}
                <section className="flex flex-col justify-center items-center gap-y-10
                                    text-center">
                    <h1 className="text-5xl leading-15"> {HOME.WELCOME_TITLE} </h1>
                    <p className="text-[1.3rem] leading-10 font-medium max-w-[48rem]"> {HOME.WELCOME_TEXT} </p>
                </section>

                {/* Achievements */}
                <div className="flex flex-col gap-y-15 lg:grid lg:grid-cols-3
                                text-center">
                    {/* Landing Gallery */}                
                    <img src={landingGallery} alt="gallery loading..." className="justify-self-center self-center lg:order-2 md:max-w-[75%] lg:min-w-[70%]" />
                    {/* Birth and Event Quantity Section */}
                    <div className="flex flex-col justify-around items-center lg:items-end gap-y-15 lg:order-1 
                                    lg:text-right">
                        <section className="flex flex-col gap-2.5 max-w-[14rem]">
                            <h1 className="gradient-header"> {HOME.BIRTH_TITLE} </h1>
                            <p> {HOME.BIRTH_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-2.5 max-w-[14rem]">
                            <h1 className="gradient-header"> {HOME.EVENTQUANT_TITLE} </h1>
                            <p> {HOME.EVENTQUANT_TEXT} </p>
                        </section>
                    </div>
                    {/* Classes and Mission Section */}
                    <div className="flex flex-col justify-around items-center lg:items-start gap-y-15 lg:order-3 
                                    lg:text-left">
                        <section className="flex flex-col gap-2.5 max-w-[16rem]">
                            <h1 className="gradient-header"> {HOME.CLASSES_TITLE} </h1>
                            <p> {HOME.CLASSES_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-y-5 max-w-[20rem]">
                            <h1 className="gradient-header"> {HOME.MISSION_TITLE} </h1>
                            <p> {HOME.MISSION_TEXT} </p>
                            <p> {HOME.MISSION_EXTRA_TEXT} </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Program Offering Section */}
            <div className="flex flex-col justify-center items-center gap-y-20 pt-10 mb-20 bg-[#FAF5EF] md:gap-y-5">
                {/*Title*/}
                <section className="flex flex-col self-start items-start px-10 gap-y-10 md:max-w-5/6 lg:max-w-3/5 md:p-20"> 
                    <h1 className="leading-13 md:text-5xl"> {HOME.PROGRAM_OFFERING_TITLE} </h1>
                    <p className="leading-8 font-medium md:text-[1.3rem]"> {HOME.PROGRAM_OFFERING_TEXT} </p>
                    <button className="gradient-button-1"> {HOME.PROGRAM_BUTTON_TEXT} </button>
                </section>
                {/*Program cards*/}
                <section className="grid grid-cols-1 lg:grid-cols-3 p-10 md:p-20 gap-10 md:gap-20 w-full h-auto bg-[#672F2F]/25 ">
                    <CardTypeOne name="Vietnamese Language" />
                    <CardTypeOne name="Piano" />
                    <CardTypeOne name="Chess" />
                </section>        
            </div>

            {/* Upcoming Event Section */}
            <div className="flex flex-col justify-center items-center p-5 mb-20 pt-10 bg-[#FAF5EF]">
                <h1 className="mb-12 self-start text-[#672F2F]/90 md:text-5xl"> Upcoming Events </h1>
                <div className="flex flex-col self-start gap-y-30">
                    {/* event cards */}
                    <section className="flex flex-col gap-4">
                        <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                        <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                        <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                    </section>
                    {/* Event picked */}
                    <div className="flex flex-col gap-y-8">
                        {/* thumbnail */}
                        <section className="bg-[url(../assets/event-thumbnail.png)] bg-fit bg-no-repeat w-full h-[17rem] p-3 rounded-[0.5rem]">
                            <div className="flex flex-col justify-center items-center p-1 rounded-[0.5rem] bg-[#FAF5EF]/90 w-[4rem] h-[4rem]">
                                <h1 className="text-[2rem] text-[#672F2F]/90"> 01 </h1>
                                <p className="text-[1rem] font-semibold text-[#001524]/70"> Jan </p>
                            </div>
                        </section>
                        {/* description */}
                        <section>
                            <EventCardDetails/>
                        </section>
                        {/* buttons */}
                        <section className='flex flex-col gap-y-4 mt-[2.5rem]'>
                            <button className="gradient-button-1 w-2/3 h-[3rem]"> Get Ticket! </button>
                            <button className="secondary-button w-2/3 h-[3rem] "> Past Gallery </button>
                        </section>
                    </div>
                </div>
            </div>

            {/* Donation Section */}
            <div className="flex flex-col gap-y-4 p-5 mb-20 border-y-8 border-y-[#672F2F]/90 bg-[#FAF5EF]">
                {/* organization title */}
                <section className="flex flex-row gap-x-2">
                    <img src={orgLogo}/>
                    <p className="text-[1rem] text-[#672F2F]/90 font-medium"> Vietnamese Association Sudbury </p>
                </section>

                {/* Title & Description */}
                <section className="flex flex-col gap-y-4">
                    <h1 className="text-[2.5rem] text-[#672F2F]/90"> Our Heart are Filled with Gratitude </h1>
                    <p className="text-[1rem] text-[#672F2F]/70"> We give thanks for your kind support to fuel the hope we share. Strong together, brighter together. </p>
                </section>

                {/* button */}
                <section className="mt-8">
                    <button className="gradient-button-1 w-1/2 h-[3rem] "> DONATE NOW </button>
                </section>
            </div>

            {/* Sponsors Section */}
            <div className="flex flex-col gap-[3rem] p-5 pt-10 bg-[#FAF5EF]">
                {/* title & description*/}
                <section className="flex flex-col gap-[1rem]">
                    <h1 className="text-[2.5rem] text-[#672F2F]90"> Our Sponsors of 2025 </h1>
                    <p className="text-[1rem] text-[#672F2F]/70"> Our big events is kindly supported by our big wig partners. Big thanks to them all </p>
                </section>
                
                {/* diamond sponsors */}
                <div className="flex flex-col gap-[1.5rem]">
                    <h2 className="text-[1.8rem] gradient-header"> Diamond Sponsors </h2> {/* title */}
                    <section className="flex flex-col gap-[1rem]"> {/* sponsors */}
                        <SponsorCard link={krystalBeautyLogo}/>
                        <SponsorCard link={waldenLogo}/>
                    </section>
                </div>
                
                {/* silver sponsors */}
                <div className="flex flex-col gap-[1.5rem]">
                    <h2 className="text-[1.8rem] gradient-header"> Silver Sponsors</h2> {/* title */}
                    <section className="flex flex-col gap-[1rem]"> {/* sponsors */}
                        <SponsorCard link={innovaLogo}/>
                    </section>
                </div>

                {/* bronze sponsors */}
                <div className="flex flex-col gap-[1.5rem]">
                    <h2 className="text-[1.8rem] gradient-header "> Bronze Sponsors </h2> {/* title */}
                    <section className="flex flex-col gap-[1rem]"> {/* sponsors */}
                        <SponsorCard link={pharmaChoiceLogo}/>
                        <SponsorCard link={nickelCitySurplusLogo}/>
                        <SponsorCard link={teamTalaricoLogo}/>
                        <SponsorCard link={eyeLevelLogo}/>
                        <SponsorCard link={scotiaWealthLogo}/>
                    </section>
                </div>
            </div>

            {/* Contact Section (maybe make this a footer?)*/}
        </>
        
    );
}