import React from "react"


const NoteComponent = ({
    id,
    title,
    userId
}) => {
    return (
        <div className="noteclass">
            <li>
                <a href="#">
                    <h2>{title}</h2>
                    <p>{userId}</p>
                </a>
            </li>
        </div>
    )
}

export default NoteComponent