import React, { useState } from "react"

import { Codeline } from "./Codeline/Codeline"

import style from "./Contact.module.css"
export const Contact = () => {
    const [subject, setSubject] = React.useState(0)
    const [sender, setSender] = React.useState(0)
    const [body, setBody] = React.useState(0)

    return (
        <div className={style.Contact}>
            <Codeline>
                <span className={style.Number}>01</span>
                <span>
                    <span className={`${style.const} ${style.Line__text}`}>
                        {" "}
                        const
                    </span>
                    <span className={`${style.function} `}> ContactMe</span>
                    <span className={style.equal}> = </span>
                    <span className={style.sintaxis}> () </span>
                    <span className={style.const}> {"=>"} </span>
                    {" {"}
                </span>
            </Codeline>

            <Codeline>
                <span className={style.Number}>02</span>
                <span>
                    <span className={`${style.function} ${style.margin}`}>
                        {" "}
                        headers
                    </span>
                    <span className={style.sintaxis}>()</span>
                    {" {"}
                </span>
            </Codeline>

            <Codeline>
                <span className={style.Number}>03</span>
                <label htmlFor="subject">
                    <span
                        className={`${style.this} ${style.margin2} ${style.Line__text}`}>
                        {" "}
                        this
                    </span>
                    .<span className={style.word}>subject</span>
                    <span> = </span>
                    <span>
                        {" "}
                        '
                        <input
                            id="subject"
                            className={style.input}
                            style={{ width: `${subject?.length * 7 ?? 0}px` }}
                            value={subject}
                            onChange={({ target: { value } }) =>
                                setSubject(value)
                            }
                        />
                        '{" "}
                    </span>
                    <span> //Click me</span>
                </label>
            </Codeline>

            <Codeline>
                <span className={style.Number}>04</span>
                <label htmlFor="">
                    <span className={`${style.this} ${style.margin2}`}>
                        {" "}
                        this
                    </span>
                    .<span className={style.word}>sender</span>
                    <span> = </span>
                    <span>
                        {" "}
                        '
                        <input
                            id="sender"
                            className={style.input}
                            style={{ width: `${sender?.length * 7 ?? 0}px` }}
                            value={sender}
                            onChange={({ target: { value } }) =>
                                setSender(value)
                            }
                        />
                        '{" "}
                    </span>
                    <span> //Your mail goes</span>
                </label>
            </Codeline>

            <Codeline>
                <span className={style.Number}>05</span>
                <span className={style.margin}>
                    {"}"}
                </span>
            </Codeline>

            <Codeline>
                <span className={style.Number}>06</span>
                <span>
                    <span className={`${style.function} ${style.margin}`}>
                        {" "}
                        body
                    </span>
                    <span className={style.sintaxis}>()</span>
                    {" {"}
                </span>
            </Codeline>

            <Codeline>
                <span className={style.Number}>07</span>
                <label htmlFor="body" className={style.margin2}>
                    <span className={style.this}> this</span>.
                    <span className={style.word}>body</span>
                    <span> = </span>
                    <span>
                        {" "}
                        '
                        <input
                            id="body"
                            className={style.input}
                            style={{ width: `${body?.length * 7 ?? 0}px` }}
                            value={body}
                            onChange={({ target: { value } }) => setBody(value)}
                        />
                        '{" "}
                    </span>
                    <span> //Your mail goes here</span>
                </label>
            </Codeline>

            <Codeline>
                <span className={style.Number}>08</span>
                <span className={style.margin}>{" }"}</span>
            </Codeline>

            <Codeline>
                <span className={style.Number}>09</span>
                <span className={style.Line__text}>{" }"}</span>
            </Codeline>
        </div>
    )
}
