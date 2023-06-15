import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Detail } from './src/components/Details';
import { Pokemons } from './src/components/pokemons';

import * as Mi from 'react-native-vector-icons/MaterialIcons'
import { ContextSettings } from './src/components/Context';
import React from 'react';
import { Setting } from './src/components/Settings';

const stack = createNativeStackNavigator();

export default function App() {

  const[offset, setOffset] = React.useState(0)
  const[limit, setLimit] = React.useState(151)

  return (
    <NavigationContainer>
      <ContextSettings.Provider value={{offset, setOffset, limit, setLimit}}>
      <stack.Navigator>
          <stack.Screen 
        name='Home'
        component={Pokemons}
        options={({navigation}) => ({
          headerRight: () => <Mi.default name="settings"  size={40} color={'#555'}
          onPress={() => navigation.navigate('Settings')}/>
          })}
        />
        <stack.Screen
        name='Detail'
        component={Detail}
        options={({route }) => ({
          title: route.params.item.name[0].toUpperCase() + route.params.item.name.substring(1),
          headerTitleStyle: { fontWeight: 'bold', textTransform: 'capitalize'}
        })}
        />
        <stack.Screen 
        name='Settings'
        component={Setting}
        />
        
        
    </stack.Navigator>
    </ContextSettings.Provider>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
