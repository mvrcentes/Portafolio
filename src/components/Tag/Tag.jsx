import React from "react"

import style from "./Tag.module.css"

export const Tag = ({ tag, children, type = "", color = "", size = "" }) => {
    const type_classes = type
        ? `${style.Type} ${style[`Type__${type}`]}`
        : `${style.Type} ${style.Gap}`

    const color_classes = color
        ? `${style.Children} ${style[`Children__${color}`]}`
        : `${style.Children} ${style.Code}`

    const children_classes = (() => {
        switch (type) {
            case 1:
                return `${color_classes}`
            case 2:
                return `${color_classes} ${style.Margin}`
            case 3:
                return `${color_classes} ${style.Margin} ${style.Code}`
        }
    })()

    const tag_classes = type
        ? `${style.Tag} ${style[`Tag__${type}`]}`
        : `${style.Tag}`

    return (
        <div className={type_classes}>
            <div className={style.Tag}>{`<${tag}>`}</div>
            <div className={`${children_classes} ${style[`${size}`]}`}>{children}</div>
            <div className={tag_classes}>{`</${tag}>`}</div>
        </div>
    )
}
