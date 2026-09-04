import DonationCard from "../../components/DonationCard";
import donationBg from "../../assets/donation-bg.jpg"

import './style.css'

export default function Donation () {
    return (
        <>
        {/* Donation Section */}
            <div className="flex flex-col items-center justify-center bg-[#F5ECE0] mb-4 p-5">
                <div className="lg:relative">
                    {/*background image*/}
                    <img src={donationBg} alt="loading" className="w-[44rem] object-cover hidden lg:block"/>
                    {/* donate card */}
                    <DonationCard/>
                </div>
            </div>
        </>
    );
}