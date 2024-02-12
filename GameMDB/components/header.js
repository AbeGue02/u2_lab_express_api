import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Welcome to GAMEMDB</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 0.12,
            flexDirection: 'column',
            backgroundColor: '#FF0000',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        titleText: {
            color: '#fff',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            letterSpacing: 2,
            padding: 10,
            margin: 10,
        }
    }
)