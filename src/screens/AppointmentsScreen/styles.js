import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    marginTop: 10,
  },
  nonActiveTabItem: {
    alignItems: "center",
    padding: 16,
    // backgroundColor: "#FEEADA",
    width: "40%",
    borderRadius: 20,
    marginLeft: 10,
  },
  tabItem: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FEEADA",
    width: "40%",
    borderRadius: 20,
    marginLeft: 10,
  },
  nonActiveTabBarText: {
    color: "#e3bfa1",
    fontFamily: "Figtree_700Bold",
    fontSize: 16,
  },
  tabBarText: {
    color: "#839D8E",
    fontFamily: "Figtree_700Bold",
    fontSize: 16,
  },
  appointmentListContainer: {
    padding: 20,
    paddingBottom: 0,
  },
  title: {
    color: "#839D8E",
    fontFamily: "Figtree_700Bold",
    fontSize: 16,
  },
  flatListContainer: {
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
  appointmentImage: {
    height: 60,
    width: 60,
    resizeMode: "contain",
    borderRadius: 20,
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
});

export default styles;
