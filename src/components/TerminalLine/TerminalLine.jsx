import React from "react"

import style from "./TerminalLine.module.css"
export const TerminalLine = ({ type, children }) => {
    return (
        <div className="TerminalLine">
            {type === 1 ? (
                <div className="Terminal__Body__Line">
                    <div className="Terminal__Body__Line__Text">
                        <span className={style.blue}>
                            (<span className={style.red}>mvrcentes㉿kali</span>
                            )-[
                            <span className={style.white}>~</span>]
                        </span>
                        <span className="Terminal__Body__Line__Text__Code">
                            <span className="Terminal__Body__Line__Text__Code__Const">
                                &nbsp;{children}
                            </span>
                        </span>
                    </div>
                </div>
            ) : (
                <div className={style.TerminalLine}>
                    {children}
                </div>
            )}
        </div>
    )
}
