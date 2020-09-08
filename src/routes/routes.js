import React from 'react';
import {View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';
import { CameraApp } from '../pages/Foto';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Perfil" component={Perfil}/>
                <Stack.Screen name="Foto" component={CameraApp}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
