import React, {Component} from 'react';
import {Form, FormGroup, Label, Col, Input, Container, Button} from 'reactstrap';

export default class RegForm extends Component {
    state = {
        submitPass: false
    };

    componentDidMount() {
        const path = window.location.pathname.slice(1);
        if (path === 'register'){
            this.setState({submitPass: true});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let json = {};

        formData.forEach(function (value, key) {
            json[key] = value;
        });

        fetch('/reg', {
            method: 'POST',
            body: JSON.stringify(json)
        })
            .then(res=>res.json())
            .then(res=>console.log(res));


    };

    onValidation = () => {

    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <FormGroup>
                        <p className='text-center'>
                            To continue please log in or register.
                        </p>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="login" sm={3}>Login</Label>
                        <Col sm={9}>
                            <Input type="text" name="login" id="login"/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="pass1" sm={3}>Enter password</Label>
                        <Col sm={9}>
                            <Input type="password" name="password" id="pass1"/>
                        </Col>
                    </FormGroup>

                    {
                        this.state.submitPass
                            ? <FormGroup row>
                                <Label for="pass2" sm={3}>Confirm password</Label>
                                <Col sm={9}>
                                    <Input type="password" name="password" id="pass2"/>
                                </Col>
                            </FormGroup>
                            : null
                    }

                    <FormGroup row>
                        <Button color='primary'
                                type='submit'> Log in </Button>
                        <Button color='primary' outline> Register </Button>
                    </FormGroup>
                </Container>
            </Form>
        )
    }
}