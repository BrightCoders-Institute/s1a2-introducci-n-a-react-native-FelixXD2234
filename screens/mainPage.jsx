import React from 'react';
import { View, Button, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fa3a',
  },
  carrusel: {
    marginTop: 11.5,
  },
  item: {
    width: 120,
    height: 120,

    margin: 8.5,

    justifyContent: 'center', // Los acomoda central de manera vertical
    alignItems: 'center', // Los acomoda central de manera horizontal
    borderWidth: 1,
    borderColor: 'black',
  }
});

const productos = [
  {nombre: 'Pizza', precio: '$20', tamaño: 'Chica'},
  {nombre: 'Helado', precio: '$10', tamaño: 'Mediana'},
  {nombre: 'Helado', precio: '$10', tamaño: 'Mediana'},
  {nombre: 'Helado', precio: '$10', tamaño: 'Mediana'},
  {nombre: 'Refresco', precio: '$20', tamaño: 'Chica'},
  {nombre: 'Refresco', precio: '$20', tamaño: 'Chica'},
  {nombre: 'Helado', precio: '$10', tamaño: 'Mediana'},
  {nombre: 'Agua', precio: '$20', tamaño: 'Chica'},
  {nombre: 'Agua', precio: '$20', tamaño: 'Chica'},
  {nombre: 'Agua', precio: '$20', tamaño: 'Chica'},
  {nombre: 'Pizza', precio: '$20', tamaño: 'Chica'},
];

const Carrusel = ({ navigation }) => {
  return (
    <View>
      <FlatList horizontal
        contentContainerStyle={styles.carrusel}
        data={productos}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.push('Details', {
              details: item,
            })}
          >
            <Text>{item.nombre}</Text>
            <Text>{item.precio}</Text>
            <Text>{item.tamaño}</Text>
            <Text>{item.tamaño}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <Carrusel navigation={navigation}  productos={productos} />
      <Carrusel navigation={navigation} productos={productos} />
    </View>
  );
};

export default MainPage;