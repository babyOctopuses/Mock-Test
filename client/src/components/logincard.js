import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Card } from "react-bootstrap";
import "../styles/loginCard.css";

function Logincard() {
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
          <h2>Sign In</h2>
          <Form className="form">
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
            <Button>Login</Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Logincard;
