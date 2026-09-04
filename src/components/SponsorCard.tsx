import "./style.css";

{/* description goes here */}
export default function SponsorCard({ imageLocation = "empty", link="empty"} : { imageLocation?: string, link?: string }) {
    return (
        <>
            <div className="flex justify-center items-center px-1 py-2 w-[16rem] h-[11rem] border-t-6 border-t-[#672F2F] bg-[#ffffff] object-contain shadow-[0_8px_16px_#F0E2D1]"> 
                <a href={link} target="_blank"><img src={imageLocation} alt="loading" className="w-[12rem]"/></a>
            </div>
        </>
    );
}