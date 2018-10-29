

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,AsyncStorage} from 'react-native';

export default class App extends Component<Props> {
  show = async () =>{
     const value = await AsyncStorage.mergeItem("PT2308");
      console.log(value);
  }
  Remove = async () =>{
       try {
          await AsyncStorage.removeItem("PT2308");
          console.log("da xoa");
       } catch (e) {

       }
  }
  getData = async () =>{

            let UID123_object = {
                name: 'Chris',
                age: 30,
                traits: {hair: 'brown', eyes: 'brown'},
        };
        // You only need to define what will be added or updated
        let UID123_delta = {
                age: 31,
                traits: {eyes: 'blue', shoe_size: 10},
        };
        AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
        AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
        AsyncStorage.getItem('UID123', (err, result) => {
        console.log(result);
      });
    });
  });
  }
  setData = async () =>{
    try {
       await AsyncStorage.setItem("PT2308","nguyen chi thanh");
       console.log("ok");
    } catch (e) {
        console.log(e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity onPress={() =>{this.setData()}}>
              <Text>SetData</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress = {() =>{this.getData()}}>
              <Text>GetData</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress = {() =>{this.Remove()}}>
              <Text>Remove</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress = {() =>{this.show()}}>
              <Text>Show</Text>
         </TouchableOpacity>
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
