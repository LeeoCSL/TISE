/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Container } from './styles';

// eslint-disable-next-line react/prefer-stateless-function

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderWidth: 3,
    borderColor: '#ccc',
    margin: 10,
  },
  texts: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  data: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  remetente: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
    fontSize: 20,
  },
  icones: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  icone1: {
    marginHorizontal: 20,
  },
  icone2: {
    marginHorizontal: 20,
  },
  icone3: {
    marginLeft: 20,
    marginRight: 10,
  },
});

const MainItem = ({ detalhe }) => (
  <View style={styles.container}>
    <View style={styles.texts}>
      <Text style={styles.remetente}>{detalhe.remet}</Text>
      <Text style={styles.data}>{detalhe.data}</Text>
    </View>
    <View style={styles.icones}>
      <TouchableOpacity>
        <Icon name="play-circle" size={30} color="#000" style={styles.icone1} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="save" size={30} color="#000" style={styles.icone2} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="trash" size={30} color="#000" style={styles.icone3} />
      </TouchableOpacity>
    </View>
  </View>
);

export default MainItem;
