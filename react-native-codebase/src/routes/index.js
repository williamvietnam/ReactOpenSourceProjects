import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HOME } from '../configs/routePath'
import HomeContainer from '../containers/HomeContainer'

const Stack = createNativeStackNavigator()

const router = <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name={HOME} component={HomeContainer} />
    </Stack.Navigator>
</NavigationContainer>

export default router