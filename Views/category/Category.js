import React from 'react';
import { StyleSheet, View, ImageBackground, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000000"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10
  },
  child: {
    flex: 1,
    alignSelf: "auto",
    padding: 20
  },
  text: {
    color: "#fff"
  },
  img: {
    height: 150
  },
  icon: {
    width: 50,
    height: 50
  },
  contentText: {
    marginTop: "auto",
    marginBottom: "auto"
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center"
  }
});

function Category() {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/action.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Acction"
                onPress={() => navigation.navigate('Genero',{
                  name: "accion",
                  id: "28"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/aventure.jpeg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Aventura"
                onPress={() => navigation.navigate('Genero',{
                  name: "aventura",
                  id: "12"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/animation.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Animacion"
                onPress={() => navigation.navigate('Genero',{
                  name: "animacion",
                  id: "16"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/comedy.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Comedia"
                onPress={() => navigation.navigate('Genero',{
                  name: "comedia",
                  id: "35"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/crime.png')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Crimen"
                onPress={() => navigation.navigate('Genero',{
                  name: "crimen",
                  id: "80"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/Documentary.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Documental"
                onPress={() => navigation.navigate('Genero',{
                  name: "Documental",
                  id: "99"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/drama.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Drama"
                onPress={() => navigation.navigate('Genero',{
                  name: "Drama",
                  id: "18"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/family.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Familar"
                onPress={() => navigation.navigate('Genero',{
                  name: "Familiar",
                  id: "10751"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/fantasia.jpeg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Fantasia"
                onPress={() => navigation.navigate('Genero',{
                  name: "Fantasia",
                  id: "14"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/History.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Historia"
                onPress={() => navigation.navigate('Genero',{
                  name: "Historia",
                  id: "36"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/horror.webp')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Miedo"
                onPress={() => navigation.navigate('Genero',{
                  name: "Miedo",
                  id: "27"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/music.jpeg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Musica"
                onPress={() => navigation.navigate('Genero',{
                  name: "Musica",
                  id: "10402"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/mistery.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Misterio"
                onPress={() => navigation.navigate('Genero',{
                  name: "Misterio",
                  id: "9648"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/romance.jpeg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Romance"
                onPress={() => navigation.navigate('Genero',{
                  name: "Romance",
                  id: "10749"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/cf.jpeg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Ciencia ficcion"
                onPress={() => navigation.navigate('Genero',{
                  name: "ciencia ficcion",
                  id: "878"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/tv.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="TV Movie"
                onPress={() => navigation.navigate('Genero',{
                  name: "TV Movie",
                  id: "10770"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/Thriller.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Thriller"
                onPress={() => navigation.navigate('Genero',{
                  name: "Thriller",
                  id: "53"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/war.jpeg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Guerra"
                onPress={() => navigation.navigate('Genero',{
                  name: "Guerra",
                  id: "10752"
                })}
              />  
            </View>
          </ImageBackground>
        </View>
      </View><View style={styles.container}>
        <View style={styles.child}>
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/category/Western.jpg')}
            blurRadius={3}
          >
            <View
              style={styles.contentText}
            >
              <Button 
                style={styles.text}
                color="#00000036"
                title="Western"
                onPress={() => navigation.navigate('Genero',{
                  name: "Western",
                  id: "37"
                })}
              />    
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView >
  )
}


export default Category;