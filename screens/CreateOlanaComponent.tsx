import * as React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { ListItem, Icon, Button, Text, Input } from 'react-native-elements'

export default function CreateOlanaComponent({navigation}) {
  const [content, setContent] = React.useState("");

  const onPressPublish = () => {
    // console.log("content: ", content);
    navigation.navigate("Root", { content: content });
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder='Decriver le probleme'
        // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        multiline = {true}
        numberOfLines = {6}
        onChangeText={(value) => setContent(value)}
    />
    <Button
      title="Publier"
      buttonStyle={styles.button}
      onPress={() => onPressPublish()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "red",

    // Full With - Began
    alignSelf: 'stretch',
    // width: Dimensions.get('window').width
    // Full With - End
    // maxHeight: 100,
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
    height: 60,
  },
});
