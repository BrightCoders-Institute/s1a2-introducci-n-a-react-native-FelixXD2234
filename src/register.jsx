import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    width: 300,
  },
});

const Input = ({camp}) => {
  return (
    <View>
        <Text>
            {camp}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={'Writte your ' + camp.toLowerCase()}
        />
    </View>
  );
};

const Register = (props) => {

  const [registred, setRegistred] = useState(false)

  return (
    <View>
        <Text>
          {props.artist}'s {props.event}!
        </Text>
        <Input camp='Name' />
        <Input camp='Password' />
        <Button
          onPress={() => {
            setRegistred(!registred) 
          }}
          title={ registred ? 'Complete registration' : 'Go To Queue'}
          disabled={registred}
        />
    </View>
  );
};

export default Register;