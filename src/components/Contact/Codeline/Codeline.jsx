import React from "react"

import style from "./Codeline.module.css"
export const Codeline = ({ children }) => {
    return (
        <div className={style.Codeline}>
            {children}
        </div>
    )
}
