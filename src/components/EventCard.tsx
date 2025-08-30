import "./style.css";
import clockIcon from '../assets/clock-icon.svg'

export default function EventCard({ name = "empty", time = "empty" } : { name?: string, time?:string }) {
    return (
        <>
            {/*Background*/}
            <div className="flex flex-row p-2 rounded-sm bg-[#001524]/5 w-fit
                            md:gap-[2rem]">
                {/* date */}
                <section className="flex flex-col justify-center items-center p-1 mr-[1rem] rounded-sm bg-[#672F2F]/70 w-[4rem] h-[4rem]
                                    md:mr-[0.5rem] md:w-[5rem] md:h-[5rem]">
                    <h1 className="text-[2rem] text-[#FAF5EF]/90"> 01 </h1>
                    <p className="text-[1rem] font-semibold text-[#001524]/70"> Jan </p>
                </section>
                {/* name & time */}
                <section className="self-center flex flex-col justify-start items-start mr-[3rem]
                                    md:gap-[0.5rem]">
                    <p className="text-[1rem] font-medium"> {name} </p>
                    <div className="flex flex-row gap-x-2">
                        <img src={clockIcon} className="w-[1rem]"></img>
                        <p className="text-[1rem] text-nowrap"> {time} </p>                      
                    </div>
                </section>
                {/* arrow button */}
                <section className="self-end text-end">
                    <button className="text-[1rem] hover:text-[#672F2F]"> {">"} </button>
                </section>
            </div>
        </>
    );
}