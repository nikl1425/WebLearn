import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Book from 'public/book.png';


const NavItem: FC<{ linkRef: string, name: string }> = ({ linkRef, name }) => {
    return (
        <>
            <li className="inline mx-2">
                <Link href={linkRef}>
                    {name}
                </Link>
            </li>
        </>
    )
}

const NavLinkContainer: FC = () => {
    return (
        <div className=" mx-3">
            <ul className="inline justify-center">
                <NavItem name="about" linkRef="/about" />
                <NavItem name="course" linkRef="/course" />
            </ul>
        </div>
    )
}

const NavLogo: FC = () => {
    return <Image className="my-auto" alt="book" src={Book} width={40} />
}

const NavCompanyWrapper: FC = () => {
    return (
        <div className=" justify-center mx-3 flex flex-row h-full">
            <NavLogo />
            <h1 className="  my-auto">Learn4Fun</h1>
        </div>
    )
}



const NavBar: FC = () => {
    return (
        <div className=" h-12 bg-blue-100 flex">
            <div className="flex-intial">
                <NavCompanyWrapper />
            </div>
            <div className="flex-auto">

            </div>
            <div className=" flex-intial h-full">
                <NavLinkContainer />
            </div>
        </div>
    )
}

export default NavBar;