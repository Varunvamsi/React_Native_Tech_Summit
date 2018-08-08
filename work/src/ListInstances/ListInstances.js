import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,Button, TextInput} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ListInstances extends React.Component{
  static NavigationOptions = {
    title: 'Profile',
  };

constructor() {
  super();
  this.state = {
    data: [
      {
        Instance_Id: '1',
        Instance_Name:'T2:',
        Instance_Type: 'Burstable Performance Instances',
      },
      {
        Instance_Id: '2',
        Instance_Name:'M5:',
        Instance_Type: 'General Purpose Instances',
      },
      {
        Instance_Id: '3',
        Instance_Name:'M4:',
        Instance_Type: 'Balance of Compute, Memory, Network Resources',
      },
      {
        Instance_Id: '4',
        Instance_Name:'C5:',
        Instance_Type: 'Compute Instances',
      },
      {
        Instance_Id: '5',
        Instance_Name:'Z1:',
        Instance_Type: 'Memory Optimised Instances',
      },
    ]
  }
}

renderSeparator() {
    return <View style={styles.separator} />
}
renderHeader() {
   return (
     <View style={styles.header}>
       <Text style={styles.headerText}>Instances</Text>
     </View>
   )
}

render () {
const {navigate} = this.props.navigation;
return (

<View >
<View style = {{width:'100%', alignItems: 'flex-end'}}>

<Button
title = "Cart"
onPress ={ () => this.props.navigation.navigate('TotalCost')}
style = {styles.placeInput} />
</View>

<View style = {styles.inputContainer}>
<TextInput
    placeholder="Type Here"
    onChangeText={this.searchChangedHandler}
    style={styles.placeInput}
/>

<View style={{ width: "20%" , }}>
<Button
title = "Search"
onPress ={ () => this.props.navigation.navigate('ListInstances')}
style = {styles.placeButton} />
</View>
</View>

<FlatList
style = {styles.trial}

  data={this.state.data}
  renderItem={({item}) => <Text
  onPress ={ () => navigate('InstanceDetail')}
  style = {styles.listItem}>
  {item.Instance_Name} {item.Instance_Type}</Text> }

 ItemSeparatorComponent={this.renderSeparator.bind(this)}
/>
<Button
title = "Go back to Home Screen"
 onPress ={ () => this.props.navigation.navigate('SearchScreen')} />
</View>

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
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItem: {
      width: "100%",
      marginBottom: 10,
      padding: 10,
  },
  trial:{
    marginBottom:5,

  },
  listContainer: {
    width: "100%",
    margin: 5
  },
separator: {
   height: 0.5,
   width: "100%",
   alignSelf: 'center',
   backgroundColor: "#555"
 },
 header: {
   padding: 10,
 },
 headerText: {
   fontSize: 30,
   fontWeight: '900'
},
placeInput: {
  width: "80%"
},
placeButton : {
  width: "30%"
},
});

export default ListInstances;
