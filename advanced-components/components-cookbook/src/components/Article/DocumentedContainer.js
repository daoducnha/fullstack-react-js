import React from "react";

class DocumentedContainer extends React.Component {
    static propsTypes = {
        children: PropsTypes.onOf([PropsTypes.element, PropsTypes.array]);
    }

    render() {
        return (
            <div className="container">{this.props.children}</div>
        )
    }
}