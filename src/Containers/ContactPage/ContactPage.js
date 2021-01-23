import React from 'react'
import {CardContact} from "../../Components/CardContact/CardContact";
import {OpenContact} from "../../Components/OpenContact/OpenContact";

export const ContactPage = () => {
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