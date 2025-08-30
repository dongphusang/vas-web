import EventDateLogo from '../assets/event-date-logo.svg'
import EventLocationLogo from '../assets/event-location-logo.svg'
import EventWhoseLogo from '../assets/event-whose-logo.svg'


/* This component is used within EventCard component id:0001*/
export default function EventCardDetails () {
    return (
        <>
            {/*flex, flex column, justify-start, items-start, gap-y-[1rem] */}
            <div className="flex flex-col items-start gap-y-5 tracking-wide">
                {/* Event Title */}
                <h1 className="text-[2rem] text-[#672F2F]/90">
                    Vietnamese Lunar New Year
                </h1>

                {/* Event Details */}
                <section className="flex flex-col gap-2 text-[0.5rem] text-nowrap">
                    {/* location */}
                    <div className='flex flex-row gap-x-2.5'> 
                        <img src={EventLocationLogo}/>
                        <p className="text-[#121212]/90"> Somewhere, IDK, Canada </p> 
                    </div>
                    {/* date */}
                    <div className='flex flex-row gap-x-2.5'>
                        <img src={EventDateLogo}/>
                        <p className="text-[#121212]/90"> Sunday, 01 Jan 2025 - 06:00PM </p>
                    </div>
                    {/* whose */}
                    <div className='flex flex-row gap-x-2.5'>
                        <img src={EventWhoseLogo}/>
                        <p className="text-[#121212]/90"> By <b>Vietnamese Association Sudbury</b> </p>
                    </div>
                </section>

                {/* Event Description */}
                <p className="text-[1rem] text-[#672F2F]/70 leading-7 tracking-wider">
                    A journey into the heart of Vietnamese heritage, where every smile, every dance, and every bite is a testament to a rich, enduring culture. Let's ring in the new year with warmth and wonder!
                </p>

            </div>
        </>
    );
}