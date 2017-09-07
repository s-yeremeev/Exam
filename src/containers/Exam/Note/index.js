import React from "react";
import NoteComponent from "./component";
import { getApi } from "./NoteApi";
import "./index.scss"

export default class NoteContainer extends React.PureComponent {
    state = {
        notes: [],
    }


    constructor(props) {
        super(props)
        addEventListener("scroll", this.checkScroll)
    }

    async checkScroll() {
        const notes = await getApi()
        const el = document.getElementsByClassName("noteclass")
        const lastEl = el[el.length - 1]
        const element = lastEl.getBoundingClientRect().right
        if (window.scrollY + window.outerHeight - 350 > element / 2) {
            this.setState({
                notes
            })
        }
    }

    async componentDidMount() {
        const notes = await getApi()
        this.setState({
            notes
        })
    }

    render() {
        const {
            notes
        } = this.state

        return (
            <div>
                <ul>
                    {
                        notes.map(({ id, title, userId }, index) => (
                            <div
                                key={id}
                            >
                                <NoteComponent
                                    id={id}
                                    title={title}
                                    userId={userId}
                                />
                            </div>
                        ))
                    }
                </ul>
            </div>
        )
    }
}