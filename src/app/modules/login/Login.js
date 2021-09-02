import React from 'react';
import { TextField, Button } from '@material-ui/core';
//import { SendRounded } from '@material-ui/icons';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: {
                id: '',
                password: '',
            }
        }
        this.login = this.login.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    isFormValid = () =>{
        return this.state.login.id && this.state.login.password;
    }

    login = (e) => {
        e.preventDefault();
        console.log(this.state.login.id, this.state.login.password);
    }

    handleChange = (event) => {
        //console.log(event.target.value, 'id', event.target.id) ;
        const name = event.target.id;
        const state = this.state;
        state.login[name] = event.target.value;
        this.setState({...state});
      };

    render() {
        return <form noValidate autoComplete="off" onSubmit={this.login}>
            <div>
                <TextField id="id" label="Id" value={this.state.login.id} onChange={this.handleChange}/>
            </div>
            <div>
                <TextField id="password" type="password" label="Password" value={this.state.login.password} onChange={this.handleChange}/>
            </div>
            <div>
                <Button variant="contained" color="primary" type="submit" disabled={!this.isFormValid}>
                    Send
                </Button>
            </div>
        </form>
    }
}