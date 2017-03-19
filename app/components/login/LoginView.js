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
      login: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.loginForm}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => this.setState({login: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <View style={{ alignItems: 'center'}}>
          <Icon.Button
            name="ios-nutrition"
            size={25}
            style={styles.submit}
            onPress={() => this.props.navigation.navigate('MochiTabs')}>
            <Text style={styles.submitText}>Sign in</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
}
