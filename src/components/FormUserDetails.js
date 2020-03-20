import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'



export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="USER FORM" />
                <TextField
                hintText = "Enter first name"
                floatingLabelText = "First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                 />
                 <br />
                 <TextField
                hintText = "Enter last name"
                floatingLabelText = "Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.firstName}
                 />
                 <br />
                 <TextField
                hintText = "Enter your email"
                floatingLabelText = "Email Address"
                onChange={handleChange('email')}
                defaultValue={values.firstName}/>
                < br />
                <RaisedButton 
                label="Continue"
                primary ={true}
                style={StyleSheet.button}
                onClick={this.continue}
                />


                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button:{
        margin: 15
    }
}

export default FormUserDetails
