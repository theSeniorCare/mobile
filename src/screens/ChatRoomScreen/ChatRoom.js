import { View, Text, FlatList, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import SelfChatBubble from "./components/SelfChatBubble";
import TargetChatBubble from "./components/TargetChatBubble";

const ProfileSection = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "white", borderless: false }}
      style={styles.ProfileSection}
      onPress={() => {
        //goto profile
      }}
    >
      <View>
        <Image
          style={styles.ProfilePic}
          source={{ uri: "https://i.pravatar.cc/1000" }}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text>{props.name}</Text>
      </View>
    </Pressable>
  );
};

const ChatRoom = ({ route, navigation }) => {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  const { name } = route.params;
  return (
    <View>
      <ProfileSection name={name} />
      <FlatList
<<<<<<< HEAD
        style={{ marginTop: 5 }}
        data={[
          { key: "aslkdhjaksdhajshdlkahsdjkadasjdashdahsdkhkahjskdhaks" },
          { key: "Daasdnakndklansdkanskdnaskdnakndkansdklansdklnaskdnkasndn" },
=======
        data={[
          { key: "Devin" },
          { key: "Dan" },
>>>>>>> main
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
<<<<<<< HEAD
          { key: "asldmjkasmdamskdlmkk" },
          { key: "as;ldm';andflkndasf" },
          { key: "asl;dmjklanfklansdflkns" },
          { key: "asdlknaklsdn;kansdjd" },
        ]}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
=======
        ]}
>>>>>>> main
        renderItem={({ item, index }) => {
          if (index % 2 == 0) {
            return <TargetChatBubble message={item.key} />;
          } else {
            return <SelfChatBubble message={item.key} />;
          }
        }}
      />
    </View>
  );
};

export default ChatRoom;
