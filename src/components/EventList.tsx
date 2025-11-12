import "./style.css";
import clockIcon from '../assets/clock-icon.svg';

export default function EventList ({eventList, setEventList, setEvent} : {eventList : any, setEventList:any, setEvent:any})  {
    setEventList;
    return (
        <>
            {eventList.map((event : any) => (
                <div key={event.id} className="flex flex-row p-2 rounded-sm bg-[#001524]/5 w-fit hover:bg-amber-500" onClick={() => {setEvent(event)}}>
                    {/* date */}
                    <section className="flex flex-col justify-center items-center p-1 mr-[1rem] rounded-sm bg-[#672F2F]/70 w-[4rem]">
                        <h1 className="text-[2rem] text-[#FAF5EF]/90"> {event.date.split(',')[1].split(' ')[1]} </h1>
                        <p className="text-[1rem] font-semibold text-[#001524]/70"> {event.date.split(',')[1].split(' ')[2]} </p>
                    </section>
                    {/* name & time */}
                    <section className="self-center flex flex-col justify-start items-start mr-[3rem]">
                        <p className="text-[1rem] font-medium"> {event.title} </p>
                        <div className="flex flex-row gap-x-2">
                            <img src={clockIcon} className="w-[1rem]"></img>
                            <p className="text-[1rem] text-nowrap"> {event.date.split(',')[2]} </p>                      
                        </div>
                    </section>
                </div>
            ))}     
        </>
    );
}

