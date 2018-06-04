import React from 'react'
import { ActivityIndicator } from 'react-native'

class Spinner extends React.Component {
  render () {
    const spinnerColor = '#00ff00'
    return (
      <ActivityIndicator size='large' color={spinnerColor} />
    )
  }
}

export default Spinner
