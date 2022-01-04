import React from "react";

const CREADITCARD = "Creditcard";
const BTC = "Bitcoin"

class Switch extends React.Component {
    state = {
        payMethod: BTC
    }

    select = choice => {
        return evt => {
            this.setState({ payMethod: choice })
        }
    }

    render() {
        return (
            <div className="switch">
                <Choice
                    onClick={this.select(CREADITCARD)}
                    active={this.state.payMethod === CREADITCARD}
                    label="Pay with Creditcard"
                />

                <Choice
                    onClick={this.select(BTC)}
                    active={this.state.payMethod === BTC}
                    label="Pay with Bitcoin"
                />

                Paying with: {this.state.payMethod}
            </div>
        )
    }
}

const Choice = ({ active, onClick, label }) => {
    const cssClasses = ["choice"];

    if (active) {
        cssClasses.push("active");
    }

    return (
        <div className={cssClasses.join(" ")} onClick={onClick}>
            {label}
        </div>
    )
}

export default Switch;