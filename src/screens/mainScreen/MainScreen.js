import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppHeaderIcon } from '../../components/appHeaderIcon/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { PostList } from '../../components/postList/PostList'
import { useSelector, useDispatch } from 'react-redux'
import {loadPosts} from '../../redux/actions/postAction'

import { View,Text } from 'react-native'


const MainScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state.post.allPosts)

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (

        <View>

            <Text>HOMeee</Text>

<PostList
            data={allPosts}
            onOpen={openPostHandler}
        />


        </View>
      
    )
}


MainScreen.navigationOption = ({ navigation }) => ({
    headerTitle: 'Main Page',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Take photo'
                iconName='ios-camera'
                onPress={() => navigation.navigate('Create')}
            />
        </HeaderButtons>
    ),
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Togggle Drawer'
                iconName='ios-menu'
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})

export default MainScreen