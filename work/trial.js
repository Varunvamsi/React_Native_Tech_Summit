/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


class HomeScreen extends React.Component{
  static NavigationOptions = {
    title: 'Home',
  };

  render () {
    // const { navigate } = this.props.navigation;
    return (
<View style = {styles.container}>
<Text style={styles.welcome}>Welcome to React Native!</Text>

// <Button onPress ={ () => this.props.navigation.navigate('Profile')} / >

</View>
);
  }
}


class ProfileScreen extends React.Component{
  static NavigationOptions = {
    title: 'Profile',
  };

  render () {
    const {navigate} = this.props.navigation;
    return (
<Text
onPress ={ () => navigate('Home')}> Navigate to Home
</Text>
);
  }
}


const NavigationApp = createStackNavigator({
  Home: { screen : HomeScreen},
  Profile: {screen : ProfileScreen},
});

export default class App extends React.Component {
  render() {
    return
    <NavigationApp /> ;
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





// <TextInput
//           placeholder="Type Here"
//           value={this.state.search}
//           onChangeText={this.searchChangedHandler}
//           style={styles.placeInput}
//         />
