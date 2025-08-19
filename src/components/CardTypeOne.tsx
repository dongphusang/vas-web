import "./style.css";

export default function CardTypeOne({ name = "empty" } : { name?: string }) {
    return (
        <>
            {/*Background*/}
            <div className="flex flex-col jutify-center items-center p-3 gap-y-3 min-h-80 min-w-80 bg-[#FAF5EF] rounded-2xl">
                {/*image*/}
                <div className="bg-[#889E73]/60 rounded-2xl w-full h-full"></div>
                <p className="text-[#A94A4A] font-semibold"> {name} </p>
            </div>
        </>
    );
}
