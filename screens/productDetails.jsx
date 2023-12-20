import React from 'react';
import { View, Button, Text } from 'react-native';

const valueMap = {
  nombre: 'Nombre',
  precio: 'Precio',
  tamaño: 'Tamaño',
}

const ProductDetails = ({ route }) => {
  const params = route.params || {};
  const { details = {} } = params;

  return (
    <View>
      {Object.keys(valueMap).map((key) => {
        if (!details[key]) {
          return null;
        }

        return (
          <Text style={{ fontSize: 18, marginTop: 10 }} key={key}>
            <Text style={{ fontWeight: 'bold' }} >{`${valueMap[key]}: `}</Text>
            {details[key]}
          </Text>
        );
      })}
    </View>
  );
};

export default ProductDetails;