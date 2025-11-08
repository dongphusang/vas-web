import { HOME } from "../../assets/HomeContent.ts";
import landingGallery from "../../assets/landing-gallery.png";
import "./style.css";

export default function Hero () {
    return (
        <>
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
                            <h1 className="text-[2.5rem] gradient-header"> {HOME.BIRTH_TITLE} </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.BIRTH_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-y-2.5 w-[16rem]"> {/* free classes */}
                            <h1 className="text-[2.5rem] gradient-header"> {HOME.CLASSES_TITLE} </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.CLASSES_TEXT} </p>
                        </section>                
                    </div>
                    
                    {/* event quant & mission */}
                    <div className="grid grid-cols-1 justify-items-center text-center gap-y-15 
                                    lg:order-3 lg:content-stretch lg:justify-items-start lg:h-full lg:text-start">
                        <section className="flex flex-col gap-y-2.5 w-[14rem]"> {/* event quant */}
                            <h1 className="text-[2.5rem] gradient-header"> {HOME.EVENTQUANT_TITLE} </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.EVENTQUANT_TEXT} </p>
                        </section>
                        <section className="flex flex-col gap-y-2.5 w-[20rem]
                                            lg:pt-[2.5rem]"> {/* mission */}
                            <h1 className="text-[2.5rem] gradient-header"> {HOME.MISSION_TITLE} </h1>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.MISSION_TEXT} </p>
                            <p className="text-[1rem] text-[#672F2F]/70"> {HOME.MISSION_EXTRA_TEXT} </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
