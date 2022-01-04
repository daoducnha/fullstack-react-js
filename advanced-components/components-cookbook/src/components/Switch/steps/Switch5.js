import React from "react";

const CREADITCARD = "Creditcard";
const BTC = "Bitcoin"

class Switch extends React.Component {
    state = {
        payMethod: BTC
    }

    select = choice => {
        return evt => {
            this.setState({
                payMethod: choice
            })
        }
    }

    renderChoice = choice => {
        const cssClasses = ["choice"];

        if(this.state.payMethod === choice) {
            cssClasses.push("active");
        }

        return (
            <div className={cssClasses.join(" ")} onClick={this.select(choice)}>
                {choice}
            </div>
        )
    }

    render() {
        return (
            <div className="switch">
                {this.renderChoice(CREADITCARD)}
                {this.renderChoice(BTC)}
                Pay with: {this.state.payMethod}
            </div>
        )
    }
}

export default Switch;