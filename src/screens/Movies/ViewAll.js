import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Image, FlatList, RefreshControl, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { commonStyle } from '../../../helper/commonStyle'
import moment from 'moment'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'Terbaru', value: '' },
  { label: 'Terlama', value: '' },
];

const ViewAll = () => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false),
  [refetch, setRefetch] = useState(false)

  const navigation = useNavigation()

  const [dataMovies, setDataMovies] = useState()
  const [query, setQuery] = useState ({
    title: "",
    sortBy: "",
    orderBy: "",
})

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  useEffect(() => {
    const {title} = query
    setLoading(true);
    axios.get(`http://192.168.43.117:3003/api/v1/movies/${title ? `?title=${title}` : ''}`).then((res) => {
        setDataMovies(res.data)
    }).catch((err) => {
        console.log(err, 'error')
        ToastAndroid.show('Check your connection', ToastAndroid.SHORT)
    }).finally(() => {
        setLoading(false);
    })
  }, [refetch, query])

  return (<>
    <View style={{ backgroundColor: '#D6D8E7', padding: 35 }}>
      <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Sort by"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          )}
          renderItem={renderItem}
        />
      <FlatList
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={loading}
          onRefresh={() => { setRefetch(!refetch) }} />}
          data={dataMovies?.data?.results}
        numColumns={2}
        ListHeaderComponent={() => (
          <>
            <View style={{}}>
              <TextInput style={styles.searchInput} placeholder="  search movies"></TextInput>
            </View>
          </>
        )
        }
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
              casts: item.casts.split(',').join('\n'),
              categories: item.categories,
            })}>
              <View style={[commonStyle.flexRow, { marginVertical: 10 }]} >
                <View style={{ width: 164, height: 370, borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 10, padding: 15, margin: 10, backgroundColor: '#fff' }}>
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
    </View>
  </>
  )
}

export default ViewAll;

const styles = StyleSheet.create({
  dropdown: {
    margin: 10,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    fontSize: 16,
    height: 50,
    borderRadius: 12,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20
  }
});