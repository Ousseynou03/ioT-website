import React, { useEffect, useState } from "react";
import logo from '../assets/iot.png';
import { Link } from "react-scroll";

import { FaXmark, FaBars } from "react-icons/fa6";
const NavBar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toggle Menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        const handleScrool = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScrool);
        return ()=>{
            window.addEventListener('scroll', handleScrool);
        }
    });

    const navItems = [
        {link:"Home", path:"home"},
        {link:"Security", path:"security"},
        {link:"Confort", path:"confort"},
        {link:"Control", path:"automatisation"},
        {link:"System", path:"system"},
    ]
    
    return(
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300":""}`}>
            <div className="flex justify-between items-center text-base gap-8">
                <a href="" className="text-2xl font-semibold flex items-center space-x-3">
                    <img src={logo} alt="" className="w-10 inline-block items-center"/>
                    <span className="text-[#263238]">IOT</span>
                </a>

                {/* nav items for large devices*/}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link  to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray900 hover:text-brandPrimary">
                            {link}
                    </Link>)
                    }
                </ul>
                {/* btn for large devices */}
                <div className="space-x-12 hidden lg:flex items-center">
                    
                    <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300
                    rounded hover:bg-neutralDGrey">
                        Contactez nous
                    </button>
                </div>
                {/* menu btn for only mobile devices */}
                <div className="md:hidden">
                    <button
                    onClick={toggleMenu}
                    className="text-neutralDGrey focus:outline-none focus:text-gray-500">
                        {
                            isMenuOpen ? (<FaXmark className="h-6 w-6 text-neutralDGrey"/>) : (<FaBars 
                                className="h-6 w-6 text-neutralDGrey"/>)
                        }
                    </button>
                </div>
            </div>

            {/** nav item for mobile devices*/}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen?"block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                navItems.map(({link, path}) => <Link  to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-white hover:text-brandPrimary">
                            {link}
                    </Link>)
                    }
            </div>
        </nav>
    </header>
    );
};
export default NavBar;