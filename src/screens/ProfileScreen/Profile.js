import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import styles from "./styles.js";
import {
  useFonts,
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faGear,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/index.js";
import Navbar from "../../components/Navbar/Navbar.js";

const myReviewList = [
  {
    name: "Qasim Ali Khan",
    rating: "3.5",
    review:
      "I am so glad Akeel was so good, and a kind heated guy i really liked how he managed everything.",
  },
  {
    name: "Alex and Ken",
    rating: "4.3",
    review: "Very Good Experience, will book again",
  },
  {
    name: "Casandra De Amics",
    rating: "1.0",
    review:
      "He just took stole my cat from my house, if i had 0 reviews i would have given that",
  },
];

const handleBack = (navigation) => {
  navigation.goBack();
};

const handleSearch = () => {
  Alert.alert("Search Clicked");
};

const handleGear = () => {
  Alert.alert("Settings Clicked");
};

const Profile = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
    Figtree_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar
        title="Profile"
        titleColor={Colors.main_green}
        leadingView={
          <TouchableOpacity onPress={() => handleBack(navigation)}>
            <FontAwesomeIcon icon={faArrowLeft} color={Colors.main_green} />
          </TouchableOpacity>
        }
        actionViews={
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handleGear}>
              <FontAwesomeIcon icon={faGear} color={Colors.main_green} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch} style={{ marginLeft: 15 }}>
              <FontAwesomeIcon icon={faSearch} color={Colors.main_green} />
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/Images/user_avatar.png")}
          />
          <View>
            <Text style={styles.title}>Lebron James</Text>
            <Pressable onPress={() => console.log("asas")}>
              <View style={styles.myButton}>
                <Text style={styles.buttonText}>Reservation</Text>
              </View>
            </Pressable>
            <View style={styles.divider}></View>
            <Text style={styles.normalText}>Update profile visibility</Text>
          </View>
        </View>
        <AboutMe />
        <Education />
        <Reviews />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const AboutMe = () => {
  return (
    <View style={styles.aboutMeContainer}>
      <Text style={styles.bigLabel}>About Me</Text>
      <View style={styles.innerAboutMeContainer}>
        <Text style={styles.normalText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </View>
    </View>
  );
};
const Education = () => {
  return (
    <View style={styles.aboutMeContainer}>
      <Text style={styles.bigLabel}>Education</Text>
      <View style={styles.innerAboutMeContainer}>
        <View style={styles.justRow}>
          <Text style={styles.regularText}>• Masters In Mathematics.</Text>
          <Text style={styles.smallText}>Apr 2015 - June 2019</Text>
        </View>
        <View style={styles.justRow}>
          <Text style={styles.regularText}>
            • Bachelor's in Computer Science.
          </Text>
          <Text style={styles.smallText}>Apr 2015 - June 2019</Text>
        </View>
      </View>
    </View>
  );
};
const Reviews = () => {
  return (
    <View style={styles.reviewsContainer}>
      <Text style={styles.bigLabel}>Reviews</Text>
      <FlatList
        data={myReviewList}
        ItemSeparatorComponent={() => <View style={{ height: 5 }}></View>}
        renderItem={(item, index) => (
          <ReviewItem key={item + index} item={item} />
        )}
      />
    </View>
  );
};
const ReviewItem = (prop) => {
  const reviewModel = prop.item.item;

  return (
    <View style={styles.innerReviewsContainer}>
      <View style={styles.justRow}>
        <Text style={styles.reviewLabelText}>{reviewModel.name}</Text>
        <View style={styles.ratingView}>
          <FontAwesomeIcon icon={faStar} color={Colors.main_color} />
          <Text style={styles.ratingText}> {reviewModel.rating}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{reviewModel.review}</Text>
    </View>
  );
};
