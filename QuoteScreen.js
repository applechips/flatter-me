import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Quote from './Quote'
const heartImage = require('./assets/heart.png')

class QuoteScreen extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Quote quoteText={this.props.text} />
          </View>
    )
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  }

});

export default QuoteScreen
// export our new class
