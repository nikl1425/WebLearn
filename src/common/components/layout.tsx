import React, { FC } from "react";
import NavBar from "./navbar";
import type { ReactNode } from "react";
import SideBar from './sidebar'
import useStore from '../../store/store';

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const sidebarOpen = useStore((state => state.sidebarOpen));


    return (
        <>
            <div className="h-full">
                <div className={`transition-width duration-700 ease-in-out fixed bottom-0 top-0 left-0  ${sidebarOpen ? 'w-56' : 'w-20'}`}>
                    <SideBar />
                </div>
                <main className={`h-full transition-spacing duration-700 ease-in-out ${sidebarOpen ? 'ml-56' : 'ml-20'}`}>
                    <div className=" flex flex-col h-full">
                        <header className="flex-1">
                            <NavBar />
                        </header>

                        <main className=" grow h-full">
                            {children}
                        </main>

                        <footer className=" flex-initial">

                        </footer>
                    </div>
                </main>
            </div>




        </>
    )
}

export default Layout;