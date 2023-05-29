import React from "react"

import { Menu } from "../../components/Menu/Menu"
import { Tag } from "../../components/Tag/Tag"
import { TerminalD } from "../../components/TerminalD/TerminalD"
import { TerminalLine } from "../../components/TerminalLine/TerminalLine"

import HealthHub from "../../assets/HealthHub.png"
import Maze from "../../assets/Maze.png"
import Memory from "../../assets/Memory.png"

import me_gusto from "../../assets/me_gusto.png"
import prueba from "../../assets/prueba.png"

import "./Work.css"

export const Work = () => {
    return (
        <div>
            <Menu />
            <div className="Title">
                <Tag tag="h2" type={3} color="yellow">
                    Projects
                </Tag>
            </div>

            <div className="Projects">
                <div className="Project">
                    <div className="Project__Container">
                        <Tag tag="h3" type={1} color="yellow" size="m">
                            Health Hub
                        </Tag>

                        <Tag tag="p" type={1} color="yellow">
                            Este projecto se trató de esto y esto sobre
                        </Tag>

                        <TerminalD>
                            <TerminalLine type={1}>docker images</TerminalLine>
                            <TerminalLine>
                                <div className="REPOSITORY">REPOSITORY</div>
                                <span className="CREATED">CREATED</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    https://github.com/mvrcentes/Proyecto_No2_BD-Frontend
                                </span>
                                <span className="CREATED">03/19/2023</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    https://github.com/mvrcentes/Proyecto_No2_BD-Backend
                                </span>
                                <span className="CREATED">03/19/2023</span>
                            </TerminalLine>
                        </TerminalD>

                        <div className="Tags">
                            <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white" alt="" />
                            <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="" />
                            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
                            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="" />
                        </div>
                    </div>

                    <img src={prueba} alt="" className="imgs" />
                    {/* <img src={me_gusto} alt="" className="imgs" /> */}
                </div>

                {/* Project 2 */}

                <div className="Project">
                    <div className="Project__Container">
                        <Tag tag="h3" type={1} color="yellow" size="m">
                            Maze
                        </Tag>

                        <Tag tag="p" type={1} color="yellow">
                            Este projecto se trató de esto y esto sobre
                        </Tag>

                        <TerminalD>
                            <TerminalLine type={1}>docker images</TerminalLine>
                            <TerminalLine>
                                <div className="REPOSITORY">REPOSITORY</div>
                                <span className="CREATED">CREATED</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    https://github.com/mvrcentes/Laboratorio_No8_STW
                                </span>
                                <span className="CREATED">05/04/2023</span>
                            </TerminalLine>
                        </TerminalD>
                    </div>

                    <img src={Maze} alt="" className="imgs" />
                </div>

                {/* Project 3 */}

                <div className="Project">
                    <div className="Project__Container">
                        <Tag tag="h3" type={1} color="yellow" size="m">
                            Memory Game
                        </Tag>

                        <Tag tag="p" type={1} color="yellow">
                            Este projecto se trató de esto y esto sobre
                        </Tag>

                        <TerminalD>
                            <TerminalLine type={1}>docker images</TerminalLine>
                            <TerminalLine>
                                <div className="REPOSITORY">REPOSITORY</div>
                                <span className="CREATED">CREATED</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    https://github.com/mvrcentes/Laboratorio_No6_STW
                                </span>
                                <span className="CREATED">03/19/2023</span>
                            </TerminalLine>
                        </TerminalD>
                    </div>

                    <img src={Memory} alt="" className="imgs" />
                </div>
            </div>
        </div>
    )
}
