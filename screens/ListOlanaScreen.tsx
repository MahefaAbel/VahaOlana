import * as React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { ListItem, Icon, Button, Text } from 'react-native-elements'

export default function ListOlanaScreen() {
  const renderItem = (item, i) => (
    <ListItem key={i} bottomDivider style={styles.listItem}>
      <Icon name={item.icon} />
      <View>
        <Text>{item.title}</Text>
      </View>
      {/* <ListItem.Chevron /> */}
    </ListItem>
  );
  // const keyExtractor = (item, index) => index.toString()

  return (
    <View style={styles.container}>
      {
        listOlana.map((item, i) => renderItem(item, i))
      }
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
});

const listOlana = [
  {
    title: 'Nilahatra be tena @commune omaly',
    icon: 'av-timer'
  },
  {
    title: 'Lafo be ny sakafo masaka aty aminay',
    icon: 'flight-takeoff'
  },
  {
    title: 'Latsaka ny ecran telephone dia simba',
    icon: 'flight-takeoff'
  },
]

const listAvatar = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]