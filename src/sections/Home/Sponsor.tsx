import krystalBeautyLogo from "../../assets/sponsor-krystalbeauty-logo.svg"
import waldenLogo from "../../assets/sponsor-walden-logo.svg"
import innovaLogo from "../../assets/sponsor-innova-logo.svg"
import pharmaChoiceLogo from "../../assets/sponsor-pharma-logo.svg"
import nickelCitySurplusLogo from "../../assets/sponsor-nickelcity-logo.svg"
import teamTalaricoLogo from "../../assets/sponsor-talarico-logo.svg"
import eyeLevelLogo from "../../assets/sponsor-eyelevel-logo.svg"
import scotiaWealthLogo from "../../assets/sponsor-scotia-logo.svg"
import diamondTitleLogo from "../../assets/sponsor-diamondtitle-logo.svg"
import silverTitleLogo from "../../assets/sponsor-silvertitle-logo.svg"
import bronzeTitleLogo from "../../assets/sponsor-bronzetitle-logo.svg"
import SponsorCard from "../../components/SponsorCard";

export default function Sponsor () {
    return (
        <>
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
                        <SponsorCard imageLocation={krystalBeautyLogo} link="https://krystalbeautyspasudbury.ca/"/>
                        <SponsorCard imageLocation={waldenLogo} link="https://waldenuniversal.com/"/>
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
                        <SponsorCard imageLocation={innovaLogo} link="https://inwp.ca/"/>
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
                        <SponsorCard imageLocation={pharmaChoiceLogo} link="https://www.pharmachoice.com/locations/lasalle-clinic/"/>
                        <SponsorCard imageLocation={nickelCitySurplusLogo} link="https://www.facebook.com/nickelcitysurplus?mibextid=LQQJ4d"/>
                        <SponsorCard imageLocation={teamTalaricoLogo} link="https://teamtalarico.ca/"/>
                        <SponsorCard imageLocation={eyeLevelLogo} link="https://www.myeyelevel.com/US/center/sudbury"/>
                        <SponsorCard imageLocation={scotiaWealthLogo} link="https://www.scotiawealthmanagement.com/intl/en/home.html"/>
                    </section>
                </div>
            </div>
        </>
    )
}

