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

/*
width: 48.02px;
height: 47.68px;
top: 12.64px;
left: 17px;
width: 31.28px;
height: 30.77px;
top: 21.09px;
left: 25.18px;
gap: 0px;
opacity: 0px;

*/

const Progress = () => {
    const goals = useSelector((state) => state.goals);
    const completedGoals = goals.filter(goal => goal.ticked).length;
    const totalGoals = goals.length;
    const progressPercentage = (completedGoals / totalGoals) * 100;
    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <div className='w-[312px] h-[78px] gap-0 rounded-2xl bg-custom-radial flex justify-center items-center'>
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