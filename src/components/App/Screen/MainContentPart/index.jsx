import React from "react";
import "./index.css";


export class MainContentPart extends React.Component {
    render() {
        return (
            <div className="main__content-part">{this.props.children}</div>
        );
    };
}
