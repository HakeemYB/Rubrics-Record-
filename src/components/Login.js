import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // API call or other logic here
    this.props.isLogin(true);
    
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="Username" 
            onChange={this.handleChange}
            value={this.state.username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password} 
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Login;
