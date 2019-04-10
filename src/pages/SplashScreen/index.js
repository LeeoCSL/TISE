import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import UP from '~/Resources/UselessPhoenix';
// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  icone: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
    margin: 20,
  },
});

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    title: 'T.I.S.E.',
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 5000);
  }

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <UP width={120} height={120} color="#fff" style={styles.icone} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
