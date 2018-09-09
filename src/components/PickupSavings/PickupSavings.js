import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
	pickupSavings: {
		textDecoration: 'underline'
	},
	totalSavings: {
		color: '#23ede9',
		fontWeight: 800
	}
}

export default class PickupSavings extends Component {
	render() {
		const tooltip = (
			<Tooltip id ="tooltip">
				<p>
					Подбор вашего заказа в магазине помогает сократить расходы и мы передаем вам скидку.
				</p>
			</Tooltip>
		);

		return(
			<Row className="show-grid"> 
				<Col md={6}>
					<OverlayTrigger placement="bottom" overlay={tooltip}> 
						<div style={styles.pickupSavings}>Скидка</div>
					</OverlayTrigger>
				</Col>
				<Col style={styles.totalSavings} md={6}> 
					{`$${this.props.price}`}
				 </Col>		
			</Row>
		)
	}
}