import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from  '../Views/home/Home'
import Category from  '../Views/category/Category'
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

 function TabMenu() {
  return (
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#113537"
        barStyle={{ backgroundColor: '#038c51' }}
        labelStyle={{ fontSize: 20 }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let color
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
              color = focused 
                ? '#fff'
                : '#113537'
            } else if (route.name === 'Categorias') {
              iconName = focused ? 'ios-list' : 'ios-list';
              color = focused 
                ? '#fff'
                : '#113537'
            }
            return <Ionicons name={iconName} size={22} color={color} />;
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categorias" component={Category} />
      </Tab.Navigator>
  );
}

export default TabMenu;