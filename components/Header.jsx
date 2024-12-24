"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MobileNav from './MobileNav';

export default function Header() {
    const [open, setOpen] = useState(false);
    const navLinks = [
        {
            label: "Course",
            linkTo: '/'
        },
        {
            label: "Info",
            linkTo: '/'
        },
        {
            label: "Testimonial",
            linkTo: '/'
        },
        {
            label: "Categories",
            linkTo: '/'
        }
    ]

    return (
        <nav className='w-full'>

            <ul className='w-full flex justify-between items-center'>
                <li>
                    <Link href={"/"}>
                        <Image alt='logo-image' width={215} height={80} className='animate-fadeIn w-[150px] md:w-[215px] md:h-[80px] object-contain' src="./assets/logo.svg" /></Link>
                </li>
                {
                    navLinks?.map((item, i) => <ul key={i} className='text-gray-light animate-fadeIn cursor-pointer text-[24px] font-normal hidden xl:block hover:text-primary hover:font-semibold transition-all duration-300 ease-in-out'><Link href={item?.linkTo}>{item?.label}</Link></ul>)
                }
                <div className='xl:hidden'>
                    <Image onClick={() => setOpen(true)} alt='logo-image' width={34} height={34} className='object-contain' src="./assets/images/landing-page/header/menu.svg" />
                </div>

                <MobileNav open={open} onClose={() => setOpen(false)} />
            </ul>
        </nav>
    )
}
