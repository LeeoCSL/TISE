import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import UP2 from '~/Resources/UselessPhoenix2';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '~/Components/Header/index';
import Swiper from 'react-native-swiper';
import TranscricoesItem from './TranscricoesItem';
// import { Container } from './styles';
const TabIcon = <Icon name="pen-nib" size={40} color="#000" />;

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

  wrapper: {
    margin: 20,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class Transcricoes extends Component {
  static navigationOptions = { header: null, tabBarIcon: TabIcon };

  state = {
    mensagens: [
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

  renderOverlay = () => (
    <View style={styles.overlay}>
      <UP2 width="100%" height="100%" color="#cccccccc" style={styles.icone} />
    </View>
  );

  item = () => (
    <View>
      <Text>aaa</Text>
    </View>
  );

  pegarItems = () => {
    const { mensagens } = this.state.mensagens;
    mensagens.map(msg => <TranscricoesItem detalhe={msg} />);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderOverlay()}
        <Header />

        <View style={styles.header}>
          <Text style={styles.title}>Mensagens de voz transcritas</Text>
        </View>

        <Swiper style={styles.wrapper} showsPagination={false}>
          {/* {this.pegarItems()} */}
          <TranscricoesItem detalhe={this.state.mensagens[0]} />
          <TranscricoesItem detalhe={this.state.mensagens[1]} />
          <TranscricoesItem detalhe={this.state.mensagens[2]} />
          <TranscricoesItem detalhe={this.state.mensagens[3]} />
          <TranscricoesItem detalhe={this.state.mensagens[4]} />
        </Swiper>

        <View />
      </View>
    );
  }
}
