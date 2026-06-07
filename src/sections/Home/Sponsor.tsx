
import innovaLogo from "../../assets/sponsor-innova-logo.svg"
import teamTalaricoLogo from "../../assets/sponsor-talarico-logo.svg"
import scotiaWealthLogo from "../../assets/sponsor-scotia-logo.svg"

import wellnessLogo from "../../assets/wellnessstudio.jpg"

import huLogo from "../../assets/drmccormick.jpeg"

import valleyPoultry from "../../assets/valleypoultry.png"

import iopticalLogo from "../../assets/iopticalinc.png"
import drNallaLogo from "../../assets/drnalla.svg"
import climateControl from "../../assets/climatecontrol.png"
import baophuongLogo from "../../assets/baophuong.svg"
import anonymousLogo from "../../assets/anonymous.svg"
import dustinLogo from "../../assets/dustin.svg"

import SponsorCard from "../../components/SponsorCard";

export default function Sponsor () {
    return (
        <>
            <div className="flex flex-col gap-[3rem] p-10 mb-30 bg-[#FAF5EF]
                            lg:items-center lg:text-center lg:gap-[5rem]">
                {/* title & descriptio*/}
                <section className="flex flex-col gap-[1rem]">
                    <h1 className="text-[2.5rem] text-[#672F2F]/90"> Our Sponsors of 2026 </h1>
                    <p className="text-[1rem] text-[#672F2F]/70"> Our big events is kindly supported by our big wig partners. Big thanks to them all </p>
                </section>
                
                {/* golden lion patrons */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[2rem] gradient-header"> Golden Lion Patron </h2>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[2rem]
                                        md:grid md:grid-cols-2 md:w-fit md:auto-rows-auto
                                        lg:grid lg:grid-cols-3">
                        <SponsorCard imageLocation={huLogo} link="https://www.huntingtonu.ca/"/>
                        <SponsorCard imageLocation={valleyPoultry} link="https://www.facebook.com/valleypoultrypackers/"/>                 
                        <SponsorCard imageLocation={wellnessLogo} link="https://sudburywellnessstudio.com/"/>
                    </section>
                </div>
                
                {/* phoenix sponsors */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[2rem] gradient-header"> Phoenix Sponsor </h2>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[2rem]
                                        md:grid md:grid-cols-2 md:w-fit
                                        lg:grid lg:auto-rows-auto">
                        <SponsorCard imageLocation={innovaLogo} link="https://inwp.ca/"/>
                        <SponsorCard imageLocation={anonymousLogo} link=""/>
                    </section>
                </div>

                {/* drum partners */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[2rem] gradient-header"> Drum Partner </h2>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:grid md:grid-cols-2 md:w-fit
                                        lg:grid-cols-3 lg:gap-[2rem]"> 
                        <SponsorCard imageLocation={scotiaWealthLogo} link="https://www.scotiawealthmanagement.com/ca/en.html"/>
                        <SponsorCard imageLocation={teamTalaricoLogo} link="https://teamtalarico.ca/"/>
                        <SponsorCard imageLocation={anonymousLogo} link=""/>
                    </section>
                </div>

                {/* lantern advocates */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[2rem] gradient-header"> Lantern Advocate </h2>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:grid md:grid-cols-2 md:w-fit
                                        lg:grid-cols-2 lg:gap-[2rem]"> 
                        <SponsorCard imageLocation={iopticalLogo} link="https://iopticalinc.wixsite.com/iopticalinc/brands"/>
                        <SponsorCard imageLocation={drNallaLogo} link="https://register.cpso.on.ca/physician-info/?cpsonum=91526"/>
                    </section>
                </div>

                {/* lotus friend plus */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[2rem] gradient-header"> Lotus Friend Plus </h2>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:grid md:grid-cols-2 md:w-fit
                                        lg:grid-cols-2 lg:gap-[2rem]"> 
                        <SponsorCard imageLocation={baophuongLogo} link=""/>
                        <SponsorCard imageLocation={climateControl} link="https://climatecontrolsudbury.ca/"/>
                    </section>
                </div>

                {/* lotus friends */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[2rem] gradient-header"> Lotus Friend </h2>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:grid md:grid-cols-1 md:w-fit"> 
                        <SponsorCard imageLocation={anonymousLogo} link=""/>
                    </section>
                </div>

                {/* bamboo supporter */}
                <div className="flex flex-col gap-[1.5rem]
                                lg:gap-[2rem]">
                    {/* title */}
                    <section className="flex flex-row gap-[0.5rem]
                                        lg:justify-center">
                        <h2 className="text-[2rem] gradient-header"> Bamboo Supporter </h2>
                    </section>
                    {/* sponsors */}
                    <section className="flex flex-col gap-[1rem]
                                        md:grid md:grid-cols-1 md:w-fit"> 
                        <SponsorCard imageLocation={dustinLogo} link=""/>
                    </section>
                </div>
            </div>
        </>
    )
}

