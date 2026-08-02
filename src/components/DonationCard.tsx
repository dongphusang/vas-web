import orgLogo from "../assets/org-logo.svg"

export default function DonationCard() {
    return (
        <div className="shadow-md shadow-black/50
                        lg:absolute lg:w-[28rem] lg:right-[22rem] lg:top-[1.75rem]">
            <div className="flex flex-col justify-center items-stretch gap-y-4 p-7 border-b-8 border-b-[#672F2F]/90 bg-[#FAF5EF]">
                {/* organization title */}
                <section className="flex flex-row gap-x-2">
                    <img src={orgLogo}/>
                    <p className="text-[1rem] text-[#672F2F]/90 font-medium"> Vietnamese Association Sudbury </p>
                </section>

                {/* title & description */}
                <section className="flex flex-col gap-y-4
                                    lg:w-[75%]">
                    <h1 className="text-[2.5rem] text-[#672F2F]/90"> Our Hearts are Filled with Gratitude </h1>
                    <p className="text-[1.1rem] leading-8 font-medium text-[#672F2F]/70 lg:text-[1.2rem]"> We give thanks for your kind support to fuel the hope we share. Strong together, brighter together. </p>
                </section>

                {/* button */}
                <section className="mt-5">
                    <a className="gradient-button-1 w-1/2 h-[2.5rem]
                                md:w-1/3" href='https://vietnameseassociationofsudbury.ticketspice.com/crowd/vietnamese-association-of-sudbury-fundraising-campaign' target="_blank" rel="noopener noreferrer"> 
                        <p className="text-[0.8rem] text-center text-[#FAF5EF]/90"> DONATE </p>
                    </a>
                </section>
            </div>
        </div>
    );
}