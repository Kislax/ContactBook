import React from 'react'
import {ContactPage} from "../ContactPage/ContactPage";
import {Navbar} from "../../Components/Navbar/Navbar";
import {AuthPage} from "../AuthPage/AuthPage";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <>
            <Navbar/>
            <ContactPage/>
            </>
    )
    } else {
        return (
            <>
            <AuthPage/>
            </>
        )
    }
}

