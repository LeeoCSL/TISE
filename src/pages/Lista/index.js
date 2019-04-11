import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import UP2 from '~/Resources/UselessPhoenix2';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/Components/Header/index';
// import { Container } from './styles';
const TabIcon = <Icon name="phone" size={40} color="#000" />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default class Lista extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: TabIcon,
  };

  state = {
    appName: 'T.I.S.E.',
  };

  renderOverlay = () => (
    <View style={styles.overlay}>
      <UP2 width="100%" height="100%" color="#cccccccc" style={styles.icone} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderOverlay()}
        <Header />

        <View style={styles.header}>
          <Text style={styles.title}>Mensagens de voz salvas</Text>
        </View>
      </View>
    );
  }
}
