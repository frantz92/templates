import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm' />
          <List>
            <ListItem primaryText={firstName} secondaryText='first name' />
          </List>
          <List>
            <ListItem primaryText={lastName} secondaryText='last name' />
          </List>
          <List>
            <ListItem primaryText={email} secondaryText='email' />
          </List>
          <List>
            <ListItem primaryText={occupation} secondaryText='occupation' />
          </List>
          <List>
            <ListItem primaryText={city} secondaryText='city' />
          </List>
          <List>
            <ListItem primaryText={bio} secondaryText='bio' />
          </List>
          <br />
          <RaisedButton
            label='back'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label='confirm & continue'
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

export default FormPersonalDetails;
