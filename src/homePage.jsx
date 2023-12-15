import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';

const colors = {
  main: '#3498db',
  secondary: '#2ecc71',
  acent: '#e74c3c',
  mainBack: '#ecf0f1',
  secondBack: '#ffffff',
  mainText: '#34495e',
  secondText: '#7f8c8d',
  supportColor: '#f39c12',
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,

    backgroundColor: colors.supportColor,
  },
  container: {
    margin: 30,
  },
  content: {
    alignItems: 'center',
    borderWidth: 1,

    marginTop: 5,
    backgroundColor: colors.mainBack,
  },
  button: {
  }
});

const Event = ({info}, myEvents) => {

  return (
    <View style={styles.content} >
      <Text>{info.artist}</Text>
      <Text>{info.event} at {info.date}</Text>
      <Text>State: {info.active ? 'Active' : 'Sold Out'}</Text>
      <Button
        title='More Info'
        style={styles.button}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const events = [
  {artist: 'Taylor Swift', event: 'Concert', date: '2024/10/10', active: true},
  {artist: 'Jack Stauber', event: 'Concert', date: '2023/12/31', active: false},
  {artist: 'Antonio Banderas', event: 'Movie', date: '2024/10/04', active: true},
  {artist: 'Messi', event: 'Met and Geet', date: '2024/11/28', active: true},
  {artist: 'Brincos Dieras', event: 'Comedy-Show', date: '2024/03/10', active: false},
];

const HomePage = () => {

  return (
    <View>
      <Text style={styles.title} >Cooming Soon...</Text>
      <View style={styles.container} >
        <Event info={events[0]} />
        <Event info={events[1]} />
        <Event info={events[2]} />
        <Event info={events[3]} />
        <Event info={events[4]} />
      </View>
    </View>
  );
};

export default HomePage;