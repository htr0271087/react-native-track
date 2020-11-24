import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const TrackListScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 18 }}>TrackListScreen</Text>
        <Button title="Go to Track Detail" onPress={() => navigation.navigate("TrackDetail")}></Button>
    </>
}

const styles = StyleSheet.create({});

export default TrackListScreen;