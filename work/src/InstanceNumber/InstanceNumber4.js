import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, FlatList, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';


class InstanceNumber4 extends Component {

  static NavigationOptions = {
    title: 'Home',
  };

  render()
  {
    return (
      <View>

      <Text style = {styles.headerText}> C5:Compute Instances </Text>
    <TextInput placeholder = "Number" style = {styles.inputContainer}/>
    <TextInput placeholder = "Description" style = {styles.inputContainer}/>

    <View style = {{ flexDirection : "row",     justifyContent: 'space-between'}}>
    <View style = {{width : "20%"}}>
    <Button
    title = "Go Back"
     onPress ={ () => this.props.navigation.navigate('ListInstances')}
      />
</View>

<View style = {{width : "20%"}}>

    <Button
    title = "Add"
     onPress ={ () => this.props.navigation.navigate('TotalCost')}
      />
 </View>
 </View>

    </View>
  );
  }

}

const styles = StyleSheet.create({
  inputContainer: {
  borderLeftWidth: 0.5,
  borderRightWidth: 0.5,
  borderBottomWidth: 0.5,
  borderTopWidth: 0.5,


  height: 70
},
header: {
  padding: 10,
},
headerText: {
  fontSize: 30,
  fontWeight: '700'
},
});
export default InstanceNumber4;
