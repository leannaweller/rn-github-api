import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import UserList from '../Components/UserList'
import styles from './Styles/ScreenStyle'
import Spinner from '../Components/Spinner'
import LoadButton from '../Components/LoadButton'

export default class UsersScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            spinner: false,
            page: 1,
            allData: false
        }
    }

    componentDidMount =  async () => {
        await this.loadData()
    }

    navigateFollowers = (login) => {
        const {navigate} = this.props.navigation
        navigate('Followers', {login} )
    }

    loadData = async () => {
        this.setState({spinner: true})
        let {page, data} = this.state
        const result = await (await fetch(`https://api.github.com/users?per_page=100&page=${page++}`)).json()
        const newData = result.length ? data.concat(result)  : []
        this.setState({data: newData, spinner: false, page, allData: !result.length})
    }

    render () {
        const {data, spinner, allData} = this.state
        return (
            <ScrollView style={styles.container}>
                {
                    data.length ?
                     <View>
                         <UserList data={data} onRowPress={this.navigateFollowers}/>
                         {
                             spinner && <Spinner />
                         }
                         {
                             (!allData && !spinner)  &&
                             <View style={styles.buttonContainer}>
                                 <LoadButton onPress={this.loadData}/>
                             </View>
                         }
                     </View>
                    :
                   <View style={styles.placeholderContainer}>
                       {spinner ? <Spinner /> : <Text style={styles.emptyText}>No users</Text>}
                   </View>
                }
            </ScrollView>
            )
    }

    static navigationOptions = ({navigation}) => ({
        headerTitle: `Github users`
    })
}