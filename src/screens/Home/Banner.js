import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

const Banner = () => {
    return (<>
    <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ padding: 30, marginBottom: 20 }}>
            <Text style={{ fontSize: 25, color: '#A0A3BD' }}>Nearest Cinema, Newest Movie</Text>
            <Text style={{ fontSize: 60, color: '#5F2EEA' }}>Find out now!</Text>
        </View>
        <View>
            <Image source={require('../../assets/images/hero.png')} style={{
                width: 430, height: 500, resizeMode: 'contain', alignSelf: 'center', marginBottom: 30
            }} />
        </View>
    </ScrollView>
    </>);
};

export default Banner;