// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, Platform } from 'react-native';
import BackgroundCarousel from './BackgroundCarousel';

const styles = StyleSheet.create({
    logo: {
      width: 250,
      height: 25,
    },
    gabarait: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    texts: { 
        fontSize: 25,
        width: "100%",
        color: "#000"
  }
});

  
const DetailsAnnonces = () => {
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
         <ScrollView style={{fels: 1,marginTop: 5, marginBottom: 10}}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column'
           /* alignItems: 'center',
            justifyContent: 'center',*/
          }}>
              <Image 
                    source={require('../images/t.jpg')}
                    style= {styles.logo}
              />
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Détails de l'Annonce
          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const images = [
    "https://www.guide-de-survie.com/wp-content/uploads/eau-pure-nature.jpg",
    "https://cdn.pixabay.com/photo/2018/10/11/21/33/falls-3740924_960_720.jpg",
    "https://img.fotocommunity.com/eau-et-nature-01bf5bc3-0975-4eb8-83aa-283fefe7edb0.jpg?width=1000",
    "https://previews.123rf.com/images/sergwsq/sergwsq1509/sergwsq150900003/44837507-chute-d-eau-dans-la-for%C3%AAt-jungle-nature-fond.jpg",
    "https://www.eau-nature.fr/wp-content/uploads/2019/07/martinique-polluee-392x272.jpg"
];

class DetailsAnnonce extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }
        render(){
            return(
                <View style={{flex: 1}}>
                <View style={styles.gabarit}>
                    <BackgroundCarousel image={images} />
                   
                </View>
                <View >
                     <Text style={styles.texts}>BIENVENU DANS LA JUNGLE</Text>
                </View>
                </View>
            )
        }
    }
export default DetailsAnnonce;