import React from "react";
import NoteComponent from "./NoteApi";
import { getApi } from "./NoteApi/api";
import "./index.scss"
export default class NoteContainer extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props
        return (
            <div>
                <ul>
                {children}
                </ul>
            </div>
        )
    }
}