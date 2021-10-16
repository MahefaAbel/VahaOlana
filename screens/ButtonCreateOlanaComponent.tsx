import * as React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { ListItem, Icon, Button, Text, Input } from 'react-native-elements'

export default function ButtonCreateOlanaComponent({ navigation }) {
  return (
    <View style={styles.container}>
        <Button
            title="Publier un Probleme"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("CreateOlana")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",

    // Full With - Began
    alignSelf: 'stretch',
    // width: Dimensions.get('window').width
    // Full With - End
    maxHeight: 70,
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
  listItem: {
    // flex: 1,
    flexDirection: "column",
  },
  button: {
    height: 70,
  },
});
