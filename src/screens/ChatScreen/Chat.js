import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const ChatListItem = props => {
  return (
    <>
      <Pressable android_ripple={{ color: 'white', borderless: false }}
        style={styles.ChatListItemContainer} onPress={() => {
          // Direct to chat Room
        }}>
        <View>
          <Image style={styles.ProfilePic} source={{ uri: "https://i.pravatar.cc/1000" }} />
        </View>
        <View style={styles.ChatListItemDesc}>
          <Text>{props.items}</Text>
          <Text style={{ fontStyle: 'italic', paddingTop: 5 }}>Last Chat Here</Text>
        </View>
      </Pressable>
    </>
  );
}

const Chat = () => {
  return (
    <View>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) =>
          <ChatListItem items={item.key} />}
      />
    </View>
  )
}

export default Chat