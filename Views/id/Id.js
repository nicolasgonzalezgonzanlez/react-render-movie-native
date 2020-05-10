import React, { useEffect, useLayoutEffect }  from 'react';
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import StarRating from 'react-native-star-rating';
import {
  callId,
  callReview,
  callVideo,
  resetVideo 
} from '../../core/Movie/actions';
import Reviews from './components/reviews/Reviews';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types'; 

const styles = StyleSheet.create({
  img: {
    height: 400
  },
  image: {
    width: 300,
    height: 400,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  margin: {
    marginTop: 20
  },
  category: {
    margin: 20,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#000000",
    height: 30,
    width: 90,
    borderRadius: 22,
    paddingLeft: 20,
    paddingTop: 1
  },
  card: {
    margin: 20,
    backgroundColor: "#ffffff78"
  },
  root: {
    backgroundColor: "#000000"
  },
  textCard: {
    color: "#fff",
    fontSize: 33,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  start: {
    alignItems: "flex-end",
    padding: 5,
  },
  startContent: {
    height: 30,
    width: 30,
    flex: 1,
    alignSelf: "auto"
  },
  ContainerHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  ChildHeader: {
    flex: 1,
    alignSelf: "auto",
  },
  textChild: {
    fontSize: 15,
    color: "#fff",
    marginLeft: 8,
    marginTop: 8
  },
  button: {
    marginTop: 20
  },
  overview: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    padding: 10,
  },
  chips: {
    backgroundColor: "#038c51",
    margin: 8,
    flex: 1,
    alignSelf: "auto",
    borderRadius: 18
  },
  chipsText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center"
  },
  video:{
    height: 250,
    marginBottom: 20,
    marginTop: 20
  }
});


function Id({route}) {

  const {movie, video}= useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatchSe()
  }, []);

  useLayoutEffect(
    () => {
      dispatchSe()
    },[route.params.id])

    const dispatchSe = () => {
      dispatch(callId(route.params.id));
      dispatch(callReview(route.params.id));
      dispatch(resetVideo());
      dispatch(callVideo(route.params.id));
    }

  return (
    <ScrollView style={styles.root}>
      <View>
        <ImageBackground
          style={styles.img}
          source={{uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}}
          blurRadius={6}
        >
          <Image
            style={styles.image}
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
          />
        </ImageBackground>
        <View
          style={styles.ContainerHeader}
        >
            <View
              style={styles.startContent}
            >
              <StarRating
                disabled={true}
                maxStars={5}
                rating={movie.vote_average / 2}
                fullStarColor={'red'}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                starSize={23}
                starStyle={styles.start}
              />
            </View>
            <View
              style={styles.ChildHeader}
            >
              <Text
                style={styles.textChild}
              >
                {`${movie.release_date}    ${movie.runtime} min`}
              </Text>
            </View>
          </View>
          <Text
            style={styles.textCard}
          >
            {movie.title}
          </Text>
          <View>
            <Text
              style={styles.overview}
            >
              {movie.overview}
            </Text>
          </View>

          <View 
            style={styles.ContainerHeader}
          >
            {movie.genres && movie.genres.map((element, key) => (
              <View
                style={styles.chips}
                key={key}
              >
                <Text
                  style={styles.chipsText}
                >
                  {element.name}
                </Text>
              </View>
            ))}
          </View>
          <View
            style={styles.video}
          >
            <WebView 
              source={{uri: `https://www.youtube.com/embed/${video}`}}
            />
          </View>
          <Reviews />
      </View>
    </ScrollView >
  )
}

Id.propTypes = {
  movie: PropTypes.object,
  video: PropTypes.array,
  callId: PropTypes.func,
  callReview: PropTypes.func,
  resetVideo: PropTypes.func,
  callVideo: PropTypes.func
}

export default Id;