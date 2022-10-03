import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, ToastAndroid, FlatList, RefreshControl } from 'react-native';
import { commonStyle } from '../../../helper/commonStyle'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment'

const NowShowing = () => {
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
        axios.get('http://192.168.43.117:3003/api/v1/movies/?page=1&limit=6').then((res) => {
            setDataMovies(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err, 'error')
            ToastAndroid.show('Check your connection', ToastAndroid.SHORT)
        }).finally(() => {
            setLoading(false);
        })
    }, [refetch])

    return (<>
        <View style={{ backgroundColor: '#D6D8E7', padding: 30 }}>
            <View style={[commonStyle.flexRow, commonStyle.flexBetween, { alignItems: 'center' }]}>
                <Text style={{ fontSize: 30, color: '#5F2EEA' }}>Now Showing</Text>
                <Pressable onPress={() => navigation.navigate('ViewAll')}>
                    <Text style={{ fontSize: 20, color: '#5F2EEA' }}>View All</Text>
                </Pressable>
            </View>
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
                        
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <View style={{ width: 164, height: 300, borderWidth: 2, borderColor: '#FFF', borderRadius: 10, padding: 15, margin: 15 }}>
                                    <Image source={{ uri: `http://192.168.43.117:3003/uploads/${item.cover}` }} style={{
                                        width: 132,
                                        height: 195,
                                        borderRadius: 8,
                                        resizeMode: 'cover',
                                        alignSelf: 'center'
                                    }} />
                                    <Text style={[commonStyle.flexCenter, commonStyle.textBlack, { paddingTop: 20, textAlign: 'center', fontWeight: 'bold' }]}>{item.title}</Text>
                                    <Text style={[commonStyle.flexCenter, { flexWrap: 'wrap', textAlign: 'center', paddingVertical: 5 }]}>{item.categories}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )
                }} />
        </View>
    </>);
};

export default NowShowing;