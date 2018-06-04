import React from 'react'
import { View, Text, Image, Linking, Alert, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/UserStyle'

export default class User extends React.Component {
  handleLink = async () => {
      const {html_url: url} = this.props.user
      try {
          const isSupported = await Linking.canOpenURL(url)
          if (!isSupported) {
              Alert.alert('Error', 'Can\'t handle url: ' + url);
          } else {
              return Linking.openURL(url);
          }
      } catch (e) {
          Alert.alert('Error', 'Can\'t handle url: ' + url);
      }
  }

  render () {
    const {user} = this.props
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onRowPress && this.props.onRowPress(user.login)}>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={{uri: user.avatar_url}}
          />
          <View>
            <Text>{user.login}</Text>
            <TouchableWithoutFeedback onPress={this.handleLink}>
              <View>
                <Text>
                  {user.html_url}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
