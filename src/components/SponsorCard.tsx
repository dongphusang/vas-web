import "./style.css";

{/* description goes here */}
export default function SponsorCard({ imageLocation = "empty", link="empty"} : { imageLocation?: string, link?: string }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center px-2 py-1 w-[16rem] h-[11rem] border-t-6 border-t-[#672F2F] bg-[#ffffff]"> 
                <a href={link} target="_blank"><img src={imageLocation} alt="loading"/></a>
            </div>
        </>
    );
}