import React, { Component } from "react";
import Input from "./input";
import "../StylingComponents/styles.scss";
import PaymentCard from "react-payment-card-component";

class Form extends Component {
  state = {
    cardValues: {
      bank: "itau",
      model: "personnalite",
      type: "white",
      brand: "mastercard",

      number: "",
      cvv: "",
      holderName: "",
      expiration: "",
      flipped: false,
      focus: ""
    }
  };

  handleSubmit = () => {
    const result = JSON.stringify(this.state.cardValues);
    alert(result);
  };

  handleFocus = e => {
    let cardValues = this.state.cardValues;
    cardValues["focus"] = e.target.name;
    if(e.target.name === 'cvv') {
        cardValues['flipped'] = true;
        console.log('cvv');
    }
        else 
        cardValues['flipped'] = false;

    
    this.setState({ cardValues });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    let cardValues = this.state.cardValues;
    cardValues[name] = value;
    console.log(value);
    this.setState({ cardValues });
  };

  render() {
    const { cardValues } = this.state;
    return (
      <div id="PaymentForm">
        {/*Card Component */}

        <PaymentCard
          bank={cardValues.bank}
          model={cardValues.model}
          type={cardValues.type}
          brand={cardValues.brand}
          number={cardValues.number}
          cvv={cardValues.cvv}
          holderName={cardValues.holderName}
          expiration={cardValues.expiration}
          flipped={cardValues.flipped}
        />

        <br></br>
        <form onSubmit={this.handleSubmit}>
          {/*Card Number field */}
          <div className="inputField">
            <Input
              type="number"
              name="number"
              value={cardValues.number}
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
            />
          </div>

          {/*name field */}
          <div className="inputField">
            <Input
              type="text"
              name="holderName"
              value={cardValues.holderName}
              placeholder="name"
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
            />
          </div>

          {/*valid field */}
          <div className="inputField">
            <Input
              type="text"
              name="expiration"
              value={cardValues.expiration}
              placeholder="expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
            />
          </div>

          {/*cvc field */}
          <div className="inputField">
            <Input
              type="number"
              name="cvv"
              value={cardValues.cvv}
              placeholder="cvc"
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
