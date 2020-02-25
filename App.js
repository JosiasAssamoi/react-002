import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import First from './First';
import Second from './Second';


const Stack = createStackNavigator()

export default function App() {
  return (    
  
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={First}
          options={{title: 'First'}}
        />
        <Stack.Screen name="Second" component={Second}
        options={{title: 'Second'}}
        />
    </Stack.Navigator>
  </NavigationContainer>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
