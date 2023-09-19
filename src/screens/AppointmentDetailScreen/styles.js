import { StyleSheet, StatusBar } from "react-native";
import { Colors, Fonts } from "../../constants/index";


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main_green,
    flex: 1,
  },
  coverImage: {
    height: 180,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 20,
    marginBottom: 0,
  },
  mainDataView: {
    backgroundColor: Colors.main_color,
    padding: 20,
    margin: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  singleRowData: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Figtree_700Bold",
    fontSize: 25,
    color: Colors.main_green,
  },
  serviceReviewRow: {
    flexDirection: "row",
  },
  serviceRatingText: {
    color: Colors.main_green,
    fontFamily: "Figtree_700Bold",
    marginLeft: 5,
    fontSize: 16,
  },
  servicePrice: {
    marginTop: 5,
    borderColor: Colors.main_green,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    alignSelf: "flex-start",
  },
  servicePriceText: {
    color: Colors.main_green,
    fontFamily: "Figtree_700Bold",
    fontSize: 14,
  },
  dateStyle: {
    color: Colors.main_green,
    fontFamily: "Figtree_700Bold",
    fontSize: 14,
  },
});

export default styles;
