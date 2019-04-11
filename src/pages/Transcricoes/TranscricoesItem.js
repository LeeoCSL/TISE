/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ccc',
  },
  remet: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
    alignSelf: 'center',
  },
  data: {
    fontSize: 18,
    color: '#000',
    alignSelf: 'center',
    margin: 22,
  },
  texto: {
    color: '#000',
    alignSelf: 'center',
    fontSize: 20,
    margin: 20,
  },
});

const TranscricoesItem = ({ detalhe }) => (
  <View style={styles.container}>
    <Text style={styles.remet}>{detalhe.remet}</Text>
    <Text style={styles.data}>{detalhe.data}</Text>
    <Text style={styles.texto}>{detalhe.msg}</Text>
  </View>
);

export default TranscricoesItem;
