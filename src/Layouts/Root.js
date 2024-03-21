import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";

export default function Root() {
    return (
        <div>
            <header className={"p-4 bg-blue-500"}>
                <nav className={"flex justify-between"}>
                    <NavLink className={"text-5xl"} to=""><p>Test website</p></NavLink>
                    <div className={"flex gap-x-4 active-state-div"}>
                        <NavLink className={"text-2xl"} to="about"><p>About</p></NavLink>
                        <NavLink className={"text-2xl"} to="help"><p>Help</p></NavLink>
                    </div>
                </nav>
            </header>
            <div className={"p-4"}>
                <div><Breadcrumbs/></div>
                <div className={"mt-5"}><Outlet/></div>
            </div>
        </div>
    );
}

