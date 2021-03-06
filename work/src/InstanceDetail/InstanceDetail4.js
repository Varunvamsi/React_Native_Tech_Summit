import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';


class InstanceDetail4 extends React.Component{
  static NavigationOptions = {
    title: 'Trial',
  };

  render () {
    const {navigate} = this.props.navigation;
    return (
<Text
onPress ={ () => navigate('SearchScreen')}> Navigate to Home
</Text>
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

export default InstanceDetail4;
