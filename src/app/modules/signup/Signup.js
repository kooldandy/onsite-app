import React from 'react';
import { TextField, Button } from '@material-ui/core';
//import { SendRounded } from '@material-ui/icons';
;

export class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signup: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
            }
        }
        this.login = this.signup.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    isFormValid = () => {
        return (
            !!this.state.signup.firstName &&
            !!this.state.signup.lastName &&
            !!this.state.signup.password &&
            !!this.state.signup.email
        );
    }

    signup = (e) => {
        e.preventDefault();
        //console.log(this.state.signup.firstName, this.state.signup.lastName, this.state.signup.password);

        const requestOptions = {
            method: 'POST',
            headers: ({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                firstName: this.state.signup.firstName,
                lastName: this.state.signup.lastName,
                password: this.state.signup.password,
                email: this.state.signup.email,
                location: this.state.signup.location,
            })
        };

        fetch('http://localhost:3001/api/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    handleChange = (event) => {
        //console.log(event.target.value, 'id', event.target.id) ;
        const name = event.target.id;
        const state = this.state;
        state.signup[name] = event.target.value;
        this.setState({ ...state });
    };

    render() {
        return (
            <form noValidate autoComplete="off" onSubmit={this.signup}>
                <div>
                    <TextField id="email" label="E-Mail" value={this.state.signup.email} onChange={this.handleChange} />
                </div>
                <div>
                    <TextField id="firstName" label="First Name" value={this.state.signup.firstName} onChange={this.handleChange} />
                </div>
                <div>
                    <TextField id="lastName" label="Last Name" value={this.state.signup.lastName} onChange={this.handleChange} />
                </div>
                <div>
                    <TextField id="password" type="password" label="Password" value={this.state.signup.password} onChange={this.handleChange} />
                </div>
                
               
                <div>
                    <Button variant="contained" color="primary" type="submit" disabled={!this.isFormValid}>
                        SignUp
                    </Button>
                </div>
                </form>
        )
    }
}