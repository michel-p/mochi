import React, { Component } from 'react';
import API from '../../services/API';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './LoginView.style'

export default class LoginView extends Component {
  static navigationOptions = {
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,
      visible: false,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      wrongSignUp: false,
      loadingTamamochi: false,
    };
  }

  signup() {
    this.setState({loadingTamamochi: true, wrongSignUp: false});
    API.authenticate(this.state.username, this.state.password)
    .then(token => {
      if (token != false)
        this.props.navigation.navigate('MochiTabs', {username: this.state.username});
      else this.setState({wrongSignUp: true, loadingTamamochi: false})
    })
    .catch(e => this.setState({wrongSignUp: true, loadingTamamochi: false}))
  }

  renderSubmitIcon() {
    if(this.state.loadingTamamochi) {
      return (
        <ActivityIndicator
          animating={this.state.loadingTamamochi}
          color="#FFFFFF"
          style={[styles.centering, {height: 50}]}
          size="large"
        />
      );
    }
    return (
      <Icon.Button
        name="ios-nutrition"
        size={30}
        style={styles.submit}
        onPress={() => this.signup()}>
        <Text style={styles.submitText}>Sign in</Text>
      </Icon.Button>
    );
  }

  render() {
    let errors = null;
    if (this.state.wrongSignUp) {
      errors = <Text style={styles.errors}> Incorrect login or password</Text>;
    }
    return (
      <ScrollView style={styles.loginForm}>
        <View style={styles.box}>
          <Text style={styles.appTitle}>Tamamochi</Text>
          <Image style={styles.mochi} source={require('../../assets/images/mochi-min.png')}/>
        </View>
        <View style={styles.keyboardAvoid}>
          <KeyboardAvoidingView behavior='position'>
            <TextInput
              returnKeyType = {"next"}
              autoFocus = {true}
              style={styles.input}
              placeholder="Username"
              onChangeText={(username) => this.setState({username})}
              onSubmitEditing={(event) => { 
                this.refs.SecondInput.focus(); 
              }}
            />
            <View style={styles.separator}></View>
            <TextInput
              ref='SecondInput'
              returnKeyType = {"go"}
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
              onSubmitEditing={(event) => { 
                this.signup();
              }}
            />
            <View style={styles.separator}></View>
          </KeyboardAvoidingView>
        </View>      
        <View style={styles.box}>
          <View style={styles.separatorSubmit}></View>  
          { this.renderSubmitIcon() }
          { errors }
        </View>
      </ScrollView>
    );
  }
}
