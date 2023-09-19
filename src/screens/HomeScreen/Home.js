import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  useFonts,
  Figtree_500Medium,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";
import {
  faCalendar,
  faMessage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const modelList = [
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

const Home = ({ userType }) => {
  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false}>
        <HeaderHome />
        <GridView />
        <ServiceComponent />
        <AppointmentList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const HeaderHome = () => {
  return (
    <LinearGradient
      colors={["#5A6C62", "#839D8E", "#FEEADA"]}
      start={[0, 0]}
      end={[1, 1]}
      location={[0.25, 0.4, 1]}
      style={styles.headerMain}
    >
      <Image
        style={styles.headerImage}
        source={require("../../assets/Images/user_avatar.png")}
      />
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Welcome Back,</Text>
        <Text style={styles.headerText}>Maaz Kamal</Text>
      </View>
    </LinearGradient>
  );
};

const ServiceComponent = () => {
  return (
    <View style={styles.serviceContainer}>
      <Text style={styles.title}>My Service</Text>
      <View style={styles.serviceInnerContainer}>
        <View style={styles.serviceImage}>
          <View style={styles.serviceInitialsView}>
            <Text style={styles.serviceInitialText}>MK</Text>
          </View>
          {/* <Image
          style={styles.serviceImage}
          source={require("../../assets/Images/user_avatar.png")}
        /> */}
        </View>
        <View style={styles.serviceRightData}>
          <View style={styles.serviceLeftRow}>
            <Text style={styles.serviceTitle}>Akeel Lashley</Text>
            <View style={styles.serviceReviewRow}>
              <FontAwesomeIcon color="#839D8E" icon={faStar} />
              <Text style={styles.serviceRatingText}>19</Text>
            </View>
          </View>

          <Text style={styles.serviceTitleLocation}>North York, Ontario</Text>
          <View style={styles.servicePrice}>
            <Text style={styles.servicePriceText}>from $20/HR</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const AppointmentList = () => {
  return (
    <View style={styles.appointmentListContainer}>
      <Text style={styles.title}>Upcoming Appointments</Text>
      <ScrollView horizontal={true}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={modelList}
            style={{ width: screenWidth - 40 }}
            scrollIndicatorInsets={false}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={(item, index) => (
              <AppointmentItem key={index + item} item={item} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const GridView = () => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.gridItem}>
        <View style={styles.singleGrid}>
          <View style={styles.gridIconRow}>
            <FontAwesomeIcon color="#839D8E" icon={faCalendar} />
            <Text style={styles.gridTextNumber}>3</Text>
          </View>
          <Text style={styles.gridText}>Upcoming Appointments</Text>
        </View>
        <View style={styles.singleGrid}>
          <View style={styles.gridIconRow}>
            <FontAwesomeIcon color="#839D8E" icon={faStar} />
            <Text style={styles.gridTextNumber}>19</Text>
          </View>
          <Text style={styles.gridText}>Latest Reviews</Text>
        </View>
      </View>
      <View style={styles.gridItem}>
        <View style={styles.singleGrid}>
          <View style={styles.gridIconRow}>
            <FontAwesomeIcon color="#839D8E" icon={faCalendar} />
            <Text style={styles.gridTextNumber}>21</Text>
          </View>
          <Text style={styles.gridText}>Past Appointments</Text>
        </View>
        <View style={styles.singleGrid}>
          <View style={styles.gridIconRow}>
            <FontAwesomeIcon color="#839D8E" icon={faMessage} />
            <Text style={styles.gridTextNumber}>7</Text>
          </View>
          <Text style={styles.gridText}>New Messages</Text>
        </View>
      </View>
    </View>
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
