import React, { FC, useState } from "react";
import Button from "./button";
import {RiCloseCircleLine} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi';
import useStore from '../../store/store';
import { useRouter } from "next/router";
import Link from 'next/link';
import { ROUTES_CONFIG } from "../constants";
import { IconType } from "react-icons/lib";


const UserContainer: FC<{show: boolean}> = ({show}) => {
    return (
        <>
            <div className="flex items-center flex-col mt-14 mb-4">
                <div className={`transition-width duration-700 ease-in-out ${ show ? 'w-28' : 'w-0'}`}>
                    {show && <div className="rounded-full bg-green-400 h-28 flex mb-2">
                        <span className="my-auto mx-auto text-white font-bold tracking-wider text-lg">NHR</span>
                    </div>
                    }  
                </div>
                {show && <Button style={{bgColor: 'info', hoverColor: 'info', textColor: 'white', size: 'sm' }} type='button' onclick={() => console.log("hej")} buttonText='Login' />} 
            </div>
        </>
    )
}

const CloseOpenHandler : FC<{handler: () => void, state: boolean}> = ({handler, state}) => {
    return (
        <div className="w-full flex flex-row-reverse">
            <button onClick={handler} className="px-2">
                {state === true ? <RiCloseCircleLine className="text-indigo-200" size={30}/> : <GiHamburgerMenu className="text-indigo-200" size={30}/>}
            </button>
        </div>
    )
}

const NavLink : FC<{name: string, route: string, symbol: IconType}> = ({name, route, symbol}) => {
    const Icon = symbol;

    return (
        <>
            <div>
                <Link href={"/" + route}>
                    <div>
                        <div>
                            {<Icon className="text-green-400" size={25} />}
                        </div>
                        <span>
                            {name}
                        </span>
                    </div>
                </Link>
            </div>
        </>
    )
}

const NavLinkList : FC = () => {
    const routes = ROUTES_CONFIG;

    return (
        <>
            <div>
                <ul>
                    {routes.map((route) => <NavLink name={route.name} route={route.route} symbol={route.symbol}/>)}
                </ul>
            </div>
        </>
    )
}

const SideBar: FC = () => {
    const [open, setOpen] = useState(true);
    const sidebarHandler = useStore((state => state));
    const setReverseOpenState = () => {
        setOpen(!open);
    }

    return (
        <div className={`h-full bg-gray-800`}>
            <CloseOpenHandler handler={sidebarHandler.setSidebarOpen} state={open} />
            <UserContainer show={sidebarHandler.sidebarOpen}/>
            <NavLinkList />
        </div>
    )
}

export default SideBar;