import React, { Component } from 'react';
import { Button, Col, Input, FormGroup, Label, Form } from 'reactstrap';
class Contact extends Component {
    state = {
        firstName: null,
        lastName: '',
        telNumber: '',
        email: '',
        agree: false,
        contactType: '',
        message: ''
    }

    handleInputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        document.title ="Panda Commerce- Contact";

        return (
            <section className='container py-5'>
                <h3 className='text-center text-muted mb-5'>Send Us Your Feedback</h3>
                <div style={{ maxWidth: '780px' }} className='m-auto'>

                    <Form onSubmit={event => this.onSubmit(event)}>
                        <FormGroup row>
                            <Label htmlFor='firstName' md={2}>First Name</Label>
                            <Col md={10}>
                                <Input
                                    type='text'
                                    name='firstName'
                                    placeholder='First Name'
                                    value={this.state.firstName}
                                    onChange={event => this.handleInputChange(event)}
                                    required
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor='lastName' md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input
                                    type='text'
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={this.state.lastName}
                                    onChange={event => this.handleInputChange(event)}
                                    required
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor='telNumber' md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Input
                                    type='tel'
                                    name='telNumber'
                                    placeholder='Tel. Number'
                                    value={this.state.telNumber}
                                    onChange={event => this.handleInputChange(event)}
                                    required
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor='email' md={2}>Email </Label>
                            <Col md={10}>
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={this.state.Email}
                                    onChange={event => this.handleInputChange(event)}
                                    required
                                />
                            </Col>
                        </FormGroup>

                         <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                                <FormGroup check>
                                    <Label check >
                                        <Input
                                            type="checkbox"
                                            name="agree"
                                            value={this.state.agree}
                                            className='cursor'
                                            onChange={event => this.handleInputChange(event)}
                                        />
                                        <strong>May We Contact you? </strong>
                                    </Label>
                                </FormGroup>
                            </Col>


                            <Col md={{ size: 3, offset: 1 }} >
                                <Input
                                    type="select"
                                    name="contactType"
                                    value={this.state.contactType}
                                    className='cursor'
                                    onChange={event => this.handleInputChange(event)}
                                    required
                                >
                                    <option >Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor='message' md={2}>Your Feedback </Label>
                            <Col md={10}>
                                <Input
                                    type='textarea'
                                    name='message'
                                    rows='6'
                                    value={this.state.message}
                                    onChange={event => this.handleInputChange(event)}
                                    required
                                />
                            </Col>
                        </FormGroup> 

                        <FormGroup row>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type='submit' color='primary'>Send Feedback</Button>
                            </Col>
                        </FormGroup>

                    </Form>
                </div>
            </section>
        )
    }
}

export default Contact;