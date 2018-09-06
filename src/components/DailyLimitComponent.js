import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { Button, Label, Col, Row } from 'reactstrap';
import { DATA } from '../shared/data';


class DailyLimit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: DATA,
            email: '',
            mobile: ''
        };
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.handleSubmitNumber = this.handleSubmitNumber.bind(this);
    }

    handleSubmitEmail(values) {
        //edit to insert db connection
        this.setState({
            email: values.email
        });
        console.log("Will add a new email: " + JSON.stringify(values.email));
        alert("Will add a new email: " + JSON.stringify(values.email));
    };

    handleSubmitNumber(values) {
        //edit to insert db connection
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
                    <Media>
                        <Media left middle>
                            <p>Daily Spend Limit: </p>
                            <p>{this.state.data.dailySpendLimit}</p>
                        </Media>
                    </ Media>
                    <Media body className="ml-5">
                        <p>Spend already: </p>
                        <Media heading>{this.state.data.currentSpend}</Media>

                        <p>{this.state.data.emails.map((email) => {
                            return <p>{email}</p>
                        })}</p>
                        <p>{this.state.data.mobiles.map((email) => {
                            return <p>{email}</p>
                        })}</p>

                    </Media>
                    <LocalForm onSubmit={(values) => this.handleSubmitEmail(values)}>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="primary">
                                    Add Email
								</Button>
                            </Col>
                        </Row>
                    </LocalForm>
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
            </div>
        );
    };
}

export default DailyLimit;