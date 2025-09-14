import EventDateLogo from '../assets/event-date-logo.svg'
import EventLocationLogo from '../assets/event-location-logo.svg'
import EventWhoseLogo from '../assets/event-whose-logo.svg'
import ExampleThumbnail from '../assets/event-thumbnail.jpg'


/* This component is used within EventCard component id:0001*/
export default function EventCardDetails ({ thumbnail = "", title = "", location = "", date = "", whom = "", description = "", priButtonTxt = "", secButtonTxt = ""} 
                                        : { thumbnail?: string, title?:string, location?:string, date?:string, whom?:string, description?:string, priButtonTxt?:string, secButtonTxt?:string}) {
    return (

            <div className="flex flex-col justify-center items-start gap-y-5 tracking-wide shadow-md shadow-black/30">

                {/* Thumbnail */}
                <section className='relative w-full'>
                    {/* date */}
                    <div className='absolute top-[1rem] left-[1rem]'>
                        <div className="flex flex-col justify-center items-center p-1 w-[4rem] h-[4rem] rounded-[0.5rem] bg-[#FAF5EF]/90">
                            <h1 className="text-[2rem] text-[#672F2F]/90"> 01 </h1>
                            <p className="text-[1rem] font-semibold text-[#001524]/70"> Jan </p>
                        </div>
                    </div>
                    {/* img */}
                    <img src={ExampleThumbnail} 
                         alt="" 
                         className='h-[17rem] w-full object-cover
                                    md:h-[30rem]
                                    lg:h-[20rem]'/>
                </section>

                {/* Title */}
                <h1 className="text-[2rem] text-[#672F2F]/90 px-5">
                    Vietnamese Lunar New Year
                </h1>

                {/* Details */}
                <section className="flex flex-col gap-1 text-nowrap px-5
                                    lg:w-1/2">
                    {/* location */}
                    <div className='flex flex-row gap-x-3 pl-0.75'> 
                        <img src={EventLocationLogo}/>
                        <p className="text-[1rem] text-[#121212]/90"> Somewhere, IDK, Canada </p> 
                    </div>
                    {/* date */}
                    <div className='flex flex-row gap-x-2.5'>
                        <img src={EventDateLogo}/>
                        <p className="text-[1rem] text-[#121212]/90"> Sunday, 01 Jan 2025 - 06:00PM </p>
                    </div>
                    {/* whose */}
                    <div className='flex flex-row gap-x-2.5'>
                        <img src={EventWhoseLogo}/>
                        <p className="text-[1rem] text-[#121212]/90"> By <b>Vietnamese Association Sudbury</b> </p>
                    </div>
                </section>

                {/* Event Description */}
                <p className="text-[1.1rem] text-[#672F2F]/70 leading-7 tracking-wider px-5
                              lg:w-1/2">
                    A journey into the heart of Vietnamese heritage, where every smile, every dance, and every bite is a testament to a rich, enduring culture. Let's ring in the new year with warmth and wonder!
                </p>

                {/* buttons */}
                <section className='flex flex-col gap-y-4 mt-[0.5rem] w-full p-5 pb-7'>
                    <button className="gradient-button-1 w-1/2 h-[2.5rem]
                                        md:w-1/5"> Get Ticket! </button>
                    <button className="secondary-button w-1/2 h-[2.5rem]
                                        md:w-1/5"> Past Gallery </button>
                </section>
            </div>
    );
}