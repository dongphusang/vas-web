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
import diamondTitleLogo from "../assets/sponsor-diamondtitle-logo.svg"
import silverTitleLogo from "../assets/sponsor-silvertitle-logo.svg"
import bronzeTitleLogo from "../assets/sponsor-bronzetitle-logo.svg"
import { HOME } from "../assets/HomeContent";
import CardTypeOne from "../components/CardTypeOne";
import "./style.css";
import EventCard from "../components/EventCard";
import EventCardDetails from "../components/EventCardDetails";
import SponsorCard from "../components/SponsorCard";
import PlaceHolder from "../assets/event-thumbnail.jpg";
import DonationCard from "../components/DonationCard";
import { useState, useEffect } from "react";

export default function Home() {
    return (
        <>
            <div className="flex flex-col p-10 mb-20 gap-y-20 bg-[#FAF5EF]">
                {/* Welcome */}
                <section className="flex flex-col gap-y-10 md:items-center md:text-center">
                    <h1 className="text-5xl leading-18 tracking-wide"> {HOME.WELCOME_TITLE} </h1>
                    <p className="text-[1.3rem] text-[#672F2F]/90 leading-11 font-medium max-w-[48rem]"> {HOME.WELCOME_TEXT} </p>
                </section>

                {/* Achievements */}
                <div className="grid grid-cols-1 justify-center items-center gap-y-15 lg:grid-cols-3">
                    {/* landing gallery */}                
                    <img src={landingGallery} alt="gallery loading..." className="justify-self-center self-center md:w-3/4 lg:order-2" />

                    {/* birth & event quant */}
                    <div className="flex flex-col items-center text-center gap-y-15 
                                    lg:order-1 lg:justify-center lg:items-end lg:text-end lg:h-full">
                        <section className="flex flex-col gap-y-2.5 w-[14rem]"> {/* birth */}
                            <h1 className="text-[2.5rem] gradient-header"> 2020 </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.BIRTH_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-y-2.5 w-[16rem]
                                            lg:pt-[3rem] lg:h-full"> {/* free classes */}
                            <h1 className="text-[2.5rem] gradient-header"> Free Classes </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.CLASSES_TEXT} </p>
                        </section>                
                    </div>
                    
                    {/* free classes & mission */}
                    <div className="flex flex-col items-center text-center gap-y-15 
                                    lg:order-3 lg:justify-center lg:items-start lg:text-start lg:h-full">
                        <section className="flex flex-col gap-y-2.5 w-[14rem]"> {/* event quant */}
                            <h1 className="text-[2.5rem] gradient-header"> 50+ </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.EVENTQUANT_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-y-2.5 w-[20rem]
                                            lg:pt-[1.5rem] lg:h-full"> {/* mission */}
                            <h1 className="text-[2.5rem] gradient-header"> Our Mission </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.MISSION_TEXT} </p>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.MISSION_EXTRA_TEXT} </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Program Offering Section */}
            <div className="flex flex-col justify-center items-center gap-y-20 pt-10 mb-20 bg-[#FAF5EF] md:gap-y-5">
                {/* title */}
                <section className="flex flex-col self-start items-start px-10 gap-y-10 md:max-w-5/6 lg:max-w-3/5 md:p-20"> 
                    <h1 className="leading-13 md:text-5xl"> {HOME.PROGRAM_OFFERING_TITLE} </h1>
                    <p className="leading-8 font-medium md:text-[1.3rem]"> {HOME.PROGRAM_OFFERING_TEXT} </p>
                    <button className="gradient-button-1"> {HOME.PROGRAM_BUTTON_TEXT} </button>
                </section>
                {/* program cards */}
                <section className="flex flex-col justify-center items-center p-10 bg-[#672F2F]/25 w-full
                                    md:p-20 gap-10 md:gap-20
                                    lg:flex-row lg:justify-around">
                    <CardTypeOne name="Vietnamese Language" />
                    <CardTypeOne name="Piano" />
                    <CardTypeOne name="Chess" />
                </section>        
            </div>

            {/* Upcoming Event Section */}
            <div className="flex flex-col justify-center items-center p-5 mb-20 pt-10 bg-[#FAF5EF]
                            md:p-10">
                {/* title */}
                <h1 className="mb-12 self-start text-[#672F2F]/90 
                               md:text-5xl md:self-center"> Upcoming Events </h1>

                {/* event */}
                <div className="flex flex-col items-start gap-y-30
                                md:items-center">
                    {/* event cards */}
                    <section className="flex flex-col gap-4
                                        md:gap-[1.5rem]">
                        <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                        <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                        <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                    </section>
                    {/* event picked - to be made into an event card layout */}
                    <div className="flex flex-col gap-y-8">
                        {/* thumbnail */}
                        <section className="bg-[url(../assets/event-thumbnail.jpg)] bg-center bg-cover bg-no-repeat w-full h-[17rem] p-3 rounded-[0.5rem]
                                            md:h-[30rem]">
                            <div className="flex flex-col justify-center items-center p-1 rounded-[0.5rem] bg-[#FAF5EF]/90 w-[4rem] h-[4rem]
                                            md:w-[6rem] md:h-[6rem]">
                                <h1 className="text-[2rem] text-[#672F2F]/90
                                               md:text-[3rem]"> 01 </h1>
                                <p className="text-[1rem] font-semibold text-[#001524]/70
                                              md:text-[1.5rem]"> Jan </p>
                            </div>
                        </section>
                        {/* description */}
                        <section>
                            <EventCardDetails/>
                        </section>
                        {/* buttons */}
                        <section className='flex flex-col gap-y-4 mt-[2.5rem]'>
                            <button className="gradient-button-1 w-3/5 h-[3rem]
                                               md:w-1/3"> Get Ticket! </button>
                            <button className="secondary-button w-3/5 h-[3rem]
                                               md:w-1/3"> Past Gallery </button>
                        </section>
                    </div>
                </div>
            </div>

            {/* Donation Section */}
            <div className="flex flex-row justify-center items-center mb-20 p-5 w-full bg-[url(../assets/event-thumbnail.jpg)] bg-center bg-cover bg-no-repeat">
                {/* donate card */}
                <DonationCard/>
                
            </div>

            {/* Sponsors Section */}
            <div className="flex flex-col gap-[3rem] p-10 mb-20 bg-[#FAF5EF]">
                {/* title & description*/}
                <section className="flex flex-col gap-[1rem]">
                    <h1 className="text-[2.5rem] text-[#672F2F]/90"> Our Sponsors of 2025 </h1>
                    <p className="text-[1rem] text-[#672F2F]/70"> Our big events is kindly supported by our big wig partners. Big thanks to them all </p>
                </section>
                
                {/* diamond sponsors */}
                <div className="flex flex-col gap-[1.5rem]">
                    {/* title */}
                    <section className="flex flex-row gap-x-2">
                        <h2 className="text-[1.8rem] gradient-header"> Diamond Sponsors </h2>
                        <img src={diamondTitleLogo}/>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:flex-row">
                        <SponsorCard link={krystalBeautyLogo}/>
                        <SponsorCard link={waldenLogo}/>
                    </section>
                </div>
                
                {/* silver sponsors */}
                <div className="flex flex-col gap-[1.5rem]">
                    {/* title */}         
                    <section className="flex flex-row gap-x-2">
                        <h2 className="text-[1.8rem] gradient-header"> Silver Sponsors</h2>
                        <img src={silverTitleLogo}/>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:flex-row">
                        <SponsorCard link={innovaLogo}/>
                    </section>
                </div>

                {/* bronze sponsors */}
                <div className="flex flex-col gap-[1.5rem]">
                    {/* title */}
                    <section className="flex flex-row gap-x-2">
                        <h2 className="text-[1.8rem] gradient-header"> Bronze Sponsors </h2>
                        <img src={bronzeTitleLogo}/>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:grid md:grid-cols-2 md:grid-rows-2 md:w-fit
                                         lg:grid-cols-4"> 
                        <SponsorCard link={pharmaChoiceLogo}/>
                        <SponsorCard link={nickelCitySurplusLogo}/>
                        <SponsorCard link={teamTalaricoLogo}/>
                        <SponsorCard link={eyeLevelLogo}/>
                        <SponsorCard link={scotiaWealthLogo}/>
                    </section>
                </div>
            </div>
        </>
        
    );
}