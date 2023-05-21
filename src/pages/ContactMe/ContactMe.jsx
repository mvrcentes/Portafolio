import React from "react"
import { Contact } from "../../components/Contact/Contact"
import { Menu } from "../../components/Menu/Menu"

import style from "./ContactMe.module.css"
export const ContactMe = () => {
    return (
        <div>
            <Menu />
            <div className={style.Topbar}></div>
            <Contact />
            <div className={style.Sidebar}></div>

        </div>
    )
}
