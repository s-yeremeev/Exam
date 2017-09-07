import React from "react";

export default class NoteComponent extends React.PureComponent {
    constructor(
        id,
        title,
        completed,
        note
    ) {
        super(props)
        const notest = async function () {
            await getApi()
        }

    }

    render() {
        return (
            <section>
                {
                notest.map(() =>
                    <li>
                        <a href="#">
                            <h2>{title} #{id}</h2>
                            <p>{completed}  #{id}</p>
                        </a>
                    </li>
                )
                }
            </section>
        )
    }
}