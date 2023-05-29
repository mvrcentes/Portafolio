import React from "react"

import "./Welcome.css"

import { Menu } from "../../components/Menu/Menu"
import { Tag } from "../../components/Tag/Tag"
import { Terminal } from "../../components/Terminal/Terminal"

import me from "../../assets/yo.png"
import guatemala from "../../assets/guatemala.png"
export const Welcome = () => {
    return (
        <div className="Welcome_page">
            <Menu />
            <div className="Welcome">
                <div className="Title">

                <Tag tag="p" type={1} color="yellow">
                    So... this is me
                </Tag>

                <Tag tag="h1" type={2} color="">
                    Marco Ramirez
                </Tag>
                </div>
                <img className="me" src={me} alt="" />
            </div>

            <div className="About_me">
                <Tag tag="h2" type={3} color="yellow">
                    About me
                </Tag>

                <div className="row">
                    <img className="Guatemala" src={guatemala} alt="" />
                    <div className="aboutMe_p">
                        <Tag tag="p" type={2} color="yellow">
                            I'm a student from Guatemala, currently attending my
                            third year of major, working towards a degree in
                            computer science. I thoroughly enjoy programming and
                            everything related to it.
                        </Tag>
                    </div>
                </div>
            </div>

            <div className="Connect_with_me">
                <Tag tag="h2" type={3} color="yellow">
                    Connect with me
                </Tag>
                <div className="Terminal__container">
                    <Terminal />
                </div>
            </div>
        </div>
    )
}
