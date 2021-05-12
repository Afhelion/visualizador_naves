import React, {useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Container, Content, Card, Text, Body, CardItem} from 'native-base';

import Selector from '../components/Selector';
import Details from '../components/Details';

const Menu = () => {
  const image = {
    uri: '/Users/andree/Desktop/Front/visualizador_naves/src/img/image.png',
  };
  return (
    <Container>
      <ImageBackground source={image} style={styles.image}>
        <Selector />
        <Details />
      </ImageBackground>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    top: -100,
    height: 398,
    width: 369,
    left: 12,
  },
  content_2: {
    top: -350,
    width: 369,
    left: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    width: 320,
  },
});

export default Menu;
