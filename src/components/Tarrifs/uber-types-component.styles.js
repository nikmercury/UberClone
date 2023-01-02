import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  tarrifName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {},
  priceContainer: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  price: {},
});
