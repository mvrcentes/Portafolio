import React from "react"

import "./Welcome.css"

import { Menu } from "../../components/Menu/Menu"
import { Tag } from "../../components/Tag/Tag"
import { Terminal } from "../../components/Terminal/Terminal"
import guatemala from "../../assets/guatemala.png"
export const Welcome = () => {
    return (
        <>
            <Menu />
            <div className="Welcome">
                <Tag tag="p" type={1} color="yellow">
                    So... this is me
                </Tag>

                <Tag tag="h1" type={2} color="">
                    Marco Ramirez
                </Tag>
            </div>

            <div className="About_me">
                <Tag tag="h2" type={3} color="yellow">
                    About me
                </Tag>

                <div className="row">
                    <div className="Guatemala">
                        <span> :^:::^^^^^^^^^^^^^^^^^^^^^^^~^~~~~!!: </span>
                        <span> ?55PYYPGGGGGGGGGGGGGGGGGG5555555555P7 </span>
                        <span> JP5P5PPGGGGGGGGGGGGGGGGGP5P5PP5P55PP! </span>
                        <span> JGPPPPPGGGGGGGGGGGGGGGGGPPPPPPPPPPPG! </span>
                        <span> JGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG! </span>
                        <span> JGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG~ </span>
                        <span>
                            {" "}
                            :!??JJJJJ5GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG~{" "}
                        </span>
                    </div>

                    <Tag tag="p" type={1} color="yellow" className="aboutMe_p">
                        I'm a student from Guatemala, currently attending my
                        third year of major, working towards a degree in
                        computer science. I thoroughly enjoy programming and
                        everything related to it.
                    </Tag>
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
        </>
    )
}
