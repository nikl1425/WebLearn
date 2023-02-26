import React, {FC} from "react";
import NavBar from "./navbar";
import type { ReactNode } from "react";


type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}

export default Layout;