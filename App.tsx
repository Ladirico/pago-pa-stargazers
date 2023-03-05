import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultPage from './src/pages/ResultPage/ResultPage';
import SearchPage from './src/pages/searchPage/SearchPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="Result" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
