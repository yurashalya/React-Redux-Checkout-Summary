import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import Taxes from './components/Taxes/Taxes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 120,
      PickupSavings: -4.15,
      taxes: 0
    };
  }

  render() {
    return (
      <div className="container"> 
        <Grid className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <Taxes taxes= {this.state.taxes.toFixed(2)} />
          <hr />
        </Grid>
      </div>
    );
  }
}

export default App;
