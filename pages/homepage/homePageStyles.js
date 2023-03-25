import { StyleSheet, YellowBox} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      width: 100 + '%',
      marginTop: 30,
      padding: 20,
    },
    menuIcon: {
      fontSize: 30,
    },
    title: {
      fontSize: 30,
      marginTop: 40,
      fontWeight: 900,
    },
    cardList:{
      flex: 1,
      alignItems: 'end',
    },

    card:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#00594A',
      width: 80 + '%',
      marginBottom: 40,
      borderBottomLeftRadius: 20,
      borderTopLeftRadius: 20,
    },
    img: {
      width: 150,
      height: 150,
      margin: 30,
    },
    potTitle:{
      fontSize: 30,
      marginTop: 40,
      fontWeight: 900,
      color: '#fff',
    },
    subText:{
      color: '#fff',
      marginTop: 10,
    },

    status:{
      marginTop: 10,
      textAlign: 'center',
      borderRadius: 20,
    },

    good: {
      backgroundColor: "green",
    },
    middle: {
      backgroundColor: "Yellow",
    }, 
    bad: {
      backgroundColor: "red",
    }
  });