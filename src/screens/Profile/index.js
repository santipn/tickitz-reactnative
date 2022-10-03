import React, { useState } from 'react'
import { ScrollView, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { AuthLogout } from '../../redux/actions/Auth'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navbar } from '../../components';

const Profile = ({ navigation }) => {
    const [ showPassword, setShowPassword ] = useState(false);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(AuthLogout())
    }

    return (
        <SafeAreaView>
        <Navbar navigation={navigation} />
        <ScrollView>
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                <View style={{
                    backgroundColor: '#FFF',
                    width: 370, height: 550,
                    borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10,
                    padding: 30, margin: 15, elevation: 2
                }}>
                <View>
                    <Text style={{fontSize: 20, paddingBottom: 20 }}>INFO</Text>
                    <Image source={require('../../assets/images/Irish-Bella.jpg')} style={{
                        width: 200, height: 200, borderRadius: 100, alignSelf: 'center', marginBottom: 30
                    }} />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 35, color: '#14142B', textAlign: 'center' }}>Irish Bella</Text>
                    <Text style={{fontSize: 20 }}>Moviegoers</Text> 
                </View>
                    <View style={{ paddingTop: 50 }}>
                        <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: '#5F2EEA', borderRadius: 10, height: 60, paddingTop: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Text style={{ fontSize: 30, color: '#14142B', paddingLeft: 30 }}>Account Settings</Text>
            <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                <View style={{ backgroundColor: '#FFF', width: 370, height: 550, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10, padding: 30, margin: 15, elevation: 2 }}>
                    <View>
                        <Text style={{fontSize: 20, paddingBottom: 20 }}>Details Information</Text>
                    </View>
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
                            <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Update Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ alignItems: 'center', paddingBottom: 170 }}>
                <View style={{ backgroundColor: '#FFF', width: 370, height: 450, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 10, padding: 30, margin: 15, elevation: 2 }}>
                <Text style={{ fontSize: 20, paddingBottom: 30 }}>Account and Privacy</Text>
                    <View style={{ paddingBottom: 15 }}>
                        <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>New Password</Text>
                        <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60, flexDirection: 'row' }}>
                            <TextInput placeholder="Write your new password" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} />
                            <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                        </View>
                    </View>
                    <View style={{ paddingBottom: 15 }}>
                        <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}> Confirm New Password</Text>
                        <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60, flexDirection: 'row' }}>
                            <TextInput placeholder="Confirm your new password" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} />
                            <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 45 }}>
                        <TouchableOpacity style={{ backgroundColor: '#5F2EEA', borderRadius: 10, height: 60, paddingTop: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 25, textAlign: 'center' }}>Update Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}


export default Profile;