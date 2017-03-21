import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import MealListItem from './MealListItem'
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  /*
   * Removed for brevity
   */
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default class MealsView extends Component {
  static navigationOptions = {
    tabBar: {
      icon: ({ tintColor }) => (
        <Icon name="ios-nutrition" size={30} color={tintColor} />
      ),
    }
  }
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['meal_1'])
    };
  }
  getMeals() {
    // return fetch('http://192.168.1.20:80/mochi/meals.py')
    return fetch('http://mochi.ddns.net:80/mochi/meals.py')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    this.getMeals().then((meals) => this.setState({dataSource: this.state.dataSource.cloneWithRows(meals)}))
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <MealListItem rowData={rowData}/>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    );
  }
}
