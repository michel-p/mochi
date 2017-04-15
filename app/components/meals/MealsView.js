import React, { Component } from 'react';
import configuration from '../../config';
import API from '../../services/API';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl
} from 'react-native';
import MealListItem from './MealListItem'
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
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
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['meal_1']),
      noMeals: false,
      refreshing: false,
    };
    this.getMeals().catch(e => this.setState({noMeals: true}))
  }

  getMeals() {
    return API.getMeals()
    .then(meals => {
      if (meals != false)
        this.setState({dataSource: this.state.dataSource.cloneWithRows(meals)});
      else this.setState({noMeals: true})
    })
    .catch(e => this.setState({noMeals: false}))
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.getMeals().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() { 
    let noMeals = null;
    if (this.state.noMeals) {
      noMeals = <Text> No meals could be retrieved ! </Text>;
    }
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <MealListItem rowData={rowData}/>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
        { noMeals }
      </View>
    );
  }
}
