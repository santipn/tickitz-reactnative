import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import { commonStyle } from '../../../helper/commonStyle'

const DetailMovie = ({ navigation, route }) => {
  const {  
    title,
    cover,
    releaseDate,
    director,
    synopsis,
    duration,
    casts,
    categories,
  } = route.params;

  return (<>
    <SafeAreaView>
    <Navbar navigation={navigation} />
      <ScrollView>
        <View style={{ padding: 35, backgroundColor: '#F5F6F8' }}>
          <View style={[commonStyle.flexCenter,{ width: 240, height: 320, alignSelf: 'center', borderColor: '#DEDEDE', borderWidth: 2, borderRadius: 10 }]}>
            <Image source={{uri: `http://192.168.43.117:3003/uploads/${cover}`}} 
              style={{
                margin: 20, width: 180, height: 260, resizeMode: 'cover', borderRadius: 5
              }}/>
          </View>
          <View style={[commonStyle.flexCenter, commonStyle.flexBetween,{ marginTop: 30 }]}>
            <Text style={[commonStyle.textBlack,{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }]}>{title}</Text>
            <Text style={[commonStyle.textLilac,{ marginTop: 8, marginBottom: 10, color: '#8692A6', fontSize: 25, fontWeight: '400' }]}>{categories}</Text>
          </View>
          <View style={[commonStyle.flexRow, commonStyle.textLilac, { fontSize: 20, textAlign: 'left', marginTop: 30 }]}>
            <View>
              <Text style={[commonStyle.textLilac, { fontSize: 20, textAlign: 'left' }]}>Release Date</Text>
              <Text style={[commonStyle.textBlack, { fontSize: 23, fontWeight: 'bold', textAlign: 'left' }]}>{releaseDate}</Text>
            </View>
            <View style={{ marginLeft: 60 }}>
              <Text style={[commonStyle.textLilac, { fontSize: 20, textAlign: 'left' }]}>Directed By</Text>
              <Text style={[commonStyle.textBlack, { fontSize: 23, fontWeight: 'bold', textAlign: 'left' }]}>{director.split(",").join("\n")}</Text>
            </View>
          </View>
          <View style={[commonStyle.flexRow, commonStyle.flexBetween, {marginTop: 15}]}>
            <View>
              <Text style={[commonStyle.textLilac, { fontSize: 20, textAlign: 'left' }]}>Duration</Text>
              <Text style={[commonStyle.textBlack, { fontSize: 23, fontWeight: 'bold', textAlign: 'left' }]}>{duration}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={[commonStyle.textLilac, { fontSize: 20, textAlign: 'left' }]}>Casts</Text>
              <Text style={[commonStyle.textBlack, { fontSize: 23, fontWeight: 'bold', textAlign: 'left' }]}>{casts.split(",").join("\n")}</Text>
            </View>
          </View>
          <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { marginTop: 40 }]}>
            <Text style={[commonStyle.textBlack, { fontSize: 30, fontWeight: 'bold', textAlign: 'left' }]}>Synopsis</Text>
          <Text style={{ textAlign: 'justify', marginTop: 20, marginBottom: 50, fontSize: 20, color: '#4E4B66' }}>{synopsis}</Text>
        </View>

        <View style={{ alignItems: 'center', paddingBottom: 30 }}>
            <View style={{ backgroundColor: '#fff', width: 370, height: 470, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10, padding: 40, margin: 15, elevation: 2 }}>
                <View>
                    <Image source={require('../../assets/images/ebu-id.png')} style={{
                        width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
                    }} />
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#AAAAAA', paddingTop: 5 }}>Whatever street No.12, South Purwokerto</Text>
                    <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingTop: 30, paddingBottom: 20 }]}>
                      <Text style={{ fontSize: 20, color: '#A0A3BD' }}>10.35</Text>
                      <Text style={{ fontSize: 20, color: '#A0A3BD' }}>11.11</Text>
                      <Text style={{ fontSize: 20 }}>13.10</Text>
                    </View>
                    <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingBottom: 40 }]}>
                      <Text style={{ fontSize: 20, color: '#A0A3BD' }}>15.30</Text>
                      <Text style={{ fontSize: 20 }}>17.00</Text>
                      <Text style={{ fontSize: 20 }}>19.00</Text>
                    </View>
                    <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingBottom: 20 }]}>
                      <Text style={{ fontSize: 25, color: '#AAAAAA' }}>Price</Text>
                      <Text style={{ fontSize: 25, color: '#000000' }}>50k/seat</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 30 }}>
                    <TouchableOpacity style={{ backgroundColor: '#5F2EEA', borderRadius: 10, height: 60, paddingTop: 10 }}>
                        <Text onPress={() => navigation.navigate('Payment')} style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={{ alignItems: 'center', paddingBottom: 100 }}>
            <View style={{ backgroundColor: '#fff', width: 370, height: 470, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10, padding: 40, margin: 15, elevation: 2 }}>
                <View>
                    <Image source={require('../../assets/images/hiflix.png')} style={{
                        width: 100, height: 50, resizeMode: 'contain', alignSelf: 'center'
                    }} />
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#AAAAAA', paddingTop: 5 }}>Whatever street No.12, South Purwokerto</Text>
                    <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingTop: 30, paddingBottom: 20 }]}>
                      <Text style={{ fontSize: 20, color: '#A0A3BD' }}>10.35</Text>
                      <Text style={{ fontSize: 20, color: '#A0A3BD' }}>11.11</Text>
                      <Text style={{ fontSize: 20 }}>13.10</Text>
                    </View>
                    <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingBottom: 40 }]}>
                      <Text style={{ fontSize: 20, color: '#A0A3BD' }}>15.30</Text>
                      <Text style={{ fontSize: 20 }}>17.00</Text>
                      <Text style={{ fontSize: 20 }}>19.00</Text>
                    </View>
                    <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingBottom: 20 }]}>
                      <Text style={{ fontSize: 25, color: '#AAAAAA' }}>Price</Text>
                      <Text style={{ fontSize: 25, color: '#000000' }}>50k/seat</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 30 }}>
                    <TouchableOpacity style={{ backgroundColor: '#5F2EEA', borderRadius: 10, height: 60, paddingTop: 10 }}>
                        <Text onPress={() => navigation.navigate('Payment')} style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </>
  )
}

export default DetailMovie;