import vas_logo from "../../assets/vas-logo.png"
import "./NavBar.css"
import { Link, NavLink } from "react-router"

export default function NavBar() {
    return <nav className="nav">
        <NavLink to="/"><img src={vas_logo} alt=""/></NavLink>
        <ul>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/memory">Memory</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/join">Join us</Link></li>
            <li><Link to="/donate">Donate Now!</Link></li>
        </ul>
    </nav>
}