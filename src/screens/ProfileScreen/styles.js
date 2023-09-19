import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "../../constants/index";
import { cloneElement } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const boxWidthPercentage = 80;
const boxHeightPercentage = 20;

const boxWidth = (windowWidth * boxWidthPercentage) / 100;
const boxHeight = (windowHeight * boxHeightPercentage) / 100;

const boxColor = "#839D8E";

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: Colors.main_color,
  },
  navbar:{
flexDirection:"row",
  },
  navbarTitle:{
alignSelf:"center",
alignContent:"center",
alignItems:"center",
textAlign:"center",
textAlignVertical:"center"
  },
  imageContainer: {
    backgroundColor: Colors.main_green,
    margin: 20,
    marginTop:0,
    borderRadius: 15,
    alignContent: "center",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "contain",
    marginRight: 15,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    color: Colors.main_color,
    fontFamily: "Figtree_700Bold",
  },
  divider: {
    height: 2,
    borderRadius: 3,
    backgroundColor: Colors.main_color,
    marginTop: 7,
  },
  myButton: {
    height: 30,
    backgroundColor: Colors.main_color,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
  },
  buttonText: {
    fontFamily: "Figtree_700Bold",
    color: Colors.main_green,
  },
  normalText: {
    fontFamily: "Figtree_400Regular",
    color: Colors.main_color,
    marginTop: 7,
    fontSize: 12,
  },
  smallText: {
    fontFamily: "Figtree_400Regular",
    color: Colors.main_color,
    marginTop: 7,
    fontSize: 10,
  },
  regularText: {
    fontFamily: "Figtree_500Medium",
    color: Colors.main_color,
    marginTop: 7,
    fontSize: 12,
  },
  aboutMeContainer: {
    margin: 20,
    marginTop: 0,
  },
  bigLabel: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    color: Colors.main_green,
    fontFamily: "Figtree_700Bold",
  },
  innerAboutMeContainer: {
    backgroundColor: Colors.main_green,
    marginTop: 10,
    borderRadius: 15,
    padding: 20,
  },
  justRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

  ratingView: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontFamily: "Figtree_700Bold",
    color: Colors.main_color,
    fontSize: 12,
  },
  reviewLabelText: {
    fontFamily: "Figtree_700Bold",
    color: Colors.main_color,
    fontSize: 12,
    marginBottom: 5,
  },
  reviewText: {
    fontFamily: "Figtree_500Medium",
    color: Colors.main_color,
    fontSize: 12,
  },
  reviewsContainer: {
    margin: 20,
    marginTop: 0,
    flex: 1,
    paddingBottom: 20,
  },
  innerReviewsContainer: {
    backgroundColor: Colors.main_green,
    marginTop: 5,
    borderRadius: 15,
    padding: 20,
  },
});

export default styles;
