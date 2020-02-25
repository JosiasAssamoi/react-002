
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';



export default class First extends React.Component {
    
  render ()  {
      return (
    <View style={styles.container}>
      <Text>First</Text>
      <Button title='Go to Second' onPress = {()=> {this.props.navigation.navigate('Second',{name:'Go'})}}></Button>
    </View>
  );
} }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
