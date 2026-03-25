import { useState } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import vas_logo from "../../assets/vas-logo.png"
import "./NavBar.css"
import { Link, NavLink } from "react-router"
import HamburgerNav from "../../components/HamburgerNav.tsx" 

export default function NavBar() {
    const [navigationOpen, setNavigationOpen] = useState(false);

    const toggleHamburg = () => {
        if (navigationOpen) 
        {
            setNavigationOpen(false);
            enablePageScroll();
        }
        else
        {
            setNavigationOpen(true);
            disablePageScroll();
        }
    }

    const handleHamburgClick = () => {
        if(!navigationOpen) return;

        enablePageScroll();
        setNavigationOpen(false);
    }

    return (
    <div className="sticky top-0 left-0 z-50 w-full border-b border-neutral-600 
                    lg:bg-transparent">
        <div className="flex justify-between items-center px-3 lg:px-7.5 backdrop-blur-sm">
            <NavLink to="/">
                <section className="flex flex-row w-full justify-center items-center gap-[1rem]">
                    <img src={vas_logo} alt="" className="w-[3.5rem]"/> 
                    <p className="hidden text-[1rem] text-black font-bold lg:block"> Vietnamese Association Sudbury </p>
                </section>
            </NavLink>

            <nav className={`${navigationOpen ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 leading-5
                            lg:static lg:flex lg:bg-transparent`}>                
                <div className='relative z-2 flex flex-col items-end justify-center m-auto w-full gap-5 border-1 border-neutral-600 shadow-2xs bg-white/90
                                lg:flex-row lg:border-0 lg:bg-transparent lg:shadow-none'>
                    <Link onClick={handleHamburgClick} to="/team">Our Team</Link>
                    <Link onClick={handleHamburgClick} to="/memory">Memory</Link>
                    <Link onClick={handleHamburgClick} to="/programs">Programs</Link>
                    <Link onClick={handleHamburgClick} to="/join">Join us</Link>
                    <Link onClick={handleHamburgClick} to="/donate">Donate Now!</Link>
                </div>    
                
            </nav>
            
            <button className="ml-auto lg:hidden px-3"
                    onClick={toggleHamburg}>
                <HamburgerNav navigationOpen={navigationOpen}/>
            </button>
        </div>
    </div>
    );
}
