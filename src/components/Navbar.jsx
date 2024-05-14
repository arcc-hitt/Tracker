import React from 'react'
import { navLinks } from '../constants';

const NavbarItem = ({ icon, text }) => {
    return (
        <button type='button' className="w-auto h-auto min-h-[49px] min-w-[40px] gap-[2px] flex items-center justify-center flex-col cursor-pointer">
            <div className='w-[40px] h-[40px] rounded-[4.09px]'>
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <img src={icon} alt="navIcon" />
                </div>
            </div>
            <span className="text-[10px] text-navText font-normal text-center leading-[23px]">{text}</span>
        </button>
    );
}

const Navbar = () => {
    return (
        <div className='w-full h-[70px] fixed bottom-0 flex justify-center bg-alt shadow-[0px -6px 12px 0px #1E1E1E40]'>
            <div className='w-[300px] h-auto min-h-[49px] justify-between flex flex-row shadow-[0px 2px 8px 0px #1F1F1F40]'>
                {navLinks.map((item, index) => (
                    <NavbarItem key={index} icon={item.icon} text={item.label} />
                ))}
            </div>
        </div>
    )
}

export default Navbar

/*
width: 14.32px;
height: 21.48px;
top: 7.33px;
left: 2.04px;
gap: 0px;
opacity: 0px;

*/