import React, { Component } from 'react';
import configuration from '../../config';
import API from '../../services/API';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
  AppState,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import styles from './CameraView.style'

export default class CameraView extends Component {
  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Icon name="ios-camera" size={30} color={tintColor} />
      ),
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.username,
      feedAllowed: true,
      lightOn: false,
      appState: AppState.currentState,
      mochiURI: configuration.MOCHI_STREAM_URL,
      feedback: false,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      // Reset the URL so webview is re-rendered
      this.setState({mochiURI: configuration.MOCHI_STREAM_URL});
    }
    this.setState({appState: nextAppState});
  }

  feedMochi() {
    API.feedMochi(this.state.username)
    .then(feedAllowed => {
      if (feedAllowed != false) {
        this.setState({
          feedAllowed: true,
          feedback: "Mochi is so happy !!"
        })
        // animation
      }
      else this.setState({
        feedAllowed: false,
        feedback: "Mochi has allready been fed too much for now"
      })
    })
    .catch(e => this.setState({
      feedAllowed: false,
      feedback: "Something went wrong, tell Michel !"
    }))
  }

  toggleCageLights() {
     API.lightCage()
    .then(result => {
      if (result.lightOn != false) {
        this.setState({
          lightOn: true,
          feedback: "Turn on the lights !"
        })
        // animation
      }
      else this.setState({
        lightOn: false,
        feedback: "Turn off the lights !"
      })
    })
    .catch(e => this.setState({
      lightOn: false,
      feedback: "Something went wrong with the lights, tell Michel !"
    }))
  }

  renderFeedback() {
    if(this.state.feedback != false)
      setTimeout(() => this.setState({feedback: false}), 3000);
      return (
        <View style={styles.feedbackContainer}>
          <Text style={styles.feedback}> {this.state.feedback} </Text>
        </View>
      )
  }

  render() {
    let feedback = this.renderFeedback();
    return (
      <View style={styles.container}>
        <WebView style={styles.webview}
          source={{uri: this.state.mochiURI}}
          scalesPageToFit={true}
          scrollEnabled={true}
        />

        {feedback}

        <ActionButton
          buttonColor={this.state.feedAllowed ? "#CE7DA5" : "#4F646F"}
          onPress={() => this.feedMochi()}
          useNativeFeedback={false}
          icon={<Icon name="ios-nutrition" size={30} color="#F4FAFF" />}
        />

        <ActionButton
          buttonColor={this.state.lightOn ? "#F7D4BC" : "#4F646F"}
          onPress={() => this.toggleCageLights()}
          position='left'
          useNativeFeedback={false}
          icon={<Icon name="ios-bulb" size={30} color="#F4FAFF" />}
        />
      </View>
    )
  }
}
