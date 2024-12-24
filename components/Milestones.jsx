import React from 'react'

export default function Milestones() {
    const mileStones = [
        {
            value: "6409",
            label: 'Succes Story'
        },
        {
            value: "124",
            label: 'Expert Instructor'
        },
        {
            value: "54.749",
            label: 'Hours Tutored'
        }
    ]

    return (
        <div className='bg-orange-primary px-5 md:px-10 xl:px-20 py-10'>
            <ul className='flex justify-between items-center'>
                {
                    mileStones?.map((item, i) => <div key={i} className='flex gap-6 md:gap-3 items-center'>
                        <div className={`h-[80px] md:h-[120px] w-1 bg-yellow-primary ${i === 0 && "hidden lg:block"}`} />
                        <div>
                            <p className='text-white animate-fadeIn text-[29px] md:text-[48px]  xl:text-[56px] font-semibold'>{item?.value}</p>
                            <p className='text-white animate-fadeInUp text-base md:text-[24px] font-normal'>{item?.label}</p>
                        </div>
                    </div>)
                }
            </ul>
        </div>
    )
}
