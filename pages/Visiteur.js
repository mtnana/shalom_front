import 'react-native-gesture-handler';

import React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from 'react-native-elements';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AnnoncesScreen from './AnnoncesScreen';
import AlertesScreen from './AlertesScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ReplayScreen from './ReplayScreen';
import DetailsAnnonce from './DetailsAnnonce';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  },
  iconText:{
    color: "#fff", 
    marginLeft: 10,
    marginRight: 10
  }
});

function AnnoncesStack({navigation}) {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#91285f' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitle:"Shalom Tabernacle",
          headerRight: () => (
            <View>
            <View style={{ marginRight: 10 , flex: 1, flexDirection: 'row' ,justifyContent:'space-between', alignItems: 'center'}}>
            <Icon
            iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
            name='cart-plus'
            type='font-awesome'
            onPress={() => navigation.navigate('Details')} />
            <Icon
            iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
            name='television'
            type='font-awesome'
            onPress={() => navigation.navigate('Details')} />
             <Icon
            iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
            name='music'
            type='font-awesome'
            onPress={() => navigation.navigate('Details')} />
            </View>
            <View style={{ marginRight: 10, flex: 1, flexDirection: 'row',justifyContent:'space-between', alignItems: 'center'}}>
              <Text style={styles.iconText}>Don</Text>
              <Text style={styles.iconText}>Live</Text>
              <Text style={styles.iconText}>Bande</Text>
            </View>
            </View>
          ),
        }}>
        <Stack.Screen name="Home" component={AnnoncesScreen}/>
      </Stack.Navigator>
  );
}

function AlertesStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Alertes"
      screenOptions={{
        headerStyle: { backgroundColor: '#91285f' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitle:"Shalom Tabernacle",
        headerRight: () => (
          <View>
          <View style={{ marginRight: 10 , flex: 1, flexDirection: 'row' ,justifyContent:'space-between', alignItems: 'center'}}>
          <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='cart-plus'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
          <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='television'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
           <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='music'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
          </View>
          <View style={{ marginRight: 10, flex: 1, flexDirection: 'row',justifyContent:'space-between', alignItems: 'center'}}>
            <Text style={styles.iconText}>Don</Text>
            <Text style={styles.iconText}>Live</Text>
            <Text style={styles.iconText}>Bande</Text>
          </View>
          </View>
        ),
      }}>
      <Stack.Screen name="Alertes" component={AlertesScreen} options={{ title: 'Alertes' }}/>
    </Stack.Navigator>
  );
}

function ReplayStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#91285f' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitle:"Shalom Tabernacle",
        headerRight: () => (
          <View>
          <View style={{ marginRight: 10 , flex: 1, flexDirection: 'row' ,justifyContent:'space-between', alignItems: 'center'}}>
          <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='cart-plus'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
          <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='television'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
           <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='music'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
          </View>
          <View style={{ marginRight: 10, flex: 1, flexDirection: 'row',justifyContent:'space-between', alignItems: 'center'}}>
            <Text style={styles.iconText}>Don</Text>
            <Text style={styles.iconText}>Live</Text>
            <Text style={styles.iconText}>Bande</Text>
          </View>
          </View>
        ),
      }}>
      <Stack.Screen name="Replay" component={ReplayScreen} options={{ title: 'Replay' }}/>
    </Stack.Navigator>
  );
}


function ProfilStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#91285f' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitle:"Shalom Tabernacle",
        headerRight: () => (
          <View>
          <View style={{ marginRight: 10 , flex: 1, flexDirection: 'row' ,justifyContent:'space-between', alignItems: 'center'}}>
          <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='cart-plus'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
          <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='television'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
           <Icon
          iconStyle={{marginLeft: 10, marginRight: 10, color: "white"}}
          name='music'
          type='font-awesome'
          onPress={() => navigation.navigate('Details')} />
          </View>
          <View style={{ marginRight: 10, flex: 1, flexDirection: 'row',justifyContent:'space-between', alignItems: 'center'}}>
            <Text style={styles.iconText}>Don</Text>
            <Text style={styles.iconText}>Live</Text>
            <Text style={styles.iconText}>Bande</Text>
          </View>
          </View>
        ),
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}


function Visiteur({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
          backgroundColor: '#42f44b'
        }}>
        <Tab.Screen
          name="Annonces"
          component={AnnoncesStack}
          options={{
            tabBarLabel: 'Annonces',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="exclamation" color={color} size={size} />
            ),
          }}  />
        <Tab.Screen
          name="Alertes"
          component={AlertesStack}
          options={{
            tabBarLabel: 'Alertes',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alarm-check" color={color} size={size} />
            ),
          }} />
          <Tab.Screen
          name="Replay"
          component={ProfilStack}
          options={{
            tabBarLabel: 'Replay',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="replay" color={color} size={size} />
            ),
          }} />
          <Tab.Screen
          name="Profil"
          component={ProfilStack}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Visiteur;