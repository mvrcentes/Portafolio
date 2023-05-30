import React from "react"

import { Menu } from "../../components/Menu/Menu"
import { Tag } from "../../components/Tag/Tag"
import { TerminalD } from "../../components/TerminalD/TerminalD"
import { TerminalLine } from "../../components/TerminalLine/TerminalLine"

import HealthHub from "../../assets/HealthHub.png"
import Maze from "../../assets/Maze.png"
import Memory from "../../assets/Memory.png"
import memory_game from "../../assets/memory_game.png"

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
                <Tag tag="p" type={1} color="yellow" size="s">
                    <a href="https://github.com/mvrcentes" target="_blank">https://github.com/mvrcentes</a>
                </Tag>
            </div>

            <div className="Projects">
                <div className="Project">
                    <div className="Project__Container">
                        <Tag tag="h3" type={1} color="yellow" size="m">
                            Health Hub
                        </Tag>
                        <div className="project_description">
                            <Tag tag="p" type={2} color="yellow" size="s">
                                The web application is developed using React for
                                the front end and Express for the back end. The
                                application serves as a centralized platform for
                                doctors to access and manage patient data. The
                                API created with Express interacts with a
                                Supabase database, allowing doctors to view all
                                the reports associated with a patient. This
                                system streamlines the process of accessing and
                                reviewing patient information, facilitating
                                better patient care and informed
                                decision-making.
                            </Tag>
                        </div>

                        <TerminalD>
                            <TerminalLine type={1}>docker images</TerminalLine>
                            <TerminalLine>
                                <div className="REPOSITORY">REPOSITORY</div>
                                <span className="CREATED">CREATED</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    <a href="https://github.com/mvrcentes/Proyecto_No2_BD-Frontend" target="_blank">https://github.com/mvrcentes/Proyecto_No2_BD-Frontend</a>
                                </span>
                                <span className="CREATED">03/19/2023</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    <a href="https://github.com/mvrcentes/Proyecto_No2_BD-Backend" target="_blank">https://github.com/mvrcentes/Proyecto_No2_BD-Backend</a>
                                </span>
                                <span className="CREATED">03/19/2023</span>
                            </TerminalLine>
                        </TerminalD>

                        <div className="Tags">
                            <img
                                src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white"
                                alt=""
                            />
                            <img
                                src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
                                alt=""
                            />
                            <img
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                alt=""
                            />
                            <img
                                src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                                alt=""
                            />
                        </div>
                    </div>

                    <img src={prueba} alt="" className="imgs" />
                </div>

                {/* Project 2 */}

                <div className="Project">
                    <div className="Project__Container">
                        <Tag tag="h3" type={1} color="yellow" size="m">
                            Maze
                        </Tag>

                        <div className="project_description">
                            <Tag tag="p" type={2} color="yellow" size="s">
                                The web application is built with React and
                                utilizes an API to generate mazes dynamically.
                                Users can interact with the app to generate
                                unique mazes with varying levels of complexity.
                                The API integration allows the application to
                                fetch maze data, such as the maze structure and
                                possible paths, which are then rendered on the
                                user interface.
                            </Tag>
                        </div>

                        <TerminalD>
                            <TerminalLine type={1}>docker images</TerminalLine>
                            <TerminalLine>
                                <div className="REPOSITORY">REPOSITORY</div>
                                <span className="CREATED">CREATED</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    <a href="https://github.com/mvrcentes/Laboratorio_No8_STW" target="_blank">https://github.com/mvrcentes/Laboratorio_No8_STW</a>
                                </span>
                                <span className="CREATED">05/04/2023</span>
                            </TerminalLine>
                        </TerminalD>

                        <div className="Tags">
                            <img
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                alt=""
                            />
                        </div>
                    </div>

                    <img src={Maze} alt="" className="imgs" />
                </div>

                {/* Project 3 */}

                <div className="Project">
                    <div className="Project__Container">
                        <Tag tag="h3" type={1} color="yellow" size="m">
                            Memory Game
                        </Tag>

                        <div className="project_description">
                            <Tag tag="p" type={2} color="yellow" size="s">
                                The web application is designed to create a
                                memory card game using React, where all the
                                development logic is implemented within the HTML
                                file. By leveraging React's virtual DOM and
                                component-based architecture, the app allows
                                users to play an interactive memory game by
                                flipping and matching cards. The HTML file
                                includes the necessary JavaScript code that
                                handles the game mechanics, such as tracking the
                                flipped cards, checking for matches, and
                                updating the score.
                            </Tag>
                        </div>

                        <TerminalD>
                            <TerminalLine type={1}>docker images</TerminalLine>
                            <TerminalLine>
                                <div className="REPOSITORY">REPOSITORY</div>
                                <span className="CREATED">CREATED</span>
                            </TerminalLine>

                            <TerminalLine>
                                <span className="REPOSITORY">
                                    <a href="https://github.com/mvrcentes/Laboratorio_No6_STW" target="_blank">https://github.com/mvrcentes/Laboratorio_No6_STW</a>
                                </span>
                                <span className="CREATED">03/19/2023</span>
                            </TerminalLine>
                        </TerminalD>

                        <div className="Tags">
                            <img
                                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                                alt=""
                            />
                        </div>
                    </div>

                    <img src={memory_game} alt="" className="imgs" />
                </div>
            </div>
        </div>
    )
}
