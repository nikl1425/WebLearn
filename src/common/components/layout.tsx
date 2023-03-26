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
            <div className="fixed bottom-0 top-0">
                <SideBar />
            </div>
            <main className="ml-56 h-full">
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
            


        </>
    )
}

export default Layout;