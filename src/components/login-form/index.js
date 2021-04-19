import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../containers';

class LoginForm extends Component {

    state = {
        account : {
            username: '',
            password: ''
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted');
    };

    render() { 
        return (
            <div>
                <Navbar />
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input autoFocus id="username" type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control"></input>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;