import React from 'react';
import { StyleSheet,  Text } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import {viewSnackbar} from '../../core/Movie/actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sna: {
    backgroundColor: "#fff",
    marginBottom: 65
  },
  text: {
    color: "#000000"
  }
});

function SnackBars() {

  const snackbar = useSelector(state => state.movieReducer.snackbar);

  const dispatch = useDispatch();

  return (
    <Snackbar
      visible={snackbar.view}
      onDismiss={() => 
        dispatch(viewSnackbar({ view: false, menssage: "" }))
      }
      action={{
        label: 'Okey',
        onPress: () => {
          dispatch(viewSnackbar({ view: false, menssage: "" }))
        },
      }}
      style={styles.sna}
      duration={300}
    >
      <Text style={styles.text}>
        {snackbar.message}
      </Text>
    </Snackbar>
  )
}

export default SnackBars;