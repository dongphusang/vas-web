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
import chessThumbnail from "../assets/program-thumbnail-chess.png"
import pianoThumbnail from "../assets/program-thumbnail-piano.png"
import artThumbnail from "../assets/program-thumbnail-art.png"
import donationBg from "../assets/donation-bg.jpg"
import { HOME } from "../assets/HomeContent";
import CardTypeOne from "../components/CardTypeOne";
import "./style.css";
import EventCard from "../components/EventCard";
import EventCardDetails from "../components/EventCardDetails";
import SponsorCard from "../components/SponsorCard";
import DonationCard from "../components/DonationCard";
import { useState, useEffect } from "react";

export default function Home() {
    return (
        <>
            {/* Hero */}
            <div className="flex flex-col p-10 mb-30 gap-y-20 bg-[#FAF5EF]">
                {/* welcome */}
                <section className="flex flex-col gap-y-10 md:items-center md:text-center">
                    <h1 className="text-5xl leading-18 tracking-wide"> {HOME.WELCOME_TITLE} </h1>
                    <p className="text-[1.3rem] text-[#672F2F]/90 leading-11 font-medium max-w-[48rem]"> {HOME.WELCOME_TEXT} </p>
                </section>

                {/* achievements */}
                <div className="grid grid-cols-1 justify-center items-center gap-y-15 lg:grid-cols-3">
                    {/* landing gallery */}                
                    <img src={landingGallery} alt="gallery loading..." className="justify-self-center self-center md:w-3/4 lg:order-2" />

                    {/* birth & free classes */}
                    <div className="grid grid-cols-1 justify-items-center text-center gap-y-15
                                    lg:order-1 lg:content-stretch lg:justify-items-end lg:h-full lg:text-end">
                        <section className="flex flex-col gap-y-2.5 w-[14rem]"> {/* birth */}
                            <h1 className="text-[2.5rem] gradient-header"> 2020 </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.BIRTH_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-y-2.5 w-[16rem]"> {/* free classes */}
                            <h1 className="text-[2.5rem] gradient-header"> Free Classes </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.CLASSES_TEXT} </p>
                        </section>                
                    </div>
                    
                    {/* event quant & mission */}
                    <div className="grid grid-cols-1 justify-items-center text-center gap-y-15 
                                    lg:order-3 lg:content-stretch lg:justify-items-start lg:h-full lg:text-start">
                        <section className="flex flex-col gap-y-2.5 w-[14rem]"> {/* event quant */}
                            <h1 className="text-[2.5rem] gradient-header"> 50+ </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.EVENTQUANT_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-y-2.5 w-[20rem]
                                            lg:pt-[2.5rem]"> {/* mission */}
                            <h1 className="text-[2.5rem] gradient-header"> Our Mission </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.MISSION_TEXT} </p>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.MISSION_EXTRA_TEXT} </p>
                        </section>
                    </div>
                </div>
            </div>

            {/* Program Offering Section */}
            <div className="flex flex-col justify-center items-center gap-y-20 pt-10 mb-30 bg-[#FAF5EF] md:gap-y-5">
                {/* title */}
                <section className="flex flex-col self-start items-start px-10 gap-y-8 md:max-w-5/6 lg:max-w-3/5 md:p-20"> 
                    <h1 className="leading-13 md:text-5xl"> {HOME.PROGRAM_OFFERING_TITLE} </h1>
                    <p className="leading-8 font-medium text-[#672F2F]/70 md:text-[1.3rem]"> {HOME.PROGRAM_OFFERING_TEXT} </p>
                    <button className="gradient-button-1 h-[2.5rem]"> {HOME.PROGRAM_BUTTON_TEXT} </button>
                </section>

                {/* program cards */}
                <section className="flex flex-col justify-center items-center p-10 bg-[#672F2F]/25 w-full
                                    md:p-20 gap-10 md:gap-20
                                    lg:flex-row lg:justify-around">
                    <CardTypeOne name="Chess" link={chessThumbnail} />
                    <CardTypeOne name="Piano" link={pianoThumbnail}/>
                    <CardTypeOne name="Arts/Crafts Session" link={artThumbnail}/>
                </section>        
            </div>

            {/* Upcoming Event Section */}
            <div className="flex flex-col items-start gap-y-10 p-5 pt-10 mb-30 bg-[#FAF5EF]
                            md:p-10 md:items-center
                            lg:p-30 lg:flex-row lg:justify-center lg:items-start lg:gap-x-35">

                {/* event cards */}
                <section className="flex flex-col gap-4
                                    md:gap-[1.5rem]
                                    lg:items-center lg:w-fit">
                    {/* title */}
                    <h1 className="text-[#672F2F]/90 mb-[1rem]
                                    md:text-[2.5rem] md:self-start
                                    "> Upcoming Events </h1>
                    <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                    <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                    <EventCard name="Vietnamese Lunar New Year" time="06:00 - 11:00"/>
                </section>

                <hr className="self-center w-1/2 border-0.5 border-gray-300 
                               lg:hidden"/>

                {/* event picked - to be made into an event card layout */}
                <div className="flex flex-col bg-[#FAF5EF]
                                lg:w-1/2">
                        <EventCardDetails/>
                </div>
            </div>

            {/* Donation Section */}
            <div className="flex flex-col items-center justify-center bg-[#FAF5EF] mb-30 p-5">
                <div className="lg:relative bg-amber-200">
                    {/*background image*/}
                    <img src={donationBg} alt="loading" className="w-[44rem] object-cover hidden lg:block"/>
                    {/* donate card */}
                    <DonationCard/>
                </div>
            </div>

            {/* Sponsors Section */}
            <div className="flex flex-col gap-[3rem] p-10 mb-30 bg-[#FAF5EF]
                            lg:items-center lg:text-center lg:gap-[5rem]">
                {/* title & description*/}
                <section className="flex flex-col gap-[1rem]">
                    <h1 className="text-[2.5rem] text-[#672F2F]/90"> Our Sponsors of 2025 </h1>
                    <p className="text-[1rem] text-[#672F2F]/70"> Our big events is kindly supported by our big wig partners. Big thanks to them all </p>
                </section>
                
                {/* diamond sponsors */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
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
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
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
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[1.8rem] gradient-header"> Bronze Sponsors </h2>
                        <img src={bronzeTitleLogo}/>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:grid md:grid-cols-2 md:w-fit
                                        lg:grid-cols-5 lg:gap-[2rem]"> 
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