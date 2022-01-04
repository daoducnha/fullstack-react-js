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

    render() {
        return (
            <div className="switch">
                <div
                    className="choice"
                    onClick={this.select(CREADITCARD)}
                >
                    Creditcard
                </div>
                <div
                    className="choice"
                    onClick={this.select(BTC)}
                >
                    Bitcoin
                </div>
                Pay with: {this.state.payMethod}
            </div>
        )
    }
}

export default Switch;