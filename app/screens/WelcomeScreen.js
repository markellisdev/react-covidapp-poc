import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView, Button} from 'react-native';
import Header from '../components/Header';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const WelcomeScreen = (props, navigation) => {
    return (
        <ImageBackground
            style={styles.background}
            // source={require('../assets/chair.jpg')}
        >
            <View>
                <Header />
            </View>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to navigations"
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: 'green'
    },
})

export default WelcomeScreen;