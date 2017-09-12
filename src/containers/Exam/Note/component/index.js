import React from "react"

/**
 * 
 * @param {string} id 
 * @param {string} title 
 * @param {string} userId 
 * @function {NoteComponent}
 * @return {React.Component}  
 */
const NoteComponent = ({
    id,
    title,
    userId
}) => {
    return (
        <div className="noteclass">
            <li>
                <a htmlFor="#">
                    <h2>{title}</h2>
                    <p>{userId}</p>
                </a>
            </li>
        </div>
    )
}

export default NoteComponent