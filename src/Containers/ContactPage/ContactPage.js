import React from 'react'
import {CardContact} from "../../Components/CardContact/CardContact";
import {OpenContact} from "../../Components/OpenContact/OpenContact";
import {useAuth} from "../../hooks/auth.hook";

export const ContactPage = () => {

    const {token, login, logout, userId, ready} = useAuth()




    return (
        <div className={"container"}>
            <div className={"row"}>
                <CardContact
                />
                <OpenContact/>
            </div>
        </div>
    )
}