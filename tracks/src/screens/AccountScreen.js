import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

export const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return <SafeAreaView forceInset={{ top: "always" }}>
        <Spacer>
            <Text h3>Account</Text>
        </Spacer>
        <Spacer>
            <Button title="Sign Out" onPress={signout}></Button>
        </Spacer>
    </SafeAreaView>
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}></FontAwesome>
};

const styles = StyleSheet.create({});

export default AccountScreen;