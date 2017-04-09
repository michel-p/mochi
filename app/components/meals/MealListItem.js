import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';

import moment from 'moment';
import styles from './MealListItem.style'

export default class MealListItem extends Component {
  constructor(props){
    super(props)
  }

  getRandomMood() {
    mochiMood = require('../../assets/mochi_meal4-min.jpeg');
    switch (Math.floor(Math.random() * (4 - 1)) + 1){
      case 1: mochiMood = require('../../assets/mochi_meal1-min.jpeg')
      break;
      case 2: mochiMood = require('../../assets/mochi_meal2-min.jpeg')
      break;
      case 3: mochiMood = require('../../assets/mochi_meal3-min.jpeg')
      break;
    }
    return mochiMood;
  }
  
  render() {
    var mealDate = moment(this.props.rowData[2], moment.ISO_8601).format('DD/MM/YYYY \n hh:mm');
    var mochiMood = this.getRandomMood();
    return (
      <View style={styles.itemRow}>
        <View style={[styles.containerCapital/*, { backgroundColor: this.props.rowData[3] }*/]}>
          <Text style={styles.capital}>{this.props.rowData[1].substr(0, 1).toUpperCase()}</Text>
        </View>
        <View style={styles.containerRanking}>
          <View>
              <Text style={styles.username}>{this.props.rowData[1]}</Text>
          </View>
        </View>
        <View style={styles.containerDate}>
            <Text style={styles.date}>{mealDate}</Text>
        </View>
        <View style={styles.containerMochi}>
          <Image resizeMode="contain" style={styles.mochiMoods} source={mochiMood}/>
        </View>
      </View>
    );
  }
}
