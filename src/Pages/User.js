import React from 'react';
import {useLoaderData, useParams} from "react-router-dom";

export default function User() {
    const {id} = useParams()
    const user = useLoaderData()

    return (
        <div>
            <div>
                <h1 className={"text-3xl"}>This is user {id}</h1>
                <p>{user.mail}</p>
                <p>{user.createdAt.substring(0, user.createdAt.length - 14)}</p>
                <p>{user.updatedAt.substring(0, user.updatedAt.length - 14)}</p>
            </div>
        </div>
    )
}

export const userLoader = async (idGetter) => {
    const id = idGetter.params.id

    const user = await fetch(`http://localhost:3001/user/getOne/${id}`, {
        method: "get",
        headers: {authorization: "Bearer 3487212c78"}
    }).then(response => response.json())

    if (user.status === "error") {
        throw Error("This token is not exists!!!")
    } else {
        return user
    }

}