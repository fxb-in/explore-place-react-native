import { View, Text } from 'react-native'
import React from 'react'
import Header from "../components/Home/Header"
import GoogleMapView from '../components/Home/GoogleMapView'
import CategoryList from '../components/CategoryList'
export default function Home() {
  return (
    <View  style={{padding:20}}>
      <Header />
      <GoogleMapView/>
      <CategoryList/>
    </View>
  )
}