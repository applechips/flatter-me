import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  Platform,
  TouchableOpacity,
} from 'react-native';
import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'

const { quotes } = require('./quotes.json')

class RelaxationStation extends Component {
  constructor(props) {
    super(props)

      this.state = {
        quoteIndex: 0,
      }

      this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this)
  }

  _incrementQuoteIndex() {
		let newIndex

		if (this.state.quoteIndex + 1 === quotes.length) {
			newIndex = 0
		} else {
			newIndex = this.state.quoteIndex + 1
		}

		this.setState({
			quoteIndex: newIndex,
		})
	}

  render() {
    const quote = quotes[this.state.quoteIndex]
    return (
      <Navigator
        initialRoute={{ name:'StartScreen'}}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'StartScreen':
              return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen'})}/>
            case 'QuoteScreen':
              return <QuoteScreen text={quote.text} onNextQuotePress={this._incrementQuoteIndex}/>
          }
        }}
      />
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
    fontFamily: (Platform.OS === 'ios')?
      'AvenirNext-Bold' :
      'Roboto',
    fontSize: 40,
  },

  button: {
    padding: 10,
    marginBottom: 20,

  },

  buttonImage: {
    width: 300,
    height: 300
  }

});

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
