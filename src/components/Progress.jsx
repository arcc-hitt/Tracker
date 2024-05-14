import React from 'react'
import { useSelector } from 'react-redux';

const ProgressBar = ({ progress }) => {
    const progressBarWidth = (209.32 * progress) / 100;
    return (
        <div className="relative w-[209.32px] h-[2.37px] rounded-tl-[9.48px] bg-[#FFFFFF33]">
            <div
                className="absolute top-0 left-0 h-[2.37px] rounded-tl-[9.48px] bg-[#FFFFFF]"
                style={{ width: `${progressBarWidth}px` }}
            />
        </div>
    );
};

const Progress = () => {
    const goals = useSelector((state) => state.goals);
    const completedGoals = goals.filter(goal => goal.ticked).length;
    const totalGoals = goals.length;
    const progressPercentage = (completedGoals / totalGoals) * 100;
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-[312px] h-[78px] gap-0 rounded-2xl bg-custom-radial flex justify-center items-center'>
            <div className='w-[54.5px] h-[55.73px] flex justify-center items-center mr-2'>
                    <div className='relative w-full h-full flex justify-center items-center'>
                        <img
                            src="/assets/bullseye.png"
                            alt="icon"
                            className='absolute mix-blend-color'
                            style={{ mixBlendMode: 'multiply' }}
                        />
                        <div
                            className='absolute w-full h-full rounded-full'
                            style={{ backgroundColor: '#8cc4f8', opacity: 1 }}
                        />
                        <div
                            className='absolute w-[31.28px] h-[30.77px] rounded-full'
                            style={{ backgroundColor: '#FFFFFF', opacity: 1, boxShadow: '0 6px 10px 6px rgba(14, 119, 217, 0.5)' }}
                        />
                        <div
                            className='absolute w-[20.34px] h-[19.94px] rounded-full'
                            style={{ backgroundColor: '#8cc4f8', opacity: 1 }}
                        />
                        <div
                            className='absolute w-[11.6px] h-[11.36px] rounded-full'
                            style={{ backgroundColor: '#FFFFFF', opacity: 1 }}
                        />
                    </div>
                </div>
                <div className='w-[209.32px] h-auto min-h-[51.37px] gap-3 flex flex-col'>
                    <div className='w-auto h-auto min-h-[26px] min-w-[196px] gap-2 flex flex-col'>
                        <span className='w-[192px] h-[10px] font-dm-sans text-sm font-bold leading-[18.55px] text-left text-[#FFFFFF]'>
                            Your daily goal almost done
                        </span>
                        <span className='w-[192px] h-[8px] font-dm-sans text-xs font-normal leading-[18.55px] text-left text-[#E1EAF2]'>
                            {completedGoals} of {totalGoals} completed
                        </span>
                    </div>
                    <div className='w-auto min-w-[209.32px] h-auto min-h-[13.37px]'>
                        <div>
                            <ProgressBar progress={progressPercentage}/>
                        </div>
                        <div className="flex justify-end">
                            <span className="w-[22px] h-[7px] text-right font-dm-sans text-[10px] font-medium leading-[13.02px] text-[#FFFFFF]">
                                {Math.round(progressPercentage)}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress