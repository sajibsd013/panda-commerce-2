import React, { useState } from 'react';
import { Form, Input, Button, FormGroup } from 'reactstrap';

const Footer = () => {
    const [email, setEmail] = useState('')

    const onInputChange = event => {
        setEmail(event.target.value)
    }

    const OnSubmit = event => {
        event.preventDefault();
        console.log(email);
        setEmail('');
    }

    return (
        <div className='text-center'>
            <div className='rounded p-2 py-5 d-flex justify-content-center' style={{ backgroundColor: '#FEEAE9' }}>
                <div className='py-4'>
                    <h2>LESTS'S STAY IN THOUH</h2>
                    <h6 className='text-muted'>Get Update on salse, specials and more</h6>
                    <Form onSubmit={event => OnSubmit(event)}>
                        <FormGroup>
                            <Input type='email'
                                name='email'
                                value={email}
                                placeholder='Enter Your Email'
                                onChange={event => onInputChange(event)}
                                required
                            />
                            <Button className='mt-2' type='submit' color='danger'>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>

            <footer className='bg-dark text-light'><small>&copy; 2021 Panda-Commerce. All Rights Reserved</small></footer>
        </div>
    );
};

export default Footer;