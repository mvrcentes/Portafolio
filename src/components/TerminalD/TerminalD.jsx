import React from "react"

import style from "./TerminalD.module.css"
export const TerminalD = ({ children }) => {
    return (
        <div className={style.Terminal}>
            <div className={style.Terminal__header}>
                <div className={style.Terminal__header__buttons}>
                    <div className={style.Button}></div>
                    <div className={style.Button}></div>
                    <div className={style.Button}></div>
                </div>
            </div>

            <div className={style.Terminal__Body}>
                {children}
            </div>
        </div>
    )
}
