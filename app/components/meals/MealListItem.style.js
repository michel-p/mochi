import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#F4FAFF',
  },
  containerCapital: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 50
  },
  capital: {
    fontSize: 36,
    textAlign: 'center',
    color: '#000000',
    fontFamily: "IndieFlower",
  },
  containerRanking: {
    flex:3,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  ranking: {
    backgroundColor: '#efefef',
  },
  username: {
    fontFamily: "IndieFlower",
    fontSize: 20,
  },
  containerDate: {
    flex:2,
    justifyContent: 'center',
    padding: 5,
  },
  date: {
    fontSize: 12,
    textAlign: 'center',
  },
  containerMochi: {
    flex:1,
  },
  mochiMoods: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  }
});
