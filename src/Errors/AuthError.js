import React from 'react';
import {useRouteError} from "react-router-dom";

export default function AuthError(props) {
    const error = useRouteError()

    return (
        <div>
            <div>
                <p>{error.message}</p>
            </div>
        </div>
    );
}

