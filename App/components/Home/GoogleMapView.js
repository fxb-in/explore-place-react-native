import { View, Text, Dimensions } from 'react-native';
import React ,{ useEffect,useState, useContext} from 'react';
import MapView , { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { UserLocationContext } from '../../Context/UserLocationContext';
export default function GoogleMapView() {
    const [mapRegion, setmapRegion] = useState([])
  const {location,setLocation}= useContext(UserLocationContext)
  useEffect(()=>{
    if(location)
    {
        setmapRegion({
            latitute: location.coords.latitude,
            longitude: location.coords.longitude,
           
        })
    }
  },[])
  return (
    <View style={{marginTop:20 }}>
        <Text style={{fontSize: 20, marginBottom: 10, fontWeight: "600" }}>Top near by places</Text>
        <View style={{marginTop:20 , borderRadius: 20, overflow: 'hidden'}}></View>
      <MapView style={{
          width:Dimensions.get('screen').width*0.89,
          height: Dimensions.get("screen").height*0.23,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
        >
        <Marker title="You"
        coords={mapRegion}
        />
      </MapView>
    </View>
  )
}