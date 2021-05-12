import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Body, CardItem} from 'native-base';

const Details = () => {
  return (
    <View>
      <Card transparent style={styles.content}>
        <CardItem bordered header>
          <Text style={styles.text}> Titulo</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>This is just a transparent card with some text to boot.</Text>
          </Body>
        </CardItem>
      </Card>
      <Card style={styles.content_2}>
        <CardItem>
          <Body>
            <Text>This is just a transparent card with some text to boot.</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
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

export default Details;
