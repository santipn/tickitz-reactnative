import React from 'react'
import { ScrollView, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navbar } from '../../components';
import { commonStyle } from '../../../helper/commonStyle'

const Payment = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Navbar navigation={navigation} />
            <ScrollView>
                <View style={[commonStyle.flexCenter, commonStyle.flexBetween, {
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    backgroundColor: '#FFF',
                    width: 435, height: 80,
                    borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10,
                    elevation: 2
                }]}>
                    <Text style={{ fontSize: 25, color: '#AAAAAA' }}>Total Payment</Text>
                    <Text style={{ fontSize: 25, color: '#000000' }}>Rp.150.000,-</Text>
                </View>

                <Text style={{ fontSize: 30, color: '#14142B', paddingLeft: 30, paddingTop: 20 }}>Payment Method</Text>
                <View style={{ alignItems: 'center', paddingTop: 10 }}>
                    <View style={{ backgroundColor: '#FFF', width: 400, height: 300, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10, paddingHorizontal: 25, margin: 1, elevation: 2 }}>
                        <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingTop: 30, paddingBottom: 20 }]}>
                            <TouchableOpacity style={{ width: 100, height: 45, borderRadius: 10, borderWidth: 2, borderColor: '#DEDEDE' }}>
                                <Image source={require('../../assets/images/google-pay.png')} style={{
                                    width: 65, height: 30, resizeMode: 'contain', alignSelf: 'center', marginTop: 5
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 45, borderRadius: 10, borderWidth: 2, borderColor: '#DEDEDE' }}>
                                <Image source={require('../../assets/images/visa.png')} style={{
                                    width: 65, height: 30, resizeMode: 'contain', alignSelf: 'center', marginTop: 5
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 45, borderRadius: 10, borderWidth: 2, borderColor: '#DEDEDE' }}>
                                <Image source={require('../../assets/images/gopay.png')} style={{
                                    width: 65, height: 30, resizeMode: 'contain', alignSelf: 'center', marginTop: 5
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={[commonStyle.flexCenter, commonStyle.flexBetween, { flexDirection: 'row', paddingBottom: 20 }]}>
                            <TouchableOpacity style={{ width: 100, height: 45, borderRadius: 10, borderWidth: 2, borderColor: '#DEDEDE' }}>
                                <Image source={require('../../assets/images/paypal.png')} style={{
                                    width: 65, height: 30, resizeMode: 'contain', alignSelf: 'center', marginTop: 5
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 45, borderRadius: 10, borderWidth: 2, borderColor: '#DEDEDE' }}>
                                <Image source={require('../../assets/images/ovo.png')} style={{
                                    width: 65, height: 30, resizeMode: 'contain', alignSelf: 'center', marginTop: 5
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 45, borderRadius: 10, borderWidth: 2, borderColor: '#DEDEDE' }}>
                                <Image source={require('../../assets/images/dana.png')} style={{
                                    width: 65, height: 30, resizeMode: 'contain', alignSelf: 'center', marginTop: 5
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                            <Text style={{ fontSize: 20, color: '#A0A3BD' }}>Or</Text>
                            <Text style={{ fontSize: 25, color: '#6E7191', paddingTop: 20 }}>Pay via cash. See how it work</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 30, color: '#14142B', paddingLeft: 30, paddingTop: 30 }}>Personal Info</Text>
                <View style={{ alignItems: 'center', paddingBottom: 170 }}>
                    <View style={{ backgroundColor: '#FFF', width: 400, height: 500, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10, padding: 30, margin: 15, elevation: 2 }}>
                        <View style={{ paddingBottom: 15 }}>
                            <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Full Name</Text>
                            <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                                <TextInput placeholder="Irish Bella" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' keyboardType='email-address' />
                            </View>
                        </View>
                        <View style={{ paddingBottom: 15 }}>
                            <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Email</Text>
                            <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                                <TextInput placeholder="Ibel@gmail.com" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' keyboardType='email-address' />
                            </View>
                        </View>
                        <View style={{ paddingBottom: 15 }}>
                            <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Phone Number</Text>
                            <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60 }}>
                                <TextInput placeholder="888888888" style={{ padding: 8, borderRadius: 5, flex: 1 }} keyboardType='phone-pad' />
                            </View>
                        </View>
                        <View style={{ paddingTop: 50 }}>
                            <TouchableOpacity style={{ backgroundColor: '#5F2EEA', borderRadius: 10, height: 60, paddingTop: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Pay your order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Payment; 
