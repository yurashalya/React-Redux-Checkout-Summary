import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/Subtotal/PickupSavings/PickupSavings';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 120,
      PickupSavings: -4.15
    };
  }

  render() {
    return (
      <div className="container"> 
        <Grid className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
        </Grid>
      </div>
    );
  }
}

export default App;
