import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { commonStyle } from '../../helper/commonStyle';
import IconMenu from 'react-native-vector-icons/AntDesign'

const Navbar = ({ navigation }) => {
    return (<>
        <ScrollView style={{ backgroundColor: '#fff'}}>
            <View style={[commonStyle.textWhite, { padding: 25, elevation: 3, marginBottom: 10, shadowColor: '#5b79cf', }]}>
                <View style={[commonStyle.flexBetween, commonStyle.flexRow, {alignItems: 'center'}]}>
                    <Image source={require('../assets/images/tickitz-purple.png')} style={{
                        width: 120, height: 70, resizeMode: 'contain', alignSelf: 'center'
                    }} />
                    <Text onPress={() => navigation.navigate('SignIn') }>
                        <IconMenu name="menu-fold" size={25} style={{ color: '#6E7191' }}/>
                    </Text>
                </View>
            </View>
        </ScrollView>
    </>);
};

export default Navbar;