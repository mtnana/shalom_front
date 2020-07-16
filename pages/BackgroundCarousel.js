import * as React from 'react';
import  { StyleSheet, View, ScrollView, Dimensions, Image, Text } from 'react-native';
import ImageGallery from 'react-image-gallery';

const DEVICE_WIDTH = Dimensions.get("window").width;
 

class BackgroundCarousel extends React.Component {
    render(){
        const {images} = this.props;
        return(
            <View style={{flex: 1}}>
            <ImageGallery items={images} />
            </View>
        )
    }

}


const styles = StyleSheet.create({
    backgroundImage: {
        height: "100%",
        width: DEVICE_WIDTH
    },
    circleDiv: {
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
    }
});

export default BackgroundCarousel;