import React from 'react'

export default function Gallery() {

    const images = [
        "/assets/images/landing-page/gallery/1.png",
        "/assets/images/landing-page/gallery/2.png",
        "/assets/images/landing-page/gallery/3.png",
        "/assets/images/landing-page/gallery/4.png",
        "/assets/images/landing-page/gallery/5.png",
        "/assets/images/landing-page/gallery/6.png",
    ]
    return (
        <div className=' bg-[url(./assets/images/landing-page/gallery/gallery-bg.png)] px-20 md:px-5 lg:px-20 py-14 flex overflow-hidden justify-center items-center bg-[#F1F6FE] 2xl:min-w-[700px] w-full h-screen'>
            <div className='grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 '>
                {
                    images?.map((item, i) => <img src={item} className='animate-fadeIn w-full h-full object-contain' key={i} />)
                }
            </div>
        </div>
    )
}
