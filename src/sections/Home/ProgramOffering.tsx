import CardTypeOne from "../../components/CardTypeOne";
import { HOME } from "../../assets/HomeContent.ts";
import chessThumbnail from "../../assets/program-thumbnail-chess.png"
import pianoThumbnail from "../../assets/program-thumbnail-piano.png"
import artThumbnail from "../../assets/program-thumbnail-art.png"

export default function ProgramOffering () {
    return (
        <>
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
        </>
    );
}