import React, { useEffect }  from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {callTop} from '../../core/Movie/actions'
//components
import Search from './components/search/Search'
import Results from './components/results/Results'
import Card from '../../components/card/Card';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: "#000000"
  },
  h1: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20
  },
  card: {
    marginBottom: 40
  }
});

function Home() {
  
  const dispatch = useDispatch();

  const top = useSelector(state => state.movieReducer.top);

  useEffect(() => {
    dispatch(callTop())  
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <View>
        <Search />
        <Results />
      </View>
      {top.length > 0 ? 
        (
          <View style={styles.card} >
            <Text style={styles.h1}>
              Las peliculas mas buscadas
            </Text>
            {top && top.map((element, key) => (
                <Card 
                  element={element}
                  key={key}
                />
            ))}
          </View>
        ):(
          <Text> No existe 2</Text>
        )
      }
    </ScrollView >
  )
}

Home.propTypes = {
  top: PropTypes.object,
  callTop: PropTypes.func
}

export default Home;