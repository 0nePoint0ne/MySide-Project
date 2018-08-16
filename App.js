import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { Tab, Tabs, TabList, TabPanel } from 'react-native';
import { TabNavigator } from "react-navigation";


export default class App extends React.Component {

  printTime(){
    alert("hello");
  }
  render() {

    return (
      <View style={styles.container}>
        <Button 
        onPress={this.printTime}
        title="LOADING BUTTON"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);