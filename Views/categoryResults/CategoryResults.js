import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from "react-redux";
import { callMovieGenre } from '../../core/Movie/actions';
import Card from '../../components/card/Card';
import PropTypes from 'prop-types'; 

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000000"
  },
  view: {
    marginLeft: 10,
    marginRight: 10
  }
});

function Category({route}) {

 const {genreResults} = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(callMovieGenre(route.params.id))
  },[])
  
  return (
    <ScrollView style={styles.root}>
      <View style={styles.view}>
        {genreResults && genreResults.map((element, key) =>(
          <Card 
            element={{
              backdrop_path : element.backdrop_path,
              title: element.title,
              id: element.id,
              media_type: route.params.name
            }}
            key={key}
          />
        ))}
      </View>
    </ScrollView >
  )
}

Category.propTypes = {
  genreResults: PropTypes.object,
  callMovieGenre: PropTypes.func
}

export default Category;