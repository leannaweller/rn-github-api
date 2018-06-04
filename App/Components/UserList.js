import React from 'react'
import { ListView } from 'react-native'
import User from './User'

class UserList extends React.Component {
  render () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return (
      <ListView
        dataSource={ds.cloneWithRows(this.props.data)}
        renderRow={(user) => <User user={user} onRowPress={this.props.onRowPress} />}
      />
    )
  }
}

export default UserList
