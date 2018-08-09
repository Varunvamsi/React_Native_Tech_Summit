import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
import { createStackNavigator ,createBottomTabNavigator} from 'react-navigation';

import SearchScreen from './src/Searchscreen/SearchScreen'
import ListInstances from './src/ListInstances/ListInstances'
import InstanceDetail from './src/InstanceDetail/InstanceDetail1'
import InstanceDetail2 from './src/InstanceDetail/InstanceDetail2'
import InstanceDetail3 from './src/InstanceDetail/InstanceDetail3'
import InstanceDetail4 from './src/InstanceDetail/InstanceDetail4'
import InstanceDetail5 from './src/InstanceDetail/InstanceDetail5'
import InstanceNumber1 from './src/InstanceNumber/InstanceNumber1'
import InstanceNumber2 from './src/InstanceNumber/InstanceNumber2'
import InstanceNumber3 from './src/InstanceNumber/InstanceNumber3'
import InstanceNumber4 from './src/InstanceNumber/InstanceNumber4'
import InstanceNumber5 from './src/InstanceNumber/InstanceNumber5'


import TotalCost from './src/TotalCost/TotalCost'



const NavigationApp = createStackNavigator({
  SearchScreen: { screen : SearchScreen},
  ListInstances: {screen : ListInstances},
  InstanceDetail: {screen : InstanceDetail},
  InstanceDetail2: {screen : InstanceDetail2},
  InstanceDetail3: {screen : InstanceDetail3},
  InstanceDetail4: {screen : InstanceDetail4},
  InstanceDetail5: {screen : InstanceDetail5},
  InstanceNumber1: {screen: InstanceNumber1},
  InstanceNumber2: {screen: InstanceNumber2},
  InstanceNumber3: {screen: InstanceNumber3},
  InstanceNumber4: {screen: InstanceNumber4},
  InstanceNumber5: {screen: InstanceNumber5},

  TotalCost: {screen :TotalCost},
});

const Search = createStackNavigator({
  Search: {screen : NavigationApp}
});

const SearchNavigation = createStackNavigator ({
  SearchScreen : { screen: Search}
})

const CartNavigation = createStackNavigator ({
  TotalCost : { screen: TotalCost}
})
const TabNavigation = createBottomTabNavigator({
  Search:{ screen : NavigationApp},
  Cart:{screen : CartNavigation},
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
}
}
}
);


export default class App extends React.Component {
  render() {
    return (
      <TabNavigation />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
