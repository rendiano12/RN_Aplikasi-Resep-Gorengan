import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,  Share, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, AirbnbRating } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LogoTitle() {
  return (
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1hMkq2LO5jnQcOcRoBn1hZn6Gv_s3XO4v', }}
    style= {{ width: 55, height: 50 }} />   
  );
}

//Bagian Tab Info
function IdentitasScreen() {
  return (
  <View style={{ backgroundColor: '#FBF6D9', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Card>
  <Card.Title style={{fontSize: 20,}}>Identitas Diri</Card.Title>
  <Card.Divider/>
    <Text>Nama: Rendiano Pramuditya Ardhi</Text>
    <Text>Nim: 2003040117 </Text>
    <Text>Prodi: Teknik Informatika</Text>
  </Card>
  </View>
  );
}
function RateScreen() {
  return ( 
  <View style={{ backgroundColor: '#FBF6D9', flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
  <Card>
  <Card.Title style={{fontSize: 20}}>RATING</Card.Title>
  <Card.Divider/>
  <AirbnbRating
    count={5}
    reviews={["Sangat Buruk", "Buruk", "Biasa", "Baik", "Sangat Baik"]}
    defaultRating={null}
    size={45}
    style={{ paddingVertical: 10 }}
  />
  </Card>
  </View>
  );
}

const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Download App: https://drive.google.com/file/d/1-Huz1m4APmOvwMgwlhIlJRWP5y6pvcGC/view?usp=sharing',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
function InfoScreen({ navigation }) {
  return (
    <ScrollView style={{backgroundColor: '#FBF6D9'}}>
    <View style={{backgroundColor: '#FBF6D9', alignItems: 'center'}}>
     <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1jhiI39jmRDseJlw6WMQFmlkakX_icmn5', }}
    style= {{ borderWidth: 2, borderColor: '#F87217', width: 285, height: 168, marginTop: 20 }} />  
    <TouchableOpacity style={styles.tentangButton} onPress={()=> navigation.navigate('Identitas Diri')}>
      <Ionicons name='person' size= {28} color='#F87217' />
      <Text style={styles.textButton}>Identitas Diri</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tentangButton2} onPress={()=> navigation.navigate('Beri Rating')}>
      <Ionicons name='star' size= {28} color='#F87217' />
      <Text style={styles.textButton}>Beri Rating</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tentangButton2} onPress={onShare}>
      <Ionicons name='share-social-sharp' size= {28} color='#F87217' />
      <Text style={styles.textButton}>Bagikan App Resep</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tentangButton2} onPress={()=>{ Linking.openURL('https://forms.gle/zuWRtd9FxMgN1ioR6')}}>
      <Ionicons name='mail' size= {28} color='#F87217' />
      <Text style={styles.textButton}>Request Resep</Text>
    </TouchableOpacity>
     </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  tentangButton: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#F87217"
  },
  tentangButton2: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#F87217"
  },
  textButton: {
    fontSize: 20,
    marginTop: 1,
    marginLeft: 24,
    color: '#F87217',
    fontWeight: 500
  }
});

const InfoStack = createStackNavigator();

function InfoStackScreen() {
  return(
    <InfoStack.Navigator>   
      <InfoStack.Screen name="Info" component={InfoScreen} options={{ headerStyle: { backgroundColor: '#DC381F' }, headerTitle: props => <LogoTitle {...props} /> }} />
      <InfoStack.Screen name="Identitas Diri" component={IdentitasScreen} />
      <InfoStack.Screen name="Beri Rating" component={RateScreen} />
    </InfoStack.Navigator>
  );
}

export default InfoStackScreen;