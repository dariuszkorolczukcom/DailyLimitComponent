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
                    <div style={mainContainerTop}>
                    <h3>Daily Spend Limit</h3>
                        <div style={mainContainerContent}><p style={paragraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        <div style={mainContainerContent}>
                                <div style={alignRight}>£{this.state.data.currentSpend}</div>
                                <div style={alignRight}>£{this.state.data.dailySpendLimit}</div>
                            <ProgressBar now={this.state.data.currentSpend} max={this.state.data.dailySpendLimit} min={10}/>
                            <p>{`Todays spend ${this.state.data.currentSpend}% of limit`}</p> 
                        </div>
                        
                    </div>
                    <div style={mainContainerBottom}>
                    <h3>Notification settings</h3>
                    <div>Registered emails: {this.state.data.emails.map((email) => {
                        return <span>{email}, </span>
                    })}</div><br/>
                    <div>Registered numbers: {this.state.data.mobiles.map((mobile) => {
                        return <span>{mobile}, </span>
                    })}</div><br/>
                    
                    <div style={formInput}>
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
                    </div>
                    <div style={formInput}>
                    <LocalForm onSubmit={(values) => this.handleSubmitEmail(values)}>
                        <Col className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                            </Col>
                        </Col>
                        <Col className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Add Email
								</Button>
                            </Col>
                        </Col>
                    </LocalForm>
                    </div>
                    </div>
                </div>
                </div>
        );
    };
}

const mainContainerTop = {
    margin: '20px',
    backgroundColor: '#2b2f30',
    color: 'white'
};
const mainContainerBottom = {
    margin: '20px',
    textAlign: 'left'
};
const mainContainerContent = {
    display: 'inline-block',
    fontSize: '15px',
    textAlign: 'left',
    width: '49%'
};
const paragraphText = {
    textAlign: 'justify',
    backgroundColor: '#1f445e',
    padding: '20px'
};
const alignRight = {
    fontSize: '25px',
    display: 'inline-block',
    fontSize: '15px',
    textAlign: 'center',
    width: '49%'
};
const formInput = {
    fontSize: '25px',
    display: 'inline-block',
    fontSize: '15px',
    width: '25%'
};

export default DailyLimit;