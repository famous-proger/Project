import React from "react";
import "./index.css";



export class SingleSection extends React.Component {
    render() {
        return (
            <div className="navigation-panel__single-section">
                <i className={`${this.props.classForIcon} ${this.props.iconColor}`}></i>
                <p>{this.props.title}</p>
            </div>
        );
    };
}
