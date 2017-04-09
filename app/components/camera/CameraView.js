import React, { Component } from 'react';
import configuration from '../../config';
import API from '../../services/API';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import styles from './CameraView.style'

const { width, height } = Dimensions.get('window');

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
      size: { width, height },
      feedAllowed: true,
      lightOn: false,
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  feedMochi() {
    API.feedMochi()
    .then(feedAllowed => {
      if (feedAllowed != false) {
        this.setState({feedAllowed: true})
        // animation
      }
      else this.setState({feedAllowed: false})
    })
    .catch(e => this.setState({feedAllowed: false}))
  }

  toggleCageLights() {
     API.lightCage()
    .then(result => {
      if (result.lightOn != false) {
        this.setState({lightOn: true})
        // animation
      }
      else this.setState({lightOn: false})
    })
    .catch(e => this.setState({lightOn: false}))
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayoutDidChange}>
        <WebView style={[styles.webview, this.state.size]}
          source={{uri: configuration.MOCHI_STREAM_URL}}
          scalesPageToFit={true}
          scrollEnabled={false}
        />
        <ActionButton
          buttonColor={this.state.feedAllowed ? "#CE7DA5" : "#846B8A"}
          onPress={() => this.feedMochi()}
          icon={<Icon name="ios-nutrition" size={30} color="#F4FAFF" />}
        />

        <ActionButton
          buttonColor={this.state.lightOn ? "#F7D4BC" : "#4F646F"}
          onPress={() => this.toggleCageLights()}
          position='left'
          icon={<Icon name="ios-bulb" size={30} color="#F4FAFF" />}
        />
      </View>
    )
  }
}
