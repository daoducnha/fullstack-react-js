import React from "react";

class MultiChildContainer extends React.Component {
    static propTypes = {
        component: PropTypes.element.isRequired,
        children: PropTypes.element.isRequired
    };

    renderChild = (childData, index) => {
        return React.createElement(this.props.component,
            {},
            childData
        );
    }

    render() {
        return (
            <div className="container">
                {React.Children.map(this.props.children, this.renderChild)}
            </div>
        )
    }
}