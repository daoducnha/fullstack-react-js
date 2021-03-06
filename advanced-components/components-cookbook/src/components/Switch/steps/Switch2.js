import React from "react";

const CREADITCARD = "Creditcard";
const BTC = "Bitcoin"

class Switch extends React.Component {
    state = {
        payMethod: BTC
    }

    render() {
        return (
            <div className="switch">
                <div className="choice">Creditcard</div>
                <div className="choice">Bitcoin</div>
                Pay with: {this.state.payMethod}
            </div>
        )
    }
}
export default Switch;