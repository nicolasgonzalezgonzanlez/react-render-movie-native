import React, {useEffect} from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { callSearch } from '../../../../core/Movie/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../../components/card/Card';
import PropTypes from 'prop-types'; 

function Results() {

  const {search, results} = useSelector(state => state.movieReducer);

  const dispatch = useDispatch();

  useEffect(
    () => {
     dispatch(callSearch(search))
    }, [search]
  )
  
  return (
    <ScrollView>
      {results.length > 0 && (
        <View>
          {results && results.map((element, key) =>(
            <Card 
              element={element}
              key={key}
            />
          ))}
        </View>
      )}
    </ScrollView>
  )
}

Results.propTypes = {
  results: PropTypes.object,
  callSearch: PropTypes.func
}

export default Results;