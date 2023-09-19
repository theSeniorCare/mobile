import { StyleSheet, Dimensions } from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const boxWidthPercentage = 80;
// const boxHeightPercentage = 20;

// const boxWidth = (windowWidth * boxWidthPercentage) / 100;
// const boxHeight = (windowHeight * boxHeightPercentage) / 100;

// const boxColor = '#839D8E';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEEADA',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  horizontalLogo: {
    width: '70%',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  simpleLogoIcon: {
    width: '15%',
    position: 'absolute',
    bottom: 120,
    height: 45,
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: '#AAA4A4',
    position: 'absolute',
    bottom: 100,
  },
});

export default styles;
