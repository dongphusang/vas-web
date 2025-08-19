import landingGallery from "../assets/landing-gallery.png";
import { HOME } from "../assets/HomeContent";
import CardTypeOne from "../components/CardTypeOne";
import "./style.css";

export default function Home() {
    return (
        <>
            <div className="flex flex-col p-15 mb-20 gap-y-20 bg-[#FAF5EF] bg-[url('../assets/lotus-background.png')] bg-no-repeat bg-center bg-contain lg:bg-cover">
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
            <div className="flex flex-col justify-center items-center gap-y-20 pt-10 bg-[#FAF5EF] md:gap-y-5">
                {/*Title*/}
                <section className="flex flex-col self-start items-start px-10 gap-y-10 md:max-w-5/6 lg:max-w-3/5 md:p-20"> 
                    <h1 className="leading-13 md:text-5xl"> {HOME.PROGRAM_OFFERING_TITLE} </h1>
                    <p className="leading-8 font-medium md:text-[1.3rem]"> {HOME.PROGRAM_OFFERING_TEXT} </p>
                    <button className="gradient-button"> {HOME.PROGRAM_BUTTON_TEXT} </button>
                </section>
                {/*Program cards*/}
                <section className="grid grid-cols-1 lg:grid-cols-3 p-10 md:p-20 gap-10 md:gap-20 w-full h-auto bg-[#672F2F]/25 ">
                    <CardTypeOne name="Vietnamese Language" />
                    <CardTypeOne name="Piano" />
                    <CardTypeOne name="Chess" />
                </section>
            
            </div>

            {/* Upcoming Event Section */}

            {/* Donation Section */}

            {/* Sponsors Section */}

            {/* Contact Section (maybe make this a footer?)*/}
        </>
        
    );
}