import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import DelayInput from 'react-native-debounce-input';
import { resetResults, addSearch } from '../../../../core/Movie/actions'
import PropTypes from 'prop-types'; 

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
  },
  input: {
    height: 60,
    fontSize: 18,
    marginBottom: 20,
    color: "#fff"
  }
});

function Search() {

  const dispatch = useDispatch();
 
  const search= (event) => {
    dispatch(resetResults())
    dispatch(addSearch(event))
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <SafeAreaView>
          <DelayInput
            onChangeText={(e) => {
              search(e)
            }}
            minLength={3}
            delayTimeout={500}
            placeholder = "¿Que estas buscando?"
            placeholderTextColor = "#fff"
            underlineColorAndroid="#ffffff78"
            style={styles.input}
          />
        </SafeAreaView>
      </View>
    </ScrollView >
  )
}

Search.propTypes = {
  resetResults: PropTypes.func,
  addSearch: PropTypes.func
}

export default Search;