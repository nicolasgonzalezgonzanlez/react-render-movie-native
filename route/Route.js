import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Views
import Home from '../Views/home/Home';
import Id from '../Views/id/Id';
import CategoryResults from '../Views/categoryResults/CategoryResults';
import TabMenu from './TabMenu';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="menu"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1c1a1b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="menu"
          component={TabMenu}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="Pelis"
          component={Id}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen 
          name="Genero"
          component={CategoryResults}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;