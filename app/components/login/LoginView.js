import React, { Component } from 'react';
import API from '../../services/API';
import {
  Text,
  TextInput,
  View,
  Button,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './LoginView.style'

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      wrongSignUp: false,
    };
  }

  signup() {
    API.authenticate(this.state.username, this.state.password)
    .then(token => {
      if (token != false)
        this.props.navigation.navigate('MochiTabs', {username: this.state.username});
      else this.setState({wrongSignUp: true})
    })
    .catch(e => this.setState({wrongSignUp: true}))
  }

  render() {
    let errors = null;
    if (this.state.wrongSignUp) {
      errors = <Text style={styles.errors}> Incorrect login or password</Text>;
    }
    return (
      <View style={styles.loginForm}>
        <Text style={styles.appTitle}>Tamamochi</Text>
        <Image style={styles.mochi} source={require('../../assets/images/mochi-min.png')}/>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
        <View style={styles.separator}></View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
        />
        <View style={styles.separator}></View>        
        <View style={styles.separatorSubmit}></View>        
        <View style={{ alignItems: 'center'}}>
          <Icon.Button
            name="ios-nutrition"
            size={30}
            style={styles.submit}
            onPress={() => this.signup()}>
            <Text style={styles.submitText}>Sign in</Text>
          </Icon.Button>
          { errors }
        </View>
      </View>
    );
  }
}
