import { createStackNavigator } from 'react-navigation'
import UsersScreen from '../Containers/UsersScreen'
import FollowersScreen from '../Containers/FollowersScreen'

const RootStack = createStackNavigator({
  Users: {
    screen: UsersScreen
  },
  Followers: {
    screen: FollowersScreen
  }
})
export default RootStack
