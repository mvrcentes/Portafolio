import React, { useState } from "react"
import { Link } from "react-router-dom"

import style from "./Terminal.module.css"
export const Terminal = () => {
    const [terminalinput, setTerminalInput] = useState("")
    const links = {
        linkedin: "https://www.linkedin.com/in/mvrcentes/",
        github: "",
        twitter: "",
        instagram: "https://www.instagram.com/mvrcentes.dmg/?hl=es",
        facebook: "",
        tiktok: "",
    }

    const showLink = () => {
        switch (terminalinput) {
            case "linkedin":
                return links.linkedin
            case "github":
                return links.github
            case "twitter":
                return links.twitter
            case "instagram":
                return links.instagram
            case "facebook":
                return links.facebook
            case "tiktok":
                return links.tiktok
            default:
                return null
        }
    }

    return (
        <div className={style.Terminal}>
            <div className={style.Terminal__header}>
                <div className={style.Terminal__header__buttons}>
                    <div className={style.Button}></div>
                    <div className={style.Button}></div>
                    <div className={style.Button}></div>
                </div>
            </div>

            <div className="Terminal__Body">
                <div className="Terminal__Body__Line">
                    <div className="Terminal__Body__Line__Text">
                        <span className={style.blue}>
                            (<span className={style.red}>mvrcentes㉿kali</span>
                            )-[
                            <span className={style.white}>~</span>]
                        </span>
                        <span className="Terminal__Body__Line__Text__Code">
                            <span className="Terminal__Body__Line__Text__Code__Const">
                                &nbsp;ps
                            </span>
                        </span>
                    </div>
                </div>

                <div className="Terminal__Body__Line">
                    <div className="Terminal__Body__Line__Text">
                        <span className={style.blue}>
                            &nbsp;PID&nbsp;&nbsp;&nbsp;&nbsp;TTY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CMD
                        </span>
                    </div>
                </div>

                <div className="Terminal__Body__Line">
                    <div className="Terminal__Body__Line__Text">
                        <Link style={{ "text-decoration": "none" }}>
                            <span className={style.blue}>
                                &nbsp;14578&nbsp;&nbsp;ttys003&nbsp;&nbsp;<Link style={{ "text-decoration": "none" }} className={style.green} to={links.linkedin} target="_blank">linkedin</Link>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="Terminal__Body__Line">
                    <div className="Terminal__Body__Line__Text">
                        
                            <span className={style.blue}>
                                &nbsp;15678&nbsp;&nbsp;ttys003&nbsp;&nbsp;<Link style={{ "text-decoration": "none" }} className={style.green}>instagram</Link>
                            </span>
                        
                    </div>
                </div>
                <div className="Terminal__Body__Line">
                    <div className="Terminal__Body__Line__Text">
                        
                            <span className={style.blue}>
                                &nbsp;78678&nbsp;&nbsp;ttys003&nbsp;&nbsp;<Link style={{ "text-decoration": "none" }} className={style.green}>tiktok</Link>
                            </span>
                        
                    </div>
                </div>

                <div className="Terminal__Body__Line">
                    <div className="Terminal__Body__Line__Text">
                        <span className={style.blue}>
                            (<span className={style.red}>mvrcentes㉿kali</span>
                            )-[
                            <span className={style.white}>~</span>]
                        </span>

                        <label htmlFor="input">
                            <span>
                                <input
                                    id="input"
                                    className={style.input}
                                    style={{
                                        width: `${
                                            terminalinput?.length * 7 ?? 0
                                        }px`,
                                    }}
                                    value={terminalinput}
                                    onChange={({ target: { value } }) =>
                                        setTerminalInput(value)
                                    }
                                />
                            </span>
                            <span> //Click me</span>
                        </label>
                    </div>
                </div>

                {showLink() !== null && (
                    <div className="Terminal__Body__Line">
                        <div className="Terminal__Body__Line__Text">
                            <span className={style.blue}>
                                (
                                <span className={style.red}>
                                    mvrcentes㉿kali
                                </span>
                                )-[
                                <span className={style.white}>~</span>]
                            </span>
                            <Link style={{"text-decoration": "none"}} className={style.blue}>
                            <span className="Terminal__Body__Line__Text__Code">
                                {showLink()}
                            </span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
