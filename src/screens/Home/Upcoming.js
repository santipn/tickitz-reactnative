import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Pressable, ToastAndroid, FlatList, RefreshControl, ScrollView } from 'react-native'
import axios from 'axios';
import { commonStyle } from '../../../helper/commonStyle'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'

const Upcoming = () => {
    const [loading, setLoading] = useState(false),
        [refetch, setRefetch] = useState(false)

    const navigation = useNavigation()

    const [dataMovies, setDataMovies] = useState({
        // "data": {
        //     "message": "Get all movies success",
        //     "status": 200,
        //     "totalRows": 0,
        //     "totalPage": 0,
        //     "data": []
        // }
    })

    useEffect(() => {
        setLoading(true);
        axios.get('http://192.168.43.117:3003/api/v1/movies/?page=2&limit=6').then((res) => {
            setDataMovies(res.data)
        }).catch((err) => {
            console.log(err, 'error')
            ToastAndroid.show('Check your connection', ToastAndroid.SHORT)
        }).finally(() => {
            setLoading(false);
        })
    }, [refetch])

    return (<>
        <View style={{ backgroundColor: '#FFFFFF', padding: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: '#000000' }}>Upcoming Movies</Text>
            <Pressable onPress={() => navigation.navigate('ViewAll')}>
                <Text style={{ fontSize: 20, color: '#5F2EEA' }}>View all</Text>
            </Pressable>
        </View>
        <ScrollView horizontal={true} style={{ backgroundColor: '#FFFFFF', paddingLeft: 30, paddingBottom: 20 }}>
            <TouchableOpacity style={{ backgroundColor: '#5F2EEA', padding: 5, marginRight: 15, borderRadius: 5, height: 50, width: 170 }} >
                <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center'}}>September</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', padding: 5, marginRight: 15, borderRadius: 5, height: 50, width: 170 }} >
                <Text style={{ color: '#5F2EEA', fontSize: 25, textAlign: 'center'}}>October</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', padding: 5, marginRight: 15, borderRadius: 5, height: 50, width: 170 }} >
                <Text style={{ color: '#5F2EEA', fontSize: 25, textAlign: 'center'}}>November</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', padding: 5, marginRight: 15, borderRadius: 5, height: 50, width: 170 }} >
                <Text style={{ color: '#5F2EEA', fontSize: 25, textAlign: 'center'}}>December</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', padding: 5, marginRight: 15, borderRadius: 5, height: 50, width: 170 }} >
                <Text style={{ color: '#5F2EEA', fontSize: 25, textAlign: 'center'}}>January</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', padding: 5, marginRight: 15, borderRadius: 5, height: 50, width: 170 }} >
                <Text style={{ color: '#5F2EEA', fontSize: 25, textAlign: 'center'}}>february</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', padding: 5, marginRight: 15, borderRadius: 5, height: 50, width: 170 }} >
                <Text style={{ color: '#5F2EEA', fontSize: 25, textAlign: 'center'}}>March</Text>
            </TouchableOpacity>
        </ScrollView>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={loading}
                onRefresh={() => { setRefetch(!refetch) }} />}
                data={dataMovies?.data?.results}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: '#333' }} />}
            renderItem={({ item, index }) => {
                return (
                    <Pressable key={index} onPress={() => navigation.navigate('DetailMovie', {
                        title: item.title,
                        cover: item.cover,
                        releaseDate: moment(item.releaseDate).format('DD MMMM YYYY'),
                        director: item.director,
                        synopsis: item.synopsis,
                        duration: item.duration,
                        casts: item.casts,
                        categories: item.categories,
                    })}>
                        <View style={[commonStyle.flexRow, { marginVertical: 30 }]} >
                            <View style={{ width: 164, height: 370, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 10, padding: 15, margin: 15 }}>
                                <Image source={{ uri: `http://192.168.43.117:3003/uploads/${item.cover}` }} style={{
                                    width: 132,
                                    height: 195,
                                    borderRadius: 8,
                                    resizeMode: 'cover',
                                    alignSelf: 'center'
                                }} />
                                <Text style={[commonStyle.flexCenter, commonStyle.textBlack, { paddingTop: 20, textAlign: 'center', fontWeight: 'bold' }]}>{item.title}</Text>
                                <Text style={[commonStyle.flexCenter, { flexWrap: 'wrap', textAlign: 'center', paddingVertical: 5 }]}>{item.categories}</Text>
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', marginTop: 30, borderRadius: 5, height: 30 }}>
                                    <Text style={{ color: '#5F2EEA', fontSize: 17, textAlign: 'center', alignSelf: 'center' }}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Pressable>
                )
            }} />
        {/* <ScrollView>
        <View style={{ backgroundColor: '#FFFFFF', padding: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: '#000000' }}>Upcoming Movies</Text>
            <Text style={{ fontSize: 20, color: '#5F2EEA' }}>View all</Text>
        </View>


        <ScrollView horizontal={true} style={{ backgroundColor: '#FFFFFF', paddingLeft: 20, paddingTop: 30 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: 164, height: 370, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 10, padding: 15, margin: 15}}>
                    <Image source={require('../../assets/images/spiderMan-homecoming.png')} style={{
                        width: 132, height: 195, resizeMode: 'contain', alignSelf: 'center'
                    }} />
                    <View>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#000', paddingTop: 10 }}>The Witches</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#A0A3BD' }}>Adventure, Comedy, Family</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailMovie')} style={{ borderWidth: 1, borderColor: '#5F2EEA', marginTop: 30, borderRadius: 5, height: 30}}>
                        <Text style={{ color: '#5F2EEA', fontSize: 17, textAlign: 'center', alignSelf: 'center' }}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: 164, height: 370, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 10, padding: 15, margin: 15}}>
                    <Image source={require('../../assets/images/theWitches.png')} style={{
                        width: 132, height: 195, resizeMode: 'contain', alignSelf: 'center'
                    }} />
                    <View>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#000', paddingTop: 10 }}>The Witches</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#A0A3BD' }}>Adventure, Comedy, Family</Text>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', marginTop: 30, borderRadius: 5, height: 30}}>
                        <Text style={{ color: '#5F2EEA', fontSize: 17, textAlign: 'center', alignSelf: 'center' }}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: 164, height: 370, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 10, padding: 15, margin: 15}}>
                    <Image source={require('../../assets/images/theWitches.png')} style={{
                        width: 132, height: 195, resizeMode: 'contain', alignSelf: 'center'
                    }} />
                    <View>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#000', paddingTop: 10 }}>The Witches</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#A0A3BD' }}>Adventure, Comedy, Family</Text>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', marginTop: 30, borderRadius: 5, height: 30}}>
                        <Text style={{ color: '#5F2EEA', fontSize: 17, textAlign: 'center', alignSelf: 'center' }}>Details</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: 164, height: 370, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 10, padding: 15, margin: 15}}>
                    <Image source={require('../../assets/images/theWitches.png')} style={{
                        width: 132, height: 195, resizeMode: 'contain', alignSelf: 'center'
                    }} />
                    <View>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#000', paddingTop: 10 }}>The Witches</Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: '#A0A3BD' }}>Adventure, Comedy, Family</Text>
                    </View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#5F2EEA', marginTop: 30, borderRadius: 5, height: 30}}>
                        <Text style={{ color: '#5F2EEA', fontSize: 17, textAlign: 'center', alignSelf: 'center' }}>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </ScrollView> */}
    </>);
};

export default Upcoming;