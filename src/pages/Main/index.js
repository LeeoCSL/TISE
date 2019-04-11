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
    mensagem: [
      {
        id: 1,
        remet: 'Nome 1',
        data: '10/04/2019',
        msg:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non diam eget lorem aliquet porta quis in urna. Fusce ut.',
      },
      {
        id: 2,
        remet: 'Nome 2',
        data: '09/04/2019',
        msg:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non diam eget lorem aliquet porta quis in urna. Fusce ut.',
      },
      {
        id: 3,
        remet: 'Nome 3',
        data: '08/04/2019',
        msg:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non diam eget lorem aliquet porta quis in urna. Fusce ut.',
      },
      {
        id: 4,
        remet: 'Nome 4',
        data: '07/04/2019',
        msg:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non diam eget lorem aliquet porta quis in urna. Fusce ut.',
      },
      {
        id: 5,
        remet: 'Nome 5',
        data: '06/04/2019',
        msg:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non diam eget lorem aliquet porta quis in urna. Fusce ut.',
      },
    ],
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
        <MainItem detalhe={this.state.mensagem[0]} />
        <MainItem detalhe={this.state.mensagem[1]} />
        <MainItem detalhe={this.state.mensagem[2]} />
        <MainItem detalhe={this.state.mensagem[3]} />
        <MainItem detalhe={this.state.mensagem[4]} />
      </View>
    );
  }
}
