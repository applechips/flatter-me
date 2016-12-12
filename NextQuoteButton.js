import React, { Component, PropTypes } from 'react'
import {
	TouchableOpacity,
	Text,
  Image,
	StyleSheet,
} from 'react-native'

const heartImage = require('./assets/mail.png')

class NextQuoteButton extends Component {
	render() {
		return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>

      <Image source={heartImage} style={styles.buttonImage}/>
      </TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({

	buttonText: {
		color: 'blue',
		fontSize: 18,
	},
  buttonImage: {
    width: 95,
    height: 95,
    paddingTop: 20,
  }
})

NextQuoteButton.propTypes = {
	onPress: PropTypes.func.isRequired,
}

export default NextQuoteButton
