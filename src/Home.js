import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LogoTitle() {
  return (
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1hMkq2LO5jnQcOcRoBn1hZn6Gv_s3XO4v', }}
    style= {{ width: 55, height: 50 }} />   
  );
}

//Bagian Tab Home
function MendoanScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1Ww0uO7HoibiQUptGwSOSCJg5M4Xh7vOI', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1ekkfdSQVPEX_tNTgxf6Cu5tsUeCqEVLN', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function BakwanScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://asset.kompas.com/crops/apT9mjZj6eI16k3z7JidlfBG5Ek=/3x0:700x465/750x500/data/photo/2021/02/05/601caaf198db2.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1fHCSfz9gvF5A2JusBxIAFUUNzF9damnR', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function AmericanRisolesScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://cdn-brilio-net.akamaized.net/news/2019/08/01/168219/1074618-1000xauto-resep-risoles-enak-dan-simpel.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1fkmgIWhRt5oBZ597_VDySJTqY1rts4o5', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function PisangGorengScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://statics.indozone.news/content/2019/08/21/n0syd1/t_5d5d18b186088_700.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1g4sIrY352xQuMzLXJooKhZwepf_H15Sz', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function CombroScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://cdn.idntimes.com/content-images/post/20191021/combro-6b0ce660ba302ea48fd3d1f2e3042578_600x400.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1gXC2w-f7o0GbAxDEpSrZfIRSDGX6m-Cg', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function MisroScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://4.bp.blogspot.com/-aW7RbfnZbgQ/WfcP-e8yTII/AAAAAAAAKGk/jxn6BazxuA4wQdnGeNggz9hiyTdN3xabQCLcBGAs/s1600/misro%2Bkhas%2Bbandung.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1gcBMVmImstImpe2seYbLPq2amE9B25cW', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function TimusGorengScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://www.resepenyak.com/images/20200703091403-3170-resep-timus-ubi-goreng-yang-menggugah-selera.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1gkFuH7Xqmv61NhnFl7bGRkTd9JjF5nYM', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function TimusIsiCoklatScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/069b7a774f56ba72/751x532cq70/timus-ubi-jalar-isi-coklat-foto-resep-utama.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1h--w3ZQ-I8eSpoXSxOFOXxwXwhCw2PL6', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function MolenPisangScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/5cb605f2544c5199/751x532cq70/molen-pisang-foto-resep-utama.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1hCP7FW7UKqAFJEdZUac6fE519tAQ7iGo', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function PerkedelKentangScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://blog.tokowahab.com/wp-content/uploads/2020/04/Resep-Perkedel-Kentang.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1jn2-WfDMJ5VWTvCquvXvBkWqdtRPquA6', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function PerkedelJagungScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://cdn-2.tstatic.net/style/foto/bank/images/perkedel-jagung_20171213_201711.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1ks89ndLO2QtL1Mz4D_bqSkMck7mZwFjb', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function PiscokScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/78f1b01ec6d84883/751x532cq70/piscok-pisang-coklat-foto-resep-utama.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1lFwnFilqddCJoXR_lUkhKPOvKP1aKEPU', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function RisolMayoScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://akcdn.detik.net.id/community/media/visual/2018/08/08/9dba9329-8b16-4d97-b96d-5c5850d5a8ef_169.jpeg?w=620', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1m-NaAZ5Z2QxJ90l9Vv7lLFlu40PONqo2', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function RisolBihunScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/7a7fe41b256ec85e/751x532cq70/risol-isi-bihun-foto-resep-utama.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1m1Ad8bRe10mq-zi-pcXQgnpdrYwvozJj', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function RisolAyamScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://asset.kompas.com/crops/8Uloe4Xrvib_OiFWHYJkrhpEUX4=/3x0:700x465/750x500/data/photo/2021/01/06/5ff59a5dafb31.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1m1MvhGk7opLd0pnXikFENn66smGGO0HG', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function PisangKremesScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://cdn.idntimes.com/content-images/community/2021/03/fromandroid-6279b335f0e1666fe3643b7725965109_600x400.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1m3ebFMBWNsgGelmtm6Ab-HlddJPuiIme', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function SingkongGorengKejuScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://asset.kompas.com/crops/rqQailKV_05FXIScbUyvXDQ7EEk=/78x135:878x668/750x500/data/photo/2020/09/21/5f68664110353.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1m6JmUMKX5dCA87xQvMJdWyZIoFPtqDrX', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function TahuBulatScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://i.ytimg.com/vi/EtAUmTsG1S4/maxresdefault.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1mJjDvFgQRIfptrsw4Rf6H2j_UqcWKVNQ', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function BolaKentangKejuScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://mk0okemomlyslxjccn6s.kinstacdn.com/wp-content/uploads/2021/01/Kentang-Keju-Bola.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1mMWN-6f8wmQCIzfHDRZvU2fYeWFwIPYa', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}
function JamurKrispiScreen() {
  return (
    <View style={{ backgroundColor: '#CD7F32', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/17bab0cd3f454dc8/751x532cq70/jamur-crispy-by-nori-foto-resep-utama.jpg', }}
    style= {{ width: 200, height: 150 }} />
    <Text style={{ color: '#CD7F32', backgroundColor:'#CD7F32'}}>.</Text>
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=113GS0dUhoNGGyLiyAukZZs-vhv2LT15s', }}
    style= {{ width: 380, height: 330 }} />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={{alignItems: 'center', backgroundColor: '#FBF6D9'}}> 
    <Image source={{ uri: 'https://drive.google.com/uc?export=view&id=1jhiI39jmRDseJlw6WMQFmlkakX_icmn5', }}
    style= {{ borderWidth: 2, borderColor: '#F87217', width: 285, height: 168, marginTop: 20 }} />
      <TouchableOpacity style={styles.buttonView} onPress={()=>navigation.navigate('Mendoan')}>
        <Image source={{ uri: 'https://www.piknikdong.com/wp-content/uploads/2020/05/Resep-Mendoan-Enak-dan-Mudah-300x232.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Mendoan</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Bakwan')}>
        <Image source={{ uri: 'https://images.solopos.com/2020/05/bakwan-jagung-.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Bakwan</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('American Risoles')}>
        <Image source={{ uri: 'https://craftlog.com/m/i/5215591=s480=h360.webp', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>American Risoles</Text>            
      </TouchableOpacity>     
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Pisang Goreng')}>
        <Image source={{ uri: 'https://www.piknikdong.com/wp-content/uploads/2020/07/Resep-Pisang-Goreng-Sederhana-300x215.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Pisang Goreng</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Combro')}>
        <Image source={{ uri: 'http://kbu-cdn.com/dk/wp-content/uploads/combro.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Combro</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Misro')}>
        <Image source={{ uri: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/03/Resep-Misro.jpg?fit=600%2C502&ssl=1', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Misro</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Timus Goreng')}>
        <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/2e9d623139c8ee12/751x532cq70/timus-goreng-original-foto-resep-utama.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Timus Goreng</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Timus Isi Coklat')}>
        <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/fe7addbe0f88aa17/751x532cq70/timus-isi-coklat-foto-resep-utama.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Timus Isi Coklat</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Molen Pisang')}>
        <Image source={{ uri: 'https://www.palmia.co.id/media/recipe/medium/99f2ca2502f84ca9a2c0ec0fa315ae60.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Molen Pisang</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Perkedel Kentang')}>
        <Image source={{ uri: 'https://blog.tokowahab.com/wp-content/uploads/2020/04/Resep-Perkedel-Kentang.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Perkedel Kentang</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Perkedel Jagung')}>
        <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/57e6065c7ccae86a/751x532cq70/perkedel-jagung-tepung-sasa-bakwan-foto-resep-utama.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Perkedel Jagung</Text>            
      </TouchableOpacity>    
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Piscok')}>
        <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/78f1b01ec6d84883/751x532cq70/piscok-pisang-coklat-foto-resep-utama.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Piscok</Text>            
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Risol Mayo')}>
        <Image source={{ uri: 'http://kbu-cdn.com/dk/wp-content/uploads/risol-mayo.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Risol Mayo</Text>            
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Risol Bihun')}>
        <Image source={{ uri: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/03/27/1090923509.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Risol Bihun</Text>            
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Risol Ayam')}>
        <Image source={{ uri: 'https://asset.kompas.com/crops/BihBhqZLA1HsEyUMMcQC1Ohzlhs=/3x0:700x465/750x500/data/photo/2021/03/27/605ed18bf34d7.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Risol Ayam</Text>            
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Pisang Kremes')}>
        <Image source={{ uri: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2021/03/01/resep-pisang-goreng-kremes-cami-20210301074724.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Pisang Kremes</Text>            
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Singkong Goreng Keju')}>
        <Image source={{ uri: 'https://blog.tokowahab.com/wp-content/uploads/2019/12/Resep-Singkong-Keju-yang-Empuk.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Singkong Goreng Keju</Text>            
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Tahu Bulat')}>
        <Image source={{ uri: 'https://img-global.cpcdn.com/recipes/fd247e0d4f7953a8/751x532cq70/tahu-bulat-foto-resep-utama.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Tahu Bulat</Text>            
      </TouchableOpacity> 
      <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Bola Kentang Keju')}>
        <Image source={{ uri: 'https://cdn.idntimes.com/content-images/post/20200116/cheese-ball-2567334d4e3c16338b2feb17ca0ca122_600x400.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Bola Kentang Keju</Text>            
      </TouchableOpacity>   
       <TouchableOpacity style={styles.buttonView2} onPress={()=>navigation.navigate('Jamur Krispi')}>
        <Image source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/U3puO_ZaBqbz86TNVSjYKrll0eM=/1280x720/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2359124/original/030224000_1536919239-resep-jamur-enoki-krispi-simple-anti-melempem.jpg', }} 
        style={styles.imageButton} />   
        <Text style={styles.buttonText}>Jamur Krispi</Text>            
      </TouchableOpacity>                     
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    height: 51,
    width: 60
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 15
  },
  buttonView: {
    marginTop: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    borderColor: "#F87217",
    backgroundColor: '#7E3817',
    height: 60,
  },
  buttonView2: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 5,
    borderColor: "#F87217",
    backgroundColor: '#7E3817',
    height: 60
  }
});

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}  options={{ headerStyle: { backgroundColor: '#DC381F' }, headerTitle: props => <LogoTitle {...props} /> }} />
      <HomeStack.Screen name="Mendoan" component={MendoanScreen} />
      <HomeStack.Screen name="Bakwan" component={BakwanScreen} />
      <HomeStack.Screen name="American Risoles" component={AmericanRisolesScreen}/>
      <HomeStack.Screen name="Pisang Goreng" component={PisangGorengScreen}/>
      <HomeStack.Screen name="Combro" component={CombroScreen}/>
      <HomeStack.Screen name="Misro" component={MisroScreen}/>
      <HomeStack.Screen name="Timus Goreng" component={TimusGorengScreen}/>
      <HomeStack.Screen name="Timus Isi Coklat" component={TimusIsiCoklatScreen}/>
      <HomeStack.Screen name="Molen Pisang" component={MolenPisangScreen}/>
      <HomeStack.Screen name="Perkedel Kentang" component={PerkedelKentangScreen}/>
      <HomeStack.Screen name="Perkedel Jagung" component={PerkedelJagungScreen}/>
      <HomeStack.Screen name="Piscok" component={PiscokScreen}/>
      <HomeStack.Screen name="Risol Mayo" component={RisolMayoScreen}/>
      <HomeStack.Screen name="Risol Bihun" component={RisolBihunScreen}/>
      <HomeStack.Screen name="Risol Ayam" component={RisolAyamScreen}/>
      <HomeStack.Screen name="Pisang Kremes" component={PisangKremesScreen}/>
      <HomeStack.Screen name="Singkong Goreng Keju" component={SingkongGorengKejuScreen}/>
      <HomeStack.Screen name="Tahu Bulat" component={TahuBulatScreen}/>
      <HomeStack.Screen name="Bola Kentang Keju" component={BolaKentangKejuScreen}/>
      <HomeStack.Screen name="Jamur Krispi" component={JamurKrispiScreen}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;