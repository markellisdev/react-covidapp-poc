import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';
import Header from '../components/Header';

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            style={styles.background}
            // source={require('../assets/chair.jpg')}
        >
            <View>
                <Header />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: '#F6F2FF'
    },
})

export default WelcomeScreen;