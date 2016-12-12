import React,{Component, PropTypes} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform

} from 'react-native'

class Quote extends Component {
  render(){
    return(
      <View>
        <Text style={styles.quoteText}>{this.props.quoteText}</Text>
      </View>
    )
  }
}
Quote.propTypes = {
  quoteText: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  quoteText: {
    fontFamily: (Platform.OS === 'ios')?
      'AvenirNext-Bold' :
      'Roboto',
    fontSize: 40,
    marginVertical: 30,
    marginHorizontal: 25,
  }
})
export default Quote
