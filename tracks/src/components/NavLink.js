import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigator } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer><Text style={styles.link}>{text}</Text></Spacer>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigator(NavLink);