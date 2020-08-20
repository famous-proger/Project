import React from "react";
import "./index.css";






export class NavigationPanel extends React.Component {
    render() {
        return (
            <div className="navigation-panel">{this.props.children}</div>
        )
    }
}
