import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import ButtonCreateOlanaComponent from './ButtonCreateOlanaComponent';
import ListOlanaScreen from './ListOlanaScreen';

export default function TabOneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <CreateOlanaComponent /> */}
      <ButtonCreateOlanaComponent navigation={navigation} />
      <ListOlanaScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "magenta",
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
