import React from 'react';
import {Redirect} from 'react-router-dom';
import {Form, FormGroup, Label, Col, Input, Container, Button} from 'reactstrap';

const AuthPage = ({isLogged, onLogIn}) => {

    if (isLogged) {
        return (
            <Redirect to={'/'}/>
        )
    }
    return (
        <Form>
            <Container>
                <FormGroup>
                    <p className='text-center'>
                        To continue please log in or register.
                    </p>
                </FormGroup>
                <FormGroup row>
                    <Label for="login" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="text" name="email" id="login" placeholder="with a placeholder"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="pass1" sm={2}>Enter password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="pass1" placeholder="password placeholder"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="pass2" sm={2}>Confirm password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="pass2" placeholder="password placeholder"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Button color='primary'
                            onClick={onLogIn}
                            type='submit'> Log in </Button>
                    <Button color='primary' outline
                            onClick={onLogIn}> Register </Button>
                </FormGroup>
            </Container>
        </Form>
    )
};

export default AuthPage;