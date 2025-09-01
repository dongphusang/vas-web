import LeafletMap from "./LeafletMap"
import facebookIcon from "../../assets/footer-facebook-icon.svg"
import locationIcon from "../../assets/footer-location-icon.svg"
import mailIcon from "../../assets/footer-mail-icon.svg"
import orgLogo from "../assets/org-logo.svg"

export default function DonationCard() {
    return (
            <div className="flex flex-col justify-center items-stretch gap-y-5 p-5 border-b-5 border-b-[#672F2F]/90 bg-[#FAF5EF]
                            md:">
                {/* organization title */}
                <section className="flex flex-row gap-x-2">
                    <img src={orgLogo}/>
                    <p className="text-[1rem] text-[#672F2F]/90 font-medium"> Vietnamese Association Sudbury </p>
                </section>

                {/* title & description */}
                <section className="flex flex-col gap-y-4">
                    <h1 className="text-[2.5rem] text-[#672F2F]/90"> Our Hearts are Filled with Gratitude </h1>
                    <p className="text-[1rem] text-[#672F2F]/70"> We give thanks for your kind support to fuel the hope we share. Strong together, brighter together. </p>
                </section>

                {/* button */}
                <section className="mt-8">
                    <button className="gradient-button-1 w-1/2 h-[3rem]
                                       md:w-1/3"> DONATE NOW </button>
                </section>
            </div>
    );
}