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
            <ul className="inline px-4 font-semibold">
                <NavItem name="home" linkRef="/" />
                <NavItem name="course" linkRef="/course" />
                <NavItem name="about" linkRef="/about" />
            </ul>
        </div>
    )
}

const NavLogo: FC = () => {
    return <Image className="my-auto" alt="book" src={Book} width={40} />
}

const NavCompanyWrapper: FC = () => {
    return (
        <div className=" justify-center mx-3 flex flex-row h-full right">
            <NavLogo />
            <h1 className=" px-4 text-lg my-auto">Learn<span className=" font-bold text-green-400 text-xl px-0 mx-0">4</span>Fun</h1>
        </div>
    )
}



const NavBar: FC = () => {
    return (
        <div className=" h-12 flex">
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
    )
}

export default NavBar;