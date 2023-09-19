import {
  View,
  Text,
  Image,
  Animated,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  useFonts,
  Figtree_500Medium,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const modelUpcomingList = [
  {
    name: "Maaz Kamal",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "3.5",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Alex LastName",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "4",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Ken Last Name",
    dateTime: "1:30 am, 02 September 2023",
    rating: "1.4",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Akeel Lashlay",
    dateTime: "10:15, 3 November 2023",
    rating: "5",
    image: "https://i.pravatar.cc/300",
  },

  {
    name: "Junaid Akram",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "3.5",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Mushtaq Chandio",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "4",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Juie Bakht",
    dateTime: "10:15, 3 November 2023",
    rating: "5",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "Afnan Malik",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "3.5",
    image: "https://i.pravatar.cc/300",
  },
];
const modelPastList = [
  {
    name: "Ken Last Name",
    dateTime: "1:30 am, 02 September 2023",
    rating: "1.4",
    image: "https://i.pravatar.cc/300",
    price: "99",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Alex LastName",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "4",
    image: "https://i.pravatar.cc/300",
    price: "100",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Akeel Lashlay",
    dateTime: "10:15, 3 November 2023",
    rating: "5",
    image: "https://i.pravatar.cc/300",
    price: "60",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Junaid Akram",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "3.5",
    image: "https://i.pravatar.cc/300",
    price: "199",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Mushtaq Chandio",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "4",
    image: "https://i.pravatar.cc/300",
    price: "230",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Juie Bakht",
    dateTime: "10:15, 3 November 2023",
    rating: "5",
    image: "https://i.pravatar.cc/300",
    price: "199",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Afnan Malik",
    dateTime: "4pm - 12 am, 14 October 2023",
    rating: "3.5",
    image: "https://i.pravatar.cc/300",
    price: "230",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const UpcomingComponent = () => (
  <View style={styles.appointmentListContainer}>
    <View style={styles.flatListContainer}>
      <FlatList
        data={modelUpcomingList}
        style={{ width: screenWidth - 40 }}
        scrollIndicatorInsets={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
        renderItem={(item, index) => (
          <AppointmentItem key={item + index} item={item} />
        )}
      />
    </View>
  </View>
);

const PastComponent = () => {
  return (
    <View style={styles.appointmentListContainer}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={modelPastList}
          style={{ width: screenWidth - 40 }}
          scrollIndicatorInsets={false}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          renderItem={(item, index) => (
            <AppointmentItem key={item + index} item={item} />
          )}
        />
      </View>
    </View>
  );
};

const renderScene = SceneMap({
  first: UpcomingComponent,
  second: PastComponent,
});

export default Appointments = ({ userType }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Upcoming" },
    { key: "second", title: "Past" },
  ]);

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  renderTabBar = (props) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const isActive = index == i;
          const nonActiveStyle = styles.nonActiveTabItem;
          const activeStyle = styles.tabItem;
          const nonActiveTextStyle = styles.nonActiveTabBarText;
          const activeTextStyle = styles.tabBarText;

          const tabStyle = isActive ? activeStyle : nonActiveStyle;
          const tabTextStyle = isActive ? activeTextStyle : nonActiveTextStyle;

          return (
            <TouchableOpacity style={tabStyle} onPress={() => setIndex(i)}>
              <Animated.Text style={tabTextStyle}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

const AppointmentItem = (prop) => {
  const myData = prop.item.item;
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("AppointmentDetail", myData)}>
      <View style={styles.appointmentItem}>
        <Image style={styles.appointmentImage} source={{ uri: myData.image }} />
        <View style={styles.singleAppointmentColumn}>
          <View style={styles.singleAppointmentRow}>
            <Text style={styles.appointmentText}>{myData.name}</Text>
            <View style={styles.ratingView}>
              <FontAwesomeIcon icon={faStar} color="#454545" />
              <Text> {myData.rating}+</Text>
            </View>
          </View>
          <Text style={styles.appointmentTextSmall}>{myData.dateTime}</Text>
        </View>
      </View>
    </Pressable>
  );
};
