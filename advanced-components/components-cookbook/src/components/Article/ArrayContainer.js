import React from "react";

class ArrayContainer extends React.Component {
    render() {
        const arr = React.Children.toArray(this.props.children);

        return <div className="container">{arr.sort((a, b) => a.id < b.id)}</div>
    }
}