import React from "react";
import "./index.css"

export class Screen extends React.Component {
    render() {
        return (
            <div className="screen">{this.props.children}</div>
        )
    }
}
