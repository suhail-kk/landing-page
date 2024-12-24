import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function MobileNav({ open, onClose }) {
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, onClose]);

    const navLinks = [
        { label: "Course", linkTo: "/" },
        { label: "Info", linkTo: "/" },
        { label: "Testimonial", linkTo: "/" },
        { label: "Categories", linkTo: "/" },
    ];

    return (
        <div
            className={`fixed z-50 top-0 left-0 w-screen h-screen transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
            {/* Overlay */}
            {open && (
                <div
                    className="absolute bg-black opacity-45 top-0 left-0 w-screen h-screen"
                    onClick={onClose}
                ></div>
            )}

            {/* Drawer */}
            <div
                ref={navRef}
                className={`absolute top-0 right-0 h-screen w-[300px] bg-white shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-5">
                    <ul className="space-y-4">
                        {navLinks.map((item, i) => (
                            <li
                                key={i}
                                className="text-gray-light text-lg font-medium cursor-pointer"
                            >
                                <Link href={item.linkTo} onClick={onClose}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
