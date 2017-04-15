import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    containerMochi: {
      flex: 1,
      paddingTop: 20,
    },
    imageCover: {
      resizeMode: 'cover'
    },
    containerPokedex: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
      padding: 10,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    containerInfo: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
    },
    containerAge: {
    },
    containerHeight: {
    },
    containerWeight: {
    },
    gender: {
      marginLeft: 10,
    },
    label: {
      textAlign: 'center',
      fontSize: 14,
      color: '#F4FAFF',
    },
    value: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#F4FAFF',
      fontFamily: "IndieFlower",
    }
});
