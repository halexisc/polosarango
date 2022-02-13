import React from "react"


export default function Item({id, title, price, pictureurl}){
    return(
        <article>
            <span>{id}</span>
            <span>{title}</span>
            <span>{price}</span>
            <span>{pictureurl}</span>

        </article>
    )
}