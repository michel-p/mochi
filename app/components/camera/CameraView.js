import React, { Component } from 'react';
import * as constants from '../../config';
import {
  StyleSheet,
  View,
  WebView,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

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
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  feedMochi() {
    fetch(constants.configuration.MOCHI_API_URL+'/feed.py')
    return true;
  }

  toggleCageLights() {
     fetch(constants.configuration.MOCHI_API_URL+'/light.py');
     return true;
  }

  render() {
    return (
      <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
        <WebView style={[{ backgroundColor: '#BADA55' }, this.state.size]}
          source={{uri: constants.configuration.MOCHI_STREAM_URL}}
        />
        <ActionButton
          buttonColor="#F4FAFF"
          onPress={() => this.feedMochi()}
          icon={<Icon name="ios-nutrition" size={30} color="#CE7DA5" />}
        />

        <ActionButton
          buttonColor="#F4FAFF"
          onPress={() => this.toggleCageLights()}
          position='left'
          icon={<Icon name="ios-bulb" size={30} color="#4F646F" />}
        />
      </View>
    )
  }
}
