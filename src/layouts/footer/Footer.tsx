import LeafletMap from "../../components/LeafletMap"
import facebookIcon from "../../assets/footer-facebook-icon.svg"
import locationIcon from "../../assets/footer-location-icon.svg"
import mailIcon from "../../assets/footer-mail-icon.svg"

export default function LandingGallery() {
    return <footer className="flex flex-col p-5 pt-10 gap-y-[3rem] bg-[#001524]"> 
        {/* Title & Description */}
        <section className="flex flex-col gap-y-[1rem]
                            lg:w-1/2">
            <h1 className="text-[2.5rem] text-[#ff7d00]/90"> Contact Us! </h1>
            <p className="text-[1rem] text-[#DDF1FF]/70 leading-7"> Got questions or ready to start a project? We’re all ears! Reach out to  us today to discuss your ideas, schedule a consultation, or simply say  hello. We can’t wait to hear from you! </p>
        </section>
        
        {/* Social Links */}
        <div className=" flex flex-col gap-y-[1rem]">
            {/* facebook */}
            <a className="flex flex-row gap-x-[1rem]" href="https://www.facebook.com/VietnameseAssociationSudbury" target="_blank"> 
                <img src={facebookIcon} alt="loading" className="w-[1.5rem] "/>
                <p className="text-[1rem] text-[#DDF1FF]/90"> Vietnamese Sudbury Association </p> 
            </a>
            {/* location */}
            <a className="flex flex-row gap-x-[1rem]" href="https://www.google.com/maps/place/Vietnamese+Association+Sudbury/@46.491537,-80.9957517,16z/data=!3m2!4b1!5s0x4d2faae85c8ae613:0xc54b61da91da619!4m6!3m5!1s0x4d2faae8683aaaab:0x99b65ae2cd6e3df7!8m2!3d46.491537!4d-80.9931768!16s%2Fg%2F11wmykyk10?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank"> 
                <img src={locationIcon} alt="loading" className="w-[1.5rem]"/>
                <p className="text-[1rem] text-[#DDF1FF]/90"> 96 Larch Street, Suite 101, Sudbury, ON, P3E 1B9 </p> 
            </a>
            {/* mail */}
            <a className="flex flex-row gap-x-[1rem]"> 
                <img src={mailIcon} alt="loading" className="w-[1.5rem]"/>
                <p className="text-[1rem] text-[#DDF1FF]/90"> vietnamesesudbury@gmail.com </p> 
            </a>
        </div>

        {/* Leaflet Map */}
        <section>
            <LeafletMap/>
        </section>
    </footer>
}