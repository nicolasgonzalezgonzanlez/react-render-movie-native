import React from 'react';
import { Text, StyleSheet, View, Button, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {Container, Title, Item} from '../style-components'
import PropTypes from 'prop-types'; 

const styles = StyleSheet.create({
  img: {
    height: 250
  },
  margin: {
    marginTop: 20
  },
  category: {
    margin: 20,
    backgroundColor: "#000000a6",
    height: 30,
    width: 160,
    borderRadius: 22,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginLeft: "auto",
    marginRight: "auto"
  }
});

function Card({ element }) {

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        {element && (
          <ScrollView>
            {element.title && element.backdrop_path && (
              <Container>
                <Item >
                  <ImageBackground
                    style={styles.img}
                    source={{uri: `https://image.tmdb.org/t/p/w500${element.backdrop_path}`}}
                  >
                    <View style={styles.category}>
                      <Text style={styles.text}>
                        {element.media_type}
                      </Text>
                    </View>
                  </ImageBackground>
                  <Title >
                    {element.title}
                  </Title>
                  <View
                    style={styles.margin}
                  >
                    <Button
                      color="#038c51"
                      title="Detalles"
                      onPress={() => navigation.navigate('Pelis',{
                        name: element.title,
                        id: element.id
                      })}
                    />
                  </View>
                </Item>
              </Container>
            )}
          </ScrollView>
        )}
      </View>
    </ScrollView >
  )
}

Card.propTypes = {
  element: PropTypes.object
}

export default  Card;