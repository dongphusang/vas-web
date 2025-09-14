import "./style.css";

export default function CardTypeOne({ name = "empty", link = "empty" } : { name?: string, link?: string }) {
    return (
        <>
            {/*Background*/}
            <div className="flex flex-col jutify-center items-center p-3 gap-y-3 h-fit w-[22rem] bg-[#FAF5EF] rounded-2xl
                            md:w-[30rem]
                            lg:w-[30rem]">
                {/*image*/}
                <div className="bg-[#889E73]/60 rounded-2xl p-1"> <img src={link} alt=".." className="rounded-2xl"/> </div>
                <p className="text-[#A94A4A] font-semibold"> {name} </p>
            </div>
        </>
    );
}
