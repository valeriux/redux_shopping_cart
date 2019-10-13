import React, { Component } from 'react'
import SubTotal from './Subtotal'
import PickupSavings from './PickupSavings'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      total: 100,
      PickupSavings: -3.85
    }
  }

  render() {
    return (
      <div className="container">
        <div className="shopping_cart">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
        </div>
      </div>
    )
  }
}

export default Home
