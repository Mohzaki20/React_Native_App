import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Users from '../Screens/Users';
import Users from './../Components/Users';
import Home from '../Components/Home';
import HeaderTitle from './../node_modules/@react-navigation/elements/lib/typescript/src/Header/HeaderTitle.d';
const stack = createNativeStackNavigator();
const Root = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="users" component={Users}></stack.Screen>
            <stack.Screen name="home" component={Home} HeaderTitle="users"></stack.Screen>
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;
