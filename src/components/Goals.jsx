import React from 'react';
import Header from './Header';
import { toggleTick } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import { arrows } from '../constants';

const Goal = ({ goal, toggleTick }) => {
    return (
        <div className='w-[312px] h-[65px] rounded-[12px] border-[0.97px] border-[#282828] bg-[#282828] flex items-center justify-center'>
            <div className='w-auto min-w-[282px] h-auto min-h-[32px] flex items-center justify-between'>
                <div className='w-[32px] h-[32px] rounded-[6.4px] bg-[#3D3D3D] flex items-center justify-center'>
                    <img src={goal.icon} alt='Goal icon' className='w-[18px] h-[16.96px]' />
                </div>
                <div className='w-[238px] h-auto min-h-[32px] flex justify-between items-center pl-[15px]'>
                    <div className='w-auto min-w-[154px] h-auto min-h-[11px] gap-[10px]'>
                        <span className='font-dm-sans text-[16px] font-medium leading-[20.83px] text-left text-[#EBE9E8]'>
                            {goal.label}
                        </span>
                    </div>
                    <div
                        className='w-[32px] h-[32px] rounded-[9.6px] gap-2 flex items-center justify-center cursor-pointer'
                        style={{ backgroundColor: goal.tickColor }}
                        onClick={toggleTick}
                    >
                        {goal.ticked && (
                            <div className='w-[12.8px] h-[12.8px] flex items-center justify-center'>
                                <img src='/assets/tick.svg' alt='Tick' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Swiper = ({ }) => {
    return (
        <div className='w-[312px] h-[50px] rounded-[38.03px] bg-[#D15439] shadow-[0px 1.55px 17.07px 0px #1115332E] flex justify-between items-center py-1 pl-1 pr-3'>
            <div className='w-[40px] h-[40px] rounded-full bg-custom-gradient flex justify-center items-center'>
                <span className='w-[30px] h-auto min-h-[7px] font-montserrat text-[10px] font-bold leading-[12.19px] tracking-[0.01em] text-center text-[#D15439]'>
                    Track
                </span>
            </div>
            <div className='w-[149px] h-[10px] flex justify-center items-center'>
                <span className='font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.01em] text-center text-[#FFFFFF]'>
                    Swipe to track all
                </span>
            </div>
            <div className='w-[45.01px] h-auto min-h-[50px] flex justify-between items-center'>
                {arrows.map((arrow, index) => (
                    <img key={index} src={arrow.path} alt="arrow" />
                ))}
            </div>
        </div>
    );
};

const Goals = () => {
    const goals = useSelector((state) => state.goals);
    const dispatch = useDispatch();

    return (
        <div className='w-auto min-w-[312px] h-auto min-h-[475px] gap-4 flex flex-col items-center mt-3'>
            <Header />
            <div className='w-auto min-w-[312px] h-auto min-h-[365px] gap-[10px] flex flex-col justify-between items-center'>
                {goals.map((goal) => (
                    <Goal key={goal.id} goal={goal} toggleTick={() => dispatch(toggleTick(goal.id))} />
                ))}
            </div>
            <div>
                <Swiper />
            </div>
        </div>
    );
};

export default Goals;