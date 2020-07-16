// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React from 'react';

import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import FloatButton from './FloatButton';
 
const AnnoncesScreen = ({ route, navigation }) => {
  return (
 
    <View style={styles.container}>
    <Image
      style={styles.tinyLogo}
      source={require('../images/c.jpg')}
    />
    <Text style={styles.titre}>TITRE</Text>
    <Text style={styles.heure}>Le 15 Juillet 2020</Text>
    <Text style={styles.description}>
    Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre 
    provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte
    dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux 
    latin, le Lorem ipsum ou Lipsum.
    </Text>
    <FloatButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  titre: {
    fontSize: 25,
    margin: 20
  },
  tinyLogo: {
    width: "90%",
    height: "40%",
    margin: 20
  },
  heure: {
    fontSize: 17,
    textDecorationLine: 'underline',
    textDecorationStyle: "solid",
    margin: 20
    },
    description: {
      margin: 20,
      justifyContent: "center",
      alignContent: "center"
    }
});
export default AnnoncesScreen;