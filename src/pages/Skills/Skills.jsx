import React from "react"

import { Menu } from "../../components/Menu/Menu"
import { Tag } from "../../components/Tag/Tag"
import { TerminalD } from "../../components/TerminalD/TerminalD"
import { TerminalLine } from "../../components/TerminalLine/TerminalLine"

import "./Skills.css"

export const Skills = () => {
    return (
        <div>
            <Menu />
            <div className="TecSkills">
                <Tag tag="h2" type={3} color="yellow">
                    Technical Skills
                </Tag>

                <TerminalD>
                    <TerminalLine type={1}>me --version -y 2023</TerminalLine>
                    <TerminalLine>[-] Downloading python</TerminalLine>
                    <TerminalLine>:::: :::: :::: :: 70%</TerminalLine>

                    <TerminalLine>[-] Downloading javascript</TerminalLine>
                    <TerminalLine>:::: :::: :::: :: 70%</TerminalLine>

                    <TerminalLine>[-] Downloading java</TerminalLine>
                    <TerminalLine>:::: :::: :::: 60%</TerminalLine>

                    <TerminalLine>[-] Downloading C++</TerminalLine>
                    <TerminalLine>:::: :: 30%</TerminalLine>

                    <TerminalLine>[-] Downloading html</TerminalLine>
                    <TerminalLine>:::: :::: :::: :: 70%</TerminalLine>

                    <TerminalLine>[-] Downloading css</TerminalLine>
                    <TerminalLine>:::: :::: 40%</TerminalLine>
                </TerminalD>
            </div>
        </div>
    )
}
