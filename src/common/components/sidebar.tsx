import React, { FC, useState } from "react";
import Button from "./button";
import {RiCloseCircleLine} from 'react-icons/ri';
import {GiHamburgerMenu} from 'react-icons/gi';
import useStore from '../../store/store';


const UserContainer: FC = () => {
    return (
        <>
            <div className="flex items-center flex-col mt-14 mb-4">
                <div className="rounded-full bg-green-300 w-28 h-28 flex mb-2">
                    <span className="my-auto mx-auto text-white font-bold tracking-wider text-lg">NHR</span>
                </div>

                <Button style={{bgColor: 'info', hoverColor: 'info', textColor: 'white', size: 'sm' }} type='button' onclick={() => console.log("hej")} buttonText='Login' />
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

const SideBar: FC = () => {
    const [open, setOpen] = useState(true);
    const sidebarHandler = useStore((state => state));
    const setReverseOpenState = () => {
        setOpen(!open);
    }

    return (
        <div className={`h-full bg-gray-800`}>
            <CloseOpenHandler handler={sidebarHandler.setSidebarOpen} state={open} />
            <UserContainer />
        </div>
    )
}

export default SideBar;