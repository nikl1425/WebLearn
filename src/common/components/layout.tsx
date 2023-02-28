import React, { FC } from "react";
import NavBar from "./navbar";
import type { ReactNode } from "react";


type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
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

        </>
    )
}

export default Layout;