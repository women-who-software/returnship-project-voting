// Import React Packages
import React from 'react'
import Header from '../Header/Header'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

// Import ReactBootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <h3>Sign-up</h3>
            <span>Use your email or Google account and password</span>
            <Form>
              <Form.Group>
                {/* <Form.Label>Email</Form.Label> */}
                <Col>
                  <Form.Control placeholder='First Name'></Form.Control>
                  <Form.Control placeholder='Last Name'></Form.Control>
                  <Form.Control
                    type='email'
                    placeholder='SallyJoe@example.com'
                  ></Form.Control>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                  ></Form.Control>
                  <Button>Sign-up</Button>
                  <Button>Login with Google</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}
