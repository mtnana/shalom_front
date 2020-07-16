import  React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';

const Header = ({ route, navigation }) => {
    return(
        <View style={{ flex: 1, padding: 16 }}>
            <Text>Shalom Tabernacle</Text>
        </View>
    );
}