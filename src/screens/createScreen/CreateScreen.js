import React from 'react'
import {  Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../../components/appHeaderIcon/AppHeaderIcon'
import { createScreenStyles } from './createScreenStyles'

export const CreateScreen = ({ }) => {
    return (
        <View style={createScreenStyles.center}>
            <Text>Create Screen11</Text>
        </View>
    )
}

CreateScreen.navigationOption = ({ navigation }) => ({
    headerTitle: 'Create Screen ',

    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Togle Drawer'
                iconName='ios-menu'
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})

