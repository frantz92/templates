import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  validateForm = () => {
    const { values } = this.props;

    let isError = false;
    const errors = {};

    if (values.firstName.length < 5) {
      isError = true;
      values.firstNameError = 'First name minimum 5';
    }

    if (values.email.indexOf('@') === -1) {
      isError = true;
      values.emailError = 'Required valid e-mail';
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors,
      });
    }

    return isError;
  };

  continue = e => {
    e.preventDefault();
    const errValidationForm = this.validateForm();
    if (!errValidationForm) {
      this.props.nextStep();
    }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='enter your first name'
            floatingLabelText='first name'
            onChange={handleChange('firstName')}
            errorText={values.firstNameError}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText='enter your last name'
            floatingLabelText='last name'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText='enter your email'
            floatingLabelText='email'
            onChange={handleChange('email')}
            errorText={values.emailError}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label='next'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
