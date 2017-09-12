import React from "react";
import NoteComponent from "./component";
import { getApi } from "./NoteApi";
import "./index.scss"

/**
 * @class {NoteContainer}
 * @return {React.Component}  
 * container for drawing notes
 */
export default class NoteContainer extends React.PureComponent {
    state = {
        notes: []
    }


    constructor(props) {
        super(props)
        addEventListener("scroll", this.checkScroll)
    }

    checkScroll = async () => {
        if (window.scrollY + window.outerHeight - 30 > document.body.scrollHeight) {
            const notes = await getApi()
            const newStateNotes = this.state.notes
            for (let i in notes) {
                newStateNotes.push(notes[i])
            }
            this.setState({ newStateNotes })
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
                                key={index}
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