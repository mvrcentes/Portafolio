import React from "react"
import { NavLink } from "react-router-dom"

import { Button } from "../Button/Button"

import style from "./Menu.module.css"

export const Menu = () => {
    return (
        <div className={style.menu}>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                <Button number="01" text="Home" />
            </NavLink>

            <NavLink
                to="/skills"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                <Button number="02" text="Skills" />
            </NavLink>

            <NavLink
                to="/work"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                <Button number="03" text="Work" />
            </NavLink>

            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                <Button number="04" text="Contact" />
            </NavLink>
        </div>
    )
}
