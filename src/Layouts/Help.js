import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

export default function Help() {
    return (
        <div>
            <nav className={"flex gap-x-5 help"}>
                <NavLink className={"border-2 border-blue-700 px-8 py-2 rounded-lg hover:bg-blue-300"}
                         to="faq">FAQ</NavLink>
                <NavLink className={"border-2 border-blue-700 px-8 py-2 rounded-lg hover:bg-blue-300"}
                         to="ask">Ask us</NavLink>
            </nav>
            <div className={"m-5"}><Outlet/></div>
        </div>
    );
}

