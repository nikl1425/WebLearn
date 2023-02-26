import React, {FC} from "react";
import Link from "next/link";

const NavBar: FC = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/about">about</Link>
                </li>
                <li>
                    <Link href="/course">Course</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;