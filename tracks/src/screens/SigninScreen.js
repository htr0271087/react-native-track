import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

export const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin} />
            <NavLink text="Dont have an account? Sign up instead" routeName="Signup"></NavLink>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
});

export default SigninScreen;