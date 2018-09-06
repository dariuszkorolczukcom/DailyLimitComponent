import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Control, LocalForm } from 'react-redux-form';
import { Button, Label, Col, Row } from 'reactstrap';
import { DATA } from '../shared/data';

class DailyLimit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DATA
        };
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.handleSubmitNumber = this.handleSubmitNumber.bind(this);
    }

    handleSubmitEmail(values) {
        //edit to insert db connection for adding emails
        this.setState({
            email: values.email
        });
        console.log("Will add a new email: " + JSON.stringify(values.email));
        alert("Will add a new email: " + JSON.stringify(values.email));
    };

    handleSubmitNumber(values) {
        //edit to insert db connection for adding numbers
        this.setState({
            mobile: values.number
        });
        console.log("Will add a new number: " + JSON.stringify(values.number));
        alert("Will add a new number: " + JSON.stringify(values.number));
    };

    render() {
        return (
            <div className="container">
                <div className="col-12 mt-5">
                    <div style={mainContainer}>
                        <div style={mainContainerContent}>Daily Spend Limit</div>
                        <div style={mainContainerContent}>
                            <div style={alignRight}>
                                <div>£{this.state.data.currentSpend}</div>
                            </div>
                            <div style={alignRight}>
                                <div>£{this.state.data.dailySpendLimit}</div>
                            </ div>
                            <ProgressBar now={this.state.data.currentSpend} max={this.state.data.dailySpendLimit} min={10} label={`${this.state.data.currentSpend}%`} />
                        </div>
                        
                    </div>
                    <div>{this.state.data.emails.map((email) => {
                        return <div>{email}</div>
                    })}</div>
                    <div>{this.state.data.mobiles.map((email) => {
                        return <div>{email}</div>
                    })}</div>

                    <LocalForm onSubmit={(values) => this.handleSubmitNumber(values)}>
                        <Row className="form-group">
                            <Label htmlFor="number" md={2}>Number: </Label>
                            <Col md={10}>
                                <Control.text model=".number" id="number" name="number"
                                    placeholder="Number"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Add Number
								</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    <LocalForm onSubmit={(values) => this.handleSubmitEmail(values)}>
                        <Col className="form-group col-6">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                            </Col>
                        </Col>
                        <Col className="form-group col-6">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Add Email
								</Button>
                            </Col>
                        </Col>
                    </LocalForm>
                </div>
            </div>
        );
    };
}

const mainContainer = {
    margin: '40px',
    border: '5px solid pink',
    backgroundColor: '#2b2f30',
    color: 'white'
};
const alignRight = {
    display: 'inline-block',
    verticalAlign: 'top',
    fontSize: '15px',
    textAlign: 'center',
    width: '49%'
};
const mainContainerContent = {
    display: 'inline-block',
    fontSize: '15px',
    textAlign: 'center',
    width: '49%'
};

export default DailyLimit;