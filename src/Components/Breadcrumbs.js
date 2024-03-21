import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

export default function Breadcrumbs() {
    const location = useLocation()
    let url = ""

    const path = location.pathname.split("/").filter(value => value !== '')

    return (
        <div>
            <div className={"flex gap-x-5"}>
                {path.map((value, index) => {
                        url += "/" + value

                        return index === path.length - 1 ? <div><NavLink to={url}>{value}</NavLink></div> :
                            <div className={"flex gap-x-5"}>
                                <NavLink to={url}>{value}</NavLink>
                                <p>></p>
                            </div>

                    }
                )}
            </div>

        </div>
    );
}

