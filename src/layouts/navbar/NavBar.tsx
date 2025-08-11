import vas_logo from "../../assets/vas-logo.png";
import "./NavBar.css";

export default function NavBar() {
    return <nav className="nav">
        <a href="/"><img src={vas_logo} alt=""/></a>
        <ul>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/memory">Memory</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/join">Join us</a></li>
            <li><a href="/donate">Donate Now!</a></li>
        </ul>
    </nav>
}