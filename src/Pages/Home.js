import React from 'react';
import {Link, useLoaderData} from "react-router-dom";

export default function Home() {
    const userData = useLoaderData()

    return (
        <div>
            <div className={"grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-x-4"}>
                {userData.map((value, index) => {
                    return (
                        <div key={index - 1} className={"flex flex-col border border-blue-500 p-5 rounded-lg gap-y-2"}>
                            <h1 className={"text-3xl"} key={index}>User {index + 1}</h1>
                            <Link key={index + 1} to={value._id}>
                                <p className={"hover:text-blue-300"} key={index + 2}>{value.mail}</p>
                            </Link>
                            <p key={index + 3}>{value.createdAt.substring(0, value.createdAt.length - 14)}</p>
                            <p key={index + 4}>{value.updatedAt.substring(0, value.updatedAt.length - 14)}</p>
                        </div>
                    )
                })}
            </div>
        </div>);
}


export const homeLoader = async () => {
    return await fetch(`http://localhost:3001/user/getAll`, {
        method: "get",
        headers: {authorization: "Bearer 3487212c78"}
    }).then(response => response.json())

}