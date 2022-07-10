import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Card } from "react-bootstrap";

function RegisterCard() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Card style={{ width: "18rem", marginTop: "1rem", marginLeft: "1rem" }}>
          <h2>Sign Up</h2>
          <Form className="form">
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="something@Email.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="********"
              />
            </FormGroup>
            <Button>Register</Button>
          </Form>
        </Card>
      </div>
      <p>
        Already have an account? <span>Login</span>
      </p>
    </div>
  );
}

export default RegisterCard;
