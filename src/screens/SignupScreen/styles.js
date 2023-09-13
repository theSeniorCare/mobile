import { StyleSheet, Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const boxWidthPercentage = 80; 
const boxHeightPercentage = 20;

const boxWidth = (windowWidth * boxWidthPercentage) / 100;
const boxHeight = (windowHeight * boxHeightPercentage) / 100;

const boxColor = '#839D8E'; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEADA',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#839D8E',
    alignSelf: 'center',
    paddingBottom: 24,
  },
  input: {
    backgroundColor: '#F6F7FB',
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#839D8E',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  box: {
    width: boxWidth,
    height: boxHeight,
    backgroundColor: boxColor,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default styles;
