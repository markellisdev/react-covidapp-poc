import React from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView, Text} from 'react-native';

function Header(props) {
    return (
        <View
            style={styles.header}
        >
            <Text style={styles.headerText}>Hey Irys</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        padding: 15,
        backgroundColor: '#E1DEF9',
        justifyContent: 'center',
    },
    headerText: {
        color: 'black',
        fontSize: 23,
        textAlign: 'center',
    }
})

export default Header;