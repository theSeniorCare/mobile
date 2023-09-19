import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: "100%",
  },
  headerMain: {
    // backgroundColor: "#839D8E",
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  headerImage: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  headerTextView: {
    alignSelf: "center",
  },
  headerText: {
    fontFamily: "Figtree_700Bold",
    color: "white",
    fontSize: 20,
    marginLeft: 15,
  },
  gridContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  gridItem: {
    flex: 1,
  },
  singleGrid: {
    backgroundColor: "#FEEADA",
    borderRadius: 20,
    padding: 20,
    margin: 5,
    height: 100,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  gridText: {
    marginTop: 8,
    fontFamily: "Figtree_700Bold",
    color: "#839D8E",
    fontSize: 16,
  },
  gridTextNumber: {
    fontFamily: "Figtree_700Bold",
    color: "#839D8E",
    opacity: 0.2,
    fontSize: 80,
    position: "absolute",
    right: 0,
    top: -20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  gridIconRow: {
    flexDirection: "row",
  },
  appointmentListContainer: {
    padding: 20,
  },
  title: {
    color: "#839D8E",
    fontFamily: "Figtree_700Bold",
    fontSize: 16,
  },
  flatListContainer: {
    height: 210,
    marginTop: 15,
  },
  appointmentItem: {
    backgroundColor: "#FEEADA",
    height: 100,
    flexDirection: "row",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  singleAppointmentColumn: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 15,
  },
  singleAppointmentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingView: {
    marginLeft: 10,
    flexDirection: "row",
  },
  appointmentText: {
    fontFamily: "Figtree_700Bold",
    fontSize: 16,
    color: "#454545",
  },
  appointmentTextSmall: {
    marginTop: 3,
    fontFamily: "Figtree_500Medium",
    fontSize: 12,
    color: "#454545",
  },

  // Service
  serviceContainer: {
    margin: 20,
  },
  serviceInnerContainer: {
    marginTop: 10,
    height: 110,
    flexDirection: "row",
    backgroundColor: "#839D8E",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  serviceImage: {
    height: 110,
    width: 110,
    resizeMode: "cover",
  },
  serviceInitialsView: {
    height: 110,
    width: 110,
    backgroundColor: "#FEEADA",
    opacity: 0.55,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceRightData: {
    margin: 5,
    padding: 10,
    flex: 1,
    backgroundColor: "#FEEADA",
    borderRadius: 20,
  },
  serviceInitialText: {
    fontFamily: "Figtree_500Medium",
    fontSize: 45,
    color: "#AB988B",
  },
  serviceTitle: {
    color: "#50755F",
    fontFamily: "Figtree_700Bold",
    fontSize: 16,
  },
  serviceTitleLocation: {
    color: "#50755F",
    fontFamily: "Figtree_500Medium",
    marginTop: 3,
  },
  serviceLeftRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 3,
  },
  serviceReviewRow: {
    flexDirection: "row",
  },
  serviceRatingText: {
    color: "#839D8E",
    fontFamily: "Figtree_700Bold",
    marginLeft: 5,
    fontSize: 16,
  },
  servicePrice: {
    marginTop: 5,
    borderColor: "#839D8E",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    alignSelf: "flex-start",
  },
  servicePriceText: {
    color: "#839D8E",
    fontFamily: "Figtree_700Bold",
    fontSize: 12,
  },
});

export default styles;
