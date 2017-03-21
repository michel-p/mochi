import React, { Component } from 'react';
import {
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';

import Carousel from 'react-native-looped-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './MochiView.style'

const { width, height } = Dimensions.get('window');

export default class MochiView extends Component {
  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Icon name="ios-paw" size={30} color={tintColor} />
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

  render() {
    return (
      <View style={styles.containerMochi} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={5000}
          style={this.state.size}
          autoplay
        >
          <View style={this.state.size}>
            <Image style={[styles.imageCover, this.state.size]} source={require('../../assets/images/mochi_1.jpeg')}/>
          </View>
          <View style={this.state.size}>
            <Image style={[styles.imageCover, this.state.size]} source={require('../../assets/images/mochi_2.jpeg')}/>
          </View>
          <View style={this.state.size}>
            <Image style={[styles.imageCover, this.state.size]} source={require('../../assets/images/mochi_3.jpeg')}/>
          </View>
          <View style={this.state.size}>
            <Image style={[styles.imageCover, this.state.size]} source={require('../../assets/images/mochi_4.jpeg')}/>
          </View>
        </Carousel>
        <View style={styles.containerPokedex}>
          <View style={styles.containerInfo}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>
              Mochi&nbsp;
              <Icon style={styles.gender} name="ios-male" size={22} color="#F4FAFF" />
            </Text>
          </View>
          <View style={[styles.containerInfo, styles.containerAge]}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>1</Text>
          </View>
          <View style={[styles.containerInfo, styles.containerHeight]}>
            <Text style={styles.label}>Height</Text>
            <Text style={styles.value}>48cm</Text>
          </View>
          <View style={[styles.containerInfo, styles.containerWeight]}>
            <Text style={styles.label}>Weight</Text>
            <Text style={styles.value}>1.8kg</Text>
          </View>
        </View>
      </View>
    );
  }
}
