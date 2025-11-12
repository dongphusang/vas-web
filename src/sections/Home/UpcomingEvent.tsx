import axios from "axios";
import { useEffect, useState } from "react";
import EventList from "../../components/EventList";
import EventDateLogo from '../../assets/event-date-logo.svg'
import EventLocationLogo from '../../assets/event-location-logo.svg'
import EventWhoseLogo from '../../assets/event-whose-logo.svg'
import PlaceHolderThumbnail from '../../assets/home_upcomingEvent_placeHolder_thumbnail.jpeg'

export default function UpcomingEvent () {
    const [eventList, setEventList] = useState([]);
    const [event, setEvent] = useState({id: 1, 
                                    thumbnail_link: PlaceHolderThumbnail, 
                                    title: 'The "How to Patch a Cat" Experience', 
                                    location: 'Some Cat Cafe',
                                    date: 'Sunday, 01 Jan 2025, 06:00PM', // needs this initial value so no crash because split() can't be done on empty string
                                    organizer: 'Huh, who?',
                                    description: `Ever wondered how to apply a patch to a creature that refuses to sit still? Join us for 'How to Patch a Cat', the world's least practical workshop on feline maintenance. We'll cover essential skills like: Negotiating with claws; Applying bandages to moving targets; And accepting that you'll never win an argument with a cat. Bring your sense of humour (and maybe some band-aids).`});

    const fetchEvents = async () => {
        try {
            const response = 
            //await axios.get("http://localhost:8000/api/events/");
            await axios.get("https://vietnamesesudbury.org/api/events");
            setEventList(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    /*const fetchEvent = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/event/"+eventId);
            console.log(response.data[0]);
            console.log("Data length: "+response.data.length)
            if(response.data.length !== 0) setEvent(response.data[0]);
        } catch (err) {
            console.log(err);
        }
    }*/
    
    useEffect(() => {
        fetchEvents();
    }, []);
    
    return(
        <>
        <div className="flex flex-col items-center gap-y-10 p-5 pt-10 mb-30 bg-[#FAF5EF]
                        md:p-10
                        lg:p-30 lg:flex-row lg:justify-center lg:items-start lg:gap-x-35">
            {/* event cards */}
            <section className="flex flex-col gap-4
                                md:gap-[1.5rem]
                                lg:items-center lg:w-fit">
                {/* title */}
                <h1 className="text-[#672F2F]/90 mb-[1rem]
                                md:text-[2.5rem] md:self-start
                                "> Upcoming Events </h1>
                <EventList setEventList={setEventList} eventList={eventList} setEvent={setEvent}/>
            </section>

            <hr className="self-center w-1/2 border-0.5 border-gray-300 
                           lg:hidden"/>

            {/* event picked - to be made into an event card layout */}
            <div className="flex flex-col bg-[#FAF5EF]
                            lg:w-1/2">
                <div className="flex flex-col justify-center items-start gap-y-5 tracking-wide shadow-md shadow-black/40">
    
                    {/* Thumbnail */}
                    <section className='relative w-full'>
                        {/* date */}
                        <div className='absolute top-[1rem] left-[1rem]'>
                            <div className="flex flex-col justify-center items-center p-1 w-[4rem] h-[4rem] rounded-[0.5rem] bg-[#FAF5EF]/90">
                                <h1 className="text-[2rem] text-[#672F2F]/90"> {event.date.split(',')[1].split(' ')[1]} </h1>
                                <p className="text-[1rem] font-semibold text-[#001524]/70"> {event.date.split(',')[1].split(' ')[2]} </p>
                            </div>
                        </div>
                        {/* img */}
                        <img src={event.thumbnail_link}
                            alt="" 
                            className='h-[17rem] w-full object-cover object-center bg-no-repeat
                                    md:h-[30rem]
                                    lg:h-[20rem]'/>
                    </section>

                    {/* Title */}
                    <h1 className="text-[2rem] text-[#672F2F]/90 px-5">
                        {event.title}
                    </h1>

                    {/* Details */}
                    <section className="flex flex-col gap-1 text-nowrap px-5
                                        lg:w-1/2">
                        {/* location */}
                        <div className='flex flex-row gap-x-3 pl-0.7'> 
                            <img src={EventLocationLogo}/>
                            <p className="text-[1rem] text-[#121212]/90"> {event.location} </p> 
                        </div>
                        {/* date */}
                        <div className='flex flex-row gap-x-2.5'>
                            <img src={EventDateLogo}/>
                            <p className="text-[1rem] text-[#121212]/90"> {event.date} </p>
                        </div>
                        {/* whose */}
                        <div className='flex flex-row gap-x-1.5'>
                            <img src={EventWhoseLogo}/>
                            <p className="text-[1rem] text-[#121212]/90"> By <b>{event.organizer}</b> </p>
                        </div>
                    </section>

                    {/* Event Description */}
                    <p className="text-[1.1rem] text-[#672F2F]/70 leading-7 tracking-wider px-5
                                    lg:w-2/3">
                        {event.description}
                    </p>

                    {/* buttons */}
                    <section className='flex flex-col gap-y-4 mt-[0.5rem] w-full p-5 pb-7'>
                        <button className="gradient-button-1 w-1/2 h-[2.5rem] text-[0.8rem]
                                            md:w-1/5"> Get Ticket! </button>
                        <button className="secondary-button w-1/2 h-[2.5rem] text-[0.8rem]
                                            md:w-1/5"> Past Gallery </button>
                    </section> 
                </div>
            </div>
        </div>
        </>
    );
}