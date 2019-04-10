import React, { Component } from 'react';
// import SplashScreen from 'react-native-splash-screen';
import MainItem from './mainItems';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '~/Components/Header/index';
import UP2 from '~/Resources/UselessPhoenix2';
// import { Container } from './styles';
const TabIcon = <Icon name="home" size={40} color="#000" />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  icone: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
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
  iconeTrash: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
});
export default class Main extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: TabIcon,
  };

  state = {
    appName: 'T.I.S.E.',
  };

  componentDidMount() {
    // SplashScreen.show();
    // // SplashScreen.hide();
  }

  renderOverlay = () => (
    <View style={styles.overlay}>
      <UP2 width="100%" height="100%" color="#cccccccc" style={styles.icone} />
    </View>
  );

  excluidas = () => {
    this.props.navigation.navigate('Excluidas');
  };

  render() {
    const { appName } = this.state;
    return (
      <View style={styles.container}>
        {this.renderOverlay()}
        <Header />

        <TouchableOpacity onPress={this.excluidas}>
          <Icon name="trash-alt" size={30} color="#000" style={styles.iconeTrash} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>{appName}</Text>
        </View>
        <MainItem />
        <MainItem />
        <MainItem />
      </View>
    );
  }
}
