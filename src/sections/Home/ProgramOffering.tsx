import { HOME } from "../../assets/HomeContent.ts";
import programOffPaint from "../../assets/programoff-paint.png"
import programOffKing from "../../assets/programoff-king.png"
import './style.css'

import thumb1 from '../../assets/programoff-thumb1.webp'
import thumb2 from '../../assets/programoff-thumb2.webp'
import thumb3 from '../../assets/programoff-thumb3.webp'
import thumb4 from '../../assets/programoff-thumb4.webp'
import thumb5 from '../../assets/programoff-thumb5.webp'
import thumb6 from '../../assets/programoff-thumb6.webp'


export default function ProgramOffering () {
    return (
        <>
            <div className="relative flex flex-col justify-center items-center gap-y-20 pt-5 mb-30 overflow-hidden bg-[#FAF5EF] md:gap-y-25 w-full">
                {/* title */}
                <section className="flex flex-col justify-center items-start px-10 gap-y-7 
                                    md:max-w-5/6 md:p-10
                                    lg:max-w-3/5 lg:items-center"> 
                    <h1 className="leading-13 text-5xl
                                   lg:text-4xl"> {HOME.PROGRAM_OFFERING_TITLE} </h1>
                    <p className="leading-8 font-medium text-[#672F2F]/70 
                                  md:text-[1.3rem]
                                  lg:text-center"> {HOME.PROGRAM_OFFERING_TEXT} </p>
                    <a className="gradient-button-1 h-[2.5rem]" href="https://docs.google.com/forms/d/1JkiMOPecIbDeqkbBc79XR5_mLeYYP6y4awZCgDlSX68/viewform?edit_requested=true&pli=1" target="_blank" rel="noopener noreferrer"> 
                        <p className="text-[0.8rem] text-center text-[#FAF5EF]/90"> Register! </p>

                    </a>
                </section>

                {/* program cards */}
                <div className="py-8 flex w-full overflow-hidden bg-[#672F2F] z-2">
                    <div className="flex w-max gap-8 animate-[slide_30s_linear_infinite]">
                        {/* Main images*/}
                        <div className="flex w-max gap-8"> {/* animate-[slide_10s_linear_infinite] */}
                            <img src={thumb1} className="program-img"/>
                            <img src={thumb2} className="program-img"/>
                            <img src={thumb3} className="program-img"/>
                            <img src={thumb4} className="program-img"/>
                            <img src={thumb5} className="program-img"/>
                            <img src={thumb6} className="program-img"/>
                        </div>

                        <div aria-hidden='true' className="flex w-max gap-8"> {/* animate-[slide_10s_linear_infinite] */}
                            <img src={thumb1} className="program-img"/>
                            <img src={thumb2} className="program-img"/>
                            <img src={thumb3} className="program-img"/>
                            <img src={thumb4} className="program-img"/>
                            <img src={thumb5} className="program-img"/>
                            <img src={thumb6} className="program-img"/>
                        </div>
                    </div>
                                          
                </div>   

                <img className="hidden absolute -top-10 -right-15 z-1 -rotate-10 h-150 shadow-2xl
                                lg:block" src={programOffPaint} loading="lazy" fetchPriority="low" decoding="async"/>
                <img className="hidden absolute -top-20 -left-25 z-1 rotate-5 h-150 shadow-2xl
                                lg:block" src={programOffKing} loading="lazy" fetchPriority="low" decoding="async"/>
            </div>
        </>
    );
}