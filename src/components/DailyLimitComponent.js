import React, { Component } from 'react';
import { Line } from 'rc-progress';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Col, Row } from 'reactstrap';
import { DATA } from '../shared/data';

//validation variables
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@+[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class DailyLimit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: DATA.emails,
            mobiles: DATA.mobiles,
            currentSpend: DATA.currentSpend,
            dailySpendLimit: DATA.dailySpendLimit
        };
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.handleSubmitNumber = this.handleSubmitNumber.bind(this);
    };

    //displays provided array of numbers after taking only first 4

    DisplayNumbers(mobiles) {

        if (mobiles.length > 0) {
            return (
                <div>Registered numbers:
                {mobiles.map((number) => {
                        return <span>{number}, </span>
                    })}
                </div>
            )
        } else {
            return (<div></div>)
        }
    };

    //handle adding new email to the state
    handleSubmitEmail(values) {
        let newArray = this.state.emails;
        if (newArray.length >= 4) {
            alert('You can add only 4 emails!')
        } else {
            newArray.push(values.email);
            this.setState({ emails: newArray });
        }
    };

    //handle adding new number to the state
    handleSubmitNumber(values) {
        let newArray = this.state.mobiles;
        if (newArray.length >= 4) {
            alert('You can add only 4 numbers!')
        } else {
            newArray.push(values.number);
            this.setState({ mobiles: newArray });
        }
    };

    render() {
        const emailList = this.state.emails;
        return (
            <div className="container">
                <div className="col-12 mt-5 dark">
                    <div style={mainContainerTop}>
                        <h3 style={titleText}>Daily Spend Limit</h3>
                        <div style={mainContainerContent}><p style={paragraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        <div style={mainContainerContent}>
                            <div style={alignLeft}>£{this.state.currentSpend.toFixed(2)}</div>
                            <div style={alignRight}>£{this.state.dailySpendLimit.toFixed(2)}</div>
                            <div className="col-12"><Line percent={(this.state.currentSpend/this.state.dailySpendLimit*100).toFixed(0)} strokeWidth="1" strokeColor="#c0522d" trailColor="rgba(100,100,100,.4)"/></div>
                            <div style={alignLeft}>{`Todays spend ${(this.state.currentSpend/this.state.dailySpendLimit*100).toFixed(0)}% of limit`}</div>
                            <div style={alignRight}>Spend limit</div>
                        </div>
                    </div>
                    <div style={mainContainerBottom}>
                        <h3>Notification settings</h3>
                        <div>Registered emails: {console.log('right before map ' + this.state.emails)}{emailList.map((email) => {
                            return <span>{email}, </span>
                        })}</div><br />{console.log('right after map ' + this.state.emails)}
                        {this.DisplayNumbers(this.state.mobiles)}
                        <div style={formInput}>
                            <LocalForm onSubmit={(values) => this.handleSubmitNumber(values)}>
                                <Row className="form-group">
                                    <Label style={labelStyle} htmlFor="number" md={2}>Mobile: </Label>
                                    <Col md={10}>
                                        <Control.text model=".number" id="number" name="number"
                                            placeholder="Tel. Number"
                                            className="form-control"
                                            validators={{
                                                minLength: minLength(3), maxLength: maxLength(15), isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".number"
                                            show={{ touched: true, focus: true }}
                                            messages={{
                                                minLength: 'Must be greater than 2 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
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
                                    <Label style={labelStyle} htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid Email Address'
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".telnum"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
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

//internal stylesheets

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
    width: '45%',
    margin: '1rem',
    height: '100%'
};
const paragraphText = {
    textAlign: 'justify',
    backgroundColor: '#1f445e',
    padding: '20px'
};
const alignLeft = {
    fontSize: '25px',
    display: 'inline-block',
    textAlign: 'left',
    width: '49%',
    height: '50%'
};
const alignRight = {
    fontSize: '25px',
    display: 'inline-block',
    textAlign: 'right',
    width: '49%',
    height: '50%'
};
const formInput = {
    fontSize: '25px',
    display: 'inline-block',
    width: '25%'
};
const titleText = {
    textAlign: 'left',
    padding: '1rem'
};
const labelStyle = {
    fontSize: '10px',
    color:'rgba(50,50,50,.7)'
};

export default DailyLimit;