// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
          </Text>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default DetailsScreen;