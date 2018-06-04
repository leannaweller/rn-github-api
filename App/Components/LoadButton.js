import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/LoadButtonStyle'

class LoadButton extends React.Component {
  render () {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>Load more</Text>
      </TouchableOpacity>
    )
  }
}

export default LoadButton
