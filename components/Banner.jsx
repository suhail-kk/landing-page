import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='flex flex-col gap-12 py-10 md:py-0 justify-center h-full'>
            <div>
                <p className='text-primary animate-fadeInUp uppercase text-[36px] lg:text-[48px] xl:text-[64px] font-bold md:leading-[87px] md:font-semibold max-w-[624px] flex items-center animate-fade-in'>
                    Learn graphics <br /> design for life
                    <span className='ml-2 inline-block'>
                        <Image
                            alt='logo-image'
                            width={55}
                            height={55}
                            className='object-contain w-[25px] h-[25px] md:w-[55px] md:h-[55px] max-w-fit'
                            src="/assets/images/landing-page/banner/star.svg"
                        />
                    </span>
                </p>

                <p className='text-secondary text-base md:text-lg mt-5 md:mt-2 font-normal max-w-[600px] animate-fadeInUp'>Stay Informed, Stay Ahead: Unveiling the Future of Technology, Gadgets, and Innovation<br /> Your Gateway to the Digital Universe - Where Innovation Meets Insight</p>
            </div>
            <div className='flex gap-4 md:gap-10 items-center'>
                <div>
                    <p className="text-[21px] md:text-[38px] font-semibold md:font-normal text-tertiary">5.1K</p>
                    <p className="animate-fadeIn text-xs md:text-[21px] md:leading-[30px] font-normal text-tertiary">
                        Students All<br /> Over World
                    </p>
                </div>
                <div className='flex'>
                    <Image alt='student-image-1' width={94} height={94} className='object-cover w-[53px] h-[53px] md:w-[94px] md:h-[94px] border-white border-[5px] z-0 rounded-full' src="/assets/images/landing-page/banner/students/3.png" />
                    <Image alt='student-image-2' width={94} height={94} className='object-cover w-[53px] h-[53px] md:w-[94px] md:h-[94px] border-white border-[5px] z-10 -ml-[25px] md:-ml-[45px] rounded-full' src="/assets/images/landing-page/banner/students/2.png" />
                    <Image alt='student-image-3' width={94} height={94} className='object-cover w-[53px] h-[53px] md:w-[94px] md:h-[94px] border-white border-[5px] z-20 -ml-[25px] md:-ml-[45px] rounded-full' src="/assets/images/landing-page/banner/students/1.png" />
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <button className='bg-green-primary hover:opacity-70 transition-all duration-300 ease-in-out flex justify-center items-center md:font-semibold text-white text-base font-bold md:text-[25px] py-3 xl:py-5 px-8 md:px-14 rounded-full'>
                    Book Your Seat
                </button>

                <div className='flex items-center gap-4'>
                    <button>
                        <Image alt='play-button' width={68} height={68} className='w-[41px] h-[41px] md:w-[68px] md:h-[68px] object-contain rounded-full hover:opacity-70 transition-all duration-300 ease-in-out' src="/assets/images/landing-page/banner/play.svg" />
                    </button>
                    <p className='animate-fadeIn font-semibold text-base md:text-[25px]'>See Journey</p>
                </div>
            </div>
        </div>
    )
}
