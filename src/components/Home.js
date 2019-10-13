import React, { Component } from 'react'
import SubTotal from './Subtotal'
import PickupSavings from './PickupSavings'
import TaxesFees from './TaxesFees'
import EstimatedTotal from './EstimatedTotal'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      EstimatedTotal: 0
    }
  }

  render() {
    return (
      <div className="container">
        <div className="shopping_cart">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
        </div>
      </div>
    )
  }
}

export default Home
