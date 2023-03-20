import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Book from 'public/book.png';


const NavItem: FC<{ linkRef: string, name: string }> = ({ linkRef, name }) => {
    return (
        <>
            <li className="inline mx-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-green-400 before:absolute before:left-0 before:bottom-0 py-1">
                <Link href={linkRef}>
                    {name}
                </Link>
            </li>
        </>
    )
}

const NavLinkContainer: FC = () => {
    return (
        <div className=" h-full flex items-center ">
            <ul className="inline px-6 font-regular">
                <NavItem name="Hjem" linkRef="/" />
                <NavItem name="Kurser" linkRef="/course" />
                <NavItem name="Information" linkRef="/about" />
            </ul>
        </div>
    )
}

const NavLogo: FC = () => {
    return <Image className="my-auto" alt="book" src={Book} width={40} />
}

const NavCompanyWrapper: FC = () => {
    return (
        <div className=" justify-center flex flex-row h-full right">  
            <h1 className=" text-lg my-auto">Learn<span className=" font-bold text-green-400 text-xl px-0 mx-0">4</span>Fun</h1>
        </div>
    )
}

/**
 * 
 * <div className=" h-12 flex">
            <div className=" flex-initial">
                <NavCompanyWrapper />
            </div>
            <div className="flex-auto">

            </div>
            <div className=" flex-initial h-full">
                <NavLinkContainer />
                <div className=" w-10 h-full"/>
            </div>
        </div> 
 * 
 */

const NavBar: FC = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <div className=" flex-initial">
                        <NavCompanyWrapper />
                    </div>
                </a>

                <NavLinkContainer />

            </div>
        </nav>
    )
}

export default NavBar;