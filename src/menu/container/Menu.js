import React, {useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Container} from 'native-base';

import Selector from '../components/Selector';

const Menu = () => {
  const image = {
    uri: '/Users/andree/Desktop/Front/visualizador_naves/src/img/image.png',
  };
  return (
    <Container>
      <ImageBackground source={image} style={styles.image}>
        <Selector />
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
});

export default Menu;
