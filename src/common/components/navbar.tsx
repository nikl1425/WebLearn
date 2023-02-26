import React, { FC } from "react";
import Link from "next/link";



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
        <div className=" mx-3 my-auto">
            <ul className="inline">
                <NavItem name="about" linkRef="/about" />
                <NavItem name="course" linkRef="/course" />
            </ul>
        </div>
    )
}

const NavLogo : FC = () => {
    return (
        <>
        </>
    )
}

const NavBar: FC = () => {
    return (
        <div className=" h-12 bg-blue-100 flex">
            <div className="flex-intial">

            </div>
            <div className="flex-auto"></div>
            <NavLinkContainer />
        </div>
    )
}

export default NavBar;