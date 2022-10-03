import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View,Image, TouchableOpacity } from 'react-native';

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <ScrollView style={{ paddingHorizontal: 30, paddingVertical: 50, backgroundColor: '#FFFFFF' }}>
            <View>
                <Image source={require('../../assets/images/tickitz-purple.png')} style={{
                    width: 150, height: 50,
                }} />
                <Text style={{ color: '#000000', fontSize: 50, fontWeight: '600', paddingTop: 30 }}>Set Password</Text>
                <Text style={{ color: '#8692A6', fontSize: 20, fontWeight: '400', paddingBottom: 20 }}>
                    Set your new password
                </Text>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Password</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60, flexDirection: 'row' }}>
                    <TextInput placeholder="Write your new password" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} />
                    <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                </View>
            </View>
            <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: '#4E4B66', fontSize: 20, fontWeight: '200', marginBottom: 5 }}>Confirm Password</Text>
                <View style={{ borderWidth: 2, borderColor: '#DEDEDE', borderRadius: 7, height: 60, flexDirection: 'row' }}>
                    <TextInput placeholder="Write your confirm password" style={{ padding: 8, borderRadius: 5, flex: 1 }} autoCapitalize='none' secureTextEntry={showPassword ? false : true} />
                    <Text onPress={() => setShowPassword(!showPassword)} style={{ alignSelf: 'center', padding: 10 }}>{showPassword ? 'Hide' : 'Show'}</Text>
                </View>
            </View>
            <View style={{ paddingTop: 30 }}>
                <TouchableOpacity onPress={() => alert('Success')} style={{ backgroundColor: '#5F2EEA', padding: 10, borderRadius: 10, height: 60 }} android_ripple={{
                    color: "#fff",
                }}>
                    <Text style={{ color: '#fff', fontSize: 25, alignSelf: 'center'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default NewPassword;