import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Quote from './Quote'


const heartImage = require('./assets/heart.png')
const bgImage = require('./assets/background2.png')

class QuoteScreen extends Component {
  render() {
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Quote quoteText={this.props.text} />
          </View>
          </Image>
    )
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode:'cover',
    width: undefined,
    height: undefined
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#efefef',
    
  },


});

export default QuoteScreen
