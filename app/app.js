import { AppRegistry } from 'react-native';
import MochiView from './components/mochi/MochiView';
import CameraView from './components/camera/CameraView';
import MealsView from './components/meals/MealsView';
import LoginView from './components/login/LoginView';

import { StackNavigator, TabNavigator, TabView } from 'react-navigation';

const MochiTabs = TabNavigator({
  Mochi: { screen: MochiView },
  Camera: { screen: CameraView },
  Meals: { screen: MealsView },
},{
  tabBarOptions: {
    activeTintColor: '#CE7DA5',
  },
  navigationOptions: {
   header: {
     visible: false,
   },
  },
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
});

const TamaMochi = StackNavigator({
  Login: {
    screen: LoginView,
  },
  MochiTabs: {
    path: 'tamamochi:/username',
    screen: MochiTabs,
  },
},{
  headerMode: 'none',
});


AppRegistry.registerComponent('TamaMochi', () => TamaMochi);
