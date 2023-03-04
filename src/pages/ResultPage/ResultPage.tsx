import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';

const ResultPage: React.FC = ({navigation}: any) => {
  const [state, setState] = useState<string>('AMOOOOOOOOOOOO');
  const click = () => {
    navigation.navigate('Search');
    setState(
      state === 'BUBIIIIIIIIIIIII' ? 'AMOOOOOOOOOOOO' : 'BUBIIIIIIIIIIIII',
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button onPress={click} title="weeeee" />
          <Text>{state} TI AMOOOO</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultPage;
