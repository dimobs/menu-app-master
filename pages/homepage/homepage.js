import {Text, View, Image } from 'react-native';
import {styles} from './homePageStyles';




export function HomePage() { 
const databaseSimulator = [
  {
    title: 'Diego',
    id: '1',
    room: 'bedroom',
    status: 'Good',
  }, 
  {
    title: 'Diego',
    id: '2',
    room: 'bedroom',
    status: 'Good',
  }, 

  {
    title: 'Diego',
    id: '3',
    room: 'bedroom',
    status: 'Good',}
  ]

return (
  <View>
    <View style={styles.container}>
      <Text style={styles.menuIcon}>☰</Text>      
      <Text style={styles.title}>My plants</Text>      
    </View>

    {databaseSimulator.map((pot)=>
      <View style={styles.cardList}>
      <View key={pot.id} style={styles.card}>
            <Image style={styles.img} source={require('./../../assets/2.png')}/>

          <View>
            <Text style={styles.potTitle}>{pot.title}</Text>
            <Text style={styles.subText}>room:  {pot.room}</Text>
            <Text style={[styles.status, styles.bad]}>{pot.status}</Text>
          </View>
      </View>
      </View>
    )}

</View>
  ); 
}




