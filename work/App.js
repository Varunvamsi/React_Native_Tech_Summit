import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SearchScreen from './src/Searchscreen/SearchScreen'
import ListInstances from './src/ListInstances/ListInstances'
import InstanceDetail from './src/InstanceDetail/InstanceDetail1'
import TotalCost from './src/TotalCost/TotalCost'

const NavigationApp = createStackNavigator({
  SearchScreen: { screen : SearchScreen},
  ListInstances: {screen : ListInstances},
  InstanceDetail: {screen : InstanceDetail},
  TotalCost: {screen :TotalCost},
});
export default class App extends React.Component {
  render() {
    return <NavigationApp /> ;
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
