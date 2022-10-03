import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Navbar from '../../components/Navbar';
import Banner from './Banner'
import NowShowing from './NowShowing'
import Upcoming from './Upcoming'
import Membership from './Membership'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Navbar navigation={navigation}/>
                    <Banner />
                    <NowShowing />
                    <Upcoming navigation={navigation}/>
                    <Membership />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;