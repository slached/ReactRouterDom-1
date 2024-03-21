import React from 'react';
import './styles/style.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

//layouts
import Root from "./Layouts/Root";
import Help from "./Layouts/Help";

//pages
import About from "./Pages/About";
import User, {userLoader} from "./Pages/User";
import Home, {homeLoader} from "./Pages/Home";
import AuthError from "./Errors/AuthError";
import Faq from "./Pages/HelpPages/FAQ";
import AskQuestion from "./Pages/HelpPages/AskQuestion";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="" element={<Root/>}>
        <Route loader={homeLoader} index element={<Home/>}/>
        <Route errorElement={<AuthError/>} loader={userLoader} path=":id" element={<User/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="help" element={<Help/>}>
            <Route path={"faq"} element={<Faq/>}/>
            <Route path={"ask"} element={<AskQuestion/>}/>
        </Route>
    </Route>
))

export default function App() {
    return (<RouterProvider router={router}/>);
}

