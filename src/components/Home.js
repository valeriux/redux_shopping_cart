import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import SubTotal from './Subtotal'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      total: 100
    }
  }


  render() {
    return (

      <div className="container">

        <div className="shopping_cart">
          <SubTotal price={this.state.total.toFixed(2)} />
        </div>
      </div>



    )
  }
}

export default Home
