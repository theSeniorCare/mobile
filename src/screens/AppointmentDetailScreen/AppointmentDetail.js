import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import styles from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Buttons/Button.js";

import {
  useFonts,
  Figtree_500Medium,
  Figtree_700Bold,
} from "@expo-google-fonts/figtree";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default AppointmentDetail = ({ userType, route }) => {
  const appointmentModel = route.params;
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Figtree_700Bold,
    Figtree_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} color="white" />
      </Pressable>
      <Image
        style={styles.coverImage}
        source={{ uri: appointmentModel.image }}
      />
      <View style={styles.mainDataView}>
        <View style={styles.singleRowData}>
          <Text style={styles.textStyle}>{appointmentModel.name}</Text>

          <View style={styles.serviceReviewRow}>
            <FontAwesomeIcon color="#839D8E" icon={faStar} />
            <Text style={styles.serviceRatingText}>
              {appointmentModel.rating}
            </Text>
          </View>
        </View>
        <View style={styles.singleRowData}>
          <Text style={styles.dateStyle}>{appointmentModel.dateTime}</Text>

          <View style={styles.servicePrice}>
            <Text style={styles.servicePriceText}>
              ${appointmentModel.price}/HR
            </Text>
          </View>
        </View>
        <Text style={styles.dateStyle}>{appointmentModel.description}</Text>
        <Button
          title="Contact"
          onPress={() => navigation.navigate("Chat")}
          type="primary"
          fontFamily="Figtree_700Bold"
          fontSize={16}
        />
      </View>
    </SafeAreaView>
  );
};
