import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Quote from './Quote'
const heartImage = require('./assets/heart.jpg')

class RelaxationStation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Image source={heartImage} style={styles.buttonImage}/>
        </TouchableOpacity>
        <Text style={styles.readyText}>Flatter me...</Text>
        <Quote quoteText="Amazing Quote" quoteSource="- Gr8 here" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },

  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff'
  },

  button: {
    // backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    // shadowColor: '#303838',
    // shadowOffset: { width: 0, height: 5},
    // shadowRadius: 10,
    // shadowOpacity: 0.35
  },

  buttonImage: {
    width: 200,
    height: 200
  }

});

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
