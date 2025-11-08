import { useState } from "react";
import vas_logo from "../../assets/vas-logo.png"
import "./NavBar.css"
import { Link, NavLink } from "react-router"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return <nav className="nav">
        <NavLink to="/">
            <section className="flex flex-row justify-center items-center gap-[1rem]">
                <img src={vas_logo} alt="" className="w-[3.5rem]"/> 
                <p className="text-[1rem] text-black font-bold"> Vietnamese Association Sudbury </p>
            </section>
        </NavLink>

        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1" onClick={() => {setIsOpen(!isOpen);console.log(isOpen)}}>
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
        </button>

        <ul className={`${isOpen ? 'block' : 'hidden'}`}>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/memory">Memory</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/join">Join us</Link></li>
            <li><Link to="/donate">Donate Now!</Link></li>
        </ul>

        
    </nav>
}
