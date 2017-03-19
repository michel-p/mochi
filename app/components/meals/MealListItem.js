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

  /*<View style={styles.ranking}>
      <Text> Blabla Stars</Text>
  </View>*/
  
  render() {
    var mealDate = moment(this.props.rowData[2], moment.ISO_8601).format('DD/MM/YYYY \n hh:mm');
    return (
      <View style={styles.itemRow}>
        <View style={[styles.containerCapital/*, { backgroundColor: this.props.rowData[3] }*/]}>
          <Text style={styles.capital}>{this.props.rowData[1].substr(0, 1).toUpperCase()}</Text>
        </View>
        <View style={styles.containerRanking}>
          <View style={styles.username}>
              <Text>{this.props.rowData[1]}</Text>
          </View>
        </View>
        <View style={styles.containerDate}>
            <Text style={styles.date}>{mealDate}</Text>
        </View>
        <View style={styles.containerMochi}>
            <Image resizeMode="cover" source={{uri: 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Mochi&w=200&h=200"'}}/>
        </View>
      </View>
    );
  }
}