import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from '../components/Spacer';
import useLocation from '../hooks/useLocation';
import { FontAwesome } from '@expo/vector-icons';

export const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);

    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);

    return <SafeAreaView forceInset={{ top: "always" }}>
        <Spacer>
            <Text h3>Create a Track</Text>
        </Spacer>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
        <TrackForm />
    </SafeAreaView>
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20}></FontAwesome>
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);