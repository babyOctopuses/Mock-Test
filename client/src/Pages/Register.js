import { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Navbars from "../components/Navbar";

export default function Register() {
  return (
    <div>
      <Navbars />
      <h2>Sign Up</h2>
      <Form className="form">
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="Name" name="Name" id="Name" placeholder="JohnDoe" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
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
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
