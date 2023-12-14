import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function ImageBox(props) {
  
  return (
    <View style={styles.imageContaner}>

    <Image
      source={props.pic}
      style={[styles.image]}
    />
   <Text>{props.text}</Text>
  </View>
  );
}

 const styles = StyleSheet.create({
    image: {
        margin: 10,
        height: 30,
        width: 36,
        resizeMode:'contain'
    
      },
    
      imageContaner:
        { margin: 7, backgroundColor: '#FFF4EB', height: 80, width: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }
    
    
 });
