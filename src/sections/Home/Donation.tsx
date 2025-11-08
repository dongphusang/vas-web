import DonationCard from "../../components/DonationCard";
import donationBg from "../../assets/donation-bg.jpg"

export default function Donation () {
    return (
        <>
        {/* Donation Section */}
            <div className="flex flex-col items-center justify-center bg-[#FAF5EF] mb-30 p-5">
                <div className="lg:relative bg-amber-200">
                    {/*background image*/}
                    <img src={donationBg} alt="loading" className="w-[44rem] object-cover hidden lg:block"/>
                    {/* donate card */}
                    <DonationCard/>
                </div>
            </div>
        </>
    );
}