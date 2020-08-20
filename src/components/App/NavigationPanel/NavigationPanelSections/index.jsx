import React from "react";
import "./index.css";






export class NavigationPanelSections extends React.Component {
    render() {
        return (
            <div className="navigation-panel__sections">{this.props.children}</div>
        );
    };
}
