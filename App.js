import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './components/Greetings';

const App = () => {
  const name = 'JSX';
  return (
    <SafeAreaView>
      <Greeting name={name} />
    </SafeAreaView>
  );
};

export default App;
