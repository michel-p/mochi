import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './LoginView.style'

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  signup() {
    var url = "http://mochi.ddns.net:80/mochi/authenticate.py?username="+this.state.username+"&password="+this.state.password;
    // var url = "http://192.168.1.20:80/mochi/authenticate.py?username="+this.state.username+"&password="+this.state.password;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson){
        this.props.navigation.navigate('MochiTabs', {username: this.state.username});
      }
      else{
        // console.log('error');
      }
    })
    .catch((error) => {
      // console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.loginForm}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
        />
        <View style={{ alignItems: 'center'}}>
          <Icon.Button
            name="ios-nutrition"
            size={25}
            style={styles.submit}
            onPress={() => this.signup()}>
            <Text style={styles.submitText}>Sign in</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
}
