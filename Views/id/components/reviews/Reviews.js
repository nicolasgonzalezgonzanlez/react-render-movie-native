import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";
import CollapsibleList from "react-native-collapsible-list";
import PropTypes from 'prop-types'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)"
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#CCC",
    padding: 10
  },
  button: {
    padding: 10,
    backgroundColor: '#c2185b',
  },
  buttonText: {
    color: '#FFF',
  },
});


function Recommen() {

  const {reviews}= useSelector(state => state.movieReducer);
  
  return (
    <ScrollView>
      {reviews && reviews.map((element, key) =>(
        <View
          key={key}
          style={styles.container}
        >
          <CollapsibleList
          numberOfVisibleItems={1}
          wrapperStyle={styles.wrapperCollapsibleList}
          buttonContent={
            <View style={styles.button}>
              <Text style={styles.buttonText}>Leer comentario</Text>
            </View>
          }
        >
          <View style={styles.collapsibleItem}>
            <Text>{element.author}</Text>
          </View>
          <View style={styles.collapsibleItem}>
            <Text>
              {element.content}
            </Text>
          </View>
        </CollapsibleList>
        </View>
      ))}
    </ScrollView>
  )
}

Recommen.propTypes = {
  reviews: PropTypes.object
}

export default Recommen;