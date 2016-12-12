import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

const heartImage = require('./assets/heart.png')

class StartScreen extends Component {
  render() {
    return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={this.props.onStartHandler}>
              <Image source={heartImage} style={styles.buttonImage}/>
              </TouchableOpacity>
              <Text style={styles.readyText}>Flatter me...</Text>
            </View>
          )
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
    // color: '#ffffff'
  },

  button: {
    // backgroundColor: '#859a9b',
    // borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    // shadowColor: '#303838',
    // shadowOffset: { width: 0, height: 5},
    // shadowRadius: 10,
    // shadowOpacity: 0.35
  },

  buttonImage: {
    width: 300,
    height: 300
  }

});

export default StartScreen
// export our new class
