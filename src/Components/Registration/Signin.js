import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';

class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
  
    onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;
        const login = {
            username,
            password
        };
         const headerMethod = {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json"
      }
    };
  fetch(`http://localhost:3001/api/v1/users/login`, headerMethod)
      .then(response => {
        if(response.status !== 200) {return response}
        else{return response.json()}
      })
      .then(res => {
        if(res.status === 200) this.props.history.push('/');
        else{console.log('Unable to login')}
      })
      .catch(e => console.log(e));
        

        this.setState({
           username: '',
        password: ''
        });
        
    }
    render() {
        const { username, password } = this.state;
            
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Login
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this)}>
                                    <TextInputGroup
                                        name="username"
                                        label="Username"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name="password"
                                        label="password"
                                        placeholder="Enter password"
                                        value={password}
                                        type="password"
                                        onChange={this.onChange}
                                    />
                                    <input type="submit" value="Login" className="btn btn-secondary btn-block" />
                                </form>
                            </div>
                        </div>
        )

    }
}

export default SignIn;